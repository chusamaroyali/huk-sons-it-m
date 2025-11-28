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
      { title: 'Service Level Agreements', path: '/sla', description: 'Overview of Standard and Enterprise SLAs' },
      { title: 'Standard SLA', path: '/sla/standard', description: '99.5% uptime, business hours support' },
      { title: 'Enterprise SLA', path: '/sla/enterprise', description: '99.9% uptime, 24/7/365 premium support' },
      { title: 'Frequently Asked Questions', path: '/faq', description: 'Comprehensive FAQs about services and process' },
      { title: 'Non-Disclosure Agreement', path: '/nda', description: 'NDA policy and confidentiality terms' },
      { title: 'Privacy Policy', path: '/privacy-policy', description: 'How we collect, use, and protect your data' },
      { title: 'Terms of Service', path: '/terms-of-service', description: 'Terms and conditions for using HUK SONS IT solutions' },
      { title: 'Code of Conduct', path: '/code-of-conduct', description: 'Our professional code of conduct' },
      { title: 'Security', path: '/security', description: 'Security policies and practices' },
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
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      <SEOHead
        title="Sitemap | Complete Site Navigation | HUK SONS IT"
        description="Complete sitemap of HUK SONS IT website. Navigate through all services, industries, resources, legal pages, and company information."
        keywords="sitemap, site navigation, services, industries, DevOps, cloud migration, enterprise transformation"
        canonical="https://huksons.com/sitemap"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D3A9_1px,transparent_1px),linear-gradient(to_bottom,#00D3A9_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D3A9]/5 dark:bg-[#00D3A9]/10 rounded-full blur-[120px] animate-pulse pointer-events-none [animation-duration:8s]" />

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
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#00D3A9]/10 border border-[#00D3A9]/30 rounded-full mb-8">
                <Map className="w-5 h-5 text-[#00D3A9]" />
                <span className="text-sm uppercase tracking-wider text-[#00D3A9]">Complete Site Navigation</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                  Sitemap
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
                Navigate through all pages, services, industries, and resources on the HUK SONS IT website.
              </p>
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
                <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-[#00D3A9]/10 rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-[#00D3A9]" />
                    </div>
                    <h2 className="text-3xl text-[#0A0D12] dark:text-white">{section.category}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.links.map((link, linkIdx) => (
                      <button
                        key={linkIdx}
                        onClick={() => handleNavigate(link.path, link.external)}
                        className="group p-4 bg-[#0A0D12]/5 dark:bg-white/[0.02] hover:bg-[#00D3A9]/10 border-2 border-transparent hover:border-[#00D3A9]/30 rounded-lg text-left transition-all duration-300"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="text-[#0A0D12] dark:text-white group-hover:text-[#00D3A9] transition-colors">
                            {link.title}
                          </div>
                          <ChevronRight className="w-4 h-4 text-[#00D3A9] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                        <div className="text-sm text-[#0A0D12]/60 dark:text-white/60 group-hover:text-[#0A0D12]/80 dark:group-hover:text-white/80 transition-colors">
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
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-10 bg-gradient-to-br from-[#00D3A9]/10 to-transparent border-2 border-[#00D3A9]/20 text-center">
              <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-8">HUK SONS IT at a Glance</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { value: '1500+', label: 'Projects Delivered', desc: 'Consultation to execution' },
                  { value: '98%', label: 'End-to-End', desc: 'Complete solutions' },
                  { value: '32+', label: 'Industries', desc: 'Global expertise' },
                  { value: '8', label: 'Core Solutions', desc: 'Strategic offerings' }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-4xl text-[#00D3A9] mb-2">{stat.value}</div>
                    <div className="text-[#0A0D12] dark:text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-[#0A0D12]/60 dark:text-white/60">{stat.desc}</div>
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
