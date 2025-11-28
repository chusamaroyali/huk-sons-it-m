import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function DataCentersHostingPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'data-centers-hosting')!;
  return <IndustryTemplate industry={industry} />;
}
