import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Differentiators } from '../components/Differentiators';
import { Industries } from '../components/Industries';
import { Contact } from '../components/Contact';
import { SEOHead } from '../components/SEOHead';

export function Home() {
  return (
    <div className="bg-white dark:bg-[#0E1117] transition-colors duration-300">
      <SEOHead
        title="Home"
        description="HUK SONS IT - Global technical transformation and engineering firm. Enterprise-grade cloud modernization, AI automation, data infrastructure, and growth solutions for sustainable business expansion."
        keywords="cloud infrastructure, DevOps, AI automation, data engineering, digital transformation, enterprise solutions, cloud migration, growth services, go-to-market strategy, global expansion"
        canonical="https://huksonsit.com"
      />
      <Hero />
      <Services />
      <Differentiators />
      <Industries />
      <Contact />
    </div>
  );
}
