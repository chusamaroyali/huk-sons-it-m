'use client';

import { MapPin, Shield, FileText } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function CCPAPrivacyPage() {
  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
      <SEOHead
        title="CCPA/CPRA Privacy Notice | HUK SONS IT"
        description="HUK SONS IT California Privacy Notice. Information for California residents regarding their rights under CCPA and CPRA."
        keywords="CCPA, CPRA, California privacy, data rights, do not sell my info, HUK SONS IT privacy"
        canonical="https://huksonsit.com/legal/ccpa"
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
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">California Privacy</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading to-heading/60 bg-clip-text text-transparent">
                  CCPA/CPRA Notice
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Information for California residents regarding their rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA).
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
              <h2 className="text-2xl text-heading mb-4">1. Your California Privacy Rights</h2>
              <p className="text-body/80 leading-relaxed mb-4">
                If you are a California resident, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body/80">
                <li><strong>Right to Know:</strong> You can request information about the categories and specific pieces of personal information we have collected about you.</li>
                <li><strong>Right to Delete:</strong> You can request that we delete personal information we have collected from you.</li>
                <li><strong>Right to Correct:</strong> You can request that we correct inaccurate personal information.</li>
                <li><strong>Right to Opt-Out:</strong> You can opt-out of the sale or sharing of your personal information.</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading mb-4">2. Categories of Information Collected</h2>
              <p className="text-body/80 leading-relaxed mb-4">
                In the preceding 12 months, we have collected the following categories of personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body/80">
                <li>Identifiers (e.g., name, email address, IP address)</li>
                <li>Commercial information (e.g., records of products or services purchased)</li>
                <li>Internet or other electronic network activity information (e.g., browsing history)</li>
                <li>Professional or employment-related information</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading mb-4">3. "Do Not Sell or Share"</h2>
              <p className="text-body/80 leading-relaxed">
                HUK SONS IT does not sell your personal information for monetary consideration. We may share personal information with third-party service providers for business purposes, such as analytics and marketing, which may be considered "sharing" under CPRA. You may opt-out of such sharing by contacting us.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading mb-4">4. Submitting a Request</h2>
              <p className="text-body/80 leading-relaxed">
                To exercise your rights under the CCPA/CPRA, please submit a request by emailing <a href="mailto:privacy@huksons.com" className="text-primary hover:underline">privacy@huksons.com</a> with the subject line "California Privacy Request". We will verify your request in accordance with applicable law.
              </p>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
