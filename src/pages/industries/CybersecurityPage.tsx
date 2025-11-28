import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function CybersecurityPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'cybersecurity')!;
  return <IndustryTemplate industry={industry} />;
}
