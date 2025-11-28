'use client';

import { Card } from './ui/card';
import { CheckCircle2 } from 'lucide-react';
import { INDUSTRIES, NOTABLE_ENGAGEMENTS, CERTIFICATIONS, SECURITY_COMPLIANCE } from '../utils/data';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export function Industries() {
  const navigate = useNavigate();

  return (
    <section id="industries" className="py-24 bg-[#F8FAFC] dark:bg-[#0E1116] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-[#19B394]/10 border border-[#19B394]/30 rounded-full text-[#19B394] uppercase tracking-wider">
              Industries & Expertise
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl text-[#0F6B4D] dark:text-[#F8FAFC] mb-6"
          >
            Trusted Across <span className="text-[#19B394]">Critical Sectors</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#0F6B4D]/70 dark:text-[#F8FAFC]/70"
          >
            HUK SONS IT has successfully executed enterprise engineering projects across diverse industries.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card 
                onClick={() => navigate(`/industries/${industry.slug}`)}
                className="bg-white dark:bg-white/5 border-[#0F6B4D]/12 dark:border-[#F8FAFC]/10 hover:border-[#19B394] p-6 transition-all duration-300 hover:shadow-xl group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#19B394]/10 rounded-lg flex items-center justify-center group-hover:bg-[#19B394] transition-colors">
                      <industry.icon className="w-6 h-6 text-[#19B394] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#0F6B4D] dark:text-[#F8FAFC] group-hover:text-[#19B394] transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Notable Engagements */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl text-[#0F6B4D] dark:text-[#F8FAFC] mb-8 text-center"
          >
            Notable Engagements
          </motion.h3>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {NOTABLE_ENGAGEMENTS.map((engagement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-white/5 border border-[#0F6B4D]/12 dark:border-[#F8FAFC]/10 rounded-lg p-6 hover:border-[#19B394] transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#19B394] flex-shrink-0 mt-1" />
                  <p className="text-[#0F6B4D]/80 dark:text-[#F8FAFC]/80">{engagement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0F6B4D]/5 dark:bg-[#F8FAFC]/5 border border-[#0F6B4D]/12 dark:border-[#F8FAFC]/10 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-3xl text-[#0F6B4D] dark:text-[#F8FAFC] mb-8 text-center">Partners & Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-white/5 border border-[#0F6B4D]/12 dark:border-[#F8FAFC]/10 rounded-lg p-4 text-center hover:border-[#19B394] transition-all duration-300"
              >
                <p className="text-[#0F6B4D]/80 dark:text-[#F8FAFC]/80">{cert}</p>
              </motion.div>
            ))}
          </div>

          {/* Security Compliance */}
          <div className="mt-8">
            <h4 className="text-xl text-[#0F6B4D] dark:text-[#F8FAFC] mb-4 text-center">Security & Compliance</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {SECURITY_COMPLIANCE.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-white dark:bg-white/5 border border-[#19B394]/30 rounded-full text-[#19B394] hover:bg-[#19B394]/10 transition-all duration-300"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
