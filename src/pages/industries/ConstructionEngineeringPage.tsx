import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function ConstructionEngineeringPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'construction-engineering')!;
  return <IndustryTemplate industry={industry} />;
}
