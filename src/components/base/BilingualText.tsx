interface BilingualTextProps {
  text: string;
  separator?: string;
}

const DEFAULT_SEPARATOR = ' · ';

/**
 * Renders "ENGLISH · 한국어" labels so the Korean half keeps the default
 * letter-spacing while the Latin half keeps the wide uppercase tracking.
 */
export default function BilingualText({ text, separator = DEFAULT_SEPARATOR }: BilingualTextProps) {
  const splitAt = text.indexOf(separator);

  if (splitAt === -1) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {text.slice(0, splitAt)}
      <span className="ko">
        {separator}
        {text.slice(splitAt + separator.length)}
      </span>
    </span>
  );
}