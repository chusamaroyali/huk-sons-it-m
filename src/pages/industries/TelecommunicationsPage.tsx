import { IndustryTemplate } from '../../components/IndustryTemplate';
import { INDUSTRIES } from '../../utils/data';

export function TelecommunicationsPage() {
  const industry = INDUSTRIES.find(i => i.slug === 'telecommunications')!;
  return <IndustryTemplate industry={industry} />;
}
