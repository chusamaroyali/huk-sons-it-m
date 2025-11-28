'use client';

import { ArrowRight, CheckCircle, TrendingUp, Award, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Industry, SERVICES } from '../utils/data';
import { SEOHead } from './SEOHead';
import { motion } from 'motion/react';
import { FullScreenCTA } from './FullScreenCTA';
import { useNavigate } from 'react-router-dom';

interface IndustryTemplateProps {
  industry: Industry;
}

export function IndustryTemplate({ industry }: IndustryTemplateProps) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  const handleServiceClick = (servicePage: string) => {
    navigate(servicePage);
  };

  const Icon = industry.icon;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      <SEOHead
        title={`${industry.name} Solutions | HUK SONS IT`}
        description={`${industry.description} Trusted enterprise technology partner for ${industry.name} companies. ${industry.averageEngagement || ''}`}
        keywords={`${industry.name}, ${industry.slug}, enterprise software, digital transformation, cloud solutions, technology consulting`}
        canonical={`https://huksonsit.com/industry-${industry.slug}`}
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

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D3A9]/5 dark:bg-[#00D3A9]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-[#00D3A9]/10 rounded-3xl mb-8"
            >
              <Icon className="w-12 h-12 text-[#00D3A9]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6"
            >
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                {industry.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#0A0D12]/70 dark:text-white/70 mb-8 leading-relaxed"
            >
              {industry.description}
            </motion.p>

            {industry.averageEngagement && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#00D3A9]/10 border border-[#00D3A9]/30 rounded-full mb-8"
              >
                <Award className="w-5 h-5 text-[#00D3A9]" />
                <span className="text-[#0A0D12] dark:text-white">
                  Average Engagement: <span className="text-[#00D3A9]">{industry.averageEngagement}</span>
                </span>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={handleGetStarted}
                className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-8 py-6 text-lg group"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => navigate('/industries')}
                variant="outline"
                className="border-2 border-[#0A0D12] dark:border-white text-[#0A0D12] dark:text-white hover:bg-[#0A0D12]/5 dark:hover:bg-white/5 px-8 py-6 text-lg"
              >
                View All Industries
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      {industry.challenges && industry.challenges.length > 0 && (
        <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
          <div className="container-enterprise relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0D12] dark:text-white mb-4">
                Industry <span className="text-[#00D3A9]">Challenges</span>
              </h2>
              <p className="text-lg text-[#0A0D12]/70 dark:text-white/70 mb-12">
                Common technical challenges we solve for {industry.name} organizations
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industry.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 h-full min-h-[100px] flex flex-col justify-center">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-[#00D3A9] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-[#0A0D12] dark:text-white">{challenge}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Inline CTA after Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12 text-center p-8 bg-white dark:bg-white/[0.03] border-2 border-[#00D3A9]/20 rounded-2xl"
              >
                <h3 className="text-xl md:text-2xl text-[#0A0D12] dark:text-white mb-3">
                  Facing These Challenges?
                </h3>
                <p className="text-[#0A0D12]/70 dark:text-white/70 mb-6 max-w-2xl mx-auto">
                  Our team of enterprise architects specializes in solving complex technical challenges for {industry.name} organizations.
                </p>
                <Button
                  onClick={handleGetStarted}
                  className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-8 py-4 text-base group"
                >
                  Get Expert Help
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      {industry.solutions && industry.solutions.length > 0 && (
        <section className="relative py-16 md:py-24">
          <div className="container-enterprise relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0D12] dark:text-white mb-4">
                Our <span className="text-[#00D3A9]">Solutions</span>
              </h2>
              <p className="text-lg text-[#0A0D12]/70 dark:text-white/70 mb-12">
                Enterprise-grade technical solutions tailored for {industry.name}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industry.solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] hover:shadow-xl hover:shadow-[#00D3A9]/10 transition-all duration-300 h-full group min-h-[100px] flex flex-col justify-center">
                      <div className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-[#00D3A9] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                        <p className="text-[#0A0D12] dark:text-white">{solution}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Mid-page CTA after Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12 p-8 md:p-10 bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent border-2 border-[#00D3A9]/30 rounded-2xl"
              >
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl md:text-3xl text-[#0A0D12] dark:text-white mb-4">
                    Ready to Transform Your {industry.name} Infrastructure?
                  </h3>
                  <p className="text-[#0A0D12]/70 dark:text-white/70 mb-6">
                    Get a custom-tailored solution built specifically for your enterprise needs.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                      onClick={handleGetStarted}
                      className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-8 py-6 text-lg group"
                    >
                      Schedule Consultation
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      onClick={() => navigate('/services')}
                      variant="outline"
                      className="border-2 border-[#0A0D12] dark:border-white text-[#0A0D12] dark:text-white hover:bg-[#0A0D12]/5 dark:hover:bg-white/5 px-8 py-6 text-lg"
                    >
                      Explore Services
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Services Section */}
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
              Relevant <span className="text-[#00D3A9]">Services</span>
            </h2>
            <p className="text-lg text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto">
              Explore our specialized services designed for {industry.name} organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {SERVICES.slice(0, 4).map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    onClick={() => handleServiceClick(service.page)}
                    className="p-6 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] hover:shadow-xl hover:shadow-[#00D3A9]/10 transition-all duration-300 cursor-pointer group h-full"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${service.iconBg} group-hover:scale-110 transition-transform`}>
                      <ServiceIcon className="w-7 h-7 text-[#00D3A9]" />
                    </div>
                    <h3 className="text-lg text-[#0A0D12] dark:text-white mb-2 group-hover:text-[#00D3A9] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#0A0D12]/60 dark:text-white/60 mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#00D3A9] group-hover:gap-3 transition-all">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => navigate('/services')}
              variant="outline"
              className="border-2 border-[#0A0D12] dark:border-white text-[#0A0D12] dark:text-white hover:bg-[#0A0D12]/5 dark:hover:bg-white/5 px-8 py-4"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, value: '95%+', label: 'Success Rate' },
              { icon: Users, value: '200+', label: 'Projects Delivered' },
              { icon: Award, value: '50+', label: 'Industry Awards' },
              { icon: CheckCircle, value: '99.9%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 text-center group">
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

      {/* Full Screen CTA */}
      <FullScreenCTA />
    </div>
  );
}