'use client';

import { Scale, FileText, ShieldAlert, CheckCircle, AlertTriangle, Gavel, CreditCard, UserX } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function TermsOfServicePage() {
  const keyTerms = [
    {
      title: 'Acceptance',
      icon: CheckCircle,
      description: 'By using our services, you agree to be bound by these terms.'
    },
    {
      title: 'Accounts',
      icon: UserX,
      description: 'You are responsible for maintaining the security of your account.'
    },
    {
      title: 'Payments',
      icon: CreditCard,
      description: 'Fees are non-refundable unless otherwise stated in your agreement.'
    },
    {
      title: 'Liability',
      icon: ShieldAlert,
      description: 'Our liability is limited as described in Section 8.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="Terms of Service | HUK SONS IT"
        description="HUK SONS IT Terms of Service. The legal agreement governing your use of our website, products, and services."
        keywords="terms of service, TOS, legal agreement, user agreement, HUK SONS IT terms"
        canonical="https://huksonsit.com/legal/terms"
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
                <Scale className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Legal Agreement</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Please read these terms carefully before using our services. They define the legal relationship between you and HUK SONS IT.
              </p>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-3xl mx-auto mb-8">
                <p className="text-sm text-body dark:text-white/80">
                  <strong>Subsidiary Disclosure:</strong> HUK SONS IT operates as a legally separate subsidiary of HUK SONS. All agreements entered into via this site or our services are exclusively with HUK SONS IT, unless explicitly stated otherwise in a separate written contract.
                </p>
              </div>

              <div className="text-sm text-muted-foreground dark:text-white/60">
                Last Updated: November 29, 2025 | Version 2.1
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Terms Grid */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-heading dark:text-white mb-6">
                Quick <span className="text-primary">Summary</span>
              </h2>
              <p className="text-xl text-body dark:text-white/70 max-w-3xl mx-auto">
                The most critical points of our agreement at a glance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyTerms.map((term, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 h-full bg-card border-2 border-subtle hover:border-primary/30 transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <term.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-heading dark:text-white mb-2">{term.title}</h3>
                    <p className="text-sm text-body dark:text-white/70">{term.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="p-8 bg-card border-2 border-subtle">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl text-heading dark:text-white mb-4">1. Agreement to Terms</h2>
                  <p className="text-body dark:text-white/80 leading-relaxed">
                    By accessing or using our website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not access or use the services.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <div className="flex items-start gap-4">
                <UserX className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl text-heading dark:text-white mb-4">2. User Accounts</h2>
                  <p className="text-body dark:text-white/80 leading-relaxed mb-4">
                    To access certain features, you may be required to register for an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-body dark:text-white/80">
                    <li>Provide accurate and complete information.</li>
                    <li>Maintain the security of your password.</li>
                    <li>Accept responsibility for all activities that occur under your account.</li>
                    <li>Notify us immediately of any unauthorized use.</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-red-500/5 border-2 border-red-500/20">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl text-heading dark:text-white mb-4">3. Prohibited Conduct</h2>
                  <p className="text-body dark:text-white/80 leading-relaxed mb-4">
                    You agree not to engage in any of the following prohibited activities:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm text-body dark:text-white/80">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full" />Violating laws or regulations</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full" />Infringing intellectual property</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full" />Distributing malware or viruses</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full" />Interfering with service security</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full" />Harassing other users</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full" />Scraping or data mining</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <div className="flex items-start gap-4">
                <Gavel className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl text-heading dark:text-white mb-4">4. Intellectual Property</h2>
                  <p className="text-body dark:text-white/80 leading-relaxed">
                    The services and their original content, features, and functionality are and will remain the exclusive property of HUK SONS IT and its licensors. Our trademarks may not be used in connection with any product or service without the prior written consent of HUK SONS IT.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <div className="flex items-start gap-4">
                <ShieldAlert className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl text-heading dark:text-white mb-4">5. Limitation of Liability</h2>
                  <p className="text-body dark:text-white/80 leading-relaxed">
                    In no event shall HUK SONS IT, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                  </p>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="p-10 bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/20 text-center">
              <h2 className="text-3xl text-heading dark:text-white mb-6">Questions about our Terms?</h2>
              <p className="text-lg text-body dark:text-white/80 mb-8 max-w-2xl mx-auto">
                Our legal team is available to clarify any aspect of these terms.
              </p>
              <a href="mailto:legal@huksons.com" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
                Contact Legal Team
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
