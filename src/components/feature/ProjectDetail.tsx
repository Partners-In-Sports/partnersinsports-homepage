import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import BilingualText from '@/components/base/BilingualText';
import ProjectGallery from '@/components/feature/ProjectGallery';
import type { GalleryImage } from '@/components/feature/ProjectGallery';
import { sectionAccentSoft, sectionAccents } from '@/mocks/site';

export interface ProjectDetailData {
  slug: string;
  label: string;
  title: string;
  logo?: string;
  logoAlt?: string;
  poster?: string;
  posterAlt?: string;
  gallery?: GalleryImage[];
  galleryThumbnails?: boolean;
  overviewTitle: string;
  overview: { label: string; value: string }[];
  tasksTitle: string;
  tasks: string[];
  contactLabel: string;
}

interface ProjectDetailProps {
  data: ProjectDetailData;
}

/**
 * Shared project detail layout — reused by every project that has a detail
 * screen. All copy comes from the data record; nothing is hardcoded here.
 * Media rendering lives in the shared ProjectGallery component.
 */
export default function ProjectDetail({ data }: ProjectDetailProps) {
  const tasks = data.tasks.filter((task) => task.trim().length > 0);

  const images: GalleryImage[] =
    data.gallery && data.gallery.length > 0
      ? data.gallery
      : data.poster
        ? [{ src: data.poster, alt: data.posterAlt ?? data.title }]
        : [];

  return (
    <section
      className="bg-background-50 pt-[68px] md:pt-[76px] min-h-screen"
      style={{ '--cat': sectionAccents.work, '--cat-soft': sectionAccentSoft.work } as CSSProperties}
    >
      <div className="px-4 md:px-8 py-10 md:py-16">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-label text-[11px] tracking-[0.2em] uppercase text-foreground-500 hover:text-foreground-950 cursor-pointer transition-colors"
        >
          <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center" />
          <span className="ko">프로젝트 목록</span>
        </Link>

        <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {images.length > 0 && (
            <div className="w-full lg:sticky lg:top-[96px] lg:self-start">
              <ProjectGallery
                images={images}
                title={data.title}
                showThumbnails={data.galleryThumbnails}
              />
            </div>
          )}

          {/* 이미지가 없는 프로젝트도 사진 자리를 비워둔 채 2단 구도를 유지합니다.
              제목과 주요 업무가 다른 상세 페이지와 정확히 같은 위치에 놓입니다. */}
          {images.length === 0 && <div className="hidden lg:block" aria-hidden="true" />}

          <div className="w-full">
            <span className="inline-flex items-center gap-3 font-label text-[11px] tracking-[0.28em] uppercase text-foreground-500">
              <span className="w-6 h-px" style={{ backgroundColor: 'var(--cat)' }} />
              <BilingualText text={data.label} />
            </span>

            {data.logo && (
              <img
                src={data.logo}
                alt={data.logoAlt ?? `${data.title} 로고`}
                title={`${data.title} — Partners in Sports`}
                className="mt-6 h-10 md:h-12 w-auto max-w-[160px] object-contain"
              />
            )}

            <h1 className="mt-4 font-heading text-2xl md:text-4xl font-bold tracking-tight leading-snug text-foreground-950">
              <span className="ko">{data.title}</span>
            </h1>

            {data.overview.length > 0 && (
            <div className="mt-8 md:mt-10 border-t border-background-300 pt-6">
              <h2 className="font-label text-[11px] tracking-[0.24em] uppercase text-foreground-500">
                <span className="ko">{data.overviewTitle}</span>
              </h2>
              <dl className="mt-5 flex flex-col gap-3 md:gap-3.5">
                {data.overview.map((row) => (
                  <div key={row.label} className="grid grid-cols-[80px_1fr] md:grid-cols-[110px_1fr] gap-x-3 md:gap-x-5">
                    <dt className="text-xs md:text-sm leading-relaxed text-foreground-500">
                      <span className="ko">{row.label}</span>
                    </dt>
                    <dd className="text-sm md:text-base leading-relaxed text-foreground-900">
                      <span className="ko">{row.value}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            )}

            <div className="mt-8 md:mt-10 border-t border-background-300 pt-6">
              <h2 className="font-label text-[11px] tracking-[0.24em] uppercase text-foreground-500">
                <span className="ko">{data.tasksTitle}</span>
              </h2>
              <ul className="mt-5 flex flex-col gap-2.5">
                {tasks.map((task) => (
                  <li key={task} className="flex items-start gap-3 text-sm md:text-base leading-relaxed text-foreground-900">
                    <span
                      className="mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: 'var(--cat)' }}
                    />
                    <span className="ko">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-foreground-950 px-6 py-3 font-label text-[11px] tracking-[0.18em] uppercase text-background-50 whitespace-nowrap cursor-pointer transition-colors hover:bg-primary-700"
            >
              <span className="ko">{data.contactLabel}</span>
              <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}