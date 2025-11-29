'use client';

import { FileText, Paperclip, Download } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function LegalAppendicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="Legal Appendices | HUK SONS IT"
        description="HUK SONS IT Legal Appendices. Supplementary documents, forms, and resources."
        keywords="legal appendices, forms, documents, resources, legal downloads"
        canonical="https://huksonsit.com/legal/appendices"
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
                <Paperclip className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Resources</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  Appendices
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Supplementary documents, forms, and downloadable resources.
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
              <h2 className="text-2xl text-heading dark:text-white mb-6">Downloadable Documents</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 dark:bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-heading dark:text-white font-medium">Data Processing Addendum (DPA)</span>
                  </div>
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                    <Download className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/50 dark:bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-heading dark:text-white font-medium">Standard Contractual Clauses (SCCs)</span>
                  </div>
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                    <Download className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/50 dark:bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-heading dark:text-white font-medium">ISO 27001 Certificate</span>
                  </div>
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full">
                    <Download className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
