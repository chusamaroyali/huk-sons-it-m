'use client';

import { TrendingUp, Target, Globe2, Users, Map, SearchCheck, Award, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const metrics = [
  { metric: 'Revenue Growth', value: '3-5x', description: 'Average business growth' },
  { metric: 'Market Success', value: '94%', description: 'Successful entry rate' },
  { metric: 'Time Reduction', value: '40%', description: 'Faster market entry' },
  { metric: 'ROI Improvement', value: '60%', description: 'GTM efficiency gain' },
];

const serviceFeatures = [
  {
    icon: Target,
    title: 'Go-to-Market Strategy',
    subtitle: 'MARKET SUCCESS PLANNING',
    description: 'Comprehensive GTM strategy development including market positioning, value proposition, pricing strategy, and channel optimization for successful market entry and growth.',
    outcomes: [
      'Market positioning framework',
      'Pricing & packaging strategy',
      'Channel optimization plan',
      'Competitive differentiation',
    ],
  },
  {
    icon: Zap,
    title: 'Go-to-Market Execution',
    subtitle: 'EXECUTE GROWTH STRATEGIES',
    description: 'End-to-end execution support for go-to-market initiatives including sales enablement, marketing campaigns, partnership development, and performance tracking.',
    outcomes: [
      'Sales enablement programs',
      'Marketing campaign execution',
      'Partnership development',
      'Performance dashboards',
    ],
  },
  {
    icon: SearchCheck,
    title: 'Growth Diagnostic',
    subtitle: 'IDENTIFY GROWTH GAPS',
    description: 'Comprehensive analysis of current growth drivers, bottlenecks, and opportunities with actionable recommendations to accelerate revenue growth.',
    outcomes: [
      'Growth gap analysis',
      'Bottleneck identification',
      'Opportunity mapping',
      'Actionable roadmap',
    ],
  },
  {
    icon: Users,
    title: 'Founder Alignment',
    subtitle: 'ALIGN LEADERSHIP GOALS',
    description: 'Strategic alignment workshops for founders and executive teams to establish unified growth vision, priorities, and execution frameworks.',
    outcomes: [
      'Leadership alignment',
      'Growth vision clarity',
      'Priority framework',
      'Decision-making protocols',
    ],
  },
  {
    icon: Globe2,
    title: 'Global Expansion',
    subtitle: 'LAUNCH IN NEW REGIONS',
    description: 'Strategic planning and execution support for international expansion including market assessment, regulatory compliance, and operational setup.',
    outcomes: [
      'Market feasibility studies',
      'Regulatory compliance roadmap',
      'Operational setup support',
      'Regional GTM strategy',
    ],
  },
  {
    icon: Map,
    title: 'New Market Entry',
    subtitle: 'LAUNCH IN NEW MARKETS',
    description: 'Comprehensive market entry strategy for new verticals, segments, or product categories with risk mitigation and success metrics.',
    outcomes: [
      'Market entry strategy',
      'Risk assessment',
      'Success metrics framework',
      'Launch execution plan',
    ],
  },
  {
    icon: Award,
    title: 'Market Intelligence',
    subtitle: 'DEEP GROWTH INSIGHTS',
    description: 'Continuous market research, competitive intelligence, and trend analysis to inform strategic decisions and maintain competitive advantage.',
    outcomes: [
      'Competitive intelligence',
      'Market trend analysis',
      'Customer insights',
      'Strategic recommendations',
    ],
  },
  {
    icon: CheckCircle2,
    title: 'Capability Reviews',
    subtitle: 'ASSESS TEAM CAPABILITIES',
    description: 'Comprehensive assessment of organizational capabilities, skills gaps, and resource requirements to support growth objectives.',
    outcomes: [
      'Capability gap analysis',
      'Skills assessment',
      'Resource planning',
      'Development roadmap',
    ],
  },
];

export function GrowthServicesPage() {
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
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-500/5 dark:bg-green-500/10 rounded-full blur-[120px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00D3A9]/5 dark:bg-[#00D3A9]/10 rounded-full blur-[100px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '10s' }} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Service Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 via-emerald-500/10 to-transparent border-l-2 border-green-500 rounded-r-full">
                <TrendingUp className="w-5 h-5 text-green-500 dark:text-emerald-400" />
                <span className="text-sm uppercase tracking-wider text-green-500 dark:text-emerald-400">Growth Solutions</span>
              </div>
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8"
            >
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white via-[#0A0D12] dark:via-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                Strategic Growth &
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Market Expansion
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Comprehensive go-to-market strategy, market expansion, and growth execution solutions for enterprises scaling globally.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <Button
                onClick={handleGetStarted}
                className="bg-green-500 hover:bg-green-600 dark:bg-[#00D3A9] dark:hover:bg-[#00D3A9]/90 text-white dark:text-[#0A0D12] px-10 py-6 text-lg group transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
              >
                Start Your Growth Journey
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
                <Card className="p-6 md:p-8 text-center bg-white dark:bg-white/[0.03] border-[#0A0D12]/10 dark:border-white/10 hover:border-green-500 dark:hover:border-[#00D3A9] transition-all duration-300 group">
                  <div className="text-3xl md:text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
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
              Eight Pillars of <span className="text-green-500 dark:text-[#00D3A9]">Growth Excellence</span>
            </h2>
            <p className="text-lg md:text-xl text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto">
              Comprehensive growth solutions designed to accelerate your market expansion and revenue growth.
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
                <Card className="group p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-green-500 dark:hover:border-[#00D3A9] transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 h-full">
                  {/* Icon & Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-green-500/10 dark:bg-[#00D3A9]/10 border-2 border-green-500/20 dark:border-[#00D3A9]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <feature.icon className="w-8 h-8 text-green-500 dark:text-[#00D3A9]" />
                    </div>
                    <div className="px-3 py-1 bg-[#0A0D12]/5 dark:bg-white/5 rounded-full">
                      <span className="text-xs text-[#0A0D12]/60 dark:text-white/60">0{index + 1}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl md:text-3xl text-[#0A0D12] dark:text-white mb-2 group-hover:text-green-500 dark:group-hover:text-[#00D3A9] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-green-500/80 dark:text-[#00D3A9]/80 mb-4 uppercase tracking-wider">
                    {feature.subtitle}
                  </p>
                  <p className="text-base text-[#0A0D12]/80 dark:text-white/80 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Outcomes */}
                  <div className="space-y-3 pt-6 border-t border-[#0A0D12]/10 dark:border-white/10">
                    {feature.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-[#00D3A9] flex-shrink-0 mt-0.5" />
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
              Ready to <span className="text-green-500 dark:text-[#00D3A9]">Accelerate Growth?</span>
            </h2>
            <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss your growth objectives and create a strategic roadmap for market expansion and revenue acceleration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                className="bg-green-500 hover:bg-green-600 dark:bg-[#00D3A9] dark:hover:bg-[#00D3A9]/90 text-white dark:text-[#0A0D12] px-10 py-6 text-lg group"
              >
                Get Started
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
