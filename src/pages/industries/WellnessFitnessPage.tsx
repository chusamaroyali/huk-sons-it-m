import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function WellnessFitnessPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'wellness-fitness')!;
  return <IndustryTemplate industry={industry} />;
}
