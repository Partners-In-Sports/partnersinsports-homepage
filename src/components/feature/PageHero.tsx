import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import BilingualText from '@/components/base/BilingualText';

interface PageHeroProps {
  eyebrow: string;
  index?: string;
  title: string;
  description?: string;
  accent?: string;
  indexAccent?: string;
  image?: string;
  imageAlt?: string;
  backLabel?: string;
  titleClassName?: string;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  index,
  title,
  description,
  accent = 'oklch(var(--accent-500))',
  indexAccent,
  image,
  imageAlt = '',
  backLabel,
  titleClassName,
  children,
}: PageHeroProps) {
  const hasImage = Boolean(image);
  const indexColor = indexAccent ?? accent;
  const titleClasses =
    titleClassName ?? 'text-4xl md:text-6xl lg:text-7xl max-w-4xl';

  return (
    <section
      className={`relative w-full overflow-hidden pt-[68px] md:pt-[76px] ${
        hasImage ? 'bg-foreground-950' : 'bg-background-100 border-b border-background-200'
      }`}
    >
      {hasImage && (
        <>
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover object-top opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/95 via-foreground-950/70 to-foreground-950/55" />
        </>
      )}

      <div className="relative z-10 w-full px-4 md:px-8 py-14 md:py-20">
        <div className="w-full">
          {backLabel && (
            <Link
              to="/projects"
              className={`inline-flex items-center gap-2 font-label text-[11px] tracking-[0.2em] uppercase mb-7 cursor-pointer transition-colors ${
                hasImage ? 'text-background-200 hover:text-background-50' : 'text-foreground-500 hover:text-foreground-950'
              }`}
            >
              <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center" />
              <span className="ko">{backLabel}</span>
            </Link>
          )}

          <span
            className={`inline-flex items-center gap-3 font-label text-[11px] tracking-[0.3em] uppercase ${
              hasImage ? 'text-background-200' : 'text-foreground-500'
            }`}
          >
            {index && (
              <span className="tabular-nums font-semibold" style={{ color: indexColor }}>
                {index}
              </span>
            )}
            <span className="w-8 h-px" style={{ backgroundColor: accent }} />
            <BilingualText text={eyebrow} />
          </span>

          <h1
            className={`mt-5 font-heading font-extrabold uppercase tracking-tightest leading-[0.98] ${titleClasses} ${
              hasImage ? 'text-background-50' : 'text-foreground-950'
            }`}
          >
            {title}
          </h1>

          {description && (
            <p
              className={`mt-6 text-sm md:text-base leading-relaxed max-w-2xl ${
                hasImage ? 'text-background-200' : 'text-foreground-600'
              }`}
            >
              {description}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}