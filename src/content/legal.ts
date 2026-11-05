// 개인정보 관련 문구.
// 문의 양식의 동의 영역과 /privacy 개인정보처리방침 페이지가 같은 출처를 사용합니다.

export const consentTitle = '개인정보 수집·이용 동의 (필수)';

export interface ConsentRow {
  label: string;
  value: string;
  /** 강조 표시가 필요한 항목(보유 및 이용 기간) */
  emphasis?: boolean;
}

export const consentRows: ConsentRow[] = [
  { label: '수집하는 자', value: '㈜파트너스인스포츠' },
  { label: '수집·이용 목적', value: '프로젝트·파트너십·연구 관련 문의 접수 및 답변' },
  { label: '수집 항목', value: '이름, 이메일, 제목, 내용' },
  { label: '보유 및 이용 기간', value: '접수일로부터 3년', emphasis: true },
];

export const consentEntrust =
  '위탁 및 국외 이전: 문의 양식 전송을 위해 Web3Forms(운영사 Web3Creative, 인도)에 처리가 위탁되며, 입력하신 정보가 인도 및 해당 업체가 이용하는 클라우드 서버(미국·유럽 등)가 위치한 국가로 전송·저장될 수 있습니다. 스팸 방지를 위해 이메일 주소와 접속 IP 주소가 스팸 방지 서비스에 전달될 수 있습니다. 자세한 내용은 개인정보처리방침에서 확인하실 수 있습니다.';

export const consentRefusal =
  '※ 귀하는 동의를 거부할 권리가 있습니다. 동의하지 않으면 문의 양식을 이용할 수 없으며, 이 경우 ceo@partnersinsports.co.kr 로 직접 문의하실 수 있습니다.';

export const consentCheckboxLabel = '개인정보 수집 및 이용에 동의합니다. (필수)';
export const consentLinkLabel = '개인정보처리방침 전문 보기';

export const privacyPolicyTitle = '개인정보처리방침';

export const privacyPolicyIntro =
  '㈜파트너스인스포츠(이하 "회사")는 개인정보 보호법 등 관련 법령을 준수하며, 문의하기를 통해 접수되는 개인정보를 아래와 같이 처리합니다.';

export interface PrivacySection {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
}

