import { useEffect } from 'react';

/** Public site address used for canonical URLs and social previews. */
export const SITE_URL = 'https://partnersinsports.co.kr';
export const SITE_NAME = 'Partners in Sports';
/** Sharing image served from the site root (1200 x 630), used for every public page. */
export const SITE_OG_IMAGE = `${SITE_URL}/og-image.png`;
/** Intrinsic size of SITE_OG_IMAGE, needed by link previews. */
export const SITE_OG_IMAGE_WIDTH = '1200';
export const SITE_OG_IMAGE_HEIGHT = '630';

interface PageMeta {
  /** Unique page title (brand name included). */
  title: string;
  /** Unique page description, written from copy that already exists on the page. */
  description: string;
  /** Canonical path starting with "/" (e.g. "/about"). Leave empty to skip it. */
  path?: string;
  image?: string;
  noindex?: boolean;
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function removeMeta(attribute: 'name' | 'property', key: string) {
  document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)?.remove();
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function removeCanonical() {
  document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.remove();
}

/**
 * Applies page-specific search and social metadata (title, description,
 * canonical, og:*, robots) on every route change, so the single-page build
 * still exposes a unique head per page.
 */
export function usePageMeta({
  title,
  description,
  path,
  image = SITE_OG_IMAGE,
  noindex = false,
}: PageMeta) {
  useEffect(() => {
    const url = path ? `${SITE_URL}${path === '/' ? '/' : path}` : undefined;

    document.title = title;

    setMeta('name', 'description', description);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:width', SITE_OG_IMAGE_WIDTH);
    setMeta('property', 'og:image:height', SITE_OG_IMAGE_HEIGHT);
    setMeta('property', 'og:image:alt', SITE_NAME);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    if (url) {
      setMeta('property', 'og:url', url);
      setCanonical(url);
    } else {
      removeMeta('property', 'og:url');
      removeCanonical();
    }
  }, [title, description, path, image, noindex]);
}