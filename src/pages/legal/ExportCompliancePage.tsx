'use client';

import { Globe, Shield, Plane } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function ExportCompliancePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="Export Control Compliance | HUK SONS IT"
        description="HUK SONS IT Export Control Compliance. Information regarding our compliance with US and international export control laws."
        keywords="export control, trade compliance, EAR, OFAC, export compliance"
        canonical="https://huksonsit.com/legal/export-compliance"
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
                <Plane className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Trade Compliance</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  Export Compliance
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Our commitment to complying with applicable export control and economic sanctions laws.
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
              <h2 className="text-2xl text-heading dark:text-white mb-4">1. Overview</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                HUK SONS IT software and services may be subject to export control and economic sanctions laws and regulations, including the U.S. Export Administration Regulations (EAR) and regulations administered by the U.S. Department of the Treasury's Office of Foreign Assets Control (OFAC).
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">2. Prohibited Destinations</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                You may not access, use, export, re-export, divert, transfer or disclose any portion of the Services or any related technical information or materials, directly or indirectly, in violation of any applicable export control or economic sanctions laws. This includes, but is not limited to, any country or territory subject to comprehensive U.S. sanctions (currently Cuba, Iran, North Korea, Syria, and the Crimea, Donetsk, and Luhansk regions of Ukraine).
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">3. Denied Parties</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                You represent and warrant that you are not located in, under the control of, or a national or resident of any such country or territory, and that you are not on any U.S. government list of prohibited or restricted parties.
              </p>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
