import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function SaasSoftwarePage() {
  const industry = INDUSTRIES.find(i => i.slug === 'saas-software')!;
  return <IndustryTemplate industry={industry} />;
}
