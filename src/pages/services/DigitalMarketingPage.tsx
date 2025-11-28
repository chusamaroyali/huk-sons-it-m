'use client';

import { Megaphone, Search, Share2, Mail, CheckCircle2, ArrowRight, Target, TrendingUp, BarChart2, Users } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const metrics = [
  { metric: 'SEO Growth', value: '300%+', description: 'Average organic traffic increase' },
  { metric: 'Conversion Rate', value: '5-15%', description: 'Optimized funnel performance' },
  { metric: 'ROI Improvement', value: '4-8x', description: 'Marketing spend efficiency' },
  { metric: 'Campaign Reach', value: 'Global', description: 'Multi-channel coverage' },
];

const serviceFeatures = [
  {
    icon: Search,
    title: 'SEO & Search Marketing',
    subtitle: 'ORGANIC GROWTH',
    description: 'Comprehensive SEO optimization across all search engines with technical, on-page, and off-page strategies.',
    outcomes: [
      'Technical SEO audit and fixes',
      'Keyword research and strategy',
      'Content optimization',
      'Link building and authority',
    ],
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    subtitle: 'BRAND ENGAGEMENT',
    description: 'Strategic social media presence setup and management across all major platforms for maximum engagement.',
    outcomes: [
      'Platform strategy and setup',
      'Content calendar development',
      'Community management',
      'Influencer partnerships',
    ],
  },
  {
    icon: Mail,
    title: 'Marketing Automation',
    subtitle: 'INTELLIGENT CAMPAIGNS',
    description: 'Build sophisticated marketing automation infrastructure that nurtures leads and drives conversions at scale.',
    outcomes: [
      'Automation platform setup',
      'Email campaign automation',
      'Lead nurturing workflows',
      'Behavioral targeting',
    ],
  },
  {
    icon: Target,
    title: 'PPC & Paid Advertising',
    subtitle: 'PERFORMANCE MARKETING',
    description: 'Strategic paid advertising campaigns across Google, Facebook, LinkedIn, and other platforms for maximum ROI.',
    outcomes: [
      'Campaign strategy and setup',
      'Ad creative development',
      'Audience targeting',
      'Conversion optimization',
    ],
  },
  {
    icon: BarChart2,
    title: 'Analytics & Attribution',
    subtitle: 'DATA-DRIVEN INSIGHTS',
    description: 'Implement comprehensive analytics and attribution systems to track marketing performance and ROI accurately.',
    outcomes: [
      'GA4 and GTM implementation',
      'Conversion tracking setup',
      'Attribution modeling',
      'Performance dashboards',
    ],
  },
  {
    icon: Users,
    title: 'Strategic Consulting',
    subtitle: 'GROWTH STRATEGY',
    description: 'Expert marketing strategy consulting to align digital initiatives with business objectives and drive growth.',
    outcomes: [
      'Marketing strategy development',
      'Channel mix optimization',
      'Budget allocation planning',
      'Competitive analysis',
    ],
  },
];

export function DigitalMarketingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-us');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #00D3A9 1px, transparent 1px),
            linear-gradient(to bottom, #00D3A9 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00D3A9]/5 dark:bg-[#00D3A9]/10 rounded-full blur-[100px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '10s' }} />

      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500/20 via-violet-500/10 to-transparent border-l-2 border-indigo-500 rounded-r-full">
                <Megaphone className="w-5 h-5 text-indigo-500 dark:text-violet-400" />
                <span className="text-sm uppercase tracking-wider text-indigo-500 dark:text-violet-400">Digital Marketing Solutions</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8"
            >
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white via-[#0A0D12] dark:via-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                Enterprise Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                Marketing
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Comprehensive digital marketing infrastructure and strategy for enterprise growth and market expansion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <Button
                onClick={handleGetStarted}
                className="bg-indigo-500 hover:bg-indigo-600 dark:bg-[#00D3A9] dark:hover:bg-[#00D3A9]/90 text-white dark:text-[#0A0D12] px-10 py-6 text-lg group transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                Start Your Marketing Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

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
                <Card className="p-6 md:p-8 text-center bg-white dark:bg-white/[0.03] border-[#0A0D12]/10 dark:border-white/10 hover:border-indigo-500 dark:hover:border-[#00D3A9] transition-all duration-300 group">
                  <div className="text-3xl md:text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
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
              Six Pillars of <span className="text-indigo-500 dark:text-[#00D3A9]">Marketing Excellence</span>
            </h2>
            <p className="text-lg md:text-xl text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto">
              Comprehensive marketing services designed to drive growth and engagement.
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
                <Card className="group p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-indigo-500 dark:hover:border-[#00D3A9] transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-indigo-500/10 dark:bg-[#00D3A9]/10 border-2 border-indigo-500/20 dark:border-[#00D3A9]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <feature.icon className="w-8 h-8 text-indigo-500 dark:text-[#00D3A9]" />
                    </div>
                    <div className="px-3 py-1 bg-[#0A0D12]/5 dark:bg-white/5 rounded-full">
                      <span className="text-xs text-[#0A0D12]/60 dark:text-white/60">0{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl text-[#0A0D12] dark:text-white mb-2 group-hover:text-indigo-500 dark:group-hover:text-[#00D3A9] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-indigo-500/80 dark:text-[#00D3A9]/80 mb-4 uppercase tracking-wider">
                    {feature.subtitle}
                  </p>
                  <p className="text-base text-[#0A0D12]/80 dark:text-white/80 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-[#0A0D12]/10 dark:border-white/10">
                    {feature.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-500 dark:text-[#00D3A9] flex-shrink-0 mt-0.5" />
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
              Ready to <span className="text-indigo-500 dark:text-[#00D3A9]">Grow Your Brand?</span>
            </h2>
            <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss your marketing needs and create a comprehensive growth strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                className="bg-indigo-500 hover:bg-indigo-600 dark:bg-[#00D3A9] dark:hover:bg-[#00D3A9]/90 text-white dark:text-[#0A0D12] px-10 py-6 text-lg group"
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
