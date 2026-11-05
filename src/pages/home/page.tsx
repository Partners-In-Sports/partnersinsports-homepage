import { usePageMeta } from '@/hooks/usePageMeta';
import Hero from './components/Hero';
import WorkExplorer from './components/WorkExplorer';
import AboutProjectsNav from './components/AboutProjectsNav';

export default function Home() {
  usePageMeta({
    title: 'Partners in Sports | 스포츠 비즈니스 & 컨설팅',
    description:
      '리서치·전략, 스포츠 이벤트, 글로벌 파트너십, 머천다이징 전반에서 활동하는 스포츠 비즈니스 전문 기업입니다.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <WorkExplorer />
      <AboutProjectsNav />
    </>
  );
}