import type { CSSProperties } from 'react';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';
import { sectionAccentSoft, sectionAccents, workCategories } from '@/mocks/site';
import { areaFilterHref } from '@/utils/projectLinks';
import ProjectCard from '@/components/feature/ProjectCard';

interface ProjectItem {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  image: string;
  slug?: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
  imageAlt?: string;
  badgeCorner?: boolean;
  static?: boolean;
  year?: string;
  client?: string;
  summary?: string;
  caption?: string;
}

interface ProjectsListingProps {
  items: ProjectItem[];
  showFilters?: boolean;
}

export default function ProjectsListing({ items, showFilters = true }: ProjectsListingProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const availableCategories = useMemo(
    () => workCategories.filter((category) => items.some((project) => project.category === category.id)),
    [items],
  );

  // The active area lives in the URL (?area=research) so links elsewhere on the
  // site can open this list with a filter already switched on.
  const requestedArea = searchParams.get('area') ?? 'all';
  const active = availableCategories.some((category) => category.id === requestedArea)
    ? requestedArea
    : 'all';

  const setActive = (next: string) => {
    if (next === 'all') {
      setSearchParams({}, { replace: true });
      return;
    }
    setSearchParams({ area: next }, { replace: true });
  };

  const filtered = useMemo(
    () => (active === 'all' ? items : items.filter((project) => project.category === active)),
    [active, items],
  );

  return (
    <div
      className="px-4 md:px-8 pb-20 md:pb-28"
      style={{ '--cat': sectionAccents.work, '--cat-soft': sectionAccentSoft.work } as CSSProperties}
    >
      <div className="w-full">
        {showFilters && availableCategories.length > 1 && (
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <button
                type="button"
                onClick={() => setActive('all')}
                className={`rounded-full px-4 py-2 font-label text-[11px] tracking-[0.14em] uppercase whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                  active === 'all'
                    ? 'bg-foreground-950 text-background-50'
                    : 'border border-background-300 text-foreground-600 hover:border-foreground-950 hover:text-foreground-950'
                }`}
              >
                All Projects
              </button>
              {availableCategories.map((category) => {
                const isActive = active === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActive(category.id)}
                    className={`rounded-full px-4 py-2 font-label text-[11px] tracking-[0.14em] uppercase whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? 'text-background-50'
                        : 'border border-background-300 text-foreground-600 hover:text-foreground-950'
                    }`}
                    style={isActive ? { backgroundColor: 'var(--cat)' } : undefined}
                  >
                    {category.name}
                  </button>
                );
              })}
              <span className="ml-auto font-label text-xs tracking-[0.2em] uppercase text-foreground-500 whitespace-nowrap">
                {String(filtered.length).padStart(2, '0')} entries
              </span>
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((project, index) => {
            const to = project.static
              ? undefined
              : project.slug
                ? `/projects/${project.slug}`
                : areaFilterHref(project.category);

            return (
              <Reveal key={project.id} delay={(index % 3) * 70} className="h-full">
                <ProjectCard
                  to={to}
                  categoryLabel={project.categoryLabel}
                  year={project.year}
                  title={project.title}
                  client={project.client}
                  summary={project.summary}
                  caption={project.caption}
                  image={project.image}
                  imageFit={project.imageFit}
                  imagePosition={project.imagePosition}
                  imageAlt={project.imageAlt}
                  badgeCorner={project.badgeCorner}
                />
              </Reveal>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-sm text-foreground-500">
            아직 등록된 내용이 없습니다. 준비 중입니다.
          </p>
        )}
      </div>
    </div>
  );
}