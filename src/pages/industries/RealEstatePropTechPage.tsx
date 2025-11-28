import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function RealEstatePropTechPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'real-estate-proptech')!;
  return <IndustryTemplate industry={industry} />;
}
