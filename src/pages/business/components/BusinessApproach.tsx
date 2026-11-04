import type { CSSProperties } from 'react';
import Reveal from '@/components/base/Reveal';
import BilingualText from '@/components/base/BilingualText';
import { sectionAccents } from '@/mocks/site';

const steps = [
  {
    no: '01',
    icon: 'ri-search-line',
    title: 'Discover',
    text: '조직과 대상, 필요한 성과를 먼저 이해합니다.',
  },
  {
    no: '02',
    icon: 'ri-bar-chart-line',
    title: 'Analyse',
    text: '데이터와 연구, 현장 지식을 바탕으로 현황을 명확하게 정리합니다.',
  },
  {
    no: '03',
    icon: 'ri-compasses-2-line',
    title: 'Strategies',
    text: '우선순위가 분명한, 실행 가능한 미래 지향적 계획을 수립합니다.',
  },
  {
    no: '04',
    icon: 'ri-flag-2-line',
    title: 'Deliver',
    text: '이벤트 현장에서 글로벌 무대까지, 실행 단계에서도 함께합니다.',
  },
];

export default function BusinessApproach() {
  return (
    <section
      className="bg-foreground-950 text-background-100"
      style={{ '--cat': sectionAccents.business } as CSSProperties}
    >
      <div className="px-4 md:px-8 py-20 md:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-3 font-label text-[11px] tracking-[0.3em] uppercase text-background-300">
            <span className="w-8 h-px" style={{ backgroundColor: 'var(--cat)' }} />
            <BilingualText text="How we work · 업무 방식" />
          </span>
          <h2 className="mt-5 font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[1.05] text-background-50 max-w-3xl">
            From first question to delivered result
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <Reveal key={step.no} delay={index * 70} className="h-full">
              <div className="flex h-full flex-col rounded-lg border border-background-100/15 bg-background-50/5 p-6">
                <div className="flex items-center justify-between">
                  <span
                    className="w-10 h-10 rounded-md flex items-center justify-center text-background-50"
                    style={{ backgroundColor: 'var(--cat)' }}
                  >
                    <i className={`${step.icon} text-xl`} />
                  </span>
                  <span className="font-heading text-sm font-bold tracking-[0.2em] text-background-400">
                    {step.no}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-lg font-bold tracking-tight text-background-50">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-background-200">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}