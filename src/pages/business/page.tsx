import PageHero from '@/components/feature/PageHero';
import CtaBand from '@/components/feature/CtaBand';
import { sectionAccents } from '@/mocks/site';
import BusinessAreas from './components/BusinessAreas';
import BusinessApproach from './components/BusinessApproach';

export default function Business() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Business · 사업분야"
        title="What We Do"
        description="연구 프로젝트, 스포츠 이벤트 컨설팅, 글로벌 파트너십, 머천다이징. 스포츠 프로젝트를 첫 연구 과제부터 글로벌 무대와 상품화까지 이어주는 전문 영역입니다."
        accent={sectionAccents.business}
      />

      <BusinessAreas />
      <BusinessApproach />

      <CtaBand
        title="Planning a Sports Project?"
        text="요청 내용을 보내주시면 첫 연구 과제부터 실행까지 어떻게 지원할 수 있는지 안내해 드리겠습니다."
      />
    </>
  );
}