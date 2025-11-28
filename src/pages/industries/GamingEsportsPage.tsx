import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function GamingEsportsPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'gaming-esports')!;
  return <IndustryTemplate industry={industry} />;
}
