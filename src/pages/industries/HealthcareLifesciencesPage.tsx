import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function HealthcareLifesciencesPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'healthcare-lifesciences')!;
  return <IndustryTemplate industry={industry} />;
}
