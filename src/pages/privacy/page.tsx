import { usePageMeta } from '@/hooks/usePageMeta';
import EmailText from '@/components/base/EmailText';
import PageHero from '@/components/feature/PageHero';
import { sectionAccents } from '@/mocks/site';
import {
  privacyPolicyIntro,
  privacyPolicySections,
} from '@/content/legal';

export default function Privacy() {
  usePageMeta({
    title: '개인정보처리방침 | Partners in Sports',
    description:
      '㈜파트너스인스포츠의 개인정보 처리 목적, 항목, 보유 기간, 위탁 및 국외 이전, 보호책임자를 안내합니다.',
    path: '/privacy',
  });

  return (
    <>
      <PageHero
        eyebrow="Legal · 개인정보처리방침"
        title="Privacy Policy"
        titleClassName="text-4xl md:text-5xl lg:text-6xl max-w-4xl"
        accent={sectionAccents.contact}
      />

      <section className="bg-background-100 border-t border-background-200">
        <div className="w-full px-4 md:px-8 py-12 md:py-16">
          <article className="mx-auto w-full max-w-[800px] rounded-lg border border-background-200 bg-background-50 px-5 py-10 md:px-14 md:py-14 shadow-[0_2px_16px_-8px_oklch(var(--foreground-950)/0.2)]">
            <p className="ko text-sm md:text-[15px] leading-[1.8] text-foreground-700">
              {privacyPolicyIntro}
            </p>

            <div className="mt-10 space-y-10">
              {privacyPolicySections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="border-t border-background-200 pt-10 first:border-t-0 first:pt-0"
                >
                  <h2 className="flex items-baseline gap-2.5">
                    <span className="ko shrink-0 font-label text-[13px] font-semibold text-foreground-400">
                      {section.number}.
                    </span>
                    <span className="ko font-heading text-base md:text-lg font-bold tracking-tight text-foreground-950">
                      {section.title}
                    </span>
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="ko mt-4 max-w-[68ch] text-sm md:text-[15px] leading-[1.8] text-foreground-700"
                    >
                      <EmailText text={paragraph} />
                    </p>
                  ))}

                  {section.list && section.list.length > 0 && (
                    <ul className="mt-4 space-y-2.5">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="ko flex gap-2.5 text-sm md:text-[15px] leading-[1.8] text-foreground-700"
                        >
                          <span aria-hidden="true" className="mt-0.5 shrink-0 text-foreground-400">
                            –
                          </span>
                          <span className="min-w-0">
                            <EmailText text={item} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}