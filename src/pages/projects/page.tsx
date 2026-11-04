import PageHero from '@/components/feature/PageHero';
import CtaBand from '@/components/feature/CtaBand';
import { projects } from '@/content/projects';
import { sectionAccents } from '@/mocks/site';
import ProjectsListing from './components/ProjectsListing';

export default function ProjectsIndex() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Projects · 프로젝트"
        title="Our Projects"
        description="스포츠 산업 전반에 걸쳐 파트너스인스포츠가 수행한 프로젝트와 파트너십을 소개합니다."
        accent={sectionAccents.work}
      />

      <section className="bg-background-50">
        <div className="px-4 md:px-8 pt-14 md:pt-20 pb-6 flex items-end justify-between gap-6">
          <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-foreground-950">
            All Projects
          </h2>
        </div>
        <ProjectsListing items={projects} />
      </section>

      <CtaBand
        title="Looking for something specific?"
        text="관심 있는 분야의 프로젝트나 협업 제안이 있으시면 언제든 연락 주세요."
      />
    </>
  );
}