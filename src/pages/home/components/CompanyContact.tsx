import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';
import BilingualText from '@/components/base/BilingualText';
import { aboutContent, companyInfo, sectionAccentSoft, sectionAccents, workCategories } from '@/mocks/site';

export default function CompanyContact() {
  return (
    <section
      id="company"
      className="bg-background-100 border-t border-background-200"
      style={{ '--cat': sectionAccents.contact, '--cat-soft': sectionAccentSoft.contact } as CSSProperties}
    >
      <div className="px-4 md:px-8 py-20 md:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-3 font-label text-[11px] tracking-[0.3em] uppercase text-foreground-500">
            <span className="w-8 h-px" style={{ backgroundColor: sectionAccents.contact }} />
            <BilingualText text="Company · 회사정보" />
          </span>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-tightest leading-[1.02] text-foreground-950">
              {companyInfo.name}
            </h2>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <dt className="ko font-label text-[11px] tracking-[0.18em] uppercase text-foreground-400">
                  대표자
                </dt>
                <dd className="mt-2 text-sm md:text-base text-foreground-950">{companyInfo.ceo}</dd>
              </div>
              <div>
                <dt className="ko font-label text-[11px] tracking-[0.18em] uppercase text-foreground-400">
                  문의·방문
                </dt>
                <dd className="mt-2 text-sm md:text-base leading-relaxed text-foreground-950">
                  <span className="ko">문의 양식으로 접수</span>
                </dd>
              </div>
            </dl>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-foreground-600">
              <span className="ko">{aboutContent.paragraphs[0]}</span>
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {workCategories.map((category) => (
                <li
                  key={category.id}
                  className="rounded-full border border-background-300 px-4 py-2 font-label text-[11px] tracking-[0.12em] uppercase text-foreground-700 whitespace-nowrap"
                >
                  {category.name}
                </li>
              ))}
            </ul>

          </Reveal>

          <Reveal className="lg:col-span-5" delay={100}>
            <div className="flex h-full flex-col justify-between rounded-lg border border-background-200 bg-background-50 p-7 md:p-9">
              <div>
                <span className="font-label text-[11px] tracking-[0.18em] uppercase text-foreground-400">
                  Contact
                </span>
                <h3 className="mt-4 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground-950">
                  Let's talk
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground-600">
                  프로젝트, 파트너십, 연구 관련 문의가 있으시면 연락 주세요. 도움이 될 방법을
                  안내해 드리겠습니다.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground-950 px-6 py-3.5 text-sm font-label text-background-50 whitespace-nowrap cursor-pointer transition-colors hover:bg-primary-700"
                >
                  문의하기
                  <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center" />
                </Link>
                <Link
                  to="/contact#visit"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-background-300 px-6 py-3.5 text-sm font-label text-foreground-950 whitespace-nowrap cursor-pointer transition-colors hover:border-foreground-950"
                >
                  <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center" />
                  <span className="ko">방문 안내</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}