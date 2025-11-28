import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function AgricultureAgTechPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'agriculture-agtech')!;
  return <IndustryTemplate industry={industry} />;
}
