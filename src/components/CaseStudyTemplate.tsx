'use client';

import { ArrowRight, CheckCircle, TrendingUp, Award, Users, Calendar, Building2, Target } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { CaseStudy, SOLUTIONS } from '../utils/data';
import { SEOHead } from './SEOHead';
import { motion } from 'motion/react';
import { FullScreenCTA } from './FullScreenCTA';
import { useNavigate } from 'react-router-dom';

interface CaseStudyTemplateProps {
  caseStudy: CaseStudy;
}

export function CaseStudyTemplate({ caseStudy }: CaseStudyTemplateProps) {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-us');
  };

  const handleSolutionClick = (solutionPage: string) => {
    navigate(solutionPage);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      <SEOHead
        title={`${caseStudy.title} | Case Study | HUK SONS IT`}
        description={caseStudy.summary}
        keywords={`case study, ${caseStudy.industry}, ${caseStudy.technologies.join(', ')}, digital transformation, success story`}
        canonical={`https://huksonsit.com/case-studies/${caseStudy.slug}`}
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D3A9]/10 rounded-full mb-8"
            >
              <Building2 className="w-4 h-4 text-[#00D3A9]" />
              <span className="text-[#00D3A9] font-medium">{caseStudy.client}</span>
              <span className="text-[#0A0D12]/30 dark:text-white/30">•</span>
              <span className="text-[#0A0D12]/70 dark:text-white/70">{caseStudy.industry}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                {caseStudy.title}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#0A0D12]/70 dark:text-white/70 mb-8 leading-relaxed"
            >
              {caseStudy.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
            >
              <div className="p-4 bg-[#00D3A9]/5 border border-[#00D3A9]/20 rounded-xl">
                <div className="flex items-center gap-2 mb-1 text-[#00D3A9]">
                  <Target className="w-4 h-4" />
                  <span className="text-sm font-medium">Outcome</span>
                </div>
                <p className="text-[#0A0D12] dark:text-white font-medium">{caseStudy.outcome}</p>
              </div>
              <div className="p-4 bg-[#00D3A9]/5 border border-[#00D3A9]/20 rounded-xl">
                <div className="flex items-center gap-2 mb-1 text-[#00D3A9]">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Duration</span>
                </div>
                <p className="text-[#0A0D12] dark:text-white font-medium">{caseStudy.duration}</p>
              </div>
              <div className="p-4 bg-[#00D3A9]/5 border border-[#00D3A9]/20 rounded-xl">
                <div className="flex items-center gap-2 mb-1 text-[#00D3A9]">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Team Size</span>
                </div>
                <p className="text-[#0A0D12] dark:text-white font-medium">Enterprise Team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-red-500" />
                </div>
                The Challenge
              </h2>
              <div className="prose dark:prose-invert max-w-none text-[#0A0D12]/70 dark:text-white/70">
                <p className="text-lg leading-relaxed">{caseStudy.challenge}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00D3A9]/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#00D3A9]" />
                </div>
                The Solution
              </h2>
              <div className="prose dark:prose-invert max-w-none text-[#0A0D12]/70 dark:text-white/70">
                <p className="text-lg leading-relaxed">{caseStudy.solution}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl text-[#0A0D12] dark:text-white mb-12 text-center">
              Key <span className="text-[#00D3A9]">Results</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 h-full flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-[#00D3A9]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Award className="w-8 h-8 text-[#00D3A9]" />
                    </div>
                    <p className="text-lg text-[#0A0D12] dark:text-white font-medium">{result}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-16 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h3 className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-8 uppercase tracking-wider font-medium">
              Technologies Used
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white dark:bg-white/[0.05] border border-[#0A0D12]/10 dark:border-white/10 rounded-full text-[#0A0D12] dark:text-white font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Solutions Section */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-[#0A0D12] dark:text-white mb-4">
              Related <span className="text-[#00D3A9]">Solutions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SOLUTIONS.slice(0, 3).map((solution, index) => {
              const SolutionIcon = solution.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    onClick={() => handleSolutionClick(solution.page)}
                    className="p-6 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] hover:shadow-xl hover:shadow-[#00D3A9]/10 transition-all duration-300 cursor-pointer group h-full"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${solution.iconBg} group-hover:scale-110 transition-transform`}>
                      <SolutionIcon className="w-7 h-7 text-[#00D3A9]" />
                    </div>
                    <h3 className="text-lg text-[#0A0D12] dark:text-white mb-2 group-hover:text-[#00D3A9] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-[#0A0D12]/60 dark:text-white/60 mb-4 line-clamp-2">
                      {solution.description}
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
        </div>
      </section>

      {/* Full Screen CTA */}
      <FullScreenCTA />
    </div>
  );
}
