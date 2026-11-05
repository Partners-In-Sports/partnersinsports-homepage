import { Link } from 'react-router-dom';
import { usePageMeta } from '@/hooks/usePageMeta';

/**
 * Shown for every unknown address. It renders inside the shared layout
 * (header + footer) so it keeps the same chrome and colour tone as the rest
 * of the site, and it is kept out of search results.
 */
export default function NotFound() {
  usePageMeta({
    title: '페이지를 찾을 수 없습니다 | Partners in Sports',
    description: '요청하신 페이지를 찾을 수 없습니다. 주소를 다시 확인해 주세요.',
    noindex: true,
  });

  return (
    <section className="bg-background-100 border-b border-background-200">
      <div className="w-full px-4 md:px-8 py-20 md:py-28 min-h-[62vh] flex flex-col items-center justify-center text-center">
        <span className="font-label text-[11px] tracking-[0.3em] uppercase text-foreground-500">
          404 · Page not found
        </span>

        <p
          aria-hidden="true"
          className="mt-7 font-heading text-6xl md:text-8xl font-extrabold tracking-tightest text-background-300 select-none"
        >
          404
        </p>

        <h1 className="mt-6 ko font-heading text-2xl md:text-4xl font-bold tracking-tight text-foreground-950">
          페이지를 찾을 수 없습니다.
        </h1>
        <p className="mt-3 ko text-sm md:text-base leading-relaxed text-foreground-600">
          주소를 다시 확인해 주세요.
        </p>

        <Link
          to="/"
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-primary-500 px-7 py-3.5 text-sm font-label text-background-50 whitespace-nowrap cursor-pointer transition-colors hover:bg-primary-600"
        >
          <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center" />
          <span className="ko">홈으로 돌아가기</span>
        </Link>
      </div>
    </section>
  );
}