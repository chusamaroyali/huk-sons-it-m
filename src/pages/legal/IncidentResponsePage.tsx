'use client';

import { AlertTriangle, Shield, Activity, Search, Lock, RefreshCw, BookOpen, Siren, CheckCircle2 } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function IncidentResponsePage() {
  const lifecycleSteps = [
    {
      title: 'Preparation',
      icon: Shield,
      description: 'Establishing response capabilities, training, and preventive measures.'
    },
    {
      title: 'Detection',
      icon: Search,
      description: 'Continuous monitoring and analysis of security events.'
    },
    {
      title: 'Containment',
      icon: Lock,
      description: 'Isolating affected systems to prevent further damage.'
    },
    {
      title: 'Eradication',
      icon: Activity,
      description: 'Removing the root cause and malware from the environment.'
    },
    {
      title: 'Recovery',
      icon: RefreshCw,
      description: 'Restoring systems to normal operation and verifying integrity.'
    },
    {
      title: 'Post-Incident',
      icon: BookOpen,
      description: 'Analyzing the incident to improve future response.'
    }
  ];

  const severityLevels = [
    {
      level: 'SEV-1',
      title: 'Critical',
      color: 'bg-red-500',
      description: 'Critical business impact, data breach, or widespread outage.'
    },
    {
      level: 'SEV-2',
      title: 'High',
      color: 'bg-orange-500',
      description: 'Significant impact, partial outage, or high-risk vulnerability.'
    },
    {
      level: 'SEV-3',
      title: 'Medium',
      color: 'bg-yellow-500',
      description: 'Moderate impact, degraded performance, or isolated issue.'
    },
    {
      level: 'SEV-4',
      title: 'Low',
      color: 'bg-blue-500',
      description: 'Minor impact, cosmetic issue, or informational event.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="Incident Response Plan | HUK SONS IT"
        description="HUK SONS IT Incident Response Plan. Our procedures for detecting, responding to, and recovering from security incidents."
        keywords="incident response, security incident, data breach, incident management, security operations"
        canonical="https://huksonsit.com/legal/incident-response"
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
                <AlertTriangle className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Security Operations</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  Incident Response
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Our structured approach to managing and mitigating security incidents to protect our customers and infrastructure.
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

      {/* Lifecycle Visualization */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-heading dark:text-white mb-6">
                Response <span className="text-primary">Lifecycle</span>
              </h2>
              <p className="text-xl text-body dark:text-white/70 max-w-3xl mx-auto">
                We follow the NIST Computer Security Incident Handling Guide (SP 800-61) framework.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {lifecycleSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-4 h-full bg-card border-2 border-subtle hover:border-primary/30 transition-all flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-xs font-bold text-primary mb-1">STEP {idx + 1}</div>
                    <h3 className="text-sm font-semibold text-heading dark:text-white mb-2">{step.title}</h3>
                    <p className="text-xs text-body dark:text-white/70">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Severity Levels */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-heading dark:text-white mb-4">Severity Classification</h2>
              <p className="text-body dark:text-white/70">How we categorize and prioritize security incidents.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {severityLevels.map((sev, idx) => (
                <Card key={idx} className="p-6 bg-card border-2 border-subtle flex items-start gap-4">
                  <div className={`w-12 h-12 ${sev.color} rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold`}>
                    {sev.level}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-heading dark:text-white mb-1">{sev.title}</h3>
                    <p className="text-sm text-body dark:text-white/70">{sev.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reporting CTA */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="p-10 bg-gradient-to-br from-red-500/10 to-transparent border-2 border-red-500/20 text-center">
              <Siren className="w-12 h-12 text-red-500 mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl text-heading dark:text-white mb-6">Report a Security Incident</h2>
              <p className="text-lg text-body dark:text-white/80 mb-8 max-w-2xl mx-auto">
                If you suspect a security incident or vulnerability involving HUK SONS IT systems, please report it immediately. We operate 24/7/365.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:security@huksons.com" className="px-8 py-4 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-colors w-full sm:w-auto">
                  Email Security Team
                </a>
                <a href="/legal/contact" className="px-8 py-4 bg-white dark:bg-white/10 text-heading dark:text-white border border-subtle rounded-full font-medium hover:bg-muted/5 dark:hover:bg-white/20 transition-colors w-full sm:w-auto">
                  View Contact Options
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
