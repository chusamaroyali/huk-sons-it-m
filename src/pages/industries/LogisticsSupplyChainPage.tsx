import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function LogisticsSupplyChainPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'logistics-supply-chain')!;
  return <IndustryTemplate industry={industry} />;
}
