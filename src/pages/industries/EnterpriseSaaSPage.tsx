import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function EnterpriseSaaSPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'enterprise-saas')!;
  return <IndustryTemplate industry={industry} />;
}
