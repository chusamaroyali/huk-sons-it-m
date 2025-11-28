import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function FintechBankingPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'fintech-banking')!;
  return <IndustryTemplate industry={industry} />;
}
