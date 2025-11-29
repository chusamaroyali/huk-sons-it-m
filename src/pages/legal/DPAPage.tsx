'use client';

import { FileText, Shield, Users } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function DPAPage() {
  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
      <SEOHead
        title="Data Processing Addendum (DPA) | HUK SONS IT"
        description="HUK SONS IT Data Processing Addendum. Terms governing the processing of personal data on behalf of our customers."
        keywords="DPA, data processing addendum, data processor, GDPR DPA, data protection terms"
        canonical="https://huksonsit.com/legal/dpa"
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
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Data Processing</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading to-heading/60 bg-clip-text text-transparent">
                  Data Processing<br />Addendum
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                This Data Processing Addendum ("DPA") forms part of the Master Services Agreement between HUK SONS IT and the Customer.
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
              <h2 className="text-2xl text-heading dark:text-white mb-4">1. Definitions</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                "Controller", "Processor", "Data Subject", "Personal Data", "Processing" and appropriate technical and organizational measures shall have the meanings given to them in the GDPR.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">2. Processing of Personal Data</h2>
              <p className="text-body dark:text-white/80 leading-relaxed mb-4">
                HUK SONS IT shall process Personal Data only on documented instructions from the Customer, unless required to do so by Union or Member State law to which HUK SONS IT is subject.
              </p>
              <p className="text-body dark:text-white/80 leading-relaxed">
                The subject matter and duration of the processing, the nature and purpose of the processing, the type of personal data and categories of data subjects are set out in Appendix 1 to this DPA.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">3. Security Measures</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                HUK SONS IT shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including inter alia as appropriate: the pseudonymization and encryption of personal data; the ability to ensure the ongoing confidentiality, integrity, availability and resilience of processing systems and services.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">4. Subprocessors</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                The Customer grants general authorization to HUK SONS IT to engage subprocessors. HUK SONS IT shall inform the Customer of any intended changes concerning the addition or replacement of other processors.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">5. Download Signed DPA</h2>
              <p className="text-body dark:text-white/80 leading-relaxed mb-6">
                To execute this DPA, please download the PDF version, sign it, and return it to <a href="mailto:legal@huksons.com" className="text-primary hover:underline">legal@huksons.com</a>.
              </p>
              <Button variant="premium" className="px-6 py-3">
                Download DPA (PDF)
              </Button>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
