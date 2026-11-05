// Uploaded image files live in public/uploads. The folder is resolved against the
// deployment base path (__BASE_PATH__) so the same build keeps working when the
// site is served from "/" or from a sub-path.
const uploadsBase = `${__BASE_PATH__.replace(/\/+$/, '')}/uploads/`;

// Official Partners in Sports logo colours — one shared source of truth used
// by both the navigation and the business-category interactions.
// Order (used wherever the colours appear as a sequence):
// YELLOW → GREEN → RED → BLUE/CYAN (the footer stripe uses these four only)
export const brandColors = {
  yellow: '#F4C400',
  green: '#00954B',
  red: '#E4002B',
  cyan: '#15A8E0',
  ink: '#1C1B19',
};

// Readable "deep gold" — the same yellow family, darkened just enough to sit as
// text or an icon on a light surface where the bright logo yellow would not read.
export const brandYellowDeep = '#A87F00';

// Every top-level menu item carries one logo colour and now leads to its own
// dedicated page. The colour stays quiet in a neutral resting state, then drives
// the nav underline on hover and while that page is active. One colour = one page.
export const navLinks = [
  { label: 'About', to: '/about', accent: brandColors.yellow },
  { label: 'Projects', to: '/projects', accent: brandColors.green },
  { label: 'Business', to: '/business', accent: brandColors.red },
  { label: 'Contact', to: '/contact', accent: brandColors.ink },
];

// Section eyebrow labels reuse the colour of the menu item they belong to, so
// the same brand colour follows the visitor down the page.
export const sectionAccents = {
  work: brandColors.green,
  featured: brandColors.green,
  about: brandColors.yellow,
  business: brandColors.red,
  contact: brandColors.ink,
};

// Text-safe variant of each section accent, used only where the accent colours
// text or an icon sitting on a light surface. Identical to the brand colour for
// every colour except yellow, which needs the readable deep gold to stay legible.
export const sectionAccentText = {
  work: brandColors.green,
  featured: brandColors.green,
  about: brandYellowDeep,
  business: brandColors.red,
  contact: brandColors.ink,
};

// Soft tint of each section accent. Used for hover washes and icon bubbles so a
// section can show its one brand colour at different strengths — never several
// brand colours at once.
export const sectionAccentSoft = {
  work: 'rgba(0, 149, 75, 0.14)',
  featured: 'rgba(0, 149, 75, 0.14)',
  about: 'rgba(244, 196, 0, 0.18)',
  business: 'rgba(228, 0, 43, 0.14)',
  contact: 'rgba(28, 27, 25, 0.08)',
};

// Registered company information — supplied by Partners in Sports and displayed
// in Korean throughout the site. Nothing here is invented.
// NOTE: street address and phone number are intentionally not kept here — the
// company asked to keep them off the public site. Visitors reach the company
// through the contact form instead.
export const companyInfo = {
  name: '(주)파트너스인스포츠',
  nameEn: 'Partners in Sports',
  nameKo: '(주)파트너스인스포츠',
  tagline: 'Your Best Partner',
  ceo: '최원일',
};

// How a visit is arranged. No street address is shown — the exact location is
// shared after the visit request is confirmed.
export const visitGuide = {
  eyebrow: 'Visit · 방문 안내',
  title: '방문 방법',
  steps: [
    {
      no: '01',
      icon: 'ri-mail-send-line',
      title: '방문 요청',
      text: '문의 양식으로 방문 목적과 희망 일정을 남겨주세요.',
    },
    {
      no: '02',
      icon: 'ri-calendar-check-line',
      title: '일정 조율',
      text: '담당자가 확인 후 가능한 일정을 안내드립니다.',
    },
    {
      no: '03',
      icon: 'ri-map-pin-line',
      title: '방문 안내',
      text: '확정된 일정과 함께 상세 위치를 개별 안내드립니다.',
    },
  ],
  note: '방문은 사전 요청제로 운영되며, 상세 위치는 일정 확정 후 안내드립니다.',
};

// Footer legal navigation — all destinations live inside this site.
export const footerLegalLinks = [
  { label: '홈', to: '/' },
  { label: '회사소개', to: '/about' },
  { label: '개인정보처리방침', to: '/privacy' },
];

// Official logo artwork supplied by the client (vector, full colour — four-colour
// pinwheel + charcoal wordmark). The horizontal lockup is 303.66 x 77.92, so it
// is always sized by height and the width follows the intrinsic ratio.
export const logoAsset = {
  src: `${uploadsBase}logo-main.svg`,
  alt: 'Partners in Sports logo',
  width: 303.66,
  height: 77.92,
};

