import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function TransportationFreightPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'transportation-freight')!;
  return <IndustryTemplate industry={industry} />;
}
