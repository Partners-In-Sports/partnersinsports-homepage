import type { CSSProperties } from 'react';
import Reveal from '@/components/base/Reveal';
import BilingualText from '@/components/base/BilingualText';
import { aboutPillars, sectionAccentSoft, sectionAccentText, sectionAccents } from '@/mocks/site';

export default function AboutPillars() {
  return (
    <section
      className="bg-background-50"
      style={
        {
          '--cat': sectionAccents.about,
          '--cat-soft': sectionAccentSoft.about,
          '--cat-text': sectionAccentText.about,
        } as CSSProperties
      }
    >
      <div className="px-4 md:px-8 py-20 md:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-3 font-label text-[11px] tracking-[0.3em] uppercase text-foreground-500">
            <span className="w-8 h-px" style={{ backgroundColor: 'var(--cat)' }} />
            <BilingualText text="Areas of work · 업무 영역" />
          </span>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aboutPillars.map((pillar, index) => (
            <Reveal key={pillar.id} delay={index * 70} className="h-full">
              <div className="flex h-full flex-col rounded-lg border border-background-200 bg-background-100 p-6">
                <span
                  className="w-11 h-11 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: 'var(--cat-soft)', color: 'var(--cat-text)' }}
                >
                  <i className={`${pillar.icon} text-xl`} />
                </span>
                <h3 className="mt-5 font-heading text-base font-bold tracking-tight text-foreground-950">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-600 whitespace-pre-line">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}