export const heroContent = {
  eyebrow: 'Sports Business & Consulting · Seoul',
  brand: 'Partners in Sports',
  title: 'Your Best Partner',
  statement: 'Success happens when preparation meets opportunity.',
  intro:
    '리서치·전략, 스포츠 이벤트, 글로벌 파트너십, 머천다이징 전반에서 활동하는 스포츠 비즈니스 전문 기업입니다.',
};

export const heroBackgrounds = [
  {
    id: 'hero-1',
    image:
      `${uploadsBase}hero-baseball-stadium.webp`,
    alt: 'Floodlit baseball stadium at night seen from behind home plate',
    focus: 'top',
  },
  {
    id: 'hero-2',
    image:
      `${uploadsBase}hero-basketball-arena.webp`,
    alt: 'Indoor basketball arena during a game with players on court',
    focus: 'bottom',
  },
  {
    id: 'hero-3',
    image:
      `${uploadsBase}hero-swimming-pool.webp`,
    alt: 'Underwater view of a swimming pool with lane ropes and light ripples',
    focus: 'top',
  },
];

export const heroMarquee = [
  'Research Projects',
  'Sporting Events',
  'Global Partnerships',
  'Merchandising',
];

export const workIntro = {
  eyebrow: 'Selected work · 주요 프로젝트',
  title: 'Our Work',
  description: '스포츠 산업 전반에서 수행한 프로젝트를 소개합니다.',
};

// Four core business areas. Each one is an interactive gateway into its own
// portfolio listing. `accent` / `accentSoft` come from the official logo colours.
export const workCategories = [
  {
    id: 'research',
    slug: 'research',
    no: '01',
    name: 'Research Projects',
    entryNoun: 'Projects',
    icon: 'ri-line-chart-line',
    short: '스포츠 분야 연구 프로젝트 수행\n데이터 분석 기반 전략 수립 및 인사이트 제공',
    description:
      '스포츠 분야 연구 프로젝트 수행, 데이터 분석 기반 전략 수립 및 인사이트 제공',
    points: ['스포츠 산업 연구', '마케팅 연구', '데이터 분석', '전략·인사이트'],
    accent: brandColors.yellow,
    accentSoft: 'rgba(244, 196, 0, 0.18)',
    image:
      `${uploadsBase}work-research.jpg`,
  },
  {
    id: 'events',
    slug: 'events',
    no: '02',
    name: 'Sporting Events Consulting',
    entryNoun: 'Events',
    icon: 'ri-flag-2-line',
    short: '국내외 스포츠 이벤트 기획 및 운영',
    description: '국내외 스포츠 이벤트 기획 및 운영',
    points: ['국내외 이벤트 기획', '이벤트 운영'],
    accent: brandColors.green,
    accentSoft: 'rgba(0, 149, 75, 0.14)',
    image:
      `${uploadsBase}work-events.jpg`,
  },
  {
    id: 'global',
    slug: 'global-partnership',
    no: '03',
    name: 'Global Partnerships',
    entryNoun: 'Partners',
    icon: 'ri-earth-line',
    short: '해외 대학·기관과의 협력 및 교류 프로젝트 추진\n국제 공동 연구 및 교육 프로그램 운영',
    description:
      '해외 대학·기관과의 협력 및 교류 프로젝트 추진, 국제 공동 연구 및 교육 프로그램 운영',
    points: ['해외 대학·기관 협력', '교류 프로젝트', '국제 공동 연구', '교육 프로그램'],
    accent: brandColors.red,
    accentSoft: 'rgba(228, 0, 43, 0.14)',
    image:
      `${uploadsBase}work-global.jpg`,
  },
  {
    id: 'merchandising',
    slug: 'merchandising',
    no: '04',
    name: 'Merchandising',
    entryNoun: 'Projects',
    icon: 'ri-shopping-bag-3-line',
    short: '브랜드/캐릭터 등 IP를 활용한\n굿즈 기획·제작·판매',
    description: '브랜드/캐릭터 등 IP를 활용한 굿즈 기획·제작·판매',
    points: ['브랜드 IP', '캐릭터 IP', '굿즈 기획·제작', '판매'],
    accent: brandColors.cyan,
    accentSoft: 'rgba(21, 168, 224, 0.14)',
    image:
      `${uploadsBase}work-merch.jpg`,
  },
];

