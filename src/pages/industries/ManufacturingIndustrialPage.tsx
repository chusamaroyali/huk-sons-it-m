import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function ManufacturingIndustrialPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'manufacturing-industrial')!;
  return <IndustryTemplate industry={industry} />;
}
