import BilingualText from '@/components/base/BilingualText';

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  accent?: string;
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  accent,
}: SectionHeadingProps) {
  const isLight = tone === 'light';
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start';
  const accentColor = accent ?? (isLight ? 'oklch(var(--brand-cyan))' : 'oklch(var(--accent-500))');

  return (
    <div className={`flex flex-col ${alignment} max-w-3xl`}>
      <span
        className={`inline-flex items-center gap-3 font-label text-[11px] tracking-[0.3em] uppercase ${
          isLight ? 'text-background-300' : 'text-foreground-500'
        }`}
      >
        {index && (
          <span className="tabular-nums font-semibold" style={{ color: accentColor }}>
            {index}
          </span>
        )}
        <span className="w-8 h-px" style={{ backgroundColor: accentColor }} />
        <BilingualText text={eyebrow} />
      </span>
      <h2
        className={`mt-5 font-heading text-3xl md:text-5xl font-bold tracking-tight uppercase leading-[1.05] ${
          isLight ? 'text-background-50' : 'text-foreground-950'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-sm md:text-base leading-relaxed ${
            isLight ? 'text-background-200' : 'text-foreground-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}