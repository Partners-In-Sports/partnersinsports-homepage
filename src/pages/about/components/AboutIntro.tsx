import type { CSSProperties } from 'react';
import Reveal from '@/components/base/Reveal';
import { aboutContent, sectionAccentSoft, sectionAccentText, sectionAccents } from '@/mocks/site';

export default function AboutIntro() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-foreground-950 leading-[1.15]">
              Success happens when{' '}
              <span className="text-[color:var(--cat-text)]">preparation</span> meets{' '}
              <span className="text-[color:var(--cat-text)]">opportunity</span>.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <div className="space-y-5">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm md:text-base leading-relaxed text-foreground-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-14 w-full overflow-hidden rounded-lg">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
              <img
                src={aboutContent.image}
                alt={aboutContent.imageAlt}
                title="Partners in Sports team — Seoul"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/60 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 font-label text-[11px] tracking-[0.2em] uppercase text-background-50">
                Seoul, Republic of Korea
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}