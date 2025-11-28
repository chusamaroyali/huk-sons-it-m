import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function EdtechPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'edtech')!;
  return <IndustryTemplate industry={industry} />;
}
