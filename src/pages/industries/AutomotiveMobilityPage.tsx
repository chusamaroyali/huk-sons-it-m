import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function AutomotiveMobilityPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'automotive-mobility')!;
  return <IndustryTemplate industry={industry} />;
}
