import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function SocialNetworkingPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'social-networking')!;
  return <IndustryTemplate industry={industry} />;
}
