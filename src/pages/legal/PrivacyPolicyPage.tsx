'use client';

import { Lock, Eye, Globe, Shield, FileText, UserCheck, Server, Database, Trash2, RefreshCw, Mail } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function PrivacyPolicyPage() {
  const dataCollectionMethods = [
    {
      title: 'Directly Provided',
      icon: UserCheck,
      description: 'Information you give us when you register, contact support, or request a quote.',
      items: ['Name & Contact Details', 'Company Information', 'Billing Data', 'Support Tickets']
    },
    {
      title: 'Automatically Collected',
      icon: Server,
      description: 'Data collected via cookies and logs when you interact with our services.',
      items: ['IP Address & Device ID', 'Browser Type', 'Usage Patterns', 'Performance Logs']
    },
    {
      title: 'Third-Party Sources',
      icon: Globe,
      description: 'Information from partners and public sources to enhance our services.',
      items: ['Social Media Profiles', 'Business Directories', 'Marketing Partners', 'Credit Bureaus']
    }
  ];

  const userRights = [
    {
      title: 'Right to Access',
      icon: Eye,
      description: 'Request a copy of the personal data we hold about you.'
    },
    {
      title: 'Right to Rectification',
      icon: RefreshCw,
      description: 'Request correction of inaccurate or incomplete data.'
    },
    {
      title: 'Right to Erasure',
      icon: Trash2,
      description: 'Request deletion of your data ("Right to be Forgotten").'
    },
    {
      title: 'Right to Portability',
      icon: Database,
      description: 'Request transfer of your data to another service provider.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="Privacy Policy | HUK SONS IT"
        description="HUK SONS IT Global Privacy Policy. How we collect, use, and protect your personal data in compliance with GDPR, CCPA, and global standards."
        keywords="privacy policy, data protection, GDPR, CCPA, personal data, HUK SONS IT privacy"
        canonical="https://huksonsit.com/legal/privacy"
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
                <Lock className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Data Protection</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                We are committed to protecting your personal data and ensuring transparency in how we handle your information globally.
              </p>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-3xl mx-auto mb-8">
                <p className="text-sm text-body dark:text-white/80">
                  <strong>Subsidiary Disclosure:</strong> HUK SONS IT operates as a legally separate subsidiary of HUK SONS. When you engage with this site or our services, you are interacting with HUK SONS IT (a subsidiary of HUK SONS) as the contracting entity, unless a signed agreement specifies otherwise.
                </p>
              </div>

              <div className="text-sm text-muted-foreground dark:text-white/60">
                Last Updated: November 29, 2025 | Version 2.0
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">1. Introduction</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                This Privacy Policy describes how HUK SONS IT ("we", "us", or "our") collects, uses, and discloses your personal information when you use our website, services, or interact with us. We act as a <strong>Data Controller</strong> for the personal data we collect through our website and marketing activities. For data processed on behalf of our customers through our services, we act as a <strong>Data Processor</strong>.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Collection Grid */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-heading dark:text-white mb-6">
                Data We <span className="text-primary">Collect</span>
              </h2>
              <p className="text-xl text-body dark:text-white/70 max-w-3xl mx-auto">
                We collect information to provide better services to all our users.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {dataCollectionMethods.map((method, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-8 h-full bg-card border-2 border-subtle hover:border-primary/30 transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-heading dark:text-white mb-3">{method.title}</h3>
                    <p className="text-body dark:text-white/70 mb-6 text-sm">{method.description}</p>
                    <ul className="space-y-2">
                      {method.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-center gap-2 text-sm text-body dark:text-white/80">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Usage & Transfers */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">3. How We Use Your Data</h2>
              <p className="text-body dark:text-white/80 leading-relaxed mb-4">
                We use your personal data for the following purposes, based on legitimate business interests or your consent:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {['Provide & maintain services', 'Process transactions', 'Send technical notices', 'Respond to support requests', 'Improve user experience', 'Marketing communications'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-body dark:text-white/80">
                    <Shield className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">4. International Data Transfers</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                As a global organization, we may transfer your personal data to countries other than the one in which you live. We ensure appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs), to protect your data during these transfers, in compliance with GDPR and other applicable laws.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* User Rights Grid */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-heading dark:text-white mb-6">
                Your <span className="text-primary">Rights</span>
              </h2>
              <p className="text-xl text-body dark:text-white/70 max-w-3xl mx-auto">
                You have control over your personal data. Here are your rights under global privacy laws.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {userRights.map((right, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 h-full bg-card border-2 border-subtle text-center hover:border-primary/30 transition-all">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <right.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-heading dark:text-white mb-2">{right.title}</h3>
                    <p className="text-sm text-body dark:text-white/70">{right.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="p-10 bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/20 text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl text-heading dark:text-white mb-6">Contact Our Privacy Team</h2>
              <p className="text-lg text-body dark:text-white/80 mb-8 max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact our Data Protection Officer.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-left">
                <div className="p-4 bg-white dark:bg-black/20 rounded-lg border border-primary/20">
                  <div className="text-sm text-muted-foreground dark:text-white/60 mb-1">Email Us</div>
                  <a href="mailto:privacy@huksons.com" className="text-lg font-semibold text-primary hover:underline">privacy@huksons.com</a>
                </div>
                <div className="p-4 bg-white dark:bg-black/20 rounded-lg border border-primary/20">
                  <div className="text-sm text-muted-foreground dark:text-white/60 mb-1">Mailing Address</div>
                  <div className="text-heading dark:text-white font-medium">
                    Street No 1, House No 2, Garden Town,<br />Bahawalpur 63100, Pakistan
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
