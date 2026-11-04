import { projects } from '@/mocks/site';

/**
 * Business areas no longer have their own pages — they open the Projects page
 * with the matching filter already selected. Areas with no projects at all
 * (Merchandising) simply land on the unfiltered ALL PROJECTS list.
 */
export function areaFilterHref(categoryId: string): string {
  const hasProjects = projects.some((project) => project.category === categoryId);
  return hasProjects ? `/projects?area=${categoryId}` : '/projects';
}