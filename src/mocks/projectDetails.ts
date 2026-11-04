// Per-project detail data. One entry can be reused by the shared detail view,
// so adding a new project with a detail screen only needs a record here.

// Uploaded image files live in public/uploads. The folder is resolved against the
// deployment base path (__BASE_PATH__) so the same build keeps working when the
// site is served from "/" or from a sub-path.
const uploadsBase = `${__BASE_PATH__.replace(/\/+$/, '')}/uploads/`;

const chungcheongOverview = [
  {
    label: '대회명',
    value: '2027 충청 세계대학경기대회 (FISU World University Games Summer)',
  },
  { label: '일시', value: '2027.08.01 ~ 08.12' },
  { label: '개최지', value: '충청권 4개 시도 (대전·세종·충북·충남)' },
  {
    label: '주최·주관',
    value: '국제대학스포츠연맹(FISU), 2027 충청 하계세계대학경기대회 조직위원회',
  },
  { label: '규모', value: '150개국 15,000여 명' },
];

const chungcheongLogo =
  `${uploadsBase}project-chungcheong-2027-logo.webp`;

// 경기운영계획 수립 — 5 posters, in the supplied order.
const chungcheongOperationsGallery = [
  {
    src: `${uploadsBase}project-chungcheong-2027-poster-athletes.webp`,
    alt: '2027 충청 세계대학경기대회 운동선수 포스터',
  },
  {
    src: `${uploadsBase}project-chungcheong-2027-poster-mascot.webp`,
    alt: '2027 충청 세계대학경기대회 호랑이 마스코트 포스터',
  },
  {
    src: `${uploadsBase}project-chungcheong-2027-keyvisual-wide.webp`,
    alt: '2027 충청 세계대학경기대회 가로형 키비주얼',
  },
  {
    src: `${uploadsBase}project-chungcheong-2027-poster-operations-swimming.webp`,
    alt: '2027 충청 세계대학경기대회 수영 종목 경기운영 포스터',
  },
  {
    src: `${uploadsBase}project-chungcheong-2027-poster-operations-athletics.webp`,
    alt: '2027 충청 세계대학경기대회 육상 종목 경기운영 포스터',
  },
];

// 마케팅플랜 수립 — 2 posters.
const chungcheongMarketingGallery = [
  {
    src: `${uploadsBase}project-chungcheong-2027-poster-marketing-cover.webp`,
    alt: '2027 충청 세계대학경기대회 마케팅플랜 포스터 표지',
  },
  {
    src: `${uploadsBase}project-chungcheong-2027-poster-marketing-title.webp`,
    alt: '2027 충청 세계대학경기대회 마케팅플랜 타이틀 포스터',
  },
];

// 라이선스 종합계획 수립 — single poster, no arrows or counter.
const chungcheongLicensingGallery = [
  {
    src: `${uploadsBase}project-chungcheong-2027-poster-license-cover.webp`,
    alt: '2027 충청 세계대학경기대회 라이선스 종합계획 포스터 표지',
  },
];

const gangwonOverview = [
  { label: '대회명', value: '2024 강원 동계청소년올림픽대회' },
  { label: '일시', value: '2024.01.19 ~ 02.01' },
  { label: '장소', value: '평창, 강릉, 정선, 횡성' },
  { label: '규모', value: '80여 개국 1,900명 선수' },
];

const gangwonLogo =
  `${uploadsBase}project-gangwon-2024-logo.webp`;

// 강원 2024 관련 두 프로젝트가 함께 쓰는 갤러리 — 4장, 지정된 순서.
// 공유 데이터이므로 한 번만 고치면 두 상세 페이지에 동시에 반영된다.
const gangwonGallery = [
  {
    src: `${uploadsBase}project-gangwon-2024-marketing-cover.webp`,
    alt: '2024 강원 동계청소년올림픽대회 마케팅 종합계획 표지',
  },
  {
    src: `${uploadsBase}project-gangwon-2024-poster-festival.webp`,
    alt: '2024 강원 동계청소년올림픽대회 페스티벌 포스터',
  },
  {
    src: `${uploadsBase}project-gangwon-2024-poster-mascot.webp`,
    alt: '2024 강원 동계청소년올림픽대회 뭉초 마스코트 포스터',
  },
  {
    src: `${uploadsBase}project-gangwon-2024-poster-ticket.webp`,
    alt: '2024 강원 동계청소년올림픽대회 경기티켓 무료예매 포스터',
  },
];

