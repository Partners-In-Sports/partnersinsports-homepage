import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { heroBackgrounds, heroContent, heroMarquee } from '@/mocks/site';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [copyWidth, setCopyWidth] = useState(0);
  const [ruleStart, setRuleStart] = useState(0);
  // null = desktop hover mode (CSS driven). number = JS driven (0 → 1).
  const [reveal, setReveal] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLSpanElement | null>(null);
  const tintRuleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  // The byline row has to be exactly as wide as the headline.
  useLayoutEffect(() => {
    const measure = () => {
      const titleEl = titleRef.current;
      if (titleEl) {
        const range = document.createRange();
        range.selectNodeContents(titleEl);
        const rects = Array.from(range.getClientRects());
        if (rects.length > 0) {
          const left = Math.min(...rects.map((rect) => rect.left));
          const right = Math.max(...rects.map((rect) => rect.right));
          setCopyWidth(Math.round(right - left));
        }
      }
      if (tintRuleRef.current) {
        setRuleStart(Math.round(tintRuleRef.current.offsetLeft));
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (titleRef.current) observer.observe(titleRef.current);
    window.addEventListener('resize', measure);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure).catch(() => undefined);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  // Touch devices: the gradient fills in once on entry, then stays complete.
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const noHover = window.matchMedia('(hover: none)');

    if (reduceMotion.matches) {
      setReveal(1);
      return undefined;
    }
    if (!noHover.matches) {
      setReveal(null);
      return undefined;
    }

    const duration = 1000;
    const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;
    let raf = 0;
    let startTime = 0;

    const step = (now: number) => {
      if (!startTime) startTime = now;
      const t = Math.min(1, (now - startTime) / duration);
      setReveal(easeOutCubic(t));
      if (t < 1) {
        raf = window.requestAnimationFrame(step);
      }
    };

    setReveal(0);
    raf = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(raf);
  }, []);

  const copyStyle = (reveal === null
    ? undefined
    : { '--pis-reveal': reveal }) as unknown as CSSProperties | undefined;

  const rowStyle = {
    width: copyWidth ? `${copyWidth}px` : '100%',
    '--pis-row-w': copyWidth ? `${copyWidth}px` : '100%',
    '--pis-rule-start': `${ruleStart}px`,
  } as unknown as CSSProperties;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-foreground-950 flex flex-col"
    >
      {heroBackgrounds.map((bg, i) => {
        const isActive = i === index;
        return (
          <div
            key={bg.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 w-full h-full overflow-hidden transition-opacity duration-[1400ms] ease-out ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              key={`${bg.id}-${isActive}`}
              src={bg.image}
              alt={bg.alt}
              title={`${heroContent.title} — Partners in Sports`}
              className={`absolute left-0 w-full object-cover ${
                bg.focus === 'bottom'
                  ? 'bottom-0 h-[158%] object-bottom'
                  : 'top-0 h-full object-top'
              } ${isActive ? 'pis-slow-zoom' : ''}`}
            />
          </div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/70 via-foreground-950/45 to-foreground-950/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground-950/65 via-transparent to-transparent" />

      <div className="relative z-10 flex-1 w-full px-4 md:px-8 pt-32 md:pt-40 pb-14 flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto">
          <div
            className={`pis-hero-copy w-full ${reveal === null ? '' : 'pis-reveal-driven'}`}
            style={copyStyle}
          >
            <h1 className="font-heading font-extrabold uppercase tracking-tightest text-background-50 leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
              <span className="pis-headline">
                <span ref={titleRef} className="pis-headline-base">
                  {heroContent.title}
                </span>
                <span className="pis-headline-tint" aria-hidden="true">
                  {heroContent.title}
                </span>
              </span>
            </h1>

            <div className="pis-byline mt-7" style={rowStyle}>
              <div className="pis-byline-layer">
                <span className="pis-byline-text">{heroContent.brand}</span>
                <span className="pis-byline-rule" />
              </div>
              <div className="pis-byline-layer pis-byline-layer--tint" aria-hidden="true">
                <span className="pis-byline-text pis-byline-text--tint">
                  {heroContent.brand}
                </span>
                <span ref={tintRuleRef} className="pis-byline-rule pis-byline-rule--tint" />
              </div>
            </div>
          </div>

          <p className="mt-9 font-heading text-[15px] md:text-[18px] font-normal leading-relaxed text-background-50/90 max-w-2xl">
            {heroContent.statement}
          </p>

          <p className="mt-4 text-[13px] md:text-[15px] leading-relaxed text-background-50/65 max-w-xl">
            {heroContent.intro}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-background-50 px-7 py-3.5 text-sm font-label text-foreground-950 whitespace-nowrap cursor-pointer transition-colors hover:bg-background-200"
            >
              프로젝트 보기
              <i className="ri-arrow-down-line w-4 h-4 flex items-center justify-center" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-background-100/45 px-7 py-3.5 text-sm font-label text-background-50 whitespace-nowrap cursor-pointer transition-colors hover:bg-background-50/10"
            >
              문의하기
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden border-t border-background-100/15 bg-foreground-950/40 backdrop-blur-sm">
        <div className="flex w-max pis-marquee-track">
          {[...heroMarquee, ...heroMarquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 px-8 py-5 font-label text-[11px] md:text-xs tracking-[0.28em] uppercase text-background-200 whitespace-nowrap"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-primary-100/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}