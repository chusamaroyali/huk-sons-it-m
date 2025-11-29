'use client';

import { Accessibility, Eye, Keyboard } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
      <SEOHead
        title="Accessibility Statement | HUK SONS IT"
        description="HUK SONS IT Accessibility Statement. Our commitment to digital accessibility for people with disabilities."
        keywords="accessibility, WCAG, ADA compliance, digital accessibility, inclusive design"
        canonical="https://huksonsit.com/legal/accessibility"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
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
                <Accessibility className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Inclusion</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading to-heading/60 bg-clip-text text-transparent">
                  Accessibility Statement
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body/70 max-w-3xl mx-auto leading-relaxed mb-8">
                We are committed to ensuring digital accessibility for people with disabilities.
              </p>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-3xl mx-auto mb-8">
                <p className="text-sm text-body/80">
                  <strong>Subsidiary Disclosure:</strong> HUK SONS IT operates as a legally separate subsidiary of HUK SONS. When you engage with this site or our services, you are interacting with HUK SONS IT (a subsidiary of HUK SONS) as the contracting entity, unless a signed agreement specifies otherwise.
                </p>
              </div>

              <div className="text-sm text-body/60">
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
              <h2 className="text-2xl text-heading mb-4">1. Conformance Status</h2>
              <p className="text-body/80 leading-relaxed">
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. HUK SONS IT is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading mb-4">2. Feedback</h2>
              <p className="text-body/80 leading-relaxed mb-4">
                We welcome your feedback on the accessibility of HUK SONS IT. Please let us know if you encounter accessibility barriers on HUK SONS IT:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body/80">
                <li>E-mail: <a href="mailto:accessibility@huksons.com" className="text-primary hover:underline">accessibility@huksons.com</a></li>
              </ul>
              <p className="mt-4 text-body/80">
                We try to respond to feedback within 2 business days.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading mb-4">3. Technical Specifications</h2>
              <p className="text-body/80 leading-relaxed mb-4">
                Accessibility of HUK SONS IT relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body/80">
                <li>HTML</li>
                <li>WAI-ARIA</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
