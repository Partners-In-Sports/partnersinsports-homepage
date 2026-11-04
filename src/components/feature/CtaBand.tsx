import { Link } from 'react-router-dom';

interface CtaBandProps {
  title?: string;
  text?: string;
}

export default function CtaBand({
  title = 'Have a project in mind?',
  text = 'Tell us what you are working on. We will come back with a clear view of how we can help — whether that is research, an event, a global partnership or merchandise.',
}: CtaBandProps) {
  return (
    <section className="bg-background-100 border-t border-background-200">
      <div className="px-4 md:px-8 py-16 md:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] text-foreground-950 max-w-2xl">
            {title}
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-foreground-600 max-w-xl">
            {text}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground-950 px-7 py-3.5 text-sm font-label text-background-50 whitespace-nowrap cursor-pointer transition-colors hover:bg-primary-700"
          >
            문의하기
            <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center" />
          </Link>
          <Link
            to="/contact#visit"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-background-300 px-7 py-3.5 text-sm font-label text-foreground-950 whitespace-nowrap cursor-pointer transition-colors hover:border-foreground-950"
          >
            <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center" />
            <span className="ko">방문 안내</span>
          </Link>
        </div>
      </div>
    </section>
  );
}