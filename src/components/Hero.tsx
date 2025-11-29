'use client';

import { ArrowRight, Shield, Zap, CheckCircle2, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from './ui/use-mobile';

export function Hero() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-main transition-colors duration-300">
      {/* Animated Background Grid - Desktop Only */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, var(--primary) 1px, transparent 1px),
              linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
        </div>
      )}

      {/* Gradient Orbs - Desktop Only */}
      {!isMobile && (
        <>
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '10s' }} />
        </>
      )}

      {/* Main Content */}
      <div className="container-enterprise relative z-10 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border-l-2 border-primary rounded-r-full"
              >
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Enterprise-Grade Solutions</span>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-4 relative z-20">
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight"
                >
                  <span className="bg-gradient-to-r from-body via-body to-body/60 bg-clip-text text-transparent block pb-2">
                    Technical
                  </span>
                  <span className="bg-gradient-to-r from-body via-body to-body/60 bg-clip-text text-transparent block pb-2">
                    Transformation
                  </span>
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent block mt-2 pb-2">
                    Built for Scale.
                  </span>
                </h1>
              </div>

              {/* Subheadline */}
              <p
                className="text-xl md:text-2xl text-body/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Global engineering firm specializing in cloud infrastructure, AI automation, and enterprise transformation.
              </p>

              {/* Trust Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-body/50">Certified</div>
                    <div className="text-body">SOC 2 Type II</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-body/50">Experience</div>
                    <div className="text-body">17+ Years</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-body/50">Pricing</div>
                    <div className="text-body">Custom Tailored</div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              >
                <Button
                  onClick={handleGetStarted}
                  variant="premium"
                  className="w-full sm:w-auto px-10 py-6 text-lg group transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={scrollToServices}
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-subtle text-body hover:border-primary hover:bg-primary/5 px-10 py-6 text-lg backdrop-blur-sm transition-all duration-300"
                >
                  Explore Services
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Enterprise Stats */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    value: '30-60%',
                    label: 'Cloud Cost Reduction',
                    sublabel: 'Average first-year savings',
                  },
                  {
                    value: '99%+',
                    label: 'Automation Accuracy',
                    sublabel: 'ML-driven workflows',
                  },
                  {
                    value: '24/7',
                    label: 'Emergency Support',
                    sublabel: 'Global response team',
                  },
                  {
                    value: '100+',
                    label: 'Enterprise Clients',
                    sublabel: 'Across 3 continents',
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group p-8 bg-card border border-subtle hover:border-primary/40 rounded-2xl transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="text-4xl md:text-5xl text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-lg text-body mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-body/60">
                      {stat.sublabel}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Key Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-8 bg-card/80 border border-subtle rounded-2xl backdrop-blur-sm"
              >
                <h3 className="text-xl text-body mb-4">Core Capabilities</h3>
                <div className="space-y-3">
                  {[
                    'Multi-cloud infrastructure (AWS, GCP, Azure)',
                    'AI/ML automation & process optimization',
                    'Zero-downtime migrations & deployments',
                    'Enterprise-grade security & compliance',
                  ].map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-body/80">{capability}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-main to-transparent pointer-events-none" />
    </section>
  );
}
