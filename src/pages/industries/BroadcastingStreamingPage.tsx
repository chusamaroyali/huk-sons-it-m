import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function BroadcastingStreamingPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'broadcasting-streaming')!;
  return <IndustryTemplate industry={industry} />;
}
