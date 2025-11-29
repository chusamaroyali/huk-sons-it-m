'use client';

import { Map, Home, Briefcase, Users, Award, FileText, Shield, HelpCircle, Mail, ChevronRight } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const sitemapData = [
  {
    category: 'Main Pages',
    icon: Home,
    links: [
      { title: 'Home', path: '/', description: 'Welcome to HUK SONS IT - Global technical transformation firm' },
      { title: 'About Us', path: '/about', description: 'Learn about our company, mission, and values' },
      { title: 'Why Us', path: '/why-us', description: 'Discover what sets HUK SONS IT apart from competitors' },
      { title: 'Leadership', path: '/leadership', description: 'Meet Usama Idrees - Founder & Principal Architect' },
      { title: 'Certifications', path: '/certifications', description: 'Our professional certifications and accreditations' },
      { title: 'Case Studies', path: '/case-studies', description: 'Real-world success stories and transformations' },
      { title: 'Contact Us', path: '/contact-us', description: 'Contact us and start your transformation journey' }
    ]
  },
  {
    category: 'Solutions',
    icon: Briefcase,
    links: [
      { title: 'All Solutions', path: '/solutions', description: 'Overview of all strategic solutions' },
      { title: 'Cloud Infrastructure', path: '/solutions/cloud-infrastructure', description: 'Scalable cloud architecture and management' },
      { title: 'AI & Automation', path: '/solutions/ai-automation', description: 'Artificial intelligence and process automation' },
      { title: 'Data Infrastructure', path: '/solutions/data-infrastructure', description: 'Modern data pipelines and analytics' },
      { title: 'Emergency Intervention', path: '/solutions/emergency-intervention', description: 'Critical system recovery and support' },
      { title: 'Digital Marketing', path: '/solutions/digital-marketing', description: 'Strategic digital presence and growth' },
      { title: 'Emerging Technologies', path: '/solutions/emerging-technologies', description: 'Blockchain, IoT, and future tech' },
      { title: 'Business Process Solutions', path: '/solutions/business-process', description: 'Operational efficiency and optimization' },
      { title: 'Growth Solutions', path: '/solutions/growth', description: 'Strategic growth and market expansion' }
    ]
  },
  {
    category: 'Industries',
    icon: Briefcase,
    links: [
      { title: 'All Industries', path: '/industries', description: 'Serving diverse industries globally' },
      { title: 'SaaS & Software', path: '/industries/saas-software', description: 'Software as a Service solutions' },
      { title: 'Fintech & Banking', path: '/industries/fintech-banking', description: 'Financial technology and banking' },
      { title: 'E-commerce & Retail', path: '/industries/ecommerce-retail', description: 'Online retail and commerce' },
      { title: 'Healthcare & Life Sciences', path: '/industries/healthcare-lifesciences', description: 'Medical and life sciences technology' },
      { title: 'Analytics & AI', path: '/industries/analytics-ai', description: 'Data analytics and artificial intelligence' },
      { title: 'EdTech', path: '/industries/edtech', description: 'Educational technology' },
      { title: 'Manufacturing & Industrial', path: '/industries/manufacturing-industrial', description: 'Industrial automation and manufacturing' },
      { title: 'Travel & Hospitality', path: '/industries/travel-hospitality', description: 'Travel and hospitality solutions' },
      { title: 'Real Estate & PropTech', path: '/industries/real-estate-proptech', description: 'Property technology' },
      { title: 'Investment & Asset Management', path: '/industries/investment-asset-management', description: 'Investment management solutions' },
      { title: 'Insurance & InsurTech', path: '/industries/insurance-insurtech', description: 'Insurance technology' },
      { title: 'Cybersecurity', path: '/industries/cybersecurity', description: 'Security solutions' },
      { title: 'Telecommunications', path: '/industries/telecommunications', description: 'Telecom infrastructure' },
      { title: 'Enterprise SaaS', path: '/industries/enterprise-saas', description: 'Enterprise-grade software' },
      { title: 'Media & Entertainment', path: '/industries/media-entertainment', description: 'Media and entertainment tech' },
      { title: 'Mobile App Development', path: '/industries/mobile-app-dev', description: 'Mobile application solutions' },
      { title: 'Gaming & Esports', path: '/industries/gaming-esports', description: 'Gaming industry infrastructure' },
      { title: 'Energy & Utilities', path: '/industries/energy-utilities', description: 'Energy sector technology' },
      { title: 'Retail Technology', path: '/industries/retail-technology', description: 'Retail tech solutions' },
      { title: 'Wellness & Fitness', path: '/industries/wellness-fitness', description: 'Health and fitness tech' },
      { title: 'Automotive & Mobility', path: '/industries/automotive-mobility', description: 'Automotive technology' },
      { title: 'Logistics & Supply Chain', path: '/industries/logistics-supply-chain', description: 'Supply chain optimization' },
      { title: 'Professional Services', path: '/industries/professional-services', description: 'Professional services tech' },
      { title: 'Agriculture & AgTech', path: '/industries/agriculture-agtech', description: 'Agricultural technology' },
      { title: 'Transportation & Freight', path: '/industries/transportation-freight', description: 'Transportation solutions' },
      { title: 'Construction & Engineering', path: '/industries/construction-engineering', description: 'Construction technology' },
      { title: 'Creative & Design', path: '/industries/creative-design', description: 'Creative industry solutions' },
      { title: 'Broadcasting & Streaming', path: '/industries/broadcasting-streaming', description: 'Broadcasting technology' },
      { title: 'Legal Tech', path: '/industries/legal-tech', description: 'Legal technology' },
      { title: 'Luxury & Premium', path: '/industries/luxury-premium', description: 'Luxury market solutions' },
      { title: 'Social Networking', path: '/industries/social-networking', description: 'Social platform infrastructure' },
      { title: 'Data Centers & Hosting', path: '/industries/data-centers-hosting', description: 'Data center solutions' }
    ]
  },
  {
    category: 'Resources',
    icon: FileText,
    links: [
      { title: 'Resources Hub', path: '/resources', description: 'Access blogs, news, and technical resources' },
      { title: 'Blog', path: '/resources/blogs', description: 'Technical articles and industry insights' },
      { title: 'News', path: '/resources/news', description: 'Company updates and announcements' }
    ]
  },
  {
    category: 'Legal & Policies',
    icon: Shield,
    links: [
      { title: 'Service Level Agreements', path: '/legal/sla', description: 'Overview of Standard and Enterprise SLAs' },
      { title: 'Standard SLA', path: '/legal/sla/standard', description: '99.5% uptime, business hours support' },
      { title: 'Enterprise SLA', path: '/legal/sla/enterprise', description: '99.9% uptime, 24/7/365 premium support' },
      { title: 'Frequently Asked Questions', path: '/faq', description: 'Comprehensive FAQs about services and process' },
      { title: 'Non-Disclosure Agreement', path: '/legal/nda', description: 'NDA policy and confidentiality terms' },
      { title: 'Privacy Policy', path: '/legal/privacy', description: 'How we collect, use, and protect your data' },
      { title: 'Terms of Service', path: '/legal/terms', description: 'Terms and conditions for using HUK SONS IT solutions' },
      { title: 'Code of Conduct', path: '/code-of-conduct', description: 'Our professional code of conduct' },
      { title: 'Security', path: '/legal/security', description: 'Security policies and practices' },
      { title: 'Sitemap', path: '/sitemap', description: 'Complete site navigation (you are here)' }
    ]
  },
  {
    category: 'Contact & Support',
    icon: Mail,
    links: [
      { title: 'Contact Us', path: '/contact-us', description: 'Start your project or reach out to our team' },
      { title: 'Email', path: 'mailto:info@huksons.com', description: 'info@huksons.com', external: true },
      { title: 'Schedule Consultation', path: '/contact-us', description: 'Book a free 30-minute strategy call' }
    ]
  }
];

