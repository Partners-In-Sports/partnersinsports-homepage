import Reveal from '@/components/base/Reveal';
import { companyInfo, visitGuide } from '@/mocks/site';

const details = [
  {
    id: 'ceo',
    icon: 'ri-user-line',
    label: '대표자',
    value: companyInfo.ceo,
  },
  {
    id: 'channel',
    icon: 'ri-mail-send-line',
    label: '문의 접수',
    value: '오른쪽 문의 양식으로 접수',
  },
  {
    id: 'visit',
    icon: 'ri-map-pin-line',
    label: '방문',
    value: '사전 요청 후 일정 안내',
  },
];

/**
 * Contact page side column.
 * The street address and phone number are intentionally not published — instead
 * a short "how to visit" guide explains the request step, and the exact location
 * is shared individually once a visit is confirmed.
 */
export default function ContactDetails() {
  return (
    <div className="lg:col-span-5">
      <Reveal>
        <div className="overflow-hidden rounded-lg border border-background-200 bg-background-50">
          <div className="px-5 pt-6 pb-4 md:px-6 md:pt-7">
            <h3 className="font-heading text-xl font-bold tracking-tight text-foreground-950">
              {companyInfo.name}
            </h3>
            <p className="mt-1.5 font-label text-[11px] tracking-[0.18em] uppercase text-foreground-400">
              {companyInfo.nameEn}
            </p>
          </div>
          <ul className="divide-y divide-background-200 border-t border-background-200">
            {details.map((detail) => (
              <li key={detail.id} className="flex items-start gap-4 px-5 py-5 md:px-6">
                <span className="w-10 h-10 shrink-0 rounded-md bg-background-100 flex items-center justify-center text-foreground-700">
                  <i className={`${detail.icon} text-lg`} />
                </span>
                <div>
                  <span className="font-label text-[10px] tracking-[0.18em] uppercase text-foreground-400">
                    <span className="ko">{detail.label}</span>
                  </span>
                  <span className="mt-1 block text-sm text-foreground-700">
                    <span className="ko">{detail.value}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div
          id="visit"
          className="mt-5 scroll-mt-24 rounded-lg border border-background-200 bg-background-50 p-6 md:p-7"
        >
          <span className="inline-flex items-center gap-3 font-label text-[10px] tracking-[0.24em] uppercase text-foreground-500">
            <span className="w-6 h-px" style={{ backgroundColor: 'var(--cat)' }} />
            <span className="ko">{visitGuide.eyebrow}</span>
          </span>

          <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground-950">
            <span className="ko">{visitGuide.title}</span>
          </h3>

          <ol className="mt-5 flex flex-col gap-4">
            {visitGuide.steps.map((step) => (
              <li key={step.no} className="flex items-start gap-4">
                <span className="w-10 h-10 shrink-0 rounded-md bg-background-100 flex items-center justify-center text-[color:var(--cat)]">
                  <i className={`${step.icon} text-lg`} />
                </span>
                <div>
                  <p className="flex items-center gap-2 text-sm md:text-base font-semibold text-foreground-950">
                    <span className="font-label text-[10px] tracking-[0.18em] text-foreground-400">
                      {step.no}
                    </span>
                    <span className="ko">{step.title}</span>
                  </p>
                  <p className="mt-1 text-xs md:text-sm leading-relaxed text-foreground-600">
                    <span className="ko">{step.text}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-5 border-t border-background-200 pt-4 text-xs leading-relaxed text-foreground-500">
            <span className="ko">{visitGuide.note}</span>
          </p>
        </div>
      </Reveal>
    </div>
  );
}