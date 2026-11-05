import { Link } from 'react-router-dom';
import { brandColors, companyInfo, footerLegalLinks, navLinks, workCategories } from '@/mocks/site';
import { areaFilterHref } from '@/utils/projectLinks';
import BrandMark from './BrandMark';

// The four brand colours, always in the fixed sequence:
// yellow → green → red → blue.
// The logo's black is intentionally left out of the stripe; the logo itself is untouched.
const brandBar = [
  brandColors.yellow,
  brandColors.green,
  brandColors.red,
  brandColors.cyan,
];

export default function Footer() {
  return (
    <footer className="bg-background-100 border-t border-background-200">
      <div className="h-1 w-full flex" aria-hidden="true">
        {brandBar.map((color) => (
          <span key={color} className="flex-1 h-full" style={{ backgroundColor: color }} />
        ))}
      </div>

      <div className="px-4 md:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-background-200">
          <div className="lg:col-span-4">
            <BrandMark />
            <p className="mt-6 font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground-950 uppercase">
              {companyInfo.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground-600 max-w-sm">
              다양한 국제대회와 스포츠 현장 경험을 바탕으로 스포츠단체, 기업, 운동선수의 성공을 돕는
              최고의 파트너가 되겠습니다.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-label text-[11px] tracking-[0.18em] uppercase text-foreground-500 mb-5">
              Menu
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-label text-[11px] tracking-[0.18em] uppercase text-foreground-500 mb-5">
              Business
            </h4>
            <ul className="space-y-3">
              {workCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={areaFilterHref(category.id)}
                    className="text-sm text-foreground-700 hover:text-foreground-950 transition-colors cursor-pointer"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-label text-[11px] tracking-[0.18em] uppercase text-foreground-500 mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-foreground-700">
              <li>회사명 : {companyInfo.name}</li>
              <li>대표자 : {companyInfo.ceo}</li>
              <li>
                <Link to="/contact" className="hover:text-foreground-950 transition-colors cursor-pointer">
                  방문·협업 문의 : 문의 양식으로 접수
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-xs text-foreground-600 hover:text-foreground-950 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs text-foreground-500">
            COPYRIGHT (c) {companyInfo.name} ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}