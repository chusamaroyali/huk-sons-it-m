'use client';

import { Leaf, Heart, Users } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function ESGPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="Environmental, Social, and Governance (ESG) | HUK SONS IT"
        description="HUK SONS IT ESG Initiatives. Our commitment to sustainability, social responsibility, and ethical governance."
        keywords="ESG, sustainability, corporate social responsibility, CSR, green IT"
        canonical="https://huksonsit.com/legal/esg"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-8">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Sustainability</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  ESG Initiatives
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Driving positive impact through environmental stewardship, social responsibility, and strong governance.
              </p>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-3xl mx-auto mb-8">
                <p className="text-sm text-body dark:text-white/80">
                  <strong>Subsidiary Disclosure:</strong> HUK SONS IT operates as a legally separate subsidiary of HUK SONS. When you engage with this site or our services, you are interacting with HUK SONS IT (a subsidiary of HUK SONS) as the contracting entity, unless a signed agreement specifies otherwise.
                </p>
              </div>

              <div className="text-sm text-muted-foreground dark:text-white/60">
                Last Updated: November 29, 2025 | Version 1.0
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">1. Environmental</h2>
              <p className="text-body dark:text-white/80 leading-relaxed mb-4">
                We are committed to reducing our carbon footprint and promoting sustainable practices.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body dark:text-white/80">
                <li><strong>Green Cloud:</strong> We prioritize cloud providers with strong renewable energy commitments.</li>
                <li><strong>Remote First:</strong> Our remote-first policy significantly reduces commuting emissions.</li>
                <li><strong>E-Waste:</strong> We partner with certified e-waste recyclers for hardware disposal.</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">2. Social</h2>
              <p className="text-body dark:text-white/80 leading-relaxed mb-4">
                We believe in fostering a diverse, inclusive, and equitable workplace.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body dark:text-white/80">
                <li><strong>DEI:</strong> We actively promote diversity, equity, and inclusion in our hiring and culture.</li>
                <li><strong>Community:</strong> We support local communities through volunteering and charitable giving.</li>
                <li><strong>Wellbeing:</strong> We prioritize employee mental health and work-life balance.</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">3. Governance</h2>
              <p className="text-body dark:text-white/80 leading-relaxed mb-4">
                We maintain high standards of corporate governance and ethics.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body dark:text-white/80">
                <li><strong>Ethics:</strong> We operate with integrity and transparency in all business dealings.</li>
                <li><strong>Compliance:</strong> We strictly adhere to all applicable laws and regulations.</li>
                <li><strong>Data Privacy:</strong> We are committed to protecting the privacy and security of data.</li>
              </ul>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
