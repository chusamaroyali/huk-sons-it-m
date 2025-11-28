import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function AnalyticsAIPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'analytics-ai')!;
  return <IndustryTemplate industry={industry} />;
}
