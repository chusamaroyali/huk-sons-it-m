'use client';

import { Users, Shield, FileText } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function ProcessingRolesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="Data Processing Roles | HUK SONS IT"
        description="HUK SONS IT Data Processing Roles. Clarification of our roles as Controller and Processor under GDPR and other privacy laws."
        keywords="data controller, data processor, GDPR roles, data processing agreement, privacy roles"
        canonical="https://huksonsit.com/legal/processing-roles"
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
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Roles & Responsibilities</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  Processing Roles
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Clarifying our responsibilities as a Data Controller and Data Processor.
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
              <h2 className="text-2xl text-heading dark:text-white mb-4">1. HUK SONS IT as a Data Controller</h2>
              <p className="text-body dark:text-white/80 leading-relaxed mb-4">
                We act as a Data Controller for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body dark:text-white/80">
                <li>Customer account information (e.g., billing details, contact info)</li>
                <li>Employee data</li>
                <li>Marketing data and website analytics</li>
                <li>Visitor information collected via our website</li>
              </ul>
              <p className="mt-4 text-body dark:text-white/80">
                In these cases, we determine the purposes and means of processing personal data.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">2. HUK SONS IT as a Data Processor</h2>
              <p className="text-body dark:text-white/80 leading-relaxed mb-4">
                We act as a Data Processor for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body dark:text-white/80">
                <li>Data uploaded, stored, or processed by our customers using our services ("Customer Data")</li>
                <li>End-user data processed on behalf of our customers</li>
              </ul>
              <p className="mt-4 text-body dark:text-white/80">
                In these cases, we process data only in accordance with the customer's instructions (e.g., via the DPA).
              </p>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
