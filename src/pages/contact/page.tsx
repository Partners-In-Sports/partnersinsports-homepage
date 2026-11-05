import type { CSSProperties } from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import PageHero from '@/components/feature/PageHero';
import Reveal from '@/components/base/Reveal';
import { sectionAccentSoft, sectionAccentText, sectionAccents } from '@/mocks/site';
import ContactDetails from './components/ContactDetails';
import ContactForm from './components/ContactForm';

export default function Contact() {
  usePageMeta({
    title: '문의 | Partners in Sports',
    description:
      '프로젝트, 파트너십, 연구 관련 문의는 온라인 문의 양식으로 보내주세요. 확인 후 신속히 답변드리겠습니다.',
    path: '/contact',
  });

  return (
    <>
      <PageHero
        index="04"
        eyebrow="Contact · 문의"
        title="Let's Talk"
        description="프로젝트, 파트너십, 연구 관련 문의는 아래 양식으로 보내주세요. 확인 후 신속히 답변드리겠습니다."
        accent={sectionAccents.contact}
      />

      <section
        id="contact"
        className="bg-background-100 border-t border-background-200"
        style={
          {
            '--cat': sectionAccents.contact,
            '--cat-soft': sectionAccentSoft.contact,
            '--cat-text': sectionAccentText.contact,
          } as CSSProperties
        }
      >
        <div className="px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <ContactDetails />
            <Reveal className="lg:col-span-7" delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}