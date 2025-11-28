import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function RetailTechnologyPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'retail-technology')!;
  return <IndustryTemplate industry={industry} />;
}