// The four core business areas explained on the dedicated BUSINESS page.
// Names and order are kept identical to the homepage and About page cards:
// Research Projects → Sporting Events Consulting → Global Partnerships →
// Merchandising.
export const businessAreas = [
  {
    id: 'research',
    no: '01',
    icon: 'ri-line-chart-line',
    name: 'Research Projects',
    slug: 'research',
    description:
      '스포츠 산업 및 마케팅 관련 연구 프로젝트를 수행하며, 데이터 분석을 기반으로 한 전략 수립과 실질적인 인사이트를 제공합니다. 이를 통해 스포츠 단체와 기업이 미래 지향적 의사결정을 할 수 있도록 돕습니다.',
  },
  {
    id: 'events',
    no: '02',
    icon: 'ri-flag-2-line',
    name: 'Sporting Events Consulting',
    slug: 'events',
    description:
      '국내외 스포츠 이벤트의 기획부터 운영까지 전 과정을 자문합니다. 스폰서십, 티켓팅, 팬 경험 전략을 종합적으로 컨설팅하여 성공적인 이벤트 실행을 지원합니다.',
  },
  {
    id: 'global',
    no: '03',
    icon: 'ri-earth-line',
    name: 'Global Partnerships',
    slug: 'global-partnership',
    description:
      '국제 스포츠 단체 및 기관과의 네트워크를 적극적으로 구축하며, 글로벌 파트너십 형성과 해외 진출 전략을 수립합니다. 이를 통해 스포츠 단체와 기업이 세계 무대에서 경쟁력을 확보할 수 있도록 돕습니다.\n\n또한 해외 대학 및 기관과의 협력·교류 프로젝트를 추진하고, 국제 공동 연구와 교육 프로그램을 운영합니다. 글로벌 협력 체계를 바탕으로 새로운 기회를 창출합니다.',
  },
  {
    id: 'merchandising',
    no: '04',
    icon: 'ri-shopping-bag-3-line',
    name: 'Merchandising',
    slug: 'merchandising',
    // No project records have been supplied for this area yet, so the row is
    // shown without a "프로젝트 보기" link.
    portfolio: false,
    description:
      '브랜드·캐릭터 등 IP를 활용한 굿즈 기획·제작·판매를 수행합니다.\n\nIP 라이선스 기반 상품 기획부터 제작·판매까지 전 과정을 지원하고, 스포츠단체와 기업의 상품화 전략 및 유통을 자문합니다.',
  },
];

// Project records are not kept here. Every project lives in its own JSON file
// under src/content/projects/ and is loaded from @/content/projects.
// Project records are not kept here. Every project lives in its own JSON file
// under src/content/projects/ and is loaded from @/content/projects.
export const aboutContent = {
  eyebrow: 'Who we are',
  title: 'About Partners in Sports',
  quote: 'Success happens when preparation meets opportunity.',
  paragraphs: [
    '(주)파트너스인스포츠는 다양한 국제대회 또는 스포츠 현장 경험을 갖춘 스포츠인들이 설립한 회사입니다.',
    '다양한 국제스포츠 현장경험 및 국제스포츠기관과의 강력한 네트워크를 바탕으로 스포츠단체, 기업 및 운동선수의 성공을 돕는 최고의 파트너가 될 것이며, 궁극적으로 우리나라 스포츠의 선진화에 기여하고자 합니다.',
  ],
  image:
    `${uploadsBase}about-seoul-office.jpg`,
  imageAlt: 'Partners in Sports meeting room in Seoul',
};

// The four areas Partners in Sports works across — presented on the About page
// directly below the company introduction.
export const aboutPillars = [
  {
    id: 'pillar-1',
    icon: 'ri-line-chart-line',
    title: 'Research Projects',
    text: '스포츠 산업 및 마케팅 관련 연구 프로젝트 수행\n데이터 분석 기반 전략 수립 및 인사이트 제공',
  },
  {
    id: 'pillar-2',
    icon: 'ri-flag-2-line',
    title: 'Sporting Events Consulting',
    text: '국내외 스포츠 이벤트 기획 및 운영 자문\n스폰서십·티켓팅·팬 경험 전략 컨설팅',
  },
  {
    id: 'pillar-3',
    icon: 'ri-earth-line',
    title: 'Global Partnerships',
    text: '국제 스포츠 단체 및 기관 네트워크 구축\n글로벌 파트너십 및 해외 진출 전략 수립\n해외 대학·기관 협력 및 국제 공동 연구·교육 운영',
  },
  {
    id: 'pillar-4',
    icon: 'ri-shopping-bag-3-line',
    title: 'Merchandising',
    text: '브랜드·캐릭터 등 IP 기반 굿즈 기획·제작·판매\nIP 라이선스 상품화 전략 및 유통 자문',
  },
];

// NOTE: Placeholder timeline. Dates and milestones have not been provided,
// so the entries below intentionally stay editable.
export const journeyEntries = [
  {
    id: 'journey-1',
    year: '20XX',
    title: '연혁 준비 중',
    text: '확정되는 대로 업데이트될 예정입니다.',
  },
  {
    id: 'journey-2',
    year: '20XX',
    title: '연혁 준비 중',
    text: '확정되는 대로 업데이트될 예정입니다.',
  },
  {
    id: 'journey-3',
    year: '20XX',
    title: '연혁 준비 중',
    text: '확정되는 대로 업데이트될 예정입니다.',
  },
];