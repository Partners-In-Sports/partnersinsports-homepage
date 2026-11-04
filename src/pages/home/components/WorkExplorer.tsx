import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';
import SectionHeading from '@/components/base/SectionHeading';
import { projects, sectionAccentSoft, sectionAccents, workCategories, workIntro } from '@/mocks/site';
import { areaFilterHref } from '@/utils/projectLinks';

export default function WorkExplorer() {
  return (
    <section
      id="work"
      className="bg-background-50"
      style={{ '--cat': sectionAccents.work, '--cat-soft': sectionAccentSoft.work } as CSSProperties}
    >
      <div className="px-4 md:px-8 py-20 md:py-28">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <SectionHeading
              eyebrow={workIntro.eyebrow}
              title={workIntro.title}
              description={workIntro.description}
              accent={sectionAccents.work}
            />
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-background-300 px-6 py-3 text-sm font-label text-foreground-950 whitespace-nowrap cursor-pointer transition-colors hover:bg-foreground-950 hover:text-background-50 hover:border-foreground-950"
            >
              전체 프로젝트 보기
              <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {workCategories.map((category, index) => {
            // 개수 계산은 유지하되 카드에는 표시하지 않습니다.
            const count = projects.filter((project) => project.category === category.id).length;
            void count;
            return (
              <Reveal key={category.id} delay={(index % 2) * 90} className="h-full">
                <Link
                  to={areaFilterHref(category.id)}
                  aria-label={`${category.name} — view projects`}
                  style={
                    {
                      '--cat': category.accent,
                      '--cat-soft': category.accentSoft,
                    } as CSSProperties
                  }
                  className="group relative flex h-[360px] md:h-[440px] lg:h-[520px] flex-col justify-between overflow-hidden rounded-lg bg-foreground-950 p-6 md:p-8 cursor-pointer"
                >
                  <img
                    src={category.image}
                    alt={`${category.name} — Partners in Sports`}
                    title={`${category.name} projects — Partners in Sports`}
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-85 transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/92 via-foreground-950/50 to-foreground-950/25" />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundColor: 'var(--cat-soft)' }}
                  />
                  <span
                    className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
                    style={{ backgroundColor: 'var(--cat)' }}
                  />

                  <div className="relative z-10 flex items-start gap-4">
                    <span className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-background-50 transition-colors duration-300 group-hover:text-[color:var(--cat)]">
                      {category.no}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight leading-[1.05] text-background-50 max-w-lg">
                      {category.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-background-200 max-w-md whitespace-pre-line">
                      {category.short}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-label text-[11px] tracking-[0.22em] uppercase text-background-50">
                      <span className="h-px w-6 bg-background-100/50" />
                      <span className="ko">프로젝트 보기</span>
                      <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}