// 2024 강원YOG 마케팅 모델 연구 — 표지 없이 포스터 3장만 사용.
const gangwonYogModelGallery = [
  {
    src: `${uploadsBase}project-gangwon-2024-poster-festival.webp`,
    alt: '2024 강원 동계청소년올림픽대회 페스티벌 포스터',
  },
  {
    src: `${uploadsBase}project-gangwon-2024-poster-mascot.webp`,
    alt: '2024 강원 동계청소년올림픽대회 뭉초 마스코트 포스터',
  },
  {
    src: `${uploadsBase}project-gangwon-2024-poster-ticket.webp`,
    alt: '2024 강원 동계청소년올림픽대회 경기티켓 무료예매 포스터',
  },
];

const tennesseePartnerLogo =
  `${uploadsBase}partner-tennessee-logo.webp`;

const shenandoahPartnerLogo =
  `${uploadsBase}partner-shenandoah-logo.webp`;

export const projectDetails = {
  'kbf-i-league-2025': {
    slug: 'kbf-i-league-2025',
    label: 'Research Projects · 연구 프로젝트',
    title: '2025 KBF i-League 연구용역',
    gallery: [
      {
        src: `${uploadsBase}project-kbf-ileague-2025-report-01.webp`,
        alt: '2025 KBF i-League 연구용역 결과보고서 표지',
      },
      {
        src: `${uploadsBase}project-kbf-ileague-2025-report-02.webp`,
        alt: '2025 KBF i-League 연구용역 보고서 목차',
      },
    ],
    overviewTitle: '사업 개요',
    overview: [
      { label: '사업명', value: '2025 KBF i-League 연구용역' },
      { label: '발주', value: '대한당구연맹(KBF)' },
      { label: '시기', value: '2025.12' },
      { label: '보고서 구성', value: '설문 개요 / IPA 분석 결과 / 결론 및 제언' },
    ],
    tasksTitle: '주요 업무',
    tasks: ['대한당구연맹 i-League에 대한 IPA 조사'],
    contactLabel: '문의하기',
  },
  'kbf-sponsorship-2025': {
    slug: 'kbf-sponsorship-2025',
    label: 'Research Projects · 연구 프로젝트',
    title: 'SOOP의 대한당구연맹 스폰서십 효과 분석',
    gallery: [
      {
        src: `${uploadsBase}project-kbf-sponsorship-2025-report-01.webp`,
        alt: 'SOOP의 대한당구연맹 스폰서십 효과 분석 보고서 표지',
      },
      {
        src: `${uploadsBase}project-kbf-sponsorship-2025-report-02.webp`,
        alt: 'SOOP의 대한당구연맹 스폰서십 효과 분석 보고서 목차',
      },
    ],
    overviewTitle: '사업 개요',
    overview: [
      { label: '사업명', value: 'SOOP의 대한당구연맹 스폰서십 효과 분석' },
      { label: '발주', value: '대한당구연맹(KBF)' },
      { label: '시기', value: '2025.12' },
      {
        label: '보고서 구성',
        value: '전략적/비재무적 가치 분석 / 미디어 노출 효과 분석 / 결론 / Appendix',
      },
    ],
    tasksTitle: '주요 업무',
    tasks: ['대한당구연맹 후원사 SOOP의 스폰서십 프로그램 참여 효과 분석'],
    contactLabel: '문의하기',
  },
  'pis-swimming-2026': {
    slug: 'pis-swimming-2026',
    label: 'Sporting Events · 스포츠 이벤트',
    title: '2026 PIS 전국 마스터즈 1,500m 수영대회',
    gallery: [
      {
        src: `${uploadsBase}project-pis-swimming-2026-poster-01.webp`,
        alt: '2026 PIS 전국 마스터즈 1,500m 수영대회 포스터 1',
      },
      {
        src: `${uploadsBase}project-pis-swimming-2026-poster-02.webp`,
        alt: '2026 PIS 전국 마스터즈 1,500m 수영대회 포스터 2',
      },
    ],
    overviewTitle: '대회 개요',
    overview: [
      { label: '대회명', value: '2026 PIS 전국 마스터즈 1,500m 수영대회' },
      { label: '일시', value: '2026.02.22(일)' },
      { label: '장소', value: '잠실종합운동장 제1수영장' },
      { label: '주최', value: '㈜파트너스인스포츠' },
      { label: '협력', value: '서울특별시수영연맹' },
    ],
    tasksTitle: '주요 업무',
    tasks: ['대회 기획 및 운영'],
    contactLabel: '문의하기',
  },
  'dogsports-2025': {
    slug: 'dogsports-2025',
    label: 'Sporting Events · 스포츠 이벤트',
    title: '2025 서울시 도그스포츠 대회 계시계측',
    poster:
      `${uploadsBase}project-dogsports-2025-poster.webp`,
    posterAlt: '2025 서울시 도그스포츠 대회 포스터',
    overviewTitle: '대회 개요',
    overview: [
      { label: '대회명', value: '제1회 서울시 도그스포츠 대회' },
      { label: '일시', value: '2025.09.20(토) ~ 09.21(일), 2일간' },
      { label: '장소', value: '월드컵공원 평화광장' },
      { label: '주최', value: '서울특별시' },
      { label: '주관', value: '㈜케이씨엠씨문화원' },
      {
        label: '주요 프로그램',
        value:
          '어질리티 대회, 반려견 학생훈련대회, 캐니크로스·캐니워킹, 견공올림픽, 강의·체험 부스',
      },
    ],
    tasksTitle: '주요 업무',
    tasks: ['경기 기록 계시·계측'],
    contactLabel: '문의하기',
  },
  'chungcheong-2027-operations': {
    slug: 'chungcheong-2027-operations',
    label: 'Research Projects · 연구 프로젝트',
    title: '2027 충청 세계대학경기대회 경기운영계획 수립',
    logo: chungcheongLogo,
    logoAlt: '2027 충청 세계대학경기대회 엠블럼',
    gallery: chungcheongOperationsGallery,
    overviewTitle: '대회 개요',
    overview: chungcheongOverview,
    tasksTitle: '주요 업무',
    tasks: ['경기운영계획 수립'],
    contactLabel: '문의하기',
  },
  'chungcheong-2027-marketing': {
    slug: 'chungcheong-2027-marketing',
    label: 'Research Projects · 연구 프로젝트',
    title: '2027 충청 세계대학경기대회 마케팅플랜 수립',
    logo: chungcheongLogo,
    logoAlt: '2027 충청 세계대학경기대회 엠블럼',
    gallery: chungcheongMarketingGallery,
    overviewTitle: '대회 개요',
    overview: chungcheongOverview,
    tasksTitle: '주요 업무',
    tasks: ['마케팅플랜 수립'],
    contactLabel: '문의하기',
  },
  'chungcheong-2027-licensing': {
    slug: 'chungcheong-2027-licensing',
    label: 'Research Projects · 연구 프로젝트',
    title: '2027 충청 세계대학경기대회 라이선스 종합계획 수립',
    logo: chungcheongLogo,
    logoAlt: '2027 충청 세계대학경기대회 엠블럼',
    gallery: chungcheongLicensingGallery,
    overviewTitle: '대회 개요',
    overview: chungcheongOverview,
    tasksTitle: '주요 업무',
    tasks: ['라이선스 종합계획 수립'],
    contactLabel: '문의하기',
  },
  'gangwon-2024-marketing-plan': {
    slug: 'gangwon-2024-marketing-plan',
    label: 'Research Projects · 연구 프로젝트',
    title: '2024 강원 동계청소년올림픽대회 마케팅 종합계획 수립',
    logo: gangwonLogo,
    logoAlt: '2024 강원 동계청소년올림픽대회 로고',
    gallery: gangwonGallery,
    galleryThumbnails: true,
    overviewTitle: '대회 개요',
    overview: gangwonOverview,
    tasksTitle: '주요 업무',
    tasks: ['2024 강원 동계청소년올림픽대회 마케팅 종합계획 수립'],
    contactLabel: '문의하기',
  },
  'gangwon-yog-marketing-model': {
    slug: 'gangwon-yog-marketing-model',
    label: 'Research Projects · 연구 프로젝트',
    title: '2024 강원YOG 마케팅 모델 연구',
    logo: gangwonLogo,
    logoAlt: '2024 강원 동계청소년올림픽대회 로고',
    gallery: gangwonYogModelGallery,
    galleryThumbnails: true,
    overviewTitle: '대회 개요',
    overview: gangwonOverview,
    tasksTitle: '주요 업무',
    tasks: ['2024 강원YOG 마케팅 모델 연구'],
    contactLabel: '문의하기',
  },
  'tennessee-university': {
    slug: 'tennessee-university',
    label: 'Global Partnerships · 글로벌 파트너십',
    title: 'University of Tennessee (USA)',
    logo: tennesseePartnerLogo,
    logoAlt: 'University of Tennessee logo',
    overviewTitle: '파트너 개요',
    overview: [],
    tasksTitle: '주요 업무',
    tasks: ['한-미 스포츠분야 상호 교류 및 협력'],
    contactLabel: '문의하기',
  },
  'shenandoah-university': {
    slug: 'shenandoah-university',
    label: 'Global Partnerships · 글로벌 파트너십',
    title: 'Shenandoah University (USA)',
    logo: shenandoahPartnerLogo,
    logoAlt: 'Shenandoah University logo',
    overviewTitle: '파트너 개요',
    overview: [],
    tasksTitle: '주요 업무',
    tasks: ['한-미 스포츠분야 상호 교류 및 협력'],
    contactLabel: '문의하기',
  },
};