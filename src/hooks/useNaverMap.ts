import { useEffect, useRef, useState } from 'react';

export type NaverMapStatus = 'loading' | 'ready' | 'unavailable';

const SCRIPT_ID = 'naver-maps-sdk';
const SCRIPT_BASE = 'https://oapi.map.naver.com/openapi/v3/maps.js';
const LOAD_TIMEOUT = 12000;
const GEOCODER_TIMEOUT = 6000;

// The Naver Maps JS SDK has no official TypeScript types, so the namespace is
// handled loosely and every entry point is guarded before it is used.
type NaverSdk = {
  maps: {
    LatLng: new (lat: number, lng: number) => unknown;
    Map: new (element: HTMLElement | string, options: Record<string, unknown>) => {
      destroy: () => void;
    };
    Marker: new (options: Record<string, unknown>) => {
      setMap: (map: unknown | null) => void;
    };
    Position?: Record<string, unknown>;
    ZoomControlStyle?: Record<string, unknown>;
    Service?: {
      geocode: (
        options: { query: string },
        callback: (status: unknown, response: unknown) => void,
      ) => void;
      Status?: { OK?: unknown };
    };
  };
};

let sdkPromise: Promise<NaverSdk> | null = null;

export function getNaverMapClientId(): string {
  const key = import.meta.env.VITE_PUBLIC_NAVER_MAP_CLIENT_ID;
  return typeof key === 'string' ? key.trim() : '';
}

function getSdk(): NaverSdk | null {
  const scope = window as unknown as Record<string, NaverSdk | undefined>;
  const candidates = [scope.naver, scope.navermaps];
  const found = candidates.find((candidate) => candidate && candidate.maps);
  return found ?? null;
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error('naver-maps-timeout')), ms);
    promise.then(
      (value) => {
        window.clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        window.clearTimeout(timer);
        reject(error);
      },
    );
  });
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

/**
 * Injects the SDK script once.
 * `ncpKeyId` is the parameter used by the current Naver Cloud Platform docs;
 * `ncpClientId` is the older name still accepted by some projects, so it is
 * used as a fallback only when the first attempt does not expose the SDK.
 */
function injectScript(clientId: string, keyParam: 'ncpKeyId' | 'ncpClientId'): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('naver-maps-script')), {
        once: true,
      });
      return;
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `${SCRIPT_BASE}?${keyParam}=${encodeURIComponent(clientId)}&submodules=geocoder`;
    script.addEventListener('load', () => resolve(), { once: true });
    script.addEventListener(
      'error',
      () => {
        script.remove();
        reject(new Error('naver-maps-script'));
      },
      { once: true },
    );
    document.head.appendChild(script);
  });
}

async function ensureSdk(clientId: string): Promise<NaverSdk> {
  const ready = getSdk();
  if (ready) return ready;
  if (sdkPromise) return sdkPromise;

  sdkPromise = (async () => {
    const params: Array<'ncpKeyId' | 'ncpClientId'> = ['ncpKeyId', 'ncpClientId'];
    for (const param of params) {
      try {
        await withTimeout(injectScript(clientId, param), LOAD_TIMEOUT);
      } catch {
        // Try the next parameter variant.
      }
      const sdk = getSdk();
      if (sdk) return sdk;
    }
    throw new Error('naver-maps-unavailable');
  })().catch((error: unknown) => {
    sdkPromise = null;
    throw error;
  });

  return sdkPromise;
}

interface Coordinates {
  lat: number;
  lng: number;
}

/**
 * Converts a street address to coordinates with the geocoder submodule.
 * Nothing is hard-coded: if geocoding fails, the caller hides the map.
 */
async function geocodeAddress(sdk: NaverSdk, address: string): Promise<Coordinates> {
  let service = sdk.maps.Service;

  // The geocoder submodule can finish loading a moment after the main script.
  for (let attempt = 0; attempt < 40 && !service?.geocode; attempt += 1) {
    await delay(100);
    service = sdk.maps.Service;
  }

  if (!service?.geocode) throw new Error('naver-geocoder-missing');

  const result = await withTimeout(
    new Promise<Coordinates>((resolve, reject) => {
      service.geocode({ query: address }, (status, response) => {
        const okStatus = service?.Status?.OK;
        if (okStatus !== undefined && okStatus !== null && status !== okStatus) {
          reject(new Error('naver-geocode-status'));
          return;
        }

        const addresses = (response as { v2?: { addresses?: Array<{ x?: string; y?: string }> } })
          ?.v2?.addresses;
        const first = Array.isArray(addresses) ? addresses[0] : undefined;
        const lng = Number(first?.x);
        const lat = Number(first?.y);

        if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
          reject(new Error('naver-geocode-empty'));
          return;
        }
        resolve({ lat, lng });
      });
    }),
    GEOCODER_TIMEOUT,
  );

  return result;
}

/**
 * Mounts a Naver map with one marker on the given address.
 * Any failure (missing key, blocked script, geocoding error, map creation error)
 * simply resolves to `unavailable`, so callers can hide the map area without
 * affecting the rest of the page.
 */
export function useNaverMap(address: string) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<NaverMapStatus>('loading');

  useEffect(() => {
    const clientId = getNaverMapClientId();
    if (!clientId) {
      setStatus('unavailable');
      return undefined;
    }

    let cancelled = false;
    let teardown: (() => void) | null = null;

    setStatus('loading');

    const start = async () => {
      try {
        const sdk = await ensureSdk(clientId);
        const coords = await geocodeAddress(sdk, address);
        if (cancelled) return;

        const element = containerRef.current;
        if (!element) return;

        const maps = sdk.maps;
        const position = new maps.LatLng(coords.lat, coords.lng);
        const map = new maps.Map(element, {
          center: position,
          zoom: 16,
          minZoom: 12,
          maxZoom: 21,
          scrollWheel: false,
          draggable: true,
          pinchZoom: true,
          scaleControl: false,
          mapDataControl: false,
          zoomControl: true,
          zoomControlOptions: {
            position: maps.Position?.TOP_RIGHT,
            style: maps.ZoomControlStyle?.SMALL,
          },
        });
        const marker = new maps.Marker({
          position,
          map,
          title: address,
        });

        teardown = () => {
          try {
            marker.setMap(null);
            map.destroy();
          } catch {
            // The SDK may already be gone after a hot reload.
          }
        };

        if (cancelled) {
          teardown();
          teardown = null;
          return;
        }

        setStatus('ready');
      } catch {
        if (!cancelled) setStatus('unavailable');
      }
    };

    void start();

    return () => {
      cancelled = true;
      teardown?.();
    };
  }, [address]);

  return { containerRef, status };
}