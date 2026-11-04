import { Link } from 'react-router-dom';
import { logoAsset } from '@/mocks/site';

interface BrandMarkProps {
  className?: string;
}

/**
 * Official Partners in Sports logo (four-colour pinwheel + charcoal wordmark),
 * used exactly as supplied — no colour filters or effects are applied.
 * Only ever sized by height, so the width follows the intrinsic
 * 303.66 : 77.92 ratio and the mark can never stretch or squash.
 */
export default function BrandMark({ className = '' }: BrandMarkProps) {
  return (
    <Link
      to="/"
      aria-label="Partners in Sports — home"
      className={`inline-flex items-center h-9 md:h-10 cursor-pointer ${className}`}
    >
      <img
        src={logoAsset.src}
        alt={logoAsset.alt}
        title="Partners in Sports"
        width={Math.round(logoAsset.width)}
        height={Math.round(logoAsset.height)}
        style={{ aspectRatio: `${logoAsset.width} / ${logoAsset.height}` }}
        className="h-full w-auto max-w-none object-contain select-none"
        draggable={false}
      />
    </Link>
  );
}