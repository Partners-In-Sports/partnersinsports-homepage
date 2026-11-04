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

// Footer legal navigation — links to the existing Partners in Sports website.
export const footerLegalLinks = [
  { label: '홈', href: 'https://partnersinsports.co.kr/main' },
  { label: '회사소개', href: 'https://partnersinsports.co.kr/pages/about' },
  { label: '이용약관', href: 'https://partnersinsports.co.kr/members/terms' },
  { label: '개인정보처리방침', href: 'https://partnersinsports.co.kr/members/policy' },
];

// Official logo artwork supplied by the client (vector, full colour — four-colour
// pinwheel + charcoal wordmark). The horizontal lockup is 303.66 x 77.92, so it
// is always sized by height and the width follows the intrinsic ratio.
export const logoAsset = {
  src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/d44b3ea1-a504-459c-9400-9f89964cbce3_PIS_logo_horizontal.svg',
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
      'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/9e3bb808-bdf8-4f69-932f-8bcfd7741f39_compressed_imid597220_Immersive_first_person_batters_eye_view_from_insid_4458b600-e7bd-4038-bb6b-aee021f0070f_1.webp',
    alt: 'Floodlit baseball stadium at night seen from behind home plate',
    focus: 'top',
  },
  {
    id: 'hero-2',
    image:
      'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/5f236188-9f72-491f-8238-fb1d090c8270_compressed_BU_Hinkel_24x24-01.webp',
    alt: 'Indoor basketball arena during a game with players on court',
    focus: 'bottom',
  },
  {
    id: 'hero-3',
    image:
      'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/38c0e721-3f40-4360-9857-4bd9841e7704_compressed_imid597220_First_person_underwater_sports_photograph_just_aft_191fd102-dbcf-4a0d-83b5-e8e2126e0f15_2.webp',
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
      'https://readdy.ai/api/search-image?query=Editorial%20photograph%20of%20a%20sports%20performance%20analysis%20room%20with%20large%20screens%20showing%20data%20charts%20and%20a%20stadium%20match%20on%20display%2C%20soft%20neutral%20daylight%2C%20muted%20warm%20gray%20and%20charcoal%20tones%2C%20clean%20corporate%20sports%20research%20photography&width=1200&height=900&seq=pis-work-research&orientation=landscape',
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
      'https://readdy.ai/api/search-image?query=Editorial%20photograph%20of%20a%20packed%20international%20stadium%20during%20an%20opening%20ceremony%20with%20flags%20and%20floodlights%2C%20wide%20angle%2C%20muted%20charcoal%20tones%2C%20dramatic%20professional%20sports%20event%20photography&width=1200&height=900&seq=pis-work-events&orientation=landscape',
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
      'https://readdy.ai/api/search-image?query=Editorial%20photograph%20of%20an%20international%20sports%20partnership%20meeting%20with%20diverse%20delegates%20in%20a%20bright%20modern%20hall%20with%20national%20flags%2C%20soft%20neutral%20daylight%2C%20clean%20corporate%20photography&width=1200&height=900&seq=pis-work-global&orientation=landscape',
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
      'https://readdy.ai/api/search-image?query=Editorial%20photograph%20of%20a%20clean%20sports%20merchandise%20display%20with%20folded%20jerseys%20caps%20and%20scarves%20on%20light%20neutral%20surfaces%2C%20soft%20studio%20lighting%2C%20professional%20product%20photography&width=1200&height=900&seq=pis-work-merch&orientation=landscape',
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

// 2027 충청 세계대학경기대회 emblem — the same file used above the title on
// the Chungcheong project detail screens.
const chungcheong2027Logo =
  'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/cc020765-e32d-488c-ad5e-3898d0013ede_compressed_chungcheong2027_logo.webp';

// Partner logos — Korea Billiards Federation, University of Tennessee,
// Shenandoah University. Each partner also has its own detail screen.
const kbfLogo =
  'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/04b155b5-5404-4d6b-935a-72840375363a_compressed_kbf_logo-vertical.webp';
const tennesseeLogo =
  'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/98c18d8e-bc36-4556-ad26-89dc2f2db1e7_compressed_tennessee_logo.webp';
const shenandoahLogo =
  'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/5c0bd9db-aa42-45b1-ba68-6e20bbefb7b8_compressed_shenandoah_logo.webp';

// 2024 강원 동계청소년올림픽대회 logo — the exact file shown above the title on
// the Gangwon project detail screens.
const gangwon2024Logo =
  'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/abdcbe4e-4714-4a6f-84af-3a290be35365_compressed_yog2024_logo.webp';

// Actual project and partner records. Only the information that has been
// supplied is shown — titles, and nothing that has not been provided.
export const projects = [
  {
    id: 'proj-res-1',
    category: 'research',
    categoryLabel: 'Research Projects',
    title: '2027 충청 세계대학경기대회 경기운영계획 수립',
    // Has its own detail screen — /projects/chungcheong-2027-operations
    slug: 'chungcheong-2027-operations',
    image: chungcheong2027Logo,
    imageFit: 'contain',
  },
  {
    id: 'proj-res-2',
    category: 'research',
    categoryLabel: 'Research Projects',
    title: '2027 충청 세계대학경기대회 마케팅플랜 수립',
    // Has its own detail screen — /projects/chungcheong-2027-marketing
    slug: 'chungcheong-2027-marketing',
    image: chungcheong2027Logo,
    imageFit: 'contain',
  },
  {
    id: 'proj-res-3',
    category: 'research',
    categoryLabel: 'Research Projects',
    title: '2027 충청 세계대학경기대회 라이선스 종합계획 수립',
    // Has its own detail screen — /projects/chungcheong-2027-licensing
    slug: 'chungcheong-2027-licensing',
    image: chungcheong2027Logo,
    imageFit: 'contain',
  },
  {
    id: 'proj-res-4',
    category: 'research',
    categoryLabel: 'Research Projects',
    title: 'SOOP의 대한당구연맹 스폰서십 효과 분석',
    // Has its own detail screen — /projects/kbf-sponsorship-2025
    slug: 'kbf-sponsorship-2025',
    image: kbfLogo,
    imageFit: 'contain',
  },
  {
    id: 'proj-res-5',
    category: 'research',
    categoryLabel: 'Research Projects',
    title: '2025 KBF i-League 연구용역',
    // Has its own detail screen — /projects/kbf-i-league-2025
    slug: 'kbf-i-league-2025',
    image: kbfLogo,
    imageFit: 'contain',
  },
  {
    id: 'proj-res-6',
    category: 'research',
    categoryLabel: 'Research Projects',
    title: '2024 강원 동계청소년올림픽대회 마케팅 종합계획 수립',
    // Has its own detail screen — /projects/gangwon-2024-marketing-plan
    slug: 'gangwon-2024-marketing-plan',
    image: gangwon2024Logo,
    imageFit: 'contain',
  },
  {
    id: 'proj-res-7',
    category: 'research',
    categoryLabel: 'Research Projects',
    title: '2024 강원YOG 마케팅 모델 연구',
    // Has its own detail screen — /projects/gangwon-yog-marketing-model
    slug: 'gangwon-yog-marketing-model',
    image: gangwon2024Logo,
    imageFit: 'contain',
  },
  {
    id: 'proj-evt-1',
    category: 'events',
    categoryLabel: 'Sporting Events',
    title: '2026 PIS 전국 마스터즈 1,500m 수영대회',
    // Has its own detail screen — /projects/pis-swimming-2026
    slug: 'pis-swimming-2026',
    imagePosition: 'center center',
    badgeCorner: true,
    image:
      'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/3aa6caa8-992b-4d88-90db-25e450caff62_compressed_PISswimming_2026-card.webp',
  },
  {
    id: 'proj-evt-2',
    category: 'events',
    categoryLabel: 'Sporting Events',
    title: '2025 서울시 도그스포츠 대회 계시계측',
    // Has its own detail screen — /projects/dogsports-2025
    slug: 'dogsports-2025',
    imagePosition: 'center',
    imageAlt: '2025 서울시 도그스포츠 대회',
    image:
      'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/26440add-bf77-491f-84cb-8c8158fa01fd_compressed_dogsports2025_card.webp',
  },
  {
    id: 'proj-glo-1',
    category: 'global',
    categoryLabel: 'Global Partnerships',
    title: 'University of Tennessee (USA)',
    // Has its own detail screen — /projects/tennessee-university
    slug: 'tennessee-university',
    image: tennesseeLogo,
    imageFit: 'contain',
  },
  {
    id: 'proj-glo-2',
    category: 'global',
    categoryLabel: 'Global Partnerships',
    title: 'Shenandoah University (USA)',
    // Has its own detail screen — /projects/shenandoah-university
    slug: 'shenandoah-university',
    image: shenandoahLogo,
    imageFit: 'contain',
  },
];

export const aboutContent = {
  eyebrow: 'Who we are',
  title: 'About Partners in Sports',
  quote: 'Success happens when preparation meets opportunity.',
  paragraphs: [
    '(주)파트너스인스포츠는 다양한 국제대회 또는 스포츠 현장 경험을 갖춘 스포츠인들이 설립한 회사입니다.',
    '다양한 국제스포츠 현장경험 및 국제스포츠기관과의 강력한 네트워크를 바탕으로 스포츠단체, 기업 및 운동선수의 성공을 돕는 최고의 파트너가 될 것이며, 궁극적으로 우리나라 스포츠의 선진화에 기여하고자 합니다.',
  ],
  image:
    'https://readdy.ai/api/search-image?query=Editorial%20wide%20photograph%20of%20a%20bright%20modern%20office%20meeting%20room%20in%20Seoul%20with%20large%20windows%20overlooking%20the%20city%2C%20a%20world%20map%20on%20the%20wall%20and%20sports%20strategy%20documents%20on%20the%20table%2C%20soft%20daylight%2C%20clean%20neutral%20tones%2C%20professional%20corporate%20photography&width=1400&height=1000&seq=pis-about-1&orientation=landscape',
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