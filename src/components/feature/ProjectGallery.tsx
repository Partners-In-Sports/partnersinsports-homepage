import { useCallback, useEffect, useRef, useState } from 'react';

export interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  title: string;
  /** Desktop only — a row of small square thumbnails under the main frame. */
  showThumbnails?: boolean;
}

/**
 * Shared project image gallery — used by every project detail screen.
 *
 * Single image: one contained frame, no arrows or position counter.
 * Multiple images: mobile swipe (CSS scroll-snap), desktop keyboard arrows,
 * edge arrows on both breakpoints, a small counter, and a full-screen viewer.
 * Optionally a desktop-only thumbnail row sits right under the main frame.
 */
export default function ProjectGallery({ images, title, showThumbnails = false }: ProjectGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const count = images.length;
  const multi = count > 1;
  const index = Math.min(active, Math.max(count - 1, 0));
  const lightboxImage = lightbox !== null ? images[lightbox] : undefined;

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      const target = ((next % count) + count) % count;
      setActive(target);
      const node = trackRef.current;
      if (node && node.clientWidth) {
        node.scrollTo({ left: node.clientWidth * target, behavior: 'smooth' });
      }
    },
    [count],
  );

  const handleScroll = () => {
    const node = trackRef.current;
    if (!node || !node.clientWidth) return;
    const next = Math.round(node.scrollLeft / node.clientWidth);
    if (next >= 0 && next < count && next !== active) {
      setActive(next);
    }
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (lightbox !== null) {
        if (event.key === 'Escape') setLightbox(null);
        if (!multi) return;
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          setLightbox((prev) => (prev === null ? prev : (prev + 1) % count));
        }
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          setLightbox((prev) => (prev === null ? prev : (prev - 1 + count) % count));
        }
        return;
      }

      if (!multi) return;
      // Desktop only — on mobile the swipe track owns the gesture.
      if (!window.matchMedia('(min-width: 768px)').matches) return;
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goTo(index + 1);
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goTo(index - 1);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count, goTo, index, lightbox, multi]);

  useEffect(() => {
    if (lightbox === null) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [lightbox]);

  if (count === 0) return null;

  return (
    <>
      <div className="relative w-full">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-lg border border-background-200 bg-background-100 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightbox(i)}
              aria-label={`${image.alt} 크게 보기`}
              className="block w-full shrink-0 snap-center cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                title={`${title} — Partners in Sports`}
                className="w-full aspect-[4/5] object-contain p-2 md:aspect-auto md:h-[78vh] md:max-h-[calc(100vh-200px)] md:p-4"
              />
            </button>
          ))}
        </div>

        {multi && (
          <>
            {index > 0 && (
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="이전 이미지"
                className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full border border-background-200 bg-background-50/80 backdrop-blur-sm text-foreground-800 flex items-center justify-center cursor-pointer transition-colors hover:bg-background-50"
              >
                <i className="ri-arrow-left-s-line w-4 h-4 md:w-5 md:h-5 flex items-center justify-center" />
              </button>
            )}
            {index < count - 1 && (
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="다음 이미지"
                className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full border border-background-200 bg-background-50/80 backdrop-blur-sm text-foreground-800 flex items-center justify-center cursor-pointer transition-colors hover:bg-background-50"
              >
                <i className="ri-arrow-right-s-line w-4 h-4 md:w-5 md:h-5 flex items-center justify-center" />
              </button>
            )}
            <span className="absolute bottom-3 right-3 rounded-full bg-foreground-950/55 px-2 py-0.5 font-label text-[10px] tracking-[0.16em] text-background-50 backdrop-blur-sm">
              {index + 1} / {count}
            </span>
          </>
        )}
      </div>

      {showThumbnails && multi && (
        <div className="mt-3 hidden md:flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${image.alt} 보기`}
              aria-current={i === index}
              className={`w-[72px] h-[72px] shrink-0 overflow-hidden rounded-md border bg-background-100 cursor-pointer transition-colors ${
                i === index
                  ? 'border-foreground-950'
                  : 'border-background-200 hover:border-foreground-400'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                title={`${title} — Partners in Sports`}
                className="w-full h-full object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}

      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} 이미지`}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[120] bg-foreground-950/90 flex items-center justify-center p-4 md:p-10"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="닫기"
            className="absolute top-5 right-5 w-10 h-10 rounded-full border border-background-100/40 text-background-50 flex items-center justify-center cursor-pointer hover:bg-background-50/10 transition-colors"
          >
            <i className="ri-close-line w-5 h-5 flex items-center justify-center" />
          </button>

          {multi && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setLightbox((prev) => (prev === null ? prev : (prev - 1 + count) % count));
                }}
                aria-label="이전 이미지"
                className="absolute left-3 md:left-6 w-10 h-10 rounded-full border border-background-100/40 text-background-50 flex items-center justify-center cursor-pointer hover:bg-background-50/10 transition-colors"
              >
                <i className="ri-arrow-left-s-line w-5 h-5 flex items-center justify-center" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setLightbox((prev) => (prev === null ? prev : (prev + 1) % count));
                }}
                aria-label="다음 이미지"
                className="absolute right-3 md:right-6 w-10 h-10 rounded-full border border-background-100/40 text-background-50 flex items-center justify-center cursor-pointer hover:bg-background-50/10 transition-colors"
              >
                <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center" />
              </button>
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-label text-[11px] tracking-[0.2em] text-background-50/80">
                {(lightbox ?? 0) + 1} / {count}
              </span>
            </>
          )}

          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] max-w-full w-auto h-auto object-contain rounded-md"
          />
        </div>
      )}
    </>
  );
}