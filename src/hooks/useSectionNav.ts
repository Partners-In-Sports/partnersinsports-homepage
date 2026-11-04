import { useCallback } from 'react';
import type { MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Smoothly scrolls to a homepage section. If the visitor is on another page,
 * it first navigates home and then scrolls once the section is mounted.
 */
export function useSectionNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (event: MouseEvent<HTMLElement>, id: string) => {
      event.preventDefault();
      const scrollTo = () =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

      if (pathname === '/') {
        scrollTo();
      } else {
        navigate('/');
        window.setTimeout(scrollTo, 90);
      }
    },
    [pathname, navigate],
  );
}