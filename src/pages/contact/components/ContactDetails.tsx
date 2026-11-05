import Reveal from '@/components/base/Reveal';
import { companyInfo } from '@/mocks/site';
import LocationMap from './LocationMap';

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
    label: '문의접수',
    value: '오른쪽 문의양식으로 접수',
  },
];

/**
 * Contact page side column.
 * Company summary card. Every item uses the same single-line pattern:
 * a small muted "라벨." followed by a larger bold value.
 * The street address is not printed as text anywhere on the page.
 */
export default function ContactDetails() {
  return (
    <div className="lg:col-span-5">
      <Reveal className="h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-lg border border-background-200 bg-background-50">
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
              <li key={detail.id} className="flex items-center gap-4 px-5 py-5 md:px-6">
                <span
                  className="w-10 h-10 shrink-0 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: 'var(--cat-soft)', color: 'var(--cat-text)' }}
                >
                  <i className={`${detail.icon} text-lg`} />
                </span>
                <p className="flex min-w-0 flex-wrap items-center gap-x-1.5 font-label text-sm leading-snug text-foreground-600">
                  <span className="ko whitespace-nowrap">{detail.label}</span>
                  <span aria-hidden="true">·</span>
                  <span className="ko font-medium">
                    {detail.value}
                  </span>
                </p>
              </li>
            ))}
          </ul>

          <LocationMap />
        </div>
      </Reveal>
    </div>
  );
}