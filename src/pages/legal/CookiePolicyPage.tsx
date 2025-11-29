'use client';

import { Cookie, Settings, Info } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
      <SEOHead
        title="Cookie Policy | HUK SONS IT"
        description="HUK SONS IT Cookie Policy. Information about how we use cookies and tracking technologies, and how you can manage your preferences."
        keywords="cookie policy, cookies, tracking technologies, GDPR cookies, user consent"
        canonical="https://huksonsit.com/legal/cookies"
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
                <Cookie className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Tracking & Consent</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading to-heading/60 bg-clip-text text-transparent">
                  Cookie Policy
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Transparency about the cookies and tracking technologies we use to improve your experience.
              </p>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-3xl mx-auto mb-8">
                <p className="text-sm text-body dark:text-white/80">
                  <strong>Subsidiary Disclosure:</strong> HUK SONS IT operates as a legally separate subsidiary of HUK SONS. When you engage with this site or our services, you are interacting with HUK SONS IT (a subsidiary of HUK SONS) as the contracting entity, unless a signed agreement specifies otherwise.
                </p>
              </div>

              <div className="text-sm text-muted-foreground dark:text-white/60">
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
              <h2 className="text-2xl text-heading dark:text-white mb-4">1. What Are Cookies?</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site. We use cookies to distinguish you from other users, which helps us provide you with a good experience and allows us to improve our site.
              </p>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-4 text-body dark:text-white/80">
                <div>
                  <h3 className="font-semibold text-heading dark:text-white mb-2">Strictly Necessary Cookies</h3>
                  <p>These are essential for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-heading dark:text-white mb-2">Analytical/Performance Cookies</h3>
                  <p>These allow us to recognize and count the number of visitors and to see how visitors move around our website. This helps us improve the way our website works.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-heading dark:text-white mb-2">Functionality Cookies</h3>
                  <p>These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-4">3. Managing Cookies</h2>
              <p className="text-body dark:text-white/80 leading-relaxed">
                You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies), you may not be able to access all or parts of our site.
              </p>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
