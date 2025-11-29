'use client';

import { ArrowRight, Shield, Clock, CheckCircle2, AlertTriangle, FileText, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function SLAPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
            <SEOHead
        title="Service Level Agreements (SLA) | HUK SONS IT"
        description="Review our Service Level Agreements. Choose between Standard and Enterprise support tiers with guaranteed uptime and response times."
        keywords="SLA, service level agreement, uptime guarantee, support tiers, enterprise support"
        canonical="https://huksons.com/legal/sla"
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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Service Level Agreements</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8"
            >
              <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                Enterprise-Grade
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Service Commitments
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              Guaranteed uptime, response times, and support coverage backed by legally binding commitments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 max-w-3xl mx-auto p-4 bg-primary/5 border border-primary/20 rounded-lg"
            >
              <p className="text-sm text-center text-body dark:text-white/80">
                <strong>Subsidiary Disclosure:</strong> HUK SONS IT operates as a legally separate subsidiary of HUK SONS. When you engage with this site or our services, you are interacting with HUK SONS IT (a subsidiary of HUK SONS) as the contracting entity, unless a signed agreement specifies otherwise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SLA Options */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Standard SLA */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 md:p-10 bg-card border-2 border-subtle hover:border-primary transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl text-heading dark:text-white mb-4">Standard SLA</h2>
                  <p className="text-lg text-body dark:text-white/70 mb-8">
                    Comprehensive service commitments for growing enterprises with predictable infrastructure needs.
                  </p>
                  <Button
                    onClick={() => navigate('/legal/sla/standard')}
                    className="w-full bg-primary hover:bg-primary/90 text-black group"
                  >
                    View Standard SLA
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>

              {/* Enterprise SLA */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/30 hover:border-primary transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl text-heading dark:text-white mb-4">Enterprise SLA</h2>
                  <p className="text-lg text-body dark:text-white/70 mb-8">
                    Premium service commitments with 24/7/365 support, faster response times, and dedicated resources.
                  </p>
                  <Button
                    onClick={() => navigate('/legal/sla/enterprise')}
                    className="w-full bg-primary hover:bg-primary/90 text-black group"
                  >
                    View Enterprise SLA
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-heading dark:text-white mb-4">
                What Our <span className="text-primary">SLAs Cover</span>
              </h2>
              <p className="text-lg text-body dark:text-white/70">
                Comprehensive commitments across all critical service areas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Clock,
                  title: 'Response Times',
                  description: 'Guaranteed response windows for all priority levels, from critical incidents to general inquiries.'
                },
                {
                  icon: Shield,
                  title: 'Uptime Guarantees',
                  description: '99.9% uptime commitment with automatic credits for any service disruptions beyond thresholds.'
                },
                {
                  icon: Zap,
                  title: 'Incident Resolution',
                  description: 'Clear resolution timeframes based on severity with escalation procedures and status updates.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Service Credits',
                  description: 'Automatic credit calculation when SLA commitments are not met, applied to future billing.'
                },
                {
                  icon: AlertTriangle,
                  title: 'Priority Support',
                  description: 'Dedicated support channels with guaranteed response times based on incident severity.'
                },
                {
                  icon: FileText,
                  title: 'Reporting',
                  description: 'Monthly SLA performance reports with detailed metrics, incidents, and resolution times.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card border-2 border-subtle hover:border-primary transition-all duration-300 h-full min-h-[280px] flex flex-col">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl text-heading dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-body dark:text-white/70 leading-relaxed flex-1">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-heading dark:text-white mb-6">
              Need a Custom <span className="text-primary">SLA?</span>
            </h2>
            <p className="text-xl text-body dark:text-white/70 mb-8 max-w-2xl mx-auto">
              We can tailor service commitments to meet your specific enterprise requirements and compliance needs.
            </p>
            <Button
              onClick={() => navigate('/get-started')}
              className="bg-primary hover:bg-primary/90 text-black px-10 py-6 text-lg group"
            >
              Discuss Custom SLA
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
