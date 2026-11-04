import { Link, Navigate, useParams } from 'react-router-dom';
import { workCategories } from '@/mocks/site';
import { getProjectDetail } from '@/content/projects';
import { areaFilterHref } from '@/utils/projectLinks';
import ProjectDetail from '@/components/feature/ProjectDetail';

/**
 * /projects/:slug is shared by two kinds of URLs:
 * - a business-area slug (research, events, …) → redirected to the Projects page
 *   with that area filter switched on. These pages no longer exist.
 * - a project slug (dogsports-2025, …) → that project's detail screen
 */
export default function ProjectSlugRoute() {
  const { slug } = useParams();
  const detail = getProjectDetail(slug);

  if (detail) {
    return <ProjectDetail data={detail} />;
  }

  const category = workCategories.find((item) => item.slug === slug);

  if (category) {
    return <Navigate to={areaFilterHref(category.id)} replace />;
  }

  return (
    <section className="bg-background-50 pt-[68px] md:pt-[76px] min-h-screen">
      <div className="px-4 md:px-8 py-24 md:py-32">
        <h1 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-foreground-950">
          Project not found
        </h1>
        <p className="mt-4 text-sm md:text-base text-foreground-600 max-w-xl">
          찾으시는 프로젝트를 확인해 주세요.
        </p>
        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-background-300 px-6 py-3 text-sm font-label text-foreground-950 whitespace-nowrap cursor-pointer transition-colors hover:border-foreground-950"
        >
          <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center" />
          프로젝트 목록
        </Link>
      </div>
    </section>
  );
}