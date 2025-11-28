import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function LegalTechPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'legal-tech')!;
  return <IndustryTemplate industry={industry} />;
}
