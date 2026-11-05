import { companyInfo } from '@/mocks/site';
import { useNaverMap } from '@/hooks/useNaverMap';

const address = companyInfo.address;

const naverMapUrl = `https://map.naver.com/p/search/${encodeURIComponent(address)}`;
const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const buttonBase =
  'inline-flex w-full items-center justify-center gap-2 rounded-md border px-4 py-3 text-[13px] sm:text-sm font-label whitespace-nowrap cursor-pointer transition-colors duration-200';

const buttonStyle = 'border-background-300 bg-background-50 text-foreground-800 hover:border-foreground-950 hover:text-foreground-950';

/**
 * "오시는 길" block inside the company card. It deliberately reuses the exact
 * row pattern of the details above (40px icon tile + 10px uppercase label +
 * identical padding), so the whole card reads as one list. The street address
 * is never printed — it only drives the marker and the two map links.
 */
export default function LocationMap() {
  const { containerRef, status } = useNaverMap(address);

  return (
    <div
      id="location"
      className="scroll-mt-24 flex flex-1 flex-col border-t border-background-200 px-5 py-5 md:px-6"
    >
      <div className="flex items-center gap-4">
        <span
          className="w-10 h-10 shrink-0 rounded-md flex items-center justify-center"
          style={{ backgroundColor: 'var(--cat-soft)', color: 'var(--cat-text)' }}
        >
          <i className="ri-map-pin-line text-lg" />
        </span>
        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-x-1.5 font-label text-sm leading-snug text-foreground-600">
            <span className="whitespace-nowrap">Location</span>
            <span aria-hidden="true">·</span>
            <span className="ko font-medium">오시는 길</span>
          </p>
        </div>
      </div>

      {status !== 'unavailable' && (
        <div className="mt-5 flex-1 min-h-[280px] md:min-h-[360px] overflow-hidden rounded-md border border-background-200 bg-background-100">
          <div ref={containerRef} className="w-full h-full min-h-[280px] md:min-h-[360px]" />
        </div>
      )}

      <div className="mt-auto pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          href={naverMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonBase} ${buttonStyle}`}
        >
          네이버 지도에서 보기
          <i className="ri-external-link-line w-4 h-4 flex items-center justify-center" />
        </a>
        <a
          href={googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonBase} ${buttonStyle}`}
        >
          구글 지도에서 보기
          <i className="ri-external-link-line w-4 h-4 flex items-center justify-center" />
        </a>
      </div>
    </div>
  );
}