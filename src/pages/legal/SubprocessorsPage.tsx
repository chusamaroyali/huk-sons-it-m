'use client';

import { Server, Network, Globe } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function SubprocessorsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="List of Subprocessors | HUK SONS IT"
        description="HUK SONS IT Subprocessors. A list of third-party service providers we use to process customer data."
        keywords="subprocessors, third-party vendors, data processors, cloud providers, HUK SONS IT vendors"
        canonical="https://huksonsit.com/legal/subprocessors"
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
                <Server className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Vendor Management</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  Subprocessors
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                We engage the following third-party entities to assist us in providing our services.
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
              <h2 className="text-2xl text-heading dark:text-white mb-6">Infrastructure & Hosting</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-subtle">
                      <th className="py-4 px-4 font-semibold text-heading dark:text-white">Name</th>
                      <th className="py-4 px-4 font-semibold text-heading dark:text-white">Purpose</th>
                      <th className="py-4 px-4 font-semibold text-heading dark:text-white">Location</th>
                    </tr>
                  </thead>
                  <tbody className="text-body dark:text-white/80">
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">Amazon Web Services (AWS)</td>
                      <td className="py-4 px-4">Cloud Infrastructure & Hosting</td>
                      <td className="py-4 px-4">USA, EU</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">Google Cloud Platform (GCP)</td>
                      <td className="py-4 px-4">Cloud Services & Analytics</td>
                      <td className="py-4 px-4">Global</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">Vercel</td>
                      <td className="py-4 px-4">Frontend Hosting & Edge Functions</td>
                      <td className="py-4 px-4">Global</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Appwrite</td>
                      <td className="py-4 px-4">Backend as a Service</td>
                      <td className="py-4 px-4">Germany</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-6">Business Operations</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-subtle">
                      <th className="py-4 px-4 font-semibold text-heading dark:text-white">Name</th>
                      <th className="py-4 px-4 font-semibold text-heading dark:text-white">Purpose</th>
                      <th className="py-4 px-4 font-semibold text-heading dark:text-white">Location</th>
                    </tr>
                  </thead>
                  <tbody className="text-body dark:text-white/80">
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">Stripe</td>
                      <td className="py-4 px-4">Payment Processing</td>
                      <td className="py-4 px-4">USA</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4">HubSpot</td>
                      <td className="py-4 px-4">CRM & Marketing</td>
                      <td className="py-4 px-4">USA</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Slack</td>
                      <td className="py-4 px-4">Internal Communication</td>
                      <td className="py-4 px-4">USA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">Updates</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                We may update this list from time to time. Customers can subscribe to receive notifications of new subprocessors by emailing <a href="mailto:privacy@huksons.com" className="text-primary hover:underline">privacy@huksons.com</a>.
              </p>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
