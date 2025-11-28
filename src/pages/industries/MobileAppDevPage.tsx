import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function MobileAppDevPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'mobile-app-dev')!;
  return <IndustryTemplate industry={industry} />;
}
