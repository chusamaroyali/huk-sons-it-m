'use client';

import { Bot, Cpu, Workflow, Brain, Zap, CheckCircle2, ArrowRight, Target, Network, BarChart } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const metrics = [
  { metric: 'Workload Reduction', value: '60%', description: 'Average team efficiency gain' },
  { metric: 'Accuracy Rate', value: '99%+', description: 'ML-driven precision' },
  { metric: 'ROI Timeline', value: 'Q1', description: 'First quarter returns' },
  { metric: 'Uptime', value: '24/7', description: 'Automated operations' },
];

const serviceFeatures = [
  {
    icon: Brain,
    title: 'AI/ML Model Development',
    subtitle: 'INTELLIGENT AUTOMATION',
    description: 'Design and deploy custom machine learning models that continuously learn and improve your business processes.',
    outcomes: [
      'Custom ML model development',
      'Model training and optimization',
      'Continuous learning frameworks',
      'Performance monitoring and tuning',
    ],
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    subtitle: 'END-TO-END WORKFLOWS',
    description: 'Automate repetitive workflows across marketing, finance, and operations with intelligent orchestration systems.',
    outcomes: [
      'Workflow mapping and optimization',
      'RPA implementation',
      'Integration with existing systems',
      'Automated alerting and monitoring',
    ],
  },
  {
    icon: Target,
    title: 'Marketing Automation',
    subtitle: 'INTELLIGENT CAMPAIGNS',
    description: 'Build marketing automation infrastructure that drives engagement, conversions, and revenue growth.',
    outcomes: [
      'Campaign automation setup',
      'Lead scoring and nurturing',
      'Multi-channel orchestration',
      'Performance analytics',
    ],
  },
  {
    icon: BarChart,
    title: 'Data Pipeline Automation',
    subtitle: 'REAL-TIME PROCESSING',
    description: 'Automate data collection, transformation, and analysis with real-time streaming pipelines.',
    outcomes: [
      'ETL/ELT automation',
      'Real-time data processing',
      'Automated data quality checks',
      'Pipeline monitoring and alerts',
    ],
  },
  {
    icon: Network,
    title: 'Integration Engineering',
    subtitle: 'SEAMLESS CONNECTIVITY',
    description: 'Connect disparate systems and platforms with robust API integrations and middleware solutions.',
    outcomes: [
      'API development and integration',
      'Third-party platform connections',
      'Microservices architecture',
      'Event-driven automation',
    ],
  },
  {
    icon: Cpu,
    title: 'AI-Powered Analytics',
    subtitle: 'PREDICTIVE INSIGHTS',
    description: 'Leverage AI to analyze patterns, predict outcomes, and provide actionable business intelligence.',
    outcomes: [
      'Predictive analytics models',
      'Anomaly detection systems',
      'Natural language processing',
      'Computer vision solutions',
    ],
  },
];

export function AIAutomationPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-us');
  };

  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
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

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '10s' }} />

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
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-transparent border-l-2 border-purple-500 rounded-r-full">
                <Bot className="w-5 h-5 text-purple-500 dark:text-pink-400" />
                <span className="text-sm uppercase tracking-wider text-purple-500 dark:text-pink-400">AI + Automation Engineering</span>
              </div>
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8"
            >
              <span className="bg-gradient-to-r from-heading via-heading to-heading/60 bg-clip-text text-transparent">
                Intelligent Automation
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-body/70 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Design intelligent automation systems that run 24/7, replacing repetitive manual workflows with machine-driven precision.
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
                className="bg-purple-500 hover:bg-purple-600 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-white px-10 py-6 text-lg group transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                Start Your AI Journey
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
                <Card className="p-6 md:p-8 text-center bg-card border-subtle hover:border-purple-500 dark:hover:border-primary transition-all duration-300 group">
                  <div className="text-3xl md:text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-heading mb-6">
              Six Pillars of <span className="text-purple-500 dark:text-primary">AI Excellence</span>
            </h2>
            <p className="text-lg md:text-xl text-body/70 max-w-3xl mx-auto">
              Comprehensive automation services designed to transform your operations.
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
                <Card className="group p-8 md:p-10 bg-card border-2 border-subtle hover:border-purple-500 dark:hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 h-full">
                  {/* Icon & Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-purple-500/10 dark:bg-primary/10 border-2 border-purple-500/20 dark:border-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <feature.icon className="w-8 h-8 text-purple-500 dark:text-primary" />
                    </div>
                    <div className="px-3 py-1 bg-body/5 rounded-full">
                      <span className="text-xs text-body/60">0{index + 1}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl md:text-3xl text-heading mb-2 group-hover:text-purple-500 dark:group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-purple-500/80 dark:text-primary/80 mb-4 uppercase tracking-wider">
                    {feature.subtitle}
                  </p>
                  <p className="text-base text-body/80 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Outcomes */}
                  <div className="space-y-3 pt-6 border-t border-subtle">
                    {feature.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-500 dark:text-primary flex-shrink-0 mt-0.5" />
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-heading mb-6">
              Ready to <span className="text-purple-500 dark:text-primary">Automate Your Workflows?</span>
            </h2>
            <p className="text-xl text-body/70 mb-12 max-w-2xl mx-auto">
              Let's discuss your automation needs and create an intelligent system roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                className="bg-purple-500 hover:bg-purple-600 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-white px-10 py-6 text-lg group"
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
