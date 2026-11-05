import type { ReactNode } from 'react';

const EMAIL_PATTERN = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

interface EmailTextProps {
  text: string;
  /** 메일 링크에 적용할 클래스 (본문 색·크기는 부모에서 상속됩니다) */
  linkClassName?: string;
}

/**
 * 문단 안에 들어 있는 이메일 주소를 mailto 링크로 바꿔서 보여줍니다.
 * 나머지 문장은 그대로 출력됩니다.
 */
export default function EmailText({ text, linkClassName }: EmailTextProps) {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(EMAIL_PATTERN)) {
    const email = match[0];
    const start = match.index ?? 0;

    if (start > cursor) {
      nodes.push(text.slice(cursor, start));
    }

    nodes.push(
      <a
        key={`${email}-${start}`}
        href={`mailto:${email}`}
        className={
          linkClassName ??
          'underline underline-offset-2 transition-colors hover:text-foreground-900'
        }
      >
        {email}
      </a>,
    );

    cursor = start + email.length;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return <>{nodes}</>;
}