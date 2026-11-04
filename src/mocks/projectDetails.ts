// Per-project detail data. One entry can be reused by the shared detail view,
// so adding a new project with a detail screen only needs a record here.

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
  'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/cc020765-e32d-488c-ad5e-3898d0013ede_compressed_chungcheong2027_logo.webp';

// 경기운영계획 수립 — 5 posters, in the supplied order.
const chungcheongOperationsGallery = [
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/5f9a1946-0e96-42d1-8de4-3bf365ae3e44_compressed_chungcheong2027_poster-athletes.webp',
    alt: '2027 충청 세계대학경기대회 운동선수 포스터',
  },
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/1838edd4-c9b7-4b7a-91a1-9dae74459cb9_compressed_chungcheong2027_poster-mascot.webp',
    alt: '2027 충청 세계대학경기대회 호랑이 마스코트 포스터',
  },
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/260f533f-739f-436b-b3f8-814c4e92e12a_compressed_chungcheong2027_keyvisual-wide.webp',
    alt: '2027 충청 세계대학경기대회 가로형 키비주얼',
  },
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/8de544cf-76f7-43f7-bcdb-fdf10a364c08_compressed_chungcheong2027_poster-operations-cover-swimming.webp',
    alt: '2027 충청 세계대학경기대회 수영 종목 경기운영 포스터',
  },
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/a5bface0-2394-43da-a82d-a4ee86038d3e_compressed_chungcheong2027_poster-operations-cover-athletics.webp',
    alt: '2027 충청 세계대학경기대회 육상 종목 경기운영 포스터',
  },
];

// 마케팅플랜 수립 — 2 posters.
const chungcheongMarketingGallery = [
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/9aa9a15d-fb72-4ffb-8ad4-fc39c12be863_compressed_chungcheong2027_poster-marketing-cover.webp',
    alt: '2027 충청 세계대학경기대회 마케팅플랜 포스터 표지',
  },
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/f1e7af61-d473-400e-ae9f-1fac4251126a_compressed_chungcheong2027_poster-marketing-title.webp',
    alt: '2027 충청 세계대학경기대회 마케팅플랜 타이틀 포스터',
  },
];

// 라이선스 종합계획 수립 — single poster, no arrows or counter.
const chungcheongLicensingGallery = [
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/312e03e2-3591-4483-85bf-0671a25cb0a8_compressed_chungcheong2027_poster-license-cover.webp',
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
  'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/abdcbe4e-4714-4a6f-84af-3a290be35365_compressed_yog2024_logo.webp';

// 강원 2024 관련 두 프로젝트가 함께 쓰는 갤러리 — 4장, 지정된 순서.
// 공유 데이터이므로 한 번만 고치면 두 상세 페이지에 동시에 반영된다.
const gangwonGallery = [
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/8d28d9f9-c163-4950-ae57-bbbe5f6d65d6_compressed_gangwon_yog2024_marketing-cover.webp',
    alt: '2024 강원 동계청소년올림픽대회 마케팅 종합계획 표지',
  },
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/86f75332-702b-4553-ae2c-4ee7725fb199_compressed_gangwon_yog2024_poster-festival.webp',
    alt: '2024 강원 동계청소년올림픽대회 페스티벌 포스터',
  },
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/64404b54-8028-4b36-ae40-a943be9c08eb_compressed_gangwon_yog2024_poster-mascot.webp',
    alt: '2024 강원 동계청소년올림픽대회 뭉초 마스코트 포스터',
  },
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/6cd69fe0-8f02-45ce-91a4-8cf0a1ff53c3_compressed_gangwon_yog2024_poster-ticket.webp',
    alt: '2024 강원 동계청소년올림픽대회 경기티켓 무료예매 포스터',
  },
];

// 2024 강원YOG 마케팅 모델 연구 — 표지 없이 포스터 3장만 사용.
const gangwonYogModelGallery = [
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/86f75332-702b-4553-ae2c-4ee7725fb199_compressed_gangwon_yog2024_poster-festival.webp',
    alt: '2024 강원 동계청소년올림픽대회 페스티벌 포스터',
  },
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/64404b54-8028-4b36-ae40-a943be9c08eb_compressed_gangwon_yog2024_poster-mascot.webp',
    alt: '2024 강원 동계청소년올림픽대회 뭉초 마스코트 포스터',
  },
  {
    src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/6cd69fe0-8f02-45ce-91a4-8cf0a1ff53c3_compressed_gangwon_yog2024_poster-ticket.webp',
    alt: '2024 강원 동계청소년올림픽대회 경기티켓 무료예매 포스터',
  },
];

const tennesseePartnerLogo =
  'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/98c18d8e-bc36-4556-ad26-89dc2f2db1e7_compressed_tennessee_logo.webp';

const shenandoahPartnerLogo =
  'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/5c0bd9db-aa42-45b1-ba68-6e20bbefb7b8_compressed_shenandoah_logo.webp';

export const projectDetails = {
  'kbf-i-league-2025': {
    slug: 'kbf-i-league-2025',
    label: 'Research Projects · 연구 프로젝트',
    title: '2025 KBF i-League 연구용역',
    gallery: [
      {
        src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/49ca1120-f01f-474f-8a72-66948d661bf8_compressed_kbf_ileague-1.webp',
        alt: '2025 KBF i-League 연구용역 결과보고서 표지',
      },
      {
        src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/930a609c-e33d-495a-a454-e6b9b7cc84a5_compressed_kbf_ileague-2.webp',
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
        src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/f4aecb0c-cd2b-486a-8a09-447a0ef2ca6c_compressed_kbf_sponsorship-1.webp',
        alt: 'SOOP의 대한당구연맹 스폰서십 효과 분석 보고서 표지',
      },
      {
        src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/a4f2ce5e-ca0f-49c8-81a1-11c6929372e4_compressed_kbf_sponsorship-2.webp',
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
        src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/7dcb2d7d-0873-49a8-a21f-70b86f2ebb0e_compressed_PISswimming_2026-poster-01.webp',
        alt: '2026 PIS 전국 마스터즈 1,500m 수영대회 포스터 1',
      },
      {
        src: 'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/53176b42-194f-48c4-8a98-161e5dacb89b_compressed_PISswimming_2026-poster-02.webp',
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
      'https://storage.helloreaddy.io/project_files/e0ee9faa-d450-42fc-bfb9-3273dfa5ecd2/03693210-74c9-4c4d-9de6-2df9cdf73199_compressed_dogsports2025_poster.webp',
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