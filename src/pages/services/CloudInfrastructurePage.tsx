'use client';

import { Cloud, Server, Network, Shield, Zap, CheckCircle2, ArrowRight, Target, Gauge, Lock, Globe } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const metrics = [
  { metric: 'Cost Reduction', value: '30-60%', description: 'Average cloud cost savings' },
  { metric: 'Uptime Guarantee', value: '99.9%', description: 'Predictable performance' },
  { metric: 'Migration Success', value: '100%', description: 'Zero-downtime deployments' },
  { metric: 'Response Time', value: '24/7', description: 'Global support team' },
];

const serviceFeatures = [
  {
    icon: Target,
    title: 'Cloud Migration Strategy',
    subtitle: 'SEAMLESS TRANSITION',
    description: 'Comprehensive cloud migration planning and execution across AWS, GCP, Azure, and hybrid environments with zero business disruption.',
    outcomes: [
      'Migration assessment and roadmap',
      'Application refactoring strategy',
      'Zero-downtime migration execution',
      'Post-migration optimization',
    ],
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    subtitle: 'AUTOMATED PROVISIONING',
    description: 'Transform infrastructure management with automated, version-controlled, and repeatable deployment workflows using modern IaC tools.',
    outcomes: [
      'Terraform & CloudFormation templates',
      'GitOps workflow implementation',
      'Automated CI/CD pipelines',
      'Infrastructure versioning',
    ],
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    subtitle: 'MAXIMUM EFFICIENCY',
    description: 'Fine-tune cloud infrastructure for optimal performance, cost-efficiency, and scalability with continuous monitoring and improvement.',
    outcomes: [
      'Resource optimization analysis',
      'Auto-scaling configuration',
      'Load balancing setup',
      'Performance monitoring dashboards',
    ],
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    subtitle: 'ENTERPRISE-GRADE PROTECTION',
    description: 'Implement comprehensive security frameworks and compliance standards to protect your cloud infrastructure and data.',
    outcomes: [
      'Security audit and hardening',
      'Compliance framework implementation',
      'Identity and access management',
      'Disaster recovery planning',
    ],
  },
  {
    icon: Network,
    title: 'Multi-Cloud Architecture',
    subtitle: 'VENDOR AGNOSTIC',
    description: 'Design and implement multi-cloud and hybrid cloud strategies that leverage the best of each platform while avoiding vendor lock-in.',
    outcomes: [
      'Multi-cloud architecture design',
      'Cloud-agnostic deployment',
      'Workload distribution strategy',
      'Unified monitoring and management',
    ],
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    subtitle: 'WORLDWIDE REACH',
    description: 'Deploy and manage globally distributed infrastructure with optimized latency, redundancy, and regional compliance.',
    outcomes: [
      'Global CDN configuration',
      'Multi-region deployment',
      'Geographic load balancing',
      'Regional compliance setup',
    ],
  },
];

export function CloudInfrastructurePage() {
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
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '8s' }} />
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
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-transparent border-l-2 border-blue-500 rounded-r-full">
                <Cloud className="w-5 h-5 text-blue-500 dark:text-cyan-400" />
                <span className="text-sm uppercase tracking-wider text-blue-500 dark:text-cyan-400">Cloud & Infrastructure</span>
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
                Enterprise-Grade
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Cloud Infrastructure
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-body/70 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Re-architect legacy systems to meet modern scalability, cost-efficiency, and security benchmarks with enterprise-grade cloud solutions.
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
                className="bg-blue-500 hover:bg-blue-600 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-white px-10 py-6 text-lg group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                Start Your Cloud Journey
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
                <Card className="p-6 md:p-8 text-center bg-card border-subtle hover:border-blue-500 dark:hover:border-primary transition-all duration-300 group">
                  <div className="text-3xl md:text-4xl lg:text-5xl mb-2 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
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
              Six Pillars of <span className="text-blue-500 dark:text-primary">Cloud Excellence</span>
            </h2>
            <p className="text-lg md:text-xl text-body/70 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure services designed to modernize your technology stack.
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
                <Card className="group p-8 md:p-10 bg-card border-2 border-subtle hover:border-blue-500 dark:hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 h-full">
                  {/* Icon & Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-blue-500/10 dark:bg-primary/10 border-2 border-blue-500/20 dark:border-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <feature.icon className="w-8 h-8 text-blue-500 dark:text-primary" />
                    </div>
                    <div className="px-3 py-1 bg-body/5 rounded-full">
                      <span className="text-xs text-body/60">0{index + 1}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl md:text-3xl text-heading mb-2 group-hover:text-blue-500 dark:group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-blue-500/80 dark:text-primary/80 mb-4 uppercase tracking-wider">
                    {feature.subtitle}
                  </p>
                  <p className="text-base text-body/80 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Outcomes */}
                  <div className="space-y-3 pt-6 border-t border-subtle">
                    {feature.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 dark:text-primary flex-shrink-0 mt-0.5" />
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
              Ready to <span className="text-blue-500 dark:text-primary">Transform Your Infrastructure?</span>
            </h2>
            <p className="text-xl text-body/70 mb-12 max-w-2xl mx-auto">
              Let's discuss your cloud infrastructure needs and create a strategic modernization roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                className="bg-blue-500 hover:bg-blue-600 dark:bg-primary dark:hover:bg-primary/90 text-white dark:text-white px-10 py-6 text-lg group"
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
