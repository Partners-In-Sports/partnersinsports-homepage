import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';
import BilingualText from '@/components/base/BilingualText';
import { businessAreas, sectionAccentSoft, sectionAccents } from '@/mocks/site';
import { areaFilterHref } from '@/utils/projectLinks';

export default function BusinessAreas() {
  return (
    <section
      className="bg-background-50"
      style={{ '--cat': sectionAccents.business, '--cat-soft': sectionAccentSoft.business } as CSSProperties}
    >
      <div className="px-4 md:px-8 py-20 md:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-3 font-label text-[10px] md:text-[11px] tracking-[0.16em] md:tracking-[0.3em] uppercase text-foreground-500 whitespace-nowrap">
            <span className="w-8 h-px" style={{ backgroundColor: 'var(--cat)' }} />
            <BilingualText text="Core areas · 핵심 영역" />
          </span>
        </Reveal>

        <div className="mt-14 border-t border-background-200">
          {businessAreas.map((area, index) => (
            <Reveal key={area.id} delay={index * 60}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border-b border-background-200 py-9 md:py-11 transition-colors duration-300 hover:bg-background-100/70">
                <div className="lg:col-span-1">
                  <span className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-background-400 transition-colors duration-300 group-hover:text-[color:var(--cat)]">
                    {area.no}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <span
                    className="w-10 h-10 rounded-md border border-background-200 flex items-center justify-center"
                    style={{ backgroundColor: 'var(--cat-soft)', color: 'var(--cat)' }}
                  >
                    <i className={`${area.icon} text-xl`} />
                  </span>
                  <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground-950">
                    {area.name}
                  </h3>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-sm md:text-base leading-relaxed text-foreground-600 whitespace-pre-line">
                    {area.description}
                  </p>
                  {!('portfolio' in area && area.portfolio === false) && (
                    <Link
                      to={areaFilterHref(area.id)}
                      className="mt-6 inline-flex items-center gap-2 font-label text-[11px] tracking-[0.2em] uppercase text-foreground-950 cursor-pointer transition-colors hover:text-[color:var(--cat)]"
                    >
                      <span
                        className="h-px w-6 transition-all duration-300 group-hover:w-10"
                        style={{ backgroundColor: 'var(--cat)' }}
                      />
                      <span className="ko">프로젝트 보기</span>
                      <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center" />
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}