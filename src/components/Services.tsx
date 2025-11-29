'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { SOLUTIONS } from '../utils/data';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export function Services() {
  const navigate = useNavigate();

  const handleViewServices = () => {
    navigate('/solutions');
  };

  const handleServiceClick = (page: string) => {
    navigate(page);
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-main relative overflow-hidden transition-colors duration-300">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-enterprise relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 md:mb-6"
          >
            <span className="px-4 md:px-6 py-2 md:py-3 bg-primary/10 border border-primary/30 rounded-full text-primary uppercase tracking-wider text-xs md:text-sm">
              Our Solutions
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading mb-4 md:mb-6 leading-tight"
          >
            Eight Pillars of <span className="text-primary">Technical Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-body/70 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Enterprise-grade solutions designed for sustainable growth and measurable ROI.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16">
          {SOLUTIONS.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                onClick={() => handleServiceClick(service.page)}
                className="group border-2 border-subtle hover:border-primary transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 bg-card relative cursor-pointer h-full"
              >
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 p-6 md:p-8 lg:p-10">
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 ${service.iconBg} border-2 border-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <service.icon className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
                    </div>
                    <div className="px-3 py-1 bg-body/5 rounded-full">
                      <span className="text-xs text-body/60">0{index + 1}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl text-heading mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-body/70 mb-6 md:mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Outcomes */}
                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {service.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm lg:text-base text-body/80 leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools */}
                  <div className="pt-6 border-t border-subtle">
                    <div className="text-xs text-body/50 uppercase tracking-wider mb-2">Technology Stack</div>
                    <div className="text-xs md:text-sm text-body/70">
                      {Array.isArray(service.tools) ? service.tools.join(', ') : service.tools}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button
            onClick={handleViewServices}
            className="bg-primary hover:bg-primary/90 text-white px-6 md:px-10 py-4 md:py-6 text-sm md:text-base lg:text-lg group transition-all duration-300 hover:shadow-xl"
          >
            View All Solutions in Detail
            <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
