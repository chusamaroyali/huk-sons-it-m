'use client';

import { ArrowRight, Mail, Globe, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export function FullScreenCTA() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-us');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-main text-heading relative overflow-hidden py-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="container-enterprise relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Side - CTA Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-5xl sm:text-6xl md:text-7xl leading-tight mb-6 text-heading">
                  Ready to <span className="text-primary">Transform?</span>
                </h2>
                <p className="text-xl md:text-2xl text-body/70 leading-relaxed">
                  Start your technical transformation with a strategic audit and architecture review.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-body/60">Email</div>
                      <a href="mailto:info@huksons.com" className="text-primary hover:underline">
                        info@huksons.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-body/60">Website</div>
                      <a href="https://huksonsit.com" className="text-primary hover:underline">
                        https://huksonsit.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-body/60">Global Presence</div>
                      <div className="text-body">
                        HQ: Pakistan (Engineering & Delivery)
                        <br />
                        Operations: USA & UAE
                        <br />
                        Remote-First Model
                      </div>
                    </div>
                  </div>
                </div>

                {/* Engagement Terms */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-8 p-6 bg-body/5 border border-subtle rounded-2xl"
                >
                  <h3 className="text-xl mb-4 text-heading">Engagement Terms</h3>
                  <ul className="space-y-3 text-body/70">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Pricing: Custom-tailored for each enterprise client</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Payment Model: 30% advance, 70% milestone-based</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Contract Types: Fixed-scope, milestone, or hybrid retainers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Project Duration: 4-12 weeks average</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Retainer Programs: Continuous optimization & advisory available</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Languages */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex gap-3"
                >
                  <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm">
                    <span className="text-primary">English</span> (Primary)
                  </div>
                  <div className="px-4 py-2 bg-body/5 border border-subtle rounded-full text-sm text-body/70">
                    <span className="text-body">Arabic</span> (Support)
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card backdrop-blur-sm border border-subtle rounded-2xl p-8"
            >
              <h3 className="text-2xl mb-6 text-heading">Send us a message</h3>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleGetStarted(); }}>
                <div>
                  <label className="block text-sm mb-2 text-body/70">Full Name *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-body/5 border border-subtle rounded-lg text-body placeholder:text-muted focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-body/70">Email Address *</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="w-full px-4 py-3 bg-body/5 border border-subtle rounded-lg text-body placeholder:text-muted focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-body/70">Company Name *</label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    required
                    className="w-full px-4 py-3 bg-body/5 border border-subtle rounded-lg text-body placeholder:text-muted focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-body/70">Project Details *</label>
                  <textarea
                    placeholder="Tell us about your technical challenges and transformation goals..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-body/5 border border-subtle rounded-lg text-body placeholder:text-muted focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="premium"
                  className="w-full px-8 py-6 text-lg group transition-all duration-300"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-body/40 text-center">
                  Custom enterprise pricing | Response time: 24-48 hours
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
