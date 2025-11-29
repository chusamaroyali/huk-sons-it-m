'use client';

import { 
  Shield, 
  Scale, 
  FileText, 
  Lock, 
  Globe, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function LegalCenterPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('agreements');

  const legalSections = [
    {
      id: 'agreements',
      title: 'Agreements & Terms',
      icon: <FileText className="w-5 h-5" />,
      description: "Our foundational legal frameworks establish the rules of engagement, service expectations, and mutual responsibilities. These documents govern your use of HUK SONS IT services and define the contractual relationship between us.",
      items: [
        { title: 'Terms of Service', path: '/legal/terms', description: 'Master terms for using our services.' },
        { title: 'Acceptable Use Policy', path: '/legal/aup', description: 'Rules for using our platform and APIs.' },
        { title: 'Service Level Agreements (SLA)', path: '/legal/sla', description: 'Uptime guarantees and support tiers.' },
        { title: 'Non-Disclosure Agreement (NDA)', path: '/legal/nda', description: 'Confidentiality terms for partners.' },
        { title: 'Legal Entity & Structure', path: '/legal/entity', description: 'Corporate identity and group structure.' },
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy & Data Protection',
      icon: <Lock className="w-5 h-5" />,
      description: "We are committed to the highest standards of data privacy. Our global privacy program is designed to comply with GDPR, CCPA, and other international regulations, ensuring your data is handled with care and transparency.",
      items: [
        { title: 'Privacy Policy', path: '/legal/privacy', description: 'How we handle personal data globally.' },
        { title: 'Cookie Policy', path: '/legal/cookies', description: 'Tracking technologies and consent.' },
        { title: 'GDPR Compliance', path: '/legal/gdpr', description: 'EU data protection standards.' },
        { title: 'CCPA/CPRA Notice', path: '/legal/ccpa', description: 'California privacy rights.' },
        { title: 'Data Processing Addendum', path: '/legal/dpa', description: 'Terms for processing customer data.' },
        { title: 'Processing Roles', path: '/legal/processing-roles', description: 'Controller vs. Processor roles.' },
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: <Shield className="w-5 h-5" />,
      description: "Security is built into every layer of our infrastructure. Explore our security controls, compliance certifications, and incident response protocols designed to protect your business continuity.",
      items: [
        { title: 'Security Assurance', path: '/legal/security', description: 'Our security controls and ISMS.' },
        { title: 'Incident Response', path: '/legal/incident-response', description: 'Breach notification procedures.' },
        { title: 'Subprocessors', path: '/legal/subprocessors', description: 'Third-party data processors.' },
        { title: 'Export Compliance', path: '/legal/export-compliance', description: 'Trade compliance and sanctions.' },
        { title: 'Transparency Report', path: '/legal/transparency', description: 'Government data requests.' },
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate Responsibility',
      icon: <Globe className="w-5 h-5" />,
      description: "We operate with integrity and accountability. Our corporate policies reflect our commitment to ethical business practices, sustainability, and social responsibility in every market we serve.",
      items: [
        { title: 'Code of Conduct', path: '/code-of-conduct', description: 'Ethics and professional standards.' },
        { title: 'Accessibility', path: '/legal/accessibility', description: 'WCAG 2.1 AA commitment.' },
        { title: 'ESG Statement', path: '/legal/esg', description: 'Environmental and social governance.' },
        { title: 'AI Ethics Policy', path: '/legal/ai-policy', description: 'Responsible AI development.' },
        { title: 'Whistleblower Policy', path: '/legal/whistleblower', description: 'Reporting ethics violations.' },
      ]
    },
    {
      id: 'resources',
      title: 'Resources & Support',
      icon: <BookOpen className="w-5 h-5" />,
      description: "Access supplementary legal resources, intellectual property guidelines, and direct support channels for legal inquiries. We are here to assist with your compliance needs.",
      items: [
        { title: 'Legal FAQ', path: '/faq', description: 'Common legal questions answered.' },
        { title: 'IP Policy', path: '/legal/ip', description: 'Trademarks and copyright.' },
        { title: 'Legal Contact', path: '/legal/contact', description: 'Get in touch with legal.' },
        { title: 'Appendices & Downloads', path: '/legal/appendices', description: 'Forms and supplementary docs.' },
        { title: 'Sitemap', path: '/sitemap', description: 'Full directory of site pages.' },
      ]
    }
  ];

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = legalSections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [legalSections]);

  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300 font-sans">
      <SEOHead
        title="Legal & Compliance Center | HUK SONS IT"
        description="Central hub for HUK SONS IT legal documents, policies, and compliance information. Access Terms of Service, Privacy Policy, and Security documentation."
        keywords="legal center, compliance, terms of service, privacy policy, security, HUK SONS IT legal"
        canonical="https://huksonsit.com/legal"
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-white dark:bg-main border-b border-subtle">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
                <Scale className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Legal & Compliance Center</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-heading dark:text-white tracking-tight">
                Trust, Transparency & <br/>
                <span className="text-primary">Compliance</span>
              </h1>

              <p className="text-lg text-body dark:text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
                Welcome to the HUK SONS IT Legal Center. As a global technology provider, we are dedicated to maintaining the highest standards of transparency, security, and regulatory compliance. Here you will find our master agreements, privacy frameworks, and compliance certifications that govern our relationship with customers, partners, and regulators worldwide.
              </p>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-3xl mx-auto mb-8 text-left">
                <p className="text-sm text-body dark:text-white/80">
                  <strong>Subsidiary Disclosure:</strong> HUK SONS IT operates as a legally separate subsidiary of HUK SONS. When you engage with this site or our services, you are interacting with HUK SONS IT (a subsidiary of HUK SONS) as the contracting entity, unless a signed agreement specifies otherwise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container-enterprise py-16 max-w-6xl mx-auto">
        <div className="space-y-20">
          {legalSections.map((section, idx) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-32 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-heading dark:text-white">
                  {section.title}
                </h2>
              </div>
              
              <p className="text-body dark:text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                {section.description}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {section.items.map((item, iIdx) => (
                  <Card 
                    key={iIdx}
                    className="group relative overflow-hidden border border-subtle bg-card hover:border-primary/50 transition-all duration-300"
                  >
                    <button
                      onClick={() => navigate(item.path)}
                      className="w-full p-6 text-left h-full flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-heading dark:text-white group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                      <p className="text-sm text-muted-foreground dark:text-white/60 mt-auto leading-relaxed">
                        {item.description}
                      </p>
                    </button>
                  </Card>
                ))}
              </div>
              
              {idx !== legalSections.length - 1 && (
                <div className="h-px bg-border dark:bg-white/5 mt-20 max-w-4xl mx-auto" />
              )}
            </motion.section>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <section className="py-20 bg-heading dark:bg-black border-t border-white/10">
        <div className="container-enterprise text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Still have questions?</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Our legal team is available to answer questions regarding our policies, terms, and compliance standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate('/legal/contact')}
              className="px-8 py-3 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-colors"
            >
              Contact Legal Team
            </button>
            <button 
              onClick={() => navigate('/faq')}
              className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              View FAQ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
