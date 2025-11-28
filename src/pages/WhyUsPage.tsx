'use client';

import { CheckCircle2, Users, Target, Lock, FileCheck, TrendingUp, ArrowRight, Zap, Award, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { SEOHead } from '../components/SEOHead';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';

const differentiators = [
  {
    icon: Users,
    pillar: 'Engineering Depth',
    description: 'Every project is led by senior DevOps/DataOps engineers—no offloading or middle-layer outsourcing.',
    details: [
      '17+ years of cross-sector expertise',
      'Direct access to principal architects',
      'No delegation to junior teams',
      'Hands-on execution at every level',
    ],
  },
  {
    icon: Target,
    pillar: 'Business-first Mindset',
    description: 'Technical decisions aligned with measurable ROI, not technical curiosity.',
    details: [
      'Every recommendation tied to business outcomes',
      'Cost-benefit analysis for all initiatives',
      'Transparent ROI projections',
      'Quarterly business reviews',
    ],
  },
  {
    icon: TrendingUp,
    pillar: 'Scalable Systems, Not Staffing',
    description: 'Our builds replace dependency on large internal teams.',
    details: [
      'Automation-first architecture',
      'Self-healing infrastructure',
      'Reduced operational overhead',
      'Long-term cost efficiency',
    ],
  },
  {
    icon: Lock,
    pillar: 'Security by Design',
    description: 'GDPR, CCPA, and ISO 27001 principles baked into every layer.',
    details: [
      'Security audits at every phase',
      'Compliance-ready documentation',
      'Zero-trust architecture',
      'Regular penetration testing',
    ],
  },
  {
    icon: FileCheck,
    pillar: 'Outcome-driven Engagements',
    description: 'Transparent scope, milestone-based delivery, and audit-ready reporting.',
    details: [
      'Clear deliverables and timelines',
      'Weekly progress updates',
      'Comprehensive documentation',
      'Knowledge transfer included',
    ],
  },
];

const howWeWork = [
  {
    phase: 'Discovery & Scoping',
    duration: '1-2 Weeks',
    activities: [
      'Infrastructure audit and gap analysis',
      'Cost-benefit modeling',
      'Technical architecture blueprint',
      'SOW finalization',
    ],
  },
  {
    phase: 'Design & Planning',
    duration: '2-3 Weeks',
    activities: [
      'Detailed technical specifications',
      'Security and compliance review',
      'Resource allocation',
      'Milestone definition',
    ],
  },
  {
    phase: 'Build & Deployment',
    duration: '4-12 Weeks',
    activities: [
      'Agile development cycles',
      'Weekly stakeholder updates',
      'Continuous testing',
      'Staged rollout',
    ],
  },
  {
    phase: 'Optimization & Handoff',
    duration: '2-4 Weeks',
    activities: [
      'Performance tuning',
      'Knowledge transfer sessions',
      'Documentation delivery',
      'Post-deployment support',
    ],
  },
];

export function WhyUsPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      <SEOHead
        title="Why Choose HUK SONS IT | 5 Core Differentiators | Enterprise Technical Partner"
        description="Discover the 5 core differentiators that separate HUK SONS IT from traditional consulting firms: Engineering Depth, Business-first Mindset, Scalable Systems, Security by Design, and Outcome-driven Engagements. 17+ years expertise."
        keywords="why huk sons it, enterprise consulting, DevOps expertise, technical transformation, senior engineering, business ROI, scalable systems, security by design"
        canonical="https://huksonsit.com/why-us"
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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D3A9]/5 dark:bg-[#00D3A9]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#00D3A9]/3 dark:bg-[#00D3A9]/8 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />

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
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#00D3A9]/10 border border-[#00D3A9]/30 rounded-full">
                <Zap className="w-5 h-5 text-[#00D3A9]" />
                <span className="text-sm uppercase tracking-wider text-[#00D3A9]">Why HUK SONS IT</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8"
            >
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                Why Choose
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00D3A9] to-[#00D3A9]/60 bg-clip-text text-transparent">
                HUK SONS IT?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Five core differentiators that separate us from traditional consulting firms and offshore vendors
            </motion.p>

            {/* Hero CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <Button
                onClick={handleGetStarted}
                className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-10 py-6 text-lg group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center mt-12"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00D3A9] to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0D12] dark:text-white mb-4">
              Proven <span className="text-[#00D3A9]">Excellence</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, value: '17+', label: 'Years Experience' },
              { icon: Users, value: '200+', label: 'Enterprises Served' },
              { icon: Award, value: '50+', label: 'Industry Awards' },
              { icon: Sparkles, value: '95%+', label: 'Success Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 text-center group min-h-[100px] flex flex-col justify-center">
                  <div className="w-12 h-12 bg-[#00D3A9]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-[#00D3A9]" />
                  </div>
                  <div className="text-3xl md:text-4xl text-[#00D3A9] mb-2">{stat.value}</div>
                  <div className="text-sm text-[#0A0D12]/70 dark:text-white/70">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0D12] dark:text-white mb-4">
              Our Core <span className="text-[#00D3A9]">Differentiators</span>
            </h2>
            <p className="text-lg text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto">
              What sets us apart from traditional consulting firms
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-16">
            {differentiators.map((diff, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="space-y-8"
              >
                <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00D3A9]/20 to-[#00D3A9]/5 border-2 border-[#00D3A9]/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <diff.icon className="w-10 h-10 text-[#00D3A9]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0D12] dark:text-white">{diff.pillar}</h3>
                        <span className="px-4 py-1.5 bg-[#0A0D12]/5 dark:bg-white/5 border border-[#0A0D12]/10 dark:border-white/10 rounded-full text-sm text-[#0A0D12]/60 dark:text-white/60">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-xl md:text-2xl text-[#0A0D12]/70 dark:text-white/70 mb-6">{diff.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {diff.details.map((detail, detailIdx) => (
                          <motion.div
                            key={detailIdx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: detailIdx * 0.1 }}
                            className="flex items-start gap-3 p-4 bg-[#0A0D12]/5 dark:bg-white/[0.02] border border-[#0A0D12]/5 dark:border-white/5 rounded-xl hover:border-[#00D3A9]/30 hover:shadow-lg hover:shadow-[#00D3A9]/10 transition-all duration-300 group/item"
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#00D3A9] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                            <span className="text-[#0A0D12]/70 dark:text-white/70">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
                
                {idx < differentiators.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-[#00D3A9]/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width CTA 1 */}
      <section className="relative py-24 md:py-32 min-h-[70vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00D3A9]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00D3A9]/15 rounded-full blur-3xl" />
        </div>
        
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-8">
              Experience the <span className="text-[#00D3A9]">HUK SONS IT Difference</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#0A0D12]/70 dark:text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join 200+ global enterprises who have transformed their technical infrastructure with our proven methodologies and senior-level expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-12 py-8 text-xl group"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => navigate('/services')}
                variant="outline"
                className="border-2 border-[#0A0D12] dark:border-white text-[#0A0D12] dark:text-white hover:bg-[#0A0D12]/5 dark:hover:bg-white/5 px-12 py-8 text-xl"
              >
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
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
                How We <span className="text-[#00D3A9]">Work</span>
              </h2>
              <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 max-w-2xl mx-auto">
                A structured, milestone-driven approach to technical transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howWeWork.map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <Card className="relative min-h-[320px] md:min-h-[360px] p-6 bg-white/80 dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 rounded-2xl hover:border-[#00D3A9]/40 hover:shadow-2xl hover:shadow-[#00D3A9]/10 transition-all duration-300 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl text-[#00D3A9]">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="px-3 py-1 bg-[#00D3A9]/10 border border-[#00D3A9]/30 rounded-full text-xs text-[#00D3A9]">
                        {phase.duration}
                      </span>
                    </div>
                    <h3 className="text-xl text-[#0A0D12] dark:text-white mb-4">{phase.phase}</h3>
                    <div className="space-y-3 flex-1">
                      {phase.activities.map((activity, actIdx) => (
                        <div key={actIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00D3A9] mt-2 flex-shrink-0" />
                          <span className="text-sm text-[#0A0D12]/70 dark:text-white/70">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width CTA 2 */}
      <section className="relative py-24 md:py-32 min-h-[70vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-[#0A0D12]/5 dark:from-white/[0.02] to-transparent">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#00D3A9]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-12 md:p-16 bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent border-2 border-[#00D3A9]/30 rounded-3xl text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-8">
                Ready to Build <span className="text-[#00D3A9]">Systems That Scale?</span>
              </h2>
              <p className="text-xl md:text-2xl text-[#0A0D12]/70 dark:text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our engineering depth and business-first mindset can accelerate your technical transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleGetStarted}
                  className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-12 py-8 text-xl group transition-all duration-300 hover:shadow-xl hover:shadow-[#00D3A9]/20"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => navigate('/leadership')}
                  variant="outline"
                  className="border-2 border-[#0A0D12] dark:border-white text-[#0A0D12] dark:text-white hover:bg-[#0A0D12]/5 dark:hover:bg-white/5 px-12 py-8 text-xl"
                >
                  Meet Our Leadership
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
