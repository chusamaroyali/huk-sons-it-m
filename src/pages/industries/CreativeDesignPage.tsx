import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function CreativeDesignPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'creative-design')!;
  return <IndustryTemplate industry={industry} />;
}
