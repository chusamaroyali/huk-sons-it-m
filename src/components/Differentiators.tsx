'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const differentiators = [
  {
    pillar: 'Engineering Depth',
    description: 'Every project is led by senior DevOps/DataOps engineers—no offloading or middle-layer outsourcing.',
  },
  {
    pillar: 'Business-first Mindset',
    description: 'Technical decisions aligned with measurable ROI, not technical curiosity.',
  },
  {
    pillar: 'Scalable Systems, Not Staffing',
    description: 'Our builds replace dependency on large internal teams.',
  },
  {
    pillar: 'Security by Design',
    description: 'GDPR, CCPA, and ISO 27001 principles baked into every layer.',
  },
  {
    pillar: 'Outcome-driven Engagements',
    description: 'Transparent scope, milestone-based delivery, and audit-ready reporting.',
  },
];

export function Differentiators() {
  return (
    <section id="differentiators" className="py-24 bg-[#F8FAFC] dark:bg-[#0E1116] transition-colors duration-300">
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
              Strategic Differentiators
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl text-[#0F6B4D] dark:text-[#F8FAFC] mb-6"
          >
            What Makes HUK SONS IT <span className="text-[#19B394]">Different</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#0F6B4D]/70 dark:text-[#F8FAFC]/70"
          >
            We're not another agency. We're technical partners who deliver measurable outcomes, not just deliverables.
          </motion.p>
        </div>

        {/* Differentiators List */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-white/[0.03] border-2 border-[#0F6B4D]/12 dark:border-[#F8FAFC]/10 rounded-lg p-6 hover:border-[#19B394] transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-[#19B394]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#0F6B4D] dark:text-[#F8FAFC] mb-2 group-hover:text-[#19B394] transition-colors">
                    {item.pillar}
                  </h3>
                  <p className="text-[#0F6B4D]/70 dark:text-[#F8FAFC]/70">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operating Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0F6B4D]/5 dark:bg-[#0E1116] rounded-2xl p-8 lg:p-12 border border-[#0F6B4D]/12 dark:border-[#F8FAFC]/10"
        >
          <h3 className="text-3xl text-[#0F6B4D] dark:text-[#F8FAFC] mb-8 text-center">Operating Model</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Engagement Model',
                description: 'Custom-tailored pricing with fixed-scope or milestone-based delivery'
              },
              {
                title: 'Delivery Structure',
                description: 'Audit → Architecture → Build → Validation → Advisory'
              },
              {
                title: 'Team Composition',
                description: 'Senior DevOps, DataOps, Solution Architects, Cloud Engineers'
              },
              {
                title: 'Collaboration',
                description: 'Slack, Asana, Notion, GitHub, AWS CloudShell, Zoom'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-white/5 border border-[#0F6B4D]/12 dark:border-[#F8FAFC]/10 rounded-lg p-6 hover:border-[#19B394] transition-all duration-300"
              >
                <div className="text-[#19B394] mb-2">{item.title}</div>
                <p className="text-[#0F6B4D]/70 dark:text-[#F8FAFC]/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl text-[#0F6B4D] dark:text-[#F8FAFC] mb-8 text-center"
          >
            Core Values
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['Integrity', 'Excellence', 'Efficiency', 'Security', 'Partnership'].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#19B394]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-[#19B394]">{value[0]}</span>
                </div>
                <div className="text-[#0F6B4D] dark:text-[#F8FAFC]">{value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
