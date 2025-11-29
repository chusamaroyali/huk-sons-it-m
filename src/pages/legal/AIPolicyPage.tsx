'use client';

import { Bot, Brain, Shield } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function AIPolicyPage() {
  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
      <SEOHead
        title="AI Ethics & Usage Policy | HUK SONS IT"
        description="HUK SONS IT AI Policy. Our principles and guidelines for the responsible development and use of Artificial Intelligence."
        keywords="AI policy, AI ethics, responsible AI, artificial intelligence, machine learning"
        canonical="https://huksonsit.com/legal/ai-policy"
      />

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

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-8">
                <Bot className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Artificial Intelligence</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading to-heading/60 bg-clip-text text-transparent">
                  AI Ethics & Usage
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Our commitment to the responsible, transparent, and ethical development and deployment of AI technologies.
              </p>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-3xl mx-auto mb-8">
                <p className="text-sm text-body/80">
                  <strong>Subsidiary Disclosure:</strong> HUK SONS IT operates as a legally separate subsidiary of HUK SONS. When you engage with this site or our services, you are interacting with HUK SONS IT (a subsidiary of HUK SONS) as the contracting entity, unless a signed agreement specifies otherwise.
                </p>
              </div>

              <div className="text-sm text-body/60">
                Last Updated: November 29, 2025 | Version 1.0
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading mb-4">1. Core Principles</h2>
              <p className="text-body/80 leading-relaxed mb-4">
                Our AI initiatives are guided by the following principles:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-body/80">
                <li><strong>Fairness:</strong> We strive to minimize bias in our AI models and ensure equitable outcomes.</li>
                <li><strong>Transparency:</strong> We are transparent about where and how AI is used in our services.</li>
                <li><strong>Privacy:</strong> We prioritize data privacy and security in all AI development and deployment.</li>
                <li><strong>Accountability:</strong> We maintain human oversight and accountability for AI-driven decisions.</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading mb-4">2. Use of Generative AI</h2>
              <p className="text-body/80 leading-relaxed">
                When using generative AI tools, we ensure that outputs are reviewed for accuracy and appropriateness. We do not use customer data to train public generative AI models without explicit consent.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading mb-4">3. AI Governance</h2>
              <p className="text-body/80 leading-relaxed">
                We have established an AI Governance Committee to oversee the development and deployment of AI technologies, ensuring alignment with our ethical principles and regulatory requirements.
              </p>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
