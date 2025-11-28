'use client';

import { ArrowRight, CheckCircle2, Globe2, Zap, Target, Award, Users, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { SOLUTIONS, getTechLogo } from '../utils/data';
import { SEOHead } from '../components/SEOHead';
import { motion } from 'motion/react';
import { FullScreenCTA } from '../components/FullScreenCTA';
import { useNavigate } from 'react-router-dom';

export function SolutionsPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-us');
  };

  const handleServiceClick = (servicePage: string) => {
    navigate(servicePage);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      <SEOHead
        title="Enterprise Solutions | Technical Transformation at Scale | HUK SONS IT"
        description="Comprehensive enterprise solutions including Cloud Infrastructure, AI Automation, Data Infrastructure, Emergency Intervention, Digital Marketing, Emerging Technologies, Business Process Services, and Growth Solutions. Custom-tailored solutions for global enterprises."
        keywords="enterprise solutions, cloud infrastructure, AI automation, digital transformation, business process services, technical consulting, enterprise software development"
        canonical="https://huksonsit.com/solutions"
      />

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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D3A9]/5 dark:bg-[#00D3A9]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#00D3A9]/3 dark:bg-[#00D3A9]/8 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#00D3A9]/10 border border-[#00D3A9]/30 rounded-full">
                <Globe2 className="w-5 h-5 text-[#00D3A9]" />
                <span className="text-sm uppercase tracking-wider text-[#00D3A9]">8 Enterprise Solutions</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8"
            >
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                Technical Transformation
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00D3A9] to-[#00D3A9]/60 bg-clip-text text-transparent">
                That Scales
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Eight solution pillars engineered to modernize your infrastructure, automate operations, and deliver sustainable growth with measurable ROI.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                onClick={handleGetStarted}
                className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-8 py-6 text-lg group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => navigate('/industries')}
                variant="outline"
                className="border-2 border-[#0A0D12] dark:border-white text-[#0A0D12] dark:text-white hover:bg-[#0A0D12]/5 dark:hover:bg-white/5 px-8 py-6 text-lg"
              >
                View Industries
              </Button>
            </motion.div>

            {/* Divider */}
            <div className="flex justify-center mt-16">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00D3A9] to-transparent" />
            </div>
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
            <p className="text-lg text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto">
              Trusted by global enterprises for mission-critical technical transformations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, value: '95%+', label: 'Project Success Rate' },
              { icon: Users, value: '200+', label: 'Enterprises Served' },
              { icon: Award, value: '50+', label: 'Industry Awards' },
              { icon: Sparkles, value: '99.9%', label: 'Client Satisfaction' },
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

      {/* Services Details */}
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
              Our <span className="text-[#00D3A9]">Solution Offerings</span>
            </h2>
            <p className="text-lg text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto">
              Comprehensive enterprise solutions designed for scalability, security, and sustainable growth
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-24">
            {SOLUTIONS.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-8"
                >
                  {/* Service Header Card */}
                  <Card className="p-8 md:p-10 bg-gradient-to-br from-white to-[#00D3A9]/5 dark:from-white/[0.03] dark:to-[#00D3A9]/5 border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9]/50 transition-all duration-300 group">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#00D3A9]/20 to-[#00D3A9]/5 border-2 border-[#00D3A9]/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <ServiceIcon className="w-10 h-10 text-[#00D3A9]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4 flex-wrap">
                          <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0D12] dark:text-white">{service.title}</h3>
                          <span className="px-4 py-1.5 bg-[#0A0D12]/5 dark:bg-white/5 border border-[#0A0D12]/10 dark:border-white/10 rounded-full text-sm text-[#0A0D12]/60 dark:text-white/60">
                            0{index + 1}
                          </span>
                        </div>
                        <p className="text-xl md:text-2xl text-[#0A0D12]/70 dark:text-white/70 mb-4 leading-relaxed">{service.description}</p>
                        <p className="text-lg text-[#0A0D12]/60 dark:text-white/60 leading-relaxed">{service.longDescription}</p>
                      </div>
                    </div>
                    
                    {/* Service CTA */}
                    <div className="flex justify-end">
                      <Button
                        onClick={() => handleServiceClick(service.page)}
                        className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-6 py-3 group/btn"
                      >
                        Explore {service.title}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>

                  {/* Service Content Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Measurable Impact */}
                    <Card className="p-6 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 min-h-[320px] md:min-h-[360px] flex flex-col">
                      <div className="flex items-center gap-3 mb-6">
                        <Target className="w-6 h-6 text-[#00D3A9]" />
                        <h4 className="text-xl text-[#0A0D12] dark:text-white">Measurable Impact</h4>
                      </div>
                      <div className="space-y-3 flex-1">
                        {service.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-[#0A0D12]/5 dark:bg-white/[0.02] border border-[#0A0D12]/5 dark:border-white/5 rounded-lg hover:border-[#00D3A9]/30 transition-all duration-300 group/item">
                            <CheckCircle2 className="w-5 h-5 text-[#00D3A9] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                            <span className="text-sm text-[#0A0D12]/70 dark:text-white/70 leading-relaxed">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </Card>

                    {/* Key Deliverables */}
                    <Card className="p-6 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 min-h-[320px] md:min-h-[360px] flex flex-col">
                      <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-6 h-6 text-[#00D3A9]" />
                        <h4 className="text-xl text-[#0A0D12] dark:text-white">Key Deliverables</h4>
                      </div>
                      <div className="space-y-3 flex-1">
                        {(service.deliverables || []).map((deliverable, idx) => (
                          <div key={idx} className="flex items-start gap-3 group/item">
                            <div className="relative mt-2">
                              <div className="w-2 h-2 rounded-full bg-[#00D3A9] group-hover/item:scale-150 transition-transform" />
                              <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#00D3A9]/30 animate-ping group-hover/item:animate-none" />
                            </div>
                            <span className="text-sm text-[#0A0D12]/70 dark:text-white/70 leading-relaxed group-hover/item:text-[#0A0D12] dark:group-hover/item:text-white transition-colors">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </Card>

                    {/* Technology Stack */}
                    <Card className="p-6 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 min-h-[320px] md:min-h-[360px] flex flex-col">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex gap-1">
                          <div className="w-1 h-6 bg-gradient-to-b from-[#00D3A9] via-[#00D3A9]/70 to-transparent rounded-full" />
                          <div className="w-1 h-6 bg-gradient-to-b from-[#00D3A9]/70 via-[#00D3A9]/40 to-transparent rounded-full" />
                        </div>
                        <h4 className="text-xl text-[#0A0D12] dark:text-white">Technology Stack</h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 flex-1">
                        {(Array.isArray(service.tools) ? service.tools : [service.tools]).map((tool, idx) => {
                          const { icon: logoUrl, color } = getTechLogo(tool);
                          return (
                            <div key={idx} className="group/badge relative">
                              {/* Colored glow */}
                              <div 
                                className="absolute -inset-1 rounded-lg blur-lg opacity-0 group-hover/badge:opacity-40 transition-all duration-500"
                                style={{ backgroundColor: color }}
                              />
                              
                              {/* Badge */}
                              <div className="relative flex items-center gap-2 px-3 py-2 bg-white/90 dark:bg-white/5 backdrop-blur-sm border border-[#0A0D12]/10 dark:border-white/10 rounded-lg hover:border-[#00D3A9]/50 group-hover/badge:scale-105 transition-all duration-300">
                                <div className="w-4 h-4 flex items-center justify-center">
                                  <img 
                                    src={logoUrl} 
                                    alt={`${tool} logo`}
                                    className="w-full h-full object-contain group-hover/badge:scale-110 transition-transform"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.src = 'https://cdn.simpleicons.org/amazonredshift/8C4FFF';
                                      target.onerror = null;
                                    }}
                                  />
                                </div>
                                <span className="text-xs text-[#0A0D12]/80 dark:text-white/80 group-hover/badge:text-[#00D3A9] transition-colors whitespace-nowrap">
                                  {tool}
                                </span>
                                <div 
                                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover/badge:opacity-100 transition-all duration-300 rounded-b-lg"
                                  style={{ background: color }}
                                />
                              </div>
                            </div>
                          );
                        })}
                        
                        {/* & More Badge */}
                        <div className="group/more relative">
                          <div className="absolute -inset-1 rounded-lg blur-lg opacity-0 group-hover/more:opacity-30 bg-gradient-to-r from-[#00D3A9] to-[#00D3A9]/50 transition-all duration-500" />
                          <div className="relative flex items-center gap-2 px-3 py-2 bg-gradient-to-br from-[#00D3A9]/10 to-[#00D3A9]/5 border border-[#00D3A9]/30 rounded-lg group-hover/more:scale-105 transition-all duration-300">
                            <div className="w-4 h-4 flex items-center justify-center gap-0.5">
                              <div className="w-1 h-1 rounded-full bg-[#00D3A9]" />
                              <div className="w-1 h-1 rounded-full bg-[#00D3A9]" />
                              <div className="w-1 h-1 rounded-full bg-[#00D3A9]" />
                            </div>
                            <span className="text-xs text-[#00D3A9] whitespace-nowrap italic">
                              & More
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Service-specific CTA */}
                  {index % 2 === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="p-8 bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent border-2 border-[#00D3A9]/30 rounded-2xl text-center"
                    >
                      <h3 className="text-2xl md:text-3xl text-[#0A0D12] dark:text-white mb-4">
                        Transform Your Enterprise with {service.title}
                      </h3>
                      <p className="text-[#0A0D12]/70 dark:text-white/70 mb-6 max-w-2xl mx-auto">
                        Get a custom-tailored solution designed for your specific enterprise needs and technical requirements.
                      </p>
                      <Button
                        onClick={handleGetStarted}
                        className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-8 py-4 text-base group"
                      >
                        Schedule Consultation
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  )}

                  {/* Divider after each service except last */}
                  {index < SOLUTIONS.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-[#00D3A9]/30 to-transparent my-12" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
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
              Why Choose <span className="text-[#00D3A9]">HUK SONS IT</span>
            </h2>
            <p className="text-lg text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto">
              Enterprise-grade excellence backed by proven methodologies and global expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Custom-Tailored Solutions',
                description: 'Every engagement is designed specifically for your enterprise with flexible pricing and milestone-based delivery.',
                icon: Target
              },
              {
                title: 'Global Technical Expertise',
                description: 'Access to world-class engineers and architects with deep expertise across 32+ industries worldwide.',
                icon: Globe2
              },
              {
                title: 'Measurable ROI',
                description: 'Transparent scope, clear KPIs, and proven methodologies that deliver sustainable, measurable business value.',
                icon: TrendingUp
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 h-full group min-h-[320px] md:min-h-[360px] flex flex-col">
                  <div className="w-14 h-14 bg-[#00D3A9]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-[#00D3A9]" />
                  </div>
                  <h3 className="text-xl text-[#0A0D12] dark:text-white mb-4">{item.title}</h3>
                  <p className="text-[#0A0D12]/70 dark:text-white/70 leading-relaxed flex-1">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mid-section CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Button
              onClick={handleGetStarted}
              className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-10 py-6 text-lg group"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-10 md:p-16 bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent border-2 border-[#00D3A9]/30 rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D3A9]/10 rounded-full blur-3xl" />
              
              <div className="relative text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0D12] dark:text-white mb-6">
                  Ready to Start Your <span className="text-[#00D3A9]">Transformation?</span>
                </h2>
                <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Every engagement features custom-tailored enterprise pricing with milestone-based delivery and transparent scope. Let's discuss your project.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    onClick={handleGetStarted}
                    className="w-full sm:w-auto bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-10 py-6 text-lg group transition-all duration-300 hover:shadow-xl hover:shadow-[#00D3A9]/20"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    onClick={() => navigate('/about')}
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-[#0A0D12] dark:border-white text-[#0A0D12] dark:text-white hover:bg-[#0A0D12]/5 dark:hover:bg-white/5 px-10 py-6 text-lg"
                  >
                    Learn About Us
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Screen CTA */}
      <FullScreenCTA />
    </div>
  );
}
