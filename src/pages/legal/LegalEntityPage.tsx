'use client';

import { Building2, Globe, MapPin, FileText, Briefcase, Landmark, Phone, Mail } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function LegalEntityPage() {
  const entityDetails = [
    {
      label: 'Legal Name',
      value: 'HUK SONS IT',
      icon: Building2
    },
    {
      label: 'Parent Company',
      value: 'HUK SONS',
      icon: Landmark
    },
    {
      label: 'Registration Status',
      value: 'Active / Good Standing',
      icon: FileText
    },
    {
      label: 'Business Type',
      value: 'Private Limited Company',
      icon: Briefcase
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="Legal Entity & Group Structure | HUK SONS IT"
        description="Information about HUK SONS IT legal entity, subsidiary status, and corporate structure. HUK SONS IT is a subsidiary of HUK SONS."
        keywords="legal entity, corporate structure, HUK SONS IT subsidiary, HUK SONS group, business registration"
        canonical="https://huksonsit.com/legal/entity"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
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
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Corporate Information</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  Legal Entity &<br />Group Structure
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Details regarding our corporate identity, registration, and relationship with our parent company.
              </p>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-3xl mx-auto mb-8">
                <p className="text-sm text-body dark:text-white/80">
                  <strong>Subsidiary Disclosure:</strong> HUK SONS IT operates as a legally separate subsidiary of HUK SONS. When you engage with this site or our services, you are interacting with HUK SONS IT (a subsidiary of HUK SONS) as the contracting entity, unless a signed agreement specifies otherwise.
                </p>
              </div>

              <div className="text-sm text-muted-foreground dark:text-white/60">
                Last Updated: November 29, 2025
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Entity Details Grid */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {entityDetails.map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 h-full bg-card border-2 border-subtle hover:border-primary/30 transition-all">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <detail.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground dark:text-white/60 mb-1">{detail.label}</div>
                    <div className="text-lg font-semibold text-heading dark:text-white">{detail.value}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                Registered Office
              </h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="text-lg font-medium text-heading dark:text-white mb-2">Headquarters</div>
                  <address className="not-italic text-body dark:text-white/70 leading-relaxed">
                    Street No 1, House No 2, Garden Town,<br />
                    Girls College Road, Bahawalpur 63100,<br />
                    Punjab, Pakistan
                  </address>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-body dark:text-white/80">+92 (300) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:legal@huksons.com" className="text-primary hover:underline">legal@huksons.com</a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-subtle">
              <h2 className="text-2xl text-heading dark:text-white mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                Group Structure & Liability
              </h2>
              <div className="space-y-4 text-body dark:text-white/80 leading-relaxed">
                <p>
                  HUK SONS IT is a distinct legal entity from HUK SONS. While we share a brand heritage and strategic vision, HUK SONS IT maintains its own assets, liabilities, and management structure.
                </p>
                <p>
                  Contracts entered into with HUK SONS IT are binding solely upon HUK SONS IT. HUK SONS (the parent company) assumes no liability for the obligations of HUK SONS IT unless explicitly guaranteed in writing.
                </p>
              </div>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
