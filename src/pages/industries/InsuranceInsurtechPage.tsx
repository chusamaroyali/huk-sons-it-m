import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function InsuranceInsurtechPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'insurance-insurtech')!;
  return <IndustryTemplate industry={industry} />;
}
