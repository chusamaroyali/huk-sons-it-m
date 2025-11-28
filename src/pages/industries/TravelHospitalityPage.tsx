import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function TravelHospitalityPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'travel-hospitality')!;
  return <IndustryTemplate industry={industry} />;
}
