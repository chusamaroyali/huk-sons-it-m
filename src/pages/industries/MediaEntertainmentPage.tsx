import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function MediaEntertainmentPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'media-entertainment')!;
  return <IndustryTemplate industry={industry} />;
}
