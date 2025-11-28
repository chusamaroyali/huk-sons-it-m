'use client';

import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { INDUSTRIES, CORE_VALUES } from '../utils/data';
import { SEOHead } from '../components/SEOHead';
import { motion } from 'motion/react';

export function IndustriesPage() {
  const navigate = useNavigate();

  const handleIndustryClick = (slug: string) => {
    navigate(`/industries/${slug}`);
  };

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      <SEOHead
        title="Industries We Serve"
        description="HUK SONS IT delivers enterprise-grade technical solutions across 30+ industries including SaaS, Fintech, Healthcare, E-commerce, Manufacturing, and more. Trusted by Fortune 500 companies globally."
        keywords="enterprise software, industry solutions, SaaS technology, fintech solutions, healthcare IT, manufacturing technology, retail technology, cloud solutions by industry"
        canonical="https://huksonsit.com/industries"
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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D3A9]/5 dark:bg-[#00D3A9]/10 rounded-full blur-[120px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '8s' }} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00D3A9]/20 via-[#00D3A9]/10 to-transparent border-l-2 border-[#00D3A9] rounded-r-full mb-8"
            >
              <span className="text-sm uppercase tracking-wider text-[#00D3A9]">Industries & Expertise</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8"
            >
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white via-[#0A0D12] dark:via-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                Trusted Across
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00D3A9] to-[#00D3A9]/60 bg-clip-text text-transparent">
                Critical Sectors
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              HUK SONS IT has successfully executed enterprise engineering projects across 30+ diverse industries globally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <Button
                onClick={handleGetStarted}
                className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-10 py-6 text-lg group transition-all duration-300 hover:shadow-xl hover:shadow-[#00D3A9]/20"
              >
                Discuss Your Industry Needs
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl text-center text-[#0A0D12] dark:text-white mb-12"
          >
            Core Values
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {CORE_VALUES.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-[#00D3A9]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00D3A9] group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl text-[#00D3A9] group-hover:text-[#0A0D12] transition-colors">{value.letter}</span>
                </div>
                <div className="text-lg text-[#0A0D12] dark:text-white mb-2">{value.name}</div>
                <p className="text-sm text-[#0A0D12]/60 dark:text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
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
              30+ Industries <span className="text-[#00D3A9]">We Transform</span>
            </h2>
            <p className="text-lg md:text-xl text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto">
              Select your industry to discover tailored solutions and success stories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 9) * 0.05 }}
              >
                <Card
                  onClick={() => handleIndustryClick(industry.slug)}
                  className="group p-8 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00D3A9]/10 cursor-pointer h-full"
                >
                  <div className="flex items-start gap-6 mb-4">
                    <div className="w-16 h-16 bg-[#00D3A9]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0">
                      <industry.icon className="w-8 h-8 text-[#00D3A9]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl text-[#0A0D12] dark:text-white mb-2 group-hover:text-[#00D3A9] transition-colors duration-300">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-[#0A0D12]/70 dark:text-white/70">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  {industry.averageEngagement && (
                    <div className="pt-4 border-t border-[#0A0D12]/10 dark:border-white/10">
                      <div className="text-xs text-[#0A0D12]/50 dark:text-white/50 uppercase tracking-wider mb-1">
                        Average Engagement
                      </div>
                      <div className="text-sm text-[#00D3A9]">{industry.averageEngagement}</div>
                    </div>
                  )}

                  <div className="mt-4 flex items-center gap-2 text-[#00D3A9] group-hover:gap-4 transition-all duration-300">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
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
              Don't See Your <span className="text-[#00D3A9]">Industry?</span>
            </h2>
            <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-12 max-w-2xl mx-auto">
              We work with emerging sectors and specialized industries. Let's discuss your unique requirements.
            </p>
            <Button
              onClick={handleGetStarted}
              className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-10 py-6 text-lg group"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
