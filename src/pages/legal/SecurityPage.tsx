'use client';

import { Shield, Lock, Server, Eye, CheckCircle, FileCheck, Globe, Key } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function SecurityPage() {
  const certifications = [
    {
      title: 'ISO 27001',
      status: 'Aligned',
      description: 'Information Security Management System standards.'
    },
    {
      title: 'SOC 2 Type II',
      status: 'Aligned',
      description: 'Security, Availability, and Confidentiality controls.'
    },
    {
      title: 'GDPR',
      status: 'Compliant',
      description: 'General Data Protection Regulation compliance.'
    }
  ];

  const securityControls = [
    {
      title: 'Infrastructure Security',
      icon: Server,
      items: [
        'Tier-4 Data Centers (AWS/Azure)',
        'DDoS Protection & Mitigation',
        'Web Application Firewall (WAF)',
        'Intrusion Detection Systems (IDS)'
      ]
    },
    {
      title: 'Data Protection',
      icon: Lock,
      items: [
        'AES-256 Encryption at Rest',
        'TLS 1.3 Encryption in Transit',
        'Automated Daily Backups',
        'Data Residency Options'
      ]
    },
    {
      title: 'Access Control',
      icon: Key,
      items: [
        'Role-Based Access Control (RBAC)',
        'Multi-Factor Authentication (MFA)',
        'Single Sign-On (SSO) Support',
        'Just-in-Time (JIT) Access'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="Security & Infrastructure Assurance | HUK SONS IT"
        description="HUK SONS IT Security Policy. Our commitment to enterprise-grade security, ISO 27001 alignment, and infrastructure protection."
        keywords="security policy, information security, ISO 27001, infrastructure security, data protection, HUK SONS IT security"
        canonical="https://huksonsit.com/legal/security"
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
                <span className="text-sm uppercase tracking-wider text-primary">Security Assurance</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  Security &<br />Infrastructure
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Enterprise-grade security controls designed to protect your data and infrastructure.
              </p>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-3xl mx-auto mb-8">
                <p className="text-sm text-muted-foreground dark:text-white/80">
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

      {/* Compliance Badges */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-heading dark:text-white mb-4">Compliance & Standards</h2>
              <p className="text-muted-foreground dark:text-white/70">We align our security practices with global standards.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 text-center bg-white dark:bg-card border-2 border-subtle dark:border-subtle hover:border-primary/30 transition-all">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-heading dark:text-white mb-1">{cert.title}</h3>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                      {cert.status}
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{cert.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Controls Grid */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-heading dark:text-white mb-6">
                Security <span className="text-primary">Controls</span>
              </h2>
              <p className="text-xl text-muted-foreground dark:text-white/70 max-w-3xl mx-auto">
                A multi-layered approach to defense.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {securityControls.map((control, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-8 h-full bg-white dark:bg-card border-2 border-subtle dark:border-subtle hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <control.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-heading dark:text-white">{control.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {control.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-center gap-3 text-muted-foreground dark:text-white/80">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{item}</span>
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

      {/* Vulnerability Management */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white dark:bg-card border-2 border-subtle dark:border-subtle">
              <div className="flex items-start gap-6">
                <Eye className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl text-heading dark:text-white mb-4">Vulnerability Management</h2>
                  <p className="text-muted-foreground dark:text-white/80 leading-relaxed mb-6">
                    We maintain a continuous vulnerability management program that includes:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 dark:bg-white/5 rounded-lg">
                      <div className="font-semibold text-heading dark:text-white mb-1">Automated Scanning</div>
                      <div className="text-sm text-muted-foreground dark:text-white/60">Daily scans of all public-facing assets.</div>
                    </div>
                    <div className="p-4 bg-muted/50 dark:bg-white/5 rounded-lg">
                      <div className="font-semibold text-heading dark:text-white mb-1">Penetration Testing</div>
                      <div className="text-sm text-muted-foreground dark:text-white/60">Annual third-party security assessments.</div>
                    </div>
                    <div className="p-4 bg-muted/50 dark:bg-white/5 rounded-lg">
                      <div className="font-semibold text-heading dark:text-white mb-1">Bug Bounty</div>
                      <div className="text-sm text-muted-foreground dark:text-white/60">Private program for responsible disclosure.</div>
                    </div>
                    <div className="p-4 bg-muted/50 dark:bg-white/5 rounded-lg">
                      <div className="font-semibold text-heading dark:text-white mb-1">Patch Management</div>
                      <div className="text-sm text-muted-foreground dark:text-white/60">Critical patches applied within 24 hours.</div>
                    </div>
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
