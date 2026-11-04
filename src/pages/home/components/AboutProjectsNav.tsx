import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';
import BilingualText from '@/components/base/BilingualText';
import { sectionAccentSoft, sectionAccentText, sectionAccents } from '@/mocks/site';

interface Gateway {
  id: string;
  label: string;
  no: string;
  eyebrow: string;
  text: string;
  to: string;
  accent: string;
  textColor: string;
  soft: string;
  darkOnAccent: boolean;
}

// Two large editorial gateways. Each panel keeps its own single brand colour —
// neutral at rest, revealed through the rule, title and arrow on hover.
const gateways: Gateway[] = [
  {
    id: 'gateway-about',
    label: 'About',
    no: '01',
    eyebrow: 'About · 회사소개',
    text: '회사와 구성원, 그리고 우리가 지향하는 파트너의 모습을 소개합니다.',
    to: '/about',
    accent: sectionAccents.about,
    textColor: sectionAccentText.about,
    soft: sectionAccentSoft.about,
    darkOnAccent: true,
  },
  {
    id: 'gateway-projects',
    label: 'Projects',
    no: '02',
    eyebrow: 'Projects · 프로젝트',
    text: '스포츠 산업 전 분야의 프로젝트를 살펴보세요.',
    to: '/projects',
    accent: sectionAccents.work,
    textColor: sectionAccentText.work,
    soft: sectionAccentSoft.work,
    darkOnAccent: false,
  },
];

export default function AboutProjectsNav() {
  return (
    <section id="explore" className="bg-background-50 border-t border-background-200">
      <div className="px-4 md:px-8 py-16 md:py-24">
        <Reveal>
          <span className="inline-flex items-center gap-3 font-label text-[11px] tracking-[0.3em] uppercase text-foreground-500">
            <span className="w-8 h-px bg-foreground-400" />
            <BilingualText text="Explore · 둘러보기" />
          </span>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {gateways.map((gateway, index) => (
            <Reveal key={gateway.id} delay={index * 90} className="h-full">
              <Link
                to={gateway.to}
                style={
                  {
                    '--panel': gateway.accent,
                    '--panel-soft': gateway.soft,
                    '--panel-text': gateway.textColor,
                  } as CSSProperties
                }
                className="group relative flex h-full min-h-[300px] md:min-h-[420px] flex-col justify-between overflow-hidden rounded-lg border border-background-200 bg-background-100 p-7 md:p-10 cursor-pointer"
              >
                <span
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: 'var(--panel-soft)' }}
                />
                <span
                  className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  style={{ backgroundColor: 'var(--panel)' }}
                />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span className="font-label text-[11px] tracking-[0.24em] uppercase text-foreground-500">
                    <BilingualText text={gateway.eyebrow} />
                  </span>
                  <span className="font-heading text-sm font-bold tracking-[0.2em] text-background-400">
                    {gateway.no}
                  </span>
                </div>

                <div className="relative z-10">
                  <h2 className="font-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tightest leading-[0.95] text-foreground-950 transition-colors duration-300 group-hover:text-[color:var(--panel-text)]">
                    {gateway.label}
                  </h2>
                  <div className="mt-6 flex items-end justify-between gap-6">
                    <p className="max-w-sm text-sm leading-relaxed text-foreground-600">
                      {gateway.text}
                    </p>
                    <span
                      className={`relative w-12 h-12 shrink-0 overflow-hidden rounded-full border border-background-300 flex items-center justify-center text-foreground-700 transition-colors duration-300 group-hover:border-transparent ${
                        gateway.darkOnAccent
                          ? 'group-hover:text-foreground-950'
                          : 'group-hover:text-background-50'
                      }`}
                    >
                      <span
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ backgroundColor: 'var(--panel)' }}
                      />
                      <i className="relative ri-arrow-right-line w-5 h-5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}