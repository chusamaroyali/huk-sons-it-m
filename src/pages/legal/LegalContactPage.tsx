'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function LegalContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="Legal Contact | HUK SONS IT"
        description="Contact HUK SONS IT Legal Department. Get in touch regarding legal inquiries, privacy concerns, or compliance matters."
        keywords="legal contact, legal department, privacy contact, compliance contact"
        canonical="https://huksonsit.com/legal/contact"
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
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Contact Legal</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  Legal Inquiries
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Get in touch with our legal and compliance teams.
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card border-2 border-subtle">
                <h2 className="text-2xl text-heading dark:text-white mb-6 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  Email Contacts
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-heading dark:text-white">General Legal Inquiries</h3>
                    <a href="mailto:legal@huksons.com" className="text-primary hover:underline">legal@huksons.com</a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading dark:text-white">Privacy & Data Protection</h3>
                    <a href="mailto:privacy@huksons.com" className="text-primary hover:underline">privacy@huksons.com</a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading dark:text-white">Security Issues</h3>
                    <a href="mailto:security@huksons.com" className="text-primary hover:underline">security@huksons.com</a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading dark:text-white">Ethics & Whistleblowing</h3>
                    <a href="mailto:ethics@huksons.com" className="text-primary hover:underline">ethics@huksons.com</a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-2 border-subtle">
                <h2 className="text-2xl text-heading dark:text-white mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Mailing Address
                </h2>
                <address className="not-italic text-body dark:text-white/80 leading-relaxed">
                  <strong>HUK SONS IT</strong><br />
                  Attn: Legal Department<br />
                  [Street Address]<br />
                  [City, State, Zip Code]<br />
                  [Country]
                </address>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
