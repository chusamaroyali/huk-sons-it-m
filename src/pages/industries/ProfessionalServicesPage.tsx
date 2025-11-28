import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function ProfessionalServicesPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'professional-services')!;
  return <IndustryTemplate industry={industry} />;
}
