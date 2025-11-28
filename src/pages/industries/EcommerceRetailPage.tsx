import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function EcommerceRetailPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'ecommerce-retail')!;
  return <IndustryTemplate industry={industry} />;
}