export const privacyPolicySections: PrivacySection[] = [
  {
    id: 'purpose',
    number: '1',
    title: '개인정보의 처리 목적',
    paragraphs: [
      '회사는 다음의 목적을 위해 개인정보를 처리하며, 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행합니다.',
    ],
    list: ['프로젝트, 파트너십, 연구 관련 문의의 접수 및 답변', '문의 내용 확인과 회신을 위한 연락'],
  },
  {
    id: 'items',
    number: '2',
    title: '처리하는 개인정보 항목',
    list: [
      '필수 항목: 이름, 이메일 주소, 문의 제목, 문의 내용',
      '자동으로 전송되는 정보: 접속 IP 주소(스팸 방지 목적)',
      '문의 내용에 이용자가 직접 적은 정보도 함께 수집될 수 있습니다.',
      '회사는 문의 접수에 필요한 최소한의 정보만 수집합니다. 주민등록번호 등 고유식별정보와 민감정보는 수집하지 않습니다.',
    ],
  },
  {
    id: 'retention',
    number: '3',
    title: '개인정보의 처리 및 보유 기간',
    list: [
      '접수된 문의 정보는 접수일로부터 3년까지 보관하고, 기간이 지나면 지체 없이 파기합니다.',
      '법령에 따라 보존해야 하는 경우에는 해당 기간 동안 보관합니다.',
    ],
  },
  {
    id: 'third-party',
    number: '4',
    title: '개인정보의 제3자 제공',
    paragraphs: [
      '회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 법령에 근거가 있는 경우에는 예외로 합니다.',
    ],
  },
  {
    id: 'entrust',
    number: '5',
    title: '개인정보 처리의 위탁 및 국외 이전',
    paragraphs: [
      '회사는 문의 양식의 전송과 이메일 전달을 위해 아래와 같이 개인정보 처리를 위탁하며, 이 과정에서 개인정보가 국외로 이전됩니다.',
    ],
    list: [
      '수탁자: Web3Forms (운영사 Web3Creative)',
      '이전되는 국가: 인도, 그 밖에 수탁자가 이용하는 클라우드 서버(AWS, Cloudflare, Hetzner 등)가 위치한 국가',
      '이전 일시 및 방법: 이용자가 문의를 제출할 때 정보통신망을 통해 전송',
      '이전되는 항목: 이름, 이메일 주소, 문의 제목, 문의 내용, 접속 IP 주소(스팸 방지를 위해 자동 전송)',
      '이용 목적: 문의 양식 전송 처리, 스팸 방지, 회사 이메일로의 전달',
      '보유 및 이용 기간: 수탁자는 문의 내용을 최대 3년 보관한 후 자동 삭제합니다. 회사의 보유 기간(접수일로부터 3년)과 같으며, 회사가 더 일찍 삭제하는 경우 수탁자 관리 화면에서 삭제할 수 있습니다.',
      '알림 메일 발송: 문의 알림 메일은 수탁자가 Amazon Web Services(Amazon SES)를 통해 회사 이메일로 발송합니다.',
      '스팸 방지: 이메일 주소와 접속 IP 주소가 CleanTalk, Akismet 등 스팸 방지 서비스에 전달될 수 있습니다.',
      '거부 방법 및 불이익: 국외 이전을 원하지 않는 경우 문의 양식을 이용하지 않고 이메일(ceo@partnersinsports.co.kr)로 직접 문의하실 수 있습니다. 문의 양식 이용에는 제한이 있으나 그 밖의 이용에는 불이익이 없습니다.',
      '접수된 문의는 회사의 업무용 이메일(다음 스마트워크 메일)로 수신되어 보관됩니다.',
    ],
  },
  {
    id: 'destruction',
    number: '6',
    title: '개인정보의 파기 절차 및 방법',
    list: [
      '보유 기간이 지났거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다.',
      '전자적 파일은 복구할 수 없는 방법으로 삭제하고, 종이로 출력한 경우에는 분쇄하거나 소각합니다.',
    ],
  },
  {
    id: 'rights',
    number: '7',
    title: '정보주체의 권리와 행사 방법',
    paragraphs: [
      '이용자는 언제든지 회사에 대해 개인정보 열람, 정정, 삭제, 처리정지를 요구할 수 있습니다. 요구는 아래 개인정보 보호책임자에게 이메일로 하실 수 있으며, 회사는 지체 없이 조치합니다.',
    ],
  },
  {
    id: 'safety',
    number: '8',
    title: '개인정보의 안전성 확보 조치',
    list: [
      '접속 구간 암호화(HTTPS) 적용',
      '개인정보 접근 권한을 필요한 담당자로 제한',
      '수탁자는 전송 구간 암호화(HTTPS)와 저장 시 암호화를 적용합니다.',
    ],
  },
  {
    id: 'officer',
    number: '9',
    title: '개인정보 보호책임자',
    list: ['성명: 최원일', '직책: 대표', '연락처: ceo@partnersinsports.co.kr'],
    paragraphs: [
      '이용자는 회사의 서비스를 이용하며 발생한 모든 개인정보 보호 관련 문의, 불만 처리, 피해 구제 등을 위 연락처로 문의할 수 있습니다.',
    ],
  },
  {
    id: 'relief',
    number: '10',
    title: '권익침해 구제 방법',
    paragraphs: ['개인정보 침해에 대한 신고나 상담이 필요한 경우 아래 기관에 문의할 수 있습니다.'],
    list: [
      '개인정보침해신고센터: 118 (privacy.kisa.or.kr)',
      '개인정보분쟁조정위원회: 1833-6972 (kopico.go.kr)',
      '대검찰청 사이버수사과: 1301 (spo.go.kr)',
      '경찰청 사이버수사국: 182 (ecrm.police.go.kr)',
    ],
  },
  {
    id: 'changes',
    number: '11',
    title: '처리방침의 변경',
    paragraphs: [
      '이 개인정보처리방침은 2026년 11월 5일부터 적용되며, 내용이 변경되는 경우 변경 사항을 이 페이지를 통해 공지합니다.',
    ],
  },
];