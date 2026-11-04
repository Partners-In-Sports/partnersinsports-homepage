import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  to?: string;
  categoryLabel: string;
  title: string;
  year?: string;
  client?: string;
  summary?: string;
  /** Short one-line note shown under the title in small grey type. */
  caption?: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  /** CSS object-position for `cover` artwork, e.g. 'center 70%'. */
  imagePosition?: string;
  /** Optional alt text override; falls back to the project title. */
  imageAlt?: string;
  /**
   * Poster cards only: moves the ↗ badge from the footer onto the artwork's
   * top-right corner. Off by default so every other card stays untouched.
   */
  badgeCorner?: boolean;
}

/**
 * Shared project card.
 * - `to` present → A형: clickable, the ↗ badge and hover motion are shown.
 * - `to` missing → B형: no link, no ↗ badge, no hover effects.
 * - `imageFit='contain'` → logo / emblem artwork: pure white 4:3 panel, the mark
 *   is centred and kept inside 70% of the panel, so at least 15% of the panel
 *   height stays empty on every side. Logo cards share the same white surface
 *   as the card body, so no seam is visible between image area and card.
 */
export default function ProjectCard({
  to,
  categoryLabel,
  title,
  year,
  client,
  summary,
  caption,
  image,
  imageFit = 'cover',
  imagePosition = 'center top',
  imageAlt,
  badgeCorner = false,
}: ProjectCardProps) {
  const isLogo = imageFit === 'contain';
  const altText = imageAlt ?? title;
  const cornerBadge = Boolean(to && badgeCorner);

  const body = (
    <>
      <div
        className={`relative w-full aspect-[4/3] overflow-hidden ${
          isLogo ? 'bg-white' : 'bg-background-200'
        }`}
      >
        {isLogo ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={image}
              alt={altText}
              title={`${title} — Partners in Sports`}
              className="w-auto h-auto max-w-[70%] max-h-[70%] object-contain"
            />
          </div>
        ) : (
          <img
            src={image}
            alt={altText}
            title={`${title} — Partners in Sports`}
            style={{ objectPosition: imagePosition }}
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          />
        )}
        {year && (
          <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-foreground-950/70 px-3 py-1 font-label text-[10px] tracking-[0.16em] uppercase text-background-50 backdrop-blur-sm">
            {year}
          </span>
        )}
        {cornerBadge && (
          <span className="absolute top-3 right-3 md:top-4 md:right-4 w-9 h-9 rounded-full border border-background-50/30 bg-foreground-950/70 text-background-50 backdrop-blur-sm flex items-center justify-center transition-colors duration-300 group-hover:bg-foreground-950">
            <i className="ri-arrow-right-up-line w-4 h-4 flex items-center justify-center" />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <span className="inline-flex items-center font-label text-[10px] tracking-[0.16em] uppercase text-foreground-500">
          {categoryLabel}
        </span>
        <h3
          className={`mt-2 font-heading text-base md:text-lg font-bold tracking-tight text-foreground-950 leading-snug ${
            to ? 'transition-colors duration-200 group-hover:text-[color:var(--cat)]' : ''
          }`}
        >
          {title}
        </h3>
        {summary && (
          <p className="mt-2 text-xs md:text-sm leading-relaxed text-foreground-500">{summary}</p>
        )}
        {caption && (
          <p className="mt-1 text-[11px] md:text-xs leading-relaxed text-foreground-500">
            {caption}
          </p>
        )}
        <div className="mt-auto pt-5 flex items-center justify-between gap-4">
          {client ? (
            <span className="text-xs md:text-sm text-foreground-500">{client}</span>
          ) : (
            <span />
          )}
          {to ? (
            !cornerBadge ? (
              <span className="w-9 h-9 shrink-0 rounded-full border border-background-300 flex items-center justify-center text-foreground-700 transition-all duration-300 group-hover:bg-foreground-950 group-hover:border-foreground-950 group-hover:text-background-50">
                <i className="ri-arrow-right-up-line w-4 h-4 flex items-center justify-center" />
              </span>
            ) : (
              <span />
            )
          ) : (
            <span />
          )}
        </div>
      </div>
    </>
  );

  const shellClass = `relative flex h-full flex-col overflow-hidden rounded-lg border border-background-200 ${
    isLogo ? 'bg-white' : 'bg-background-50'
  }`;

  if (!to) {
    return <div className={shellClass}>{body}</div>;
  }

  return (
    <Link to={to} className={`group ${shellClass} cursor-pointer`}>
      {body as ReactNode}
    </Link>
  );
}