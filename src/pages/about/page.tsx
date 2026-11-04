import PageHero from '@/components/feature/PageHero';
import CtaBand from '@/components/feature/CtaBand';
import { sectionAccents, sectionAccentText } from '@/mocks/site';
import AboutIntro from './components/AboutIntro';
import AboutPillars from './components/AboutPillars';

export default function About() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="About · 회사소개"
        title="About Partners in Sports"
        accent={sectionAccents.about}
        indexAccent={sectionAccentText.about}
        titleClassName="text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-none lg:whitespace-nowrap"
      />

      <AboutIntro />
      <AboutPillars />

      <CtaBand
        title="Let's build something together"
        text="스포츠 산업에서 함께 만들어 갈 프로젝트가 있다면 언제든 연락 주세요."
      />
    </>
  );
}