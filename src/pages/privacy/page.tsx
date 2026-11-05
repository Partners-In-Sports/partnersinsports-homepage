import { usePageMeta } from '@/hooks/usePageMeta';
import PageHero from '@/components/feature/PageHero';
import { sectionAccents } from '@/mocks/site';
import { privacyConsentNote, privacyNotice, privacyNoticeTitle } from '@/content/legal';

export default function Privacy() {
  usePageMeta({
    title: '개인정보처리방침 | Partners in Sports',
    description:
      '문의 접수 및 상담을 위한 개인정보 수집 및 이용 안내입니다. 수집 목적과 항목, 보유기간을 안내합니다.',
    path: '/privacy',
    noindex: true,
  });

  return (
    <>
      <PageHero
        eyebrow="Legal · 개인정보"
        title="개인정보처리방침"
        accent={sectionAccents.contact}
      />

      <section className="bg-background-100 border-t border-background-200">
        <div className="px-4 md:px-8 py-12 md:py-16">
          <div className="max-w-3xl rounded-lg border border-background-200 bg-background-50 p-6 md:p-10">
            <h2 className="ko font-label text-[11px] tracking-[0.18em] uppercase text-foreground-500">
              {privacyNoticeTitle}
            </h2>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground-700">
              {privacyNotice.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li className="pt-1 text-foreground-600">{privacyConsentNote}</li>
            </ul>

            <p className="mt-8 border-t border-background-200 pt-6 text-sm leading-relaxed text-foreground-700">
              전체 개인정보처리방침은 준비 중입니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}