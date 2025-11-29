'use client';

import { Copyright, FileText, Shield } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function IPPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="Intellectual Property Policy | HUK SONS IT"
        description="HUK SONS IT Intellectual Property Policy. Guidelines regarding our trademarks, copyrights, and use of our brand assets."
        keywords="intellectual property, IP policy, trademarks, copyright, brand guidelines"
        canonical="https://huksonsit.com/legal/ip"
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
                <Copyright className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Intellectual Property</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  IP Policy
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Guidelines for the use of HUK SONS IT intellectual property and respecting the rights of others.
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
              <h2 className="text-2xl text-heading dark:text-white mb-4">1. Trademarks</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                "HUK SONS IT", the HUK SONS IT logo, and other HUK SONS IT marks are trademarks of HUK SONS. You may not use these trademarks without our prior written permission, except as permitted by applicable law.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">2. Copyright</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of HUK SONS IT or its content suppliers and is protected by international copyright laws.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">3. DMCA Notice</h2>
              <p className="text-body dark:text-white/80 leading-relaxed mb-4">
                We respect the intellectual property rights of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body dark:text-white/80">
                <li>A physical or electronic signature of the copyright owner or authorized person.</li>
                <li>A description of the copyrighted work claimed to have been infringed.</li>
                <li>A description of where the material is located on our site.</li>
                <li>Your contact information.</li>
                <li>A statement of good faith belief that the use is not authorized.</li>
                <li>A statement that the information is accurate and that you are the copyright owner or authorized agent.</li>
              </ul>
              <p className="mt-4 text-body dark:text-white/80">
                Contact our Copyright Agent at: <a href="mailto:legal@huksons.com" className="text-primary hover:underline">legal@huksons.com</a>
              </p>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
