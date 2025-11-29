'use client';

import { Briefcase, TrendingDown, Gauge, Workflow, CheckCircle2, ArrowRight, Target, Users, BarChart2, Cog } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const metrics = [
  { metric: 'Cost Reduction', value: '40%', description: 'Average operational savings' },
  { metric: 'Time Savings', value: '60%', description: 'Through automation' },
  { metric: 'Efficiency Gain', value: '3-5x', description: 'Process optimization' },
  { metric: 'ROI Timeline', value: '6-12mo', description: 'Return on investment' },
];

const serviceFeatures = [
  {
    icon: Target,
    title: 'Process Analysis & Optimization',
    subtitle: 'EFFICIENCY IMPROVEMENT',
    description: 'Comprehensive analysis of business processes to identify bottlenecks, inefficiencies, and optimization opportunities.',
    outcomes: [
      'Process mapping and documentation',
      'Bottleneck identification',
      'Optimization recommendations',
      'Performance benchmarking',
    ],
  },
  {
    icon: Workflow,
    title: 'Process Automation & RPA',
    subtitle: 'INTELLIGENT AUTOMATION',
    description: 'Implement robotic process automation (RPA) to eliminate manual tasks and streamline repetitive workflows.',
    outcomes: [
      'RPA platform selection and setup',
      'Bot development and deployment',
      'Process automation design',
      'Continuous optimization',
    ],
  },
  {
    icon: BarChart2,
    title: 'Process Mining & Analytics',
    subtitle: 'DATA-DRIVEN INSIGHTS',
    description: 'Leverage process mining tools to discover, analyze, and optimize business processes using real data.',
    outcomes: [
      'Process discovery and visualization',
      'Conformance checking',
      'Performance analysis',
      'Predictive process analytics',
    ],
  },
  {
    icon: Users,
    title: 'Change Management',
    subtitle: 'ORGANIZATIONAL TRANSFORMATION',
    description: 'Expert change management consulting to ensure smooth adoption of new processes and technologies.',
    outcomes: [
      'Change impact assessment',
      'Stakeholder engagement',
      'Training and enablement',
      'Adoption monitoring',
    ],
  },
  {
    icon: Gauge,
    title: 'Performance Management',
    subtitle: 'KPI TRACKING',
    description: 'Establish performance management frameworks with KPIs, dashboards, and continuous improvement metrics.',
    outcomes: [
      'KPI framework development',
      'Performance dashboards',
      'Real-time monitoring',
      'Continuous improvement cycles',
    ],
  },
  {
    icon: Cog,
    title: 'Operational Excellence',
    subtitle: 'SUSTAINABLE IMPROVEMENT',
    description: 'Build operational excellence capabilities including Six Sigma, Lean, and continuous improvement methodologies.',
    outcomes: [
      'Lean/Six Sigma implementation',
      'Quality management systems',
      'Operational excellence training',
      'Continuous improvement culture',
    ],
  },
];

export function BusinessProcessServicesPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-us');
  };

  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[120px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '10s' }} />

      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-transparent border-l-2 border-amber-500 rounded-r-full">
                <Briefcase className="w-5 h-5 text-amber-500 dark:text-yellow-400" />
                <span className="text-sm uppercase tracking-wider text-amber-500 dark:text-yellow-400">Business Process Services</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8"
            >
              <span className="bg-gradient-to-r from-heading via-heading to-heading/60 bg-clip-text text-transparent">
                Operational
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-body/70 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Streamline operations with process optimization, automation, and strategic consulting services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <Button
                onClick={handleGetStarted}
                className="bg-amber-500 hover:bg-amber-600 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-white px-10 py-6 text-lg group transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                Start Your BPS Journey
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
                <Card className="p-6 md:p-8 text-center bg-card border-subtle hover:border-amber-500 dark:hover:border-primary transition-all duration-300 group">
                  <div className="text-3xl md:text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {item.value}
                  </div>
                  <div className="text-sm md:text-base text-heading mb-1">{item.metric}</div>
                  <div className="text-xs text-body/60">{item.description}</div>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-heading mb-6">
              Six Pillars of <span className="text-amber-500 dark:text-primary">Process Excellence</span>
            </h2>
            <p className="text-lg md:text-xl text-body/70 max-w-3xl mx-auto">
              Comprehensive BPS services designed to optimize operations and drive efficiency.
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
                <Card className="group p-8 md:p-10 bg-card border-2 border-subtle hover:border-amber-500 dark:hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-amber-500/10 dark:bg-primary/10 border-2 border-amber-500/20 dark:border-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <feature.icon className="w-8 h-8 text-amber-500 dark:text-primary" />
                    </div>
                    <div className="px-3 py-1 bg-body/5 rounded-full">
                      <span className="text-xs text-body/60">0{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl text-heading mb-2 group-hover:text-amber-500 dark:group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-amber-500/80 dark:text-primary/80 mb-4 uppercase tracking-wider">
                    {feature.subtitle}
                  </p>
                  <p className="text-base text-body/80 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-subtle">
                    {feature.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 dark:text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-body/80">{outcome}</span>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-heading mb-6">
              Ready to <span className="text-amber-500 dark:text-primary">Optimize Operations?</span>
            </h2>
            <p className="text-xl text-body/70 mb-12 max-w-2xl mx-auto">
              Let's discuss your process optimization needs and create an efficiency roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                className="bg-amber-500 hover:bg-amber-600 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-white px-10 py-6 text-lg group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => navigate('/solutions')}
                className="bg-transparent border-2 border-heading hover:bg-heading text-heading hover:text-main px-10 py-6 text-lg"
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
