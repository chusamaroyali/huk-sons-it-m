import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function InvestmentAssetManagementPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'investment-asset-management')!;
  return <IndustryTemplate industry={industry} />;
}
