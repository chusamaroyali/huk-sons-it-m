'use client';

import { AlertCircle, Shield, Zap, Clock, CheckCircle2, ArrowRight, Target, Gauge, Server, Database } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const metrics = [
  { metric: 'Response Time', value: '24-72h', description: 'Critical recovery window' },
  { metric: 'Data Loss', value: 'Zero', description: 'Complete data protection' },
  { metric: 'Success Rate', value: '100%', description: 'Mission completion' },
  { metric: 'Availability', value: '24/7', description: 'Global response team' },
];

const serviceFeatures = [
  {
    icon: Clock,
    title: 'Rapid Response Deployment',
    subtitle: 'IMMEDIATE ACTION',
    description: 'Deploy expert engineering teams within hours to address critical system failures and business-threatening incidents.',
    outcomes: [
      '24-hour initial response',
      'Expert team deployment',
      'Immediate triage and assessment',
      'Priority resource allocation',
    ],
  },
  {
    icon: Server,
    title: 'System Recovery & Stabilization',
    subtitle: 'RESTORE OPERATIONS',
    description: 'Execute comprehensive recovery procedures to restore critical systems and stabilize production environments.',
    outcomes: [
      'System recovery execution',
      'Infrastructure stabilization',
      'Service restoration',
      'Performance validation',
    ],
  },
  {
    icon: Database,
    title: 'Zero-Data-Loss Migration',
    subtitle: 'CRITICAL TRANSITIONS',
    description: 'Execute high-stakes migrations with zero tolerance for data loss, ensuring complete business continuity.',
    outcomes: [
      'Pre-migration validation',
      'Zero-downtime execution',
      'Complete data verification',
      'Rollback procedures',
    ],
  },
  {
    icon: Shield,
    title: 'Incident Response & Remediation',
    subtitle: 'CRISIS MANAGEMENT',
    description: 'Manage security incidents, breaches, and system compromises with expert incident response protocols.',
    outcomes: [
      'Incident containment',
      'Root cause analysis',
      'Security remediation',
      'Post-incident hardening',
    ],
  },
  {
    icon: Gauge,
    title: 'Cost Containment',
    subtitle: 'IMMEDIATE OPTIMIZATION',
    description: 'Rapidly identify and eliminate runaway costs, resource waste, and inefficient infrastructure spending.',
    outcomes: [
      'Cost spike analysis',
      'Resource optimization',
      'Immediate cost reduction',
      'Budget stabilization',
    ],
  },
  {
    icon: Target,
    title: 'Post-Crisis Optimization',
    subtitle: 'LONG-TERM STABILITY',
    description: 'Implement permanent solutions and preventive measures to avoid future incidents and improve resilience.',
    outcomes: [
      'Infrastructure hardening',
      'Monitoring implementation',
      'Prevention strategies',
      'Resilience planning',
    ],
  },
];

export function EmergencyInterventionPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-us');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #00D3A9 1px, transparent 1px),
            linear-gradient(to bottom, #00D3A9 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-500/5 dark:bg-red-500/10 rounded-full blur-[120px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00D3A9]/5 dark:bg-[#00D3A9]/10 rounded-full blur-[100px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '10s' }} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500/20 via-orange-500/10 to-transparent border-l-2 border-red-500 rounded-r-full">
                <AlertCircle className="w-5 h-5 text-red-500 dark:text-orange-400" />
                <span className="text-sm uppercase tracking-wider text-red-500 dark:text-orange-400">Emergency Response</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8"
            >
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white via-[#0A0D12] dark:via-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                Emergency Technical
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Intervention
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Rapid-response engineering teams for crisis situations—migrations, recovery, and stabilization when failure isn't an option.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <Button
                onClick={handleGetStarted}
                className="bg-red-500 hover:bg-red-600 dark:bg-[#00D3A9] dark:hover:bg-[#00D3A9]/90 text-white dark:text-[#0A0D12] px-10 py-6 text-lg group transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
              >
                Request Emergency Support
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 md:p-8 text-center bg-white dark:bg-white/[0.03] border-[#0A0D12]/10 dark:border-white/10 hover:border-red-500 dark:hover:border-[#00D3A9] transition-all duration-300 group">
                  <div className="text-3xl md:text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {item.value}
                  </div>
                  <div className="text-sm md:text-base text-[#0A0D12] dark:text-white mb-1">{item.metric}</div>
                  <div className="text-xs text-[#0A0D12]/60 dark:text-white/60">{item.description}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features Grid */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-6">
              Six Pillars of <span className="text-red-500 dark:text-[#00D3A9]">Crisis Response</span>
            </h2>
            <p className="text-lg md:text-xl text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto">
              Comprehensive emergency services designed to restore critical operations rapidly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-red-500 dark:hover:border-[#00D3A9] transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-red-500/10 dark:bg-[#00D3A9]/10 border-2 border-red-500/20 dark:border-[#00D3A9]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <feature.icon className="w-8 h-8 text-red-500 dark:text-[#00D3A9]" />
                    </div>
                    <div className="px-3 py-1 bg-[#0A0D12]/5 dark:bg-white/5 rounded-full">
                      <span className="text-xs text-[#0A0D12]/60 dark:text-white/60">0{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl text-[#0A0D12] dark:text-white mb-2 group-hover:text-red-500 dark:group-hover:text-[#00D3A9] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-red-500/80 dark:text-[#00D3A9]/80 mb-4 uppercase tracking-wider">
                    {feature.subtitle}
                  </p>
                  <p className="text-base text-[#0A0D12]/80 dark:text-white/80 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-[#0A0D12]/10 dark:border-white/10">
                    {feature.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-500 dark:text-[#00D3A9] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#0A0D12]/80 dark:text-white/80">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-6">
              Need <span className="text-red-500 dark:text-[#00D3A9]">Emergency Support?</span>
            </h2>
            <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-12 max-w-2xl mx-auto">
              Our rapid response team is available 24/7 to handle critical situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                className="bg-red-500 hover:bg-red-600 dark:bg-[#00D3A9] dark:hover:bg-[#00D3A9]/90 text-white dark:text-[#0A0D12] px-10 py-6 text-lg group"
              >
                Get Emergency Support
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => navigate('/solutions')}
                className="bg-transparent border-2 border-[#0A0D12] dark:border-white hover:bg-[#0A0D12] dark:hover:bg-white text-[#0A0D12] dark:text-white hover:text-white dark:hover:text-[#0A0D12] px-10 py-6 text-lg"
              >
                View All Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