export function SitemapPage() {
  const navigate = useNavigate();

  const handleNavigate = (path: string, external: boolean = false) => {
    if (external) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="Sitemap | Complete Site Navigation | HUK SONS IT"
        description="Complete sitemap of HUK SONS IT website. Navigate through all services, industries, resources, legal pages, and company information."
        keywords="sitemap, site navigation, services, industries, DevOps, cloud migration, enterprise transformation"
        canonical="https://huksons.com/sitemap"
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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-8">
                <Map className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Complete Site Navigation</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  Sitemap
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Navigate through all pages, services, industries, and resources on the HUK SONS IT website.
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

      {/* Sitemap Grid */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-7xl mx-auto space-y-12">
            {sitemapData.map((section, sectionIdx) => (
              <motion.div
                key={sectionIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIdx * 0.1 }}
              >
                <Card className="p-8 md:p-10 bg-card border-2 border-subtle">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl text-heading dark:text-white">{section.category}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.links.map((link, linkIdx) => (
                      <button
                        key={linkIdx}
                        onClick={() => handleNavigate(link.path, link.external)}
                        className="group p-4 bg-muted/50 dark:bg-white/[0.02] hover:bg-primary/10 border-2 border-transparent hover:border-primary/30 rounded-lg text-left transition-all duration-300"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="text-heading dark:text-white group-hover:text-primary transition-colors">
                            {link.title}
                          </div>
                          <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                        <div className="text-sm text-muted-foreground dark:text-white/60 group-hover:text-heading/80 dark:group-hover:text-white/80 transition-colors">
                          {link.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/20 text-center">
              <h2 className="text-3xl text-heading dark:text-white mb-8">HUK SONS IT at a Glance</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { value: '1500+', label: 'Projects Delivered', desc: 'Consultation to execution' },
                  { value: '98%', label: 'End-to-End', desc: 'Complete solutions' },
                  { value: '32+', label: 'Industries', desc: 'Global expertise' },
                  { value: '8', label: 'Core Solutions', desc: 'Strategic offerings' }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-4xl text-primary mb-2">{stat.value}</div>
                    <div className="text-heading dark:text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground dark:text-white/60">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
