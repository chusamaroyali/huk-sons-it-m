'use client';

import { Rocket, Blocks, Wifi, Cpu, CheckCircle2, ArrowRight, Target, Layers, Zap, Globe } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const metrics = [
  { metric: 'Innovation ROI', value: '5-10x', description: 'Competitive advantage gain' },
  { metric: 'Time to Market', value: '50%', description: 'Faster deployment' },
  { metric: 'Tech Adoption', value: '100%', description: 'Seamless integration' },
  { metric: 'Future-Ready', value: 'Yes', description: 'Quantum-safe infrastructure' },
];

const serviceFeatures = [
  {
    icon: Blocks,
    title: 'Blockchain & Web3',
    subtitle: 'DECENTRALIZED SOLUTIONS',
    description: 'Implement blockchain and Web3 technologies for secure, transparent, and decentralized business applications.',
    outcomes: [
      'Smart contract development',
      'Blockchain architecture design',
      'Token economics and NFTs',
      'DeFi platform integration',
    ],
  },
  {
    icon: Wifi,
    title: 'IoT & Edge Computing',
    subtitle: 'CONNECTED DEVICES',
    description: 'Build IoT ecosystems and edge computing solutions for real-time data processing and intelligent device networks.',
    outcomes: [
      'IoT architecture design',
      'Edge computing implementation',
      'Device integration and management',
      'Real-time analytics at the edge',
    ],
  },
  {
    icon: Globe,
    title: 'AR/VR & Metaverse',
    subtitle: 'IMMERSIVE EXPERIENCES',
    description: 'Create augmented and virtual reality experiences for training, marketing, and customer engagement in the metaverse.',
    outcomes: [
      'AR/VR application development',
      'Metaverse presence setup',
      '3D modeling and environments',
      'Interactive experience design',
    ],
  },
  {
    icon: Cpu,
    title: 'Quantum-Ready Infrastructure',
    subtitle: 'FUTURE SECURITY',
    description: 'Prepare your infrastructure for quantum computing with quantum-safe encryption and future-proof security protocols.',
    outcomes: [
      'Quantum-safe cryptography',
      'Post-quantum security audit',
      'Infrastructure modernization',
      'Quantum readiness assessment',
    ],
  },
  {
    icon: Zap,
    title: '5G & Advanced Networking',
    subtitle: 'ULTRA-FAST CONNECTIVITY',
    description: 'Leverage 5G and advanced networking technologies for ultra-low latency and high-bandwidth applications.',
    outcomes: [
      '5G network integration',
      'Low-latency architecture',
      'Network optimization',
      'Edge-to-cloud connectivity',
    ],
  },
  {
    icon: Target,
    title: 'Innovation Labs & PoC',
    subtitle: 'RAPID EXPERIMENTATION',
    description: 'Establish innovation labs and proof-of-concept development for testing emerging technologies before full deployment.',
    outcomes: [
      'Innovation lab setup',
      'PoC development and testing',
      'Technology feasibility studies',
      'ROI validation frameworks',
    ],
  },
];

export function EmergingTechnologiesPage() {
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

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '8s' }} />
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
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-transparent border-l-2 border-cyan-500 rounded-r-full">
                <Rocket className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                <span className="text-sm uppercase tracking-wider text-cyan-500 dark:text-cyan-400">Emerging Technologies</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8"
            >
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white via-[#0A0D12] dark:via-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                Future-Ready
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Innovation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Stay ahead with cutting-edge blockchain, Web3, IoT, AR/VR, and quantum-ready solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <Button
                onClick={handleGetStarted}
                className="bg-cyan-500 hover:bg-cyan-600 dark:bg-[#00D3A9] dark:hover:bg-[#00D3A9]/90 text-white dark:text-[#0A0D12] px-10 py-6 text-lg group transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                Start Your Innovation Journey
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
                <Card className="p-6 md:p-8 text-center bg-white dark:bg-white/[0.03] border-[#0A0D12]/10 dark:border-white/10 hover:border-cyan-500 dark:hover:border-[#00D3A9] transition-all duration-300 group">
                  <div className="text-3xl md:text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
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
              Six Pillars of <span className="text-cyan-500 dark:text-[#00D3A9]">Future Innovation</span>
            </h2>
            <p className="text-lg md:text-xl text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto">
              Comprehensive emerging technology services designed to future-proof your business.
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
                <Card className="group p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-cyan-500 dark:hover:border-[#00D3A9] transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-cyan-500/10 dark:bg-[#00D3A9]/10 border-2 border-cyan-500/20 dark:border-[#00D3A9]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <feature.icon className="w-8 h-8 text-cyan-500 dark:text-[#00D3A9]" />
                    </div>
                    <div className="px-3 py-1 bg-[#0A0D12]/5 dark:bg-white/5 rounded-full">
                      <span className="text-xs text-[#0A0D12]/60 dark:text-white/60">0{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl text-[#0A0D12] dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-[#00D3A9] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-cyan-500/80 dark:text-[#00D3A9]/80 mb-4 uppercase tracking-wider">
                    {feature.subtitle}
                  </p>
                  <p className="text-base text-[#0A0D12]/80 dark:text-white/80 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-[#0A0D12]/10 dark:border-white/10">
                    {feature.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-500 dark:text-[#00D3A9] flex-shrink-0 mt-0.5" />
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
              Ready to <span className="text-cyan-500 dark:text-[#00D3A9]">Embrace the Future?</span>
            </h2>
            <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss how emerging technologies can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                className="bg-cyan-500 hover:bg-cyan-600 dark:bg-[#00D3A9] dark:hover:bg-[#00D3A9]/90 text-white dark:text-[#0A0D12] px-10 py-6 text-lg group"
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
