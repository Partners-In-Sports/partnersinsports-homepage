/**
 * Project data loader.
 *
 * Every project lives in its own JSON file inside this folder
 * (src/content/projects/<slug>.json). The files are picked up automatically at
 * build time, so adding a new JSON file is enough to create the card on the
 * Projects list and its detail screen — no other code has to be touched.
 *
 * The admin screen (/admin, Decap CMS) writes to exactly these files.
 */

export interface ProjectOverviewRow {
  label: string;
  value: string;
}

export interface ProjectGalleryItem {
  image: string;
  alt: string;
}

/** Shape of one JSON file, as edited in the admin screen. */
interface ProjectFile {
  title: string;
  slug: string;
  category: string;
  cardLabel?: string;
  cardType?: 'A' | 'B' | string;
  order?: number;
  cardImage?: string;
  cardImageFit?: 'cover' | 'contain' | string;
  cardImagePosition?: string;
  cardImageAlt?: string;
  badgeCorner?: boolean;
  label?: string;
  logoImage?: string;
  logoAlt?: string;
  posterImage?: string;
  posterAlt?: string;
  gallery?: ProjectGalleryItem[];
  galleryThumbnails?: boolean;
  overviewTitle?: string;
  overview?: ProjectOverviewRow[];
  tasksTitle?: string;
  tasks?: string[];
  contactLabel?: string;
}

export interface ProjectCardItem {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  image: string;
  slug?: string;
  imageFit: 'cover' | 'contain';
  imagePosition: string;
  imageAlt?: string;
  badgeCorner: boolean;
  /** B형 (로고만) cards are not clickable and have no detail screen. */
  static: boolean;
}

export interface ProjectDetailItem {
  slug: string;
  label: string;
  title: string;
  logo?: string;
  logoAlt?: string;
  poster?: string;
  posterAlt?: string;
  gallery: { src: string; alt: string }[];
  galleryThumbnails: boolean;
  overviewTitle: string;
  overview: ProjectOverviewRow[];
  tasksTitle: string;
  tasks: string[];
  contactLabel: string;
}

// Uploaded files live in public/uploads. The folder is resolved against the
// deployment base path (__BASE_PATH__) so the same build works on "/" and on a
// repository sub-path.
const uploadsBase = `${__BASE_PATH__.replace(/\/+$/, '')}/uploads/`;

/** Turns "/uploads/file.webp" (as written by the admin screen) into a URL that
 *  respects the deployment base path. Absolute URLs are left untouched. */
export function resolveUpload(path?: string): string {
  const value = (path ?? '').trim();
  if (!value) return '';
  if (/^(https?:)?\/\//i.test(value) || value.startsWith('data:')) return value;
  if (value.startsWith('/uploads/')) return `${uploadsBase}${value.replace(/^\/uploads\//, '')}`;
  return value;
}

const defaultCategoryLabels: Record<string, string> = {
  research: 'Research Projects',
  events: 'Sporting Events',
  global: 'Global Partnerships',
  merchandising: 'Merchandising',
};

const defaultDetailLabels: Record<string, string> = {
  research: 'Research Projects · 연구 프로젝트',
  events: 'Sporting Events · 스포츠 이벤트',
  global: 'Global Partnerships · 글로벌 파트너십',
  merchandising: 'Merchandising · 머천다이징',
};

const projectFiles = import.meta.glob('./*.json', { eager: true });

const records: ProjectFile[] = Object.values(projectFiles)
  .map((module) => ((module as { default?: ProjectFile }).default ?? module) as ProjectFile)
  .filter((record): record is ProjectFile => Boolean(record && record.slug && record.title))
  // `order` decides the position on the Projects list; files without it go last.
  .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));

const isClickable = (record: ProjectFile) => (record.cardType ?? 'A') !== 'B';

/** Card list shown on /projects, on the home page counters, and in the filters. */
export const projects: ProjectCardItem[] = records.map((record) => {
  const clickable = isClickable(record);
  return {
    id: record.slug,
    category: record.category,
    categoryLabel: record.cardLabel || defaultCategoryLabels[record.category] || record.category,
    title: record.title,
    image: resolveUpload(record.cardImage),
    slug: clickable ? record.slug : undefined,
    imageFit: record.cardImageFit === 'contain' ? 'contain' : 'cover',
    imagePosition: record.cardImagePosition || 'center top',
    imageAlt: record.cardImageAlt?.trim() ? record.cardImageAlt : undefined,
    badgeCorner: Boolean(record.badgeCorner),
    static: !clickable,
  };
});

/** Detail screens, keyed by slug. Only A형 (clickable) projects get one. */
export const projectDetails: Record<string, ProjectDetailItem> = records.reduce(
  (acc, record) => {
    if (!isClickable(record)) return acc;

    acc[record.slug] = {
      slug: record.slug,
      label: record.label || defaultDetailLabels[record.category] || record.category,
      title: record.title,
      logo: resolveUpload(record.logoImage) || undefined,
      logoAlt: record.logoAlt?.trim() ? record.logoAlt : undefined,
      poster: resolveUpload(record.posterImage) || undefined,
      posterAlt: record.posterAlt?.trim() ? record.posterAlt : undefined,
      gallery: (record.gallery ?? [])
        .filter((item) => item && item.image)
        .map((item) => ({
          src: resolveUpload(item.image),
          alt: item.alt?.trim() ? item.alt : record.title,
        })),
      galleryThumbnails: Boolean(record.galleryThumbnails),
      overviewTitle: record.overviewTitle || '대회 개요',
      overview: (record.overview ?? []).filter(
        (row) => row && (row.label?.trim() || row.value?.trim()),
      ),
      tasksTitle: record.tasksTitle || '주요 업무',
      tasks: (record.tasks ?? []).filter((task) => typeof task === 'string' && task.trim()),
      contactLabel: record.contactLabel || '문의하기',
    };

    return acc;
  },
  {} as Record<string, ProjectDetailItem>,
);

export function getProjectDetail(slug?: string): ProjectDetailItem | undefined {
  if (!slug) return undefined;
  return projectDetails[slug];
}