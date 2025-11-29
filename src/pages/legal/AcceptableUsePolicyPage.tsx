'use client';

import { Shield, AlertTriangle, CheckCircle2, XCircle, Server, Lock, Zap, Mail, Globe } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function AcceptableUsePolicyPage() {
  const authorizedUses = [
    'Accessing our services via documented APIs and interfaces',
    'Using the platform for legitimate business purposes',
    'Conducting security research within our Responsible Disclosure program',
    'Integrating with third-party services as permitted by documentation'
  ];

  const prohibitedActivities = [
    {
      category: 'Illegal & Harmful Content',
      icon: AlertTriangle,
      items: [
        'Hosting or transmitting illegal content (CSAM, terrorism, etc.)',
        'Promoting violence, hate speech, or harassment',
        'Distributing malware, viruses, or malicious code',
        'Engaging in fraud, phishing, or social engineering'
      ]
    },
    {
      category: 'System Abuse & Security',
      icon: Lock,
      items: [
        'Attempting to bypass security controls or authentication',
        'Executing Denial of Service (DoS) attacks',
        'Unauthorized vulnerability scanning or penetration testing',
        'Reverse engineering or decompiling our software'
      ]
    },
    {
      category: 'Network & Resource Abuse',
      icon: Server,
      items: [
        'Cryptocurrency mining or excessive resource consumption',
        'Sending unsolicited bulk email (SPAM)',
        'Scraping or automated data collection without permission',
        'Using the service to proxy or mask traffic for malicious purposes'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
      <SEOHead
        title="Acceptable Use Policy (AUP) | HUK SONS IT"
        description="HUK SONS IT Acceptable Use Policy. Guidelines for authorized use, prohibited activities, and enforcement measures for our enterprise services."
        keywords="acceptable use policy, AUP, prohibited activities, system abuse, security guidelines, HUK SONS IT legal"
        canonical="https://huksonsit.com/legal/aup"
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
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Legal & Compliance</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading to-heading/60 bg-clip-text text-transparent">
                  Acceptable Use Policy
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Guidelines ensuring the safety, security, and reliability of our platform for all enterprise users.
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

      {/* Authorized Use */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-heading mb-4">
                Authorized Use
              </h2>
              <p className="text-lg text-body/70">
                You agree to use HUK SONS IT services only for lawful purposes and in accordance with this policy.
              </p>
            </div>

            <Card className="p-8 bg-card border-2 border-subtle">
              <ul className="space-y-4">
                {authorizedUses.map((use, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-body/80 text-lg">{use}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-heading mb-6">
                Prohibited Activities
              </h2>
              <p className="text-xl text-body/70 max-w-3xl mx-auto">
                The following activities are strictly prohibited on the HUK SONS IT platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {prohibitedActivities.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 h-full bg-card border-2 border-red-500/10 hover:border-red-500/30 transition-all">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-heading">{category.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2 text-sm text-body/70">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-1.5" />
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

      {/* Enforcement */}
      <section className="relative py-16 md:py-24 bg-body/5">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="p-10 border-2 border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-10 h-10 text-primary" />
                <h2 className="text-3xl text-heading">Enforcement & Consequences</h2>
              </div>
              <div className="space-y-6 text-body/80">
                <p>
                  HUK SONS IT reserves the right to investigate any violation of this policy. If we determine that a violation has occurred, we may take immediate action, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Issuing a formal warning</li>
                  <li>Suspending or terminating access to services</li>
                  <li>Removing offending content</li>
                  <li>Reporting illegal activities to law enforcement</li>
                  <li>Pursuing legal action for damages</li>
                </ul>
                <p className="text-sm opacity-70 pt-4">
                  We may also cooperate with legal authorities and third parties in the investigation of alleged wrongdoing.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
