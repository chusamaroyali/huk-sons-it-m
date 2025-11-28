'use client';

import { Target, Eye, Award, Globe, Users, Shield, Zap, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { SEOHead } from '../components/SEOHead';
import { motion } from 'motion/react';
import { FullScreenCTA } from '../components/FullScreenCTA';
import { Card } from '../components/ui/card';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      <SEOHead
        title="About HUK SONS IT | Global Technical Transformation & Engineering Firm"
        description="HUK SONS IT is a global technical transformation and engineering firm helping scaling organizations modernize infrastructure, automate operations, and engineer data systems for sustainable growth. 17+ years of enterprise expertise."
        keywords="technical transformation, engineering firm, cloud infrastructure, DevOps, DataOps, enterprise solutions, digital transformation, Pakistan, USA, UAE"
        canonical="https://huksonsit.com/about"
      />

      {/* Animated Background Elements */}
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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D3A9]/5 dark:bg-[#00D3A9]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#00D3A9]/3 dark:bg-[#00D3A9]/8 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00D3A9]/20 via-[#00D3A9]/10 to-transparent border-l-2 border-[#00D3A9] rounded-r-full">
                <Globe className="w-5 h-5 text-[#00D3A9]" />
                <span className="text-sm uppercase tracking-wider text-[#00D3A9]">About HUK SONS IT</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8"
            >
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white via-[#0A0D12] dark:via-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                Not a Vendor.
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00D3A9] to-[#00D3A9]/60 bg-clip-text text-transparent">
                A Technical Partner.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              Global technical transformation firm helping scaling organizations modernize infrastructure, automate operations, and engineer data systems for sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mt-12"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00D3A9] to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1 space-y-6"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white">
                  Executive <span className="text-[#00D3A9]">Summary</span>
                </h2>
                <div className="space-y-4 text-lg text-[#0A0D12]/70 dark:text-white/70 leading-relaxed">
                  <p>
                    <strong className="text-[#00D3A9]">HUK SONS IT</strong> is a global technical transformation and engineering firm that helps scaling organizations modernize infrastructure, automate operations, and engineer data systems for sustainable growth.
                  </p>
                  <p>
                    Headquartered in <span className="text-[#00D3A9]">Pakistan</span> with operational reach in the{' '}
                    <span className="text-[#00D3A9]">United States</span> and{' '}
                    <span className="text-[#00D3A9]">United Arab Emirates</span>, HUK SONS IT functions as an enterprise-grade, remote-first consultancy.
                  </p>
                  <p>
                    Unlike traditional agencies or outsourcing shops, HUK SONS IT operates as a <strong className="text-[#00D3A9]">technical partner</strong>—bridging engineering depth with financial logic.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2 relative"
              >
                <Card className="relative p-12 bg-gradient-to-br from-[#00D3A9]/10 to-transparent dark:from-[#00D3A9]/5 border-2 border-[#00D3A9]/20 rounded-3xl hover:shadow-2xl hover:shadow-[#00D3A9]/20 transition-all duration-500">
                  <div className="text-center space-y-4">
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-6xl md:text-7xl text-[#00D3A9]"
                    >
                      17+
                    </motion.div>
                    <div className="text-xl text-[#0A0D12] dark:text-white">Years of Experience</div>
                    <p className="text-[#0A0D12]/60 dark:text-white/60">Delivering enterprise-grade solutions globally</p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-4">
                Our <span className="text-[#00D3A9]">Foundation</span>
              </h2>
              <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 max-w-2xl mx-auto">
                Every decision, every project, every engagement is guided by our core purpose, mission, and vision.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Core Purpose',
                  desc: 'To build resilient, cost-efficient, and scalable digital foundations that empower organizations to grow faster—with fewer risks, lower costs, and greater predictability.'
                },
                {
                  icon: Award,
                  title: 'Mission',
                  desc: 'To modernize the world\'s digital infrastructure—system by system—so organizations can scale intelligently, operate efficiently, and make data-driven decisions at every level.'
                },
                {
                  icon: Eye,
                  title: 'Vision',
                  desc: 'To become a global authority in technical transformation—where cloud, automation, and data converge to create measurable enterprise advantage.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A0D12]/5 dark:from-white/[0.05] to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <Card className="relative min-h-[320px] p-8 bg-white/80 dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 rounded-2xl hover:border-[#00D3A9]/40 hover:shadow-2xl hover:shadow-[#00D3A9]/10 transition-all duration-500 flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00D3A9]/20 to-[#00D3A9]/5 border border-[#00D3A9]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-8 h-8 text-[#00D3A9]" />
                    </div>
                    <h3 className="text-2xl text-[#0A0D12] dark:text-white mb-4">{item.title}</h3>
                    <p className="text-[#0A0D12]/70 dark:text-white/70 leading-relaxed flex-1">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Operations */}
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-4">
                Global <span className="text-[#00D3A9]">Operations</span>
              </h2>
              <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 max-w-2xl mx-auto">
                Strategic presence across three continents with a 100% remote-first delivery model.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Globe, title: 'Headquarters', location: 'Pakistan', subtitle: 'Engineering & Delivery' },
                { icon: Globe, title: 'United States', location: 'Operational', subtitle: 'Client Relations' },
                { icon: Globe, title: 'UAE', location: 'Operational', subtitle: 'Regional Partnerships' },
                { icon: Users, title: 'Remote-First', location: '100% Distributed', subtitle: 'Secure Multi-Region' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <Card className="relative min-h-[200px] p-6 bg-white/80 dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 rounded-xl hover:border-[#00D3A9]/40 hover:shadow-xl hover:shadow-[#00D3A9]/10 transition-all duration-300 text-center flex flex-col">
                    <item.icon className="w-12 h-12 text-[#00D3A9] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg text-[#0A0D12] dark:text-white mb-2">{item.title}</h3>
                    <p className="text-[#0A0D12]/70 dark:text-white/70">{item.location}</p>
                    <p className="text-sm text-[#0A0D12]/50 dark:text-white/50 mt-auto">{item.subtitle}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-white dark:bg-white/[0.02] border-2 border-[#0A0D12]/10 dark:border-white/10 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl text-[#0A0D12] dark:text-white mb-4">Languages</h4>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-[#00D3A9]/10 border border-[#00D3A9]/30 rounded-lg text-[#00D3A9]">
                        English (Primary)
                      </span>
                      <span className="px-4 py-2 bg-[#0A0D12]/5 dark:bg-white/5 border border-[#0A0D12]/10 dark:border-white/10 rounded-lg text-[#0A0D12]/70 dark:text-white/70">
                        Arabic (Secondary)
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl text-[#0A0D12] dark:text-white mb-4">Time Zone Coverage</h4>
                    <p className="text-[#0A0D12]/70 dark:text-white/70">24/7 support with multi-timezone team availability across all regions</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-4">
                Core <span className="text-[#00D3A9]">Values</span>
              </h2>
              <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 max-w-2xl mx-auto">
                The principles that guide every engagement, every decision, and every line of code we write.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'Integrity', desc: 'We engineer with transparency and accountability.', icon: Shield },
                { name: 'Excellence', desc: 'Every engagement is senior-led, never templated.', icon: Award },
                { name: 'Efficiency', desc: 'Optimize before you scale.', icon: Zap },
                { name: 'Security', desc: 'Build resilience, not risk.', icon: Shield },
                { name: 'Partnership', desc: 'Long-term alignment over short-term projects.', icon: Users }
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <Card className="relative min-h-[220px] p-6 bg-white/80 dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 rounded-xl hover:border-[#00D3A9]/40 hover:shadow-xl hover:shadow-[#00D3A9]/10 transition-all duration-300 text-center flex flex-col">
                    <div className="w-16 h-16 bg-[#00D3A9]/10 border border-[#00D3A9]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-[#00D3A9]" />
                    </div>
                    <h3 className="text-lg text-[#0A0D12] dark:text-white mb-3">{value.name}</h3>
                    <p className="text-sm text-[#0A0D12]/60 dark:text-white/60 flex-1">{value.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Statement */}
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="relative p-12 md:p-16 bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent border-2 border-[#00D3A9]/20 rounded-3xl overflow-hidden text-center hover:shadow-2xl hover:shadow-[#00D3A9]/20 transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D3A9]/10 rounded-full blur-3xl" />
                <div className="relative">
                  <blockquote className="text-2xl md:text-3xl text-[#0A0D12]/90 dark:text-white/90 italic leading-relaxed mb-6">
                    "HUK SONS IT is not a vendor—it's a technical transformation partner for organizations that demand scale without chaos."
                  </blockquote>
                  <p className="text-3xl md:text-4xl text-[#00D3A9]">
                    Build systems that make growth inevitable.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Screen CTA */}
      <FullScreenCTA />
    </div>
  );
}
