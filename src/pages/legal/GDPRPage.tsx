'use client';

import { Globe, Shield, FileText } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function GDPRPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="GDPR Compliance | HUK SONS IT"
        description="HUK SONS IT GDPR Compliance Statement. Our commitment to the General Data Protection Regulation and EU data subject rights."
        keywords="GDPR, data protection, EU privacy, data subject rights, HUK SONS IT compliance"
        canonical="https://huksonsit.com/legal/gdpr"
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
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">EU Data Protection</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  GDPR Compliance
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Our commitment to protecting the privacy and data rights of individuals in the European Economic Area (EEA) and UK.
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
              <h2 className="text-2xl text-heading dark:text-white mb-4">1. Our Commitment</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                HUK SONS IT is committed to compliance with the General Data Protection Regulation (GDPR) and the UK GDPR. We have implemented appropriate technical and organizational measures to ensure the security and privacy of personal data we process.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">2. Lawful Basis for Processing</h2>
              <p className="text-body dark:text-white/80 leading-relaxed mb-4">
                We process personal data only when we have a lawful basis to do so, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body dark:text-white/80">
                <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for a specific purpose.</li>
                <li><strong>Contract:</strong> The processing is necessary for a contract we have with you.</li>
                <li><strong>Legal Obligation:</strong> The processing is necessary for us to comply with the law.</li>
                <li><strong>Legitimate Interests:</strong> The processing is necessary for our legitimate interests or the legitimate interests of a third party.</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">3. Data Subject Rights</h2>
              <p className="text-body dark:text-white/80 leading-relaxed mb-4">
                Under the GDPR, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body dark:text-white/80">
                <li>The right to be informed</li>
                <li>The right of access</li>
                <li>The right to rectification</li>
                <li>The right to erasure</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object</li>
                <li>Rights in relation to automated decision making and profiling</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">4. International Transfers</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                When we transfer personal data outside the EEA or UK, we ensure appropriate safeguards are in place, such as the European Commission's Standard Contractual Clauses (SCCs) or the UK International Data Transfer Agreement (IDTA).
              </p>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
