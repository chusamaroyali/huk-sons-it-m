import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function LuxuryPremiumPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'luxury-premium')!;
  return <IndustryTemplate industry={industry} />;
}
