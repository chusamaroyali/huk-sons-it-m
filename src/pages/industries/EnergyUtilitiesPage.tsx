import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function EnergyUtilitiesPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'energy-utilities')!;
  return <IndustryTemplate industry={industry} />;
}
