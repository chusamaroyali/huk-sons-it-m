'use client';

import { HelpCircle, ChevronDown, Search, ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';
import { useState } from 'react';

const faqCategories = [
  {
    category: 'General & Company',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What is HUK SONS IT and what do you specialize in?',
        answer: 'HUK SONS IT is a global technical transformation and engineering firm founded by Usama Idrees. We specialize in DevOps, DataOps, Cloud Infrastructure, and enterprise-grade digital transformation. With 17+ years of experience, we\'ve delivered 1500+ projects from consultation to execution, with 98% being complete end-to-end solutions across 32+ industries.'
      },
      {
        question: 'How is HUK SONS IT different from other consulting firms?',
        answer: 'Every project is personally led by senior-level expertise—no junior teams, no delegation. Our founder, Usama Idrees (Principal Architect), is directly involved in every engagement. We focus on measurable business outcomes, not just technical deliverables. We\'ve achieved 30-60% average cost reduction for clients through intelligent cloud optimization and automation.'
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve 32+ industries including: Aerospace & Defense, Agriculture & Food, Automotive, Banking & Financial Services, Biotechnology, Construction, Education, Energy & Utilities, Government, Healthcare, Insurance, Legal Services, Manufacturing, Media & Entertainment, Non-Profit, Oil & Gas, Pharmaceutical, Real Estate, Retail & E-Commerce, Technology & Software, Telecommunications, Transportation & Logistics, Travel & Hospitality, and more. Each industry receives customized solutions tailored to regulatory and operational requirements.'
      },
      {
        question: 'Where is HUK SONS IT located and do you work globally?',
        answer: 'HUK SONS IT operates globally with clients across multiple continents. We provide remote-first services with the ability to work in client\'s timezone. Our distributed model allows us to serve enterprises worldwide while maintaining the highest quality standards through direct principal architect involvement.'
      },
      {
        question: 'How many projects has HUK SONS IT completed?',
        answer: 'We\'ve delivered 1500+ projects from consultation to full execution. 98% of these were complete end-to-end solutions, not just advisory or partial implementations. Our projects range from small-scale optimizations to enterprise-wide transformations across cloud migration, data engineering, DevOps automation, and infrastructure modernization.'
      }
    ]
  },
  {
    category: 'Solutions',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What solutions does HUK SONS IT offer?',
        answer: 'We offer 8 comprehensive solutions: 1) DevOps & Infrastructure Automation, 2) Cloud Migration & Optimization (AWS, GCP, Azure), 3) Data Engineering & Analytics, 4) Security & Compliance, 5) Kubernetes & Container Orchestration, 6) CI/CD Pipeline Development, 7) Monitoring & Observability, and 8) Growth Solutions (including Cloud Cost Optimization, Infrastructure Scaling, Performance Optimization, Disaster Recovery, Multi-Cloud Strategy, Legacy System Modernization, Automation & Workflow, and Technical Debt Reduction).'
      },
      {
        question: 'Do you provide both consulting and implementation?',
        answer: 'Yes. 98% of our 1500+ delivered projects were end-to-end solutions combining strategy, architecture, implementation, testing, and post-launch support. We don\'t just advise—we build, deploy, and ensure success. You work directly with senior engineers who own the outcome from start to finish.'
      },
      {
        question: 'Can you help with cloud cost optimization?',
        answer: 'Absolutely. Cloud Cost Optimization is one of our 8 Growth Solution sub-solutions. We\'ve achieved 30-60% average cost reduction for clients through right-sizing, reserved instances, spot instances, auto-scaling, unused resource elimination, and architectural improvements. We provide detailed analysis, implement changes, and deliver ongoing monitoring to ensure sustained savings.'
      },
      {
        question: 'Do you support multi-cloud or hybrid cloud strategies?',
        answer: 'Yes. Multi-Cloud Strategy is a dedicated Growth Solution. We have deep expertise across AWS, Google Cloud Platform, and Microsoft Azure. We help enterprises design and implement multi-cloud architectures for redundancy, cost optimization, regulatory compliance, and vendor lock-in avoidance. Our hybrid cloud solutions bridge on-premise infrastructure with cloud providers seamlessly.'
      },
      {
        question: 'What is included in your DevOps solutions?',
        answer: 'Our DevOps solutions include: Infrastructure as Code (Terraform, Ansible), CI/CD pipeline automation (Jenkins, GitLab, GitHub Actions), containerization (Docker, Kubernetes), configuration management, automated testing and deployment, monitoring and logging setup, security integration (DevSecOps), incident response automation, and complete documentation. We build fully automated, scalable, and resilient DevOps ecosystems.'
      },
      {
        question: 'Can you handle legacy system modernization?',
        answer: 'Yes. Legacy System Modernization is one of our Growth Solutions. We specialize in migrating legacy applications to modern cloud-native architectures, containerizing monoliths, refactoring codebases, migrating databases (on-prem to cloud, SQL to NoSQL), and ensuring zero downtime during transitions. We\'ve modernized systems across banking, healthcare, government, and enterprise sectors.'
      },
      {
        question: 'Do you provide disaster recovery and business continuity planning?',
        answer: 'Yes. Disaster Recovery & Business Continuity is a Growth Solution. We design and implement comprehensive DR strategies including automated backups, multi-region replication, failover automation, RTO/RPO optimization, disaster recovery testing, and complete runbook documentation. Our solutions ensure 99.9% uptime even during catastrophic failures.'
      }
    ]
  },
  {
    category: 'Pricing & Engagement',
    icon: HelpCircle,
    faqs: [
      {
        question: 'How does HUK SONS IT pricing work?',
        answer: 'We offer custom-tailored enterprise pricing based on project scope, complexity, duration, and required resources. Pricing models include: Fixed-price projects for well-defined scopes, Time & Materials for evolving requirements, Monthly retainers for ongoing support and optimization, and Dedicated team arrangements for long-term engagements. Contact us for a detailed quote aligned with your budget and goals.'
      },
      {
        question: 'What is the minimum engagement size?',
        answer: 'Our minimum engagement is typically $20,000 for project-based work. For monthly retainers and ongoing support, minimums start at $5,000/month. This ensures we can dedicate senior-level resources and deliver the quality and attention HUK SONS IT is known for. Smaller scopes may be considered on a case-by-case basis.'
      },
      {
        question: 'Do you offer payment plans or financing?',
        answer: 'Yes. We offer flexible payment structures including milestone-based payments for projects, monthly invoicing for retainers, quarterly payment options for annual contracts, and Net-30/Net-60 terms for established enterprise clients. Custom arrangements can be discussed based on project size and client relationship.'
      },
      {
        question: 'Is there a free consultation or assessment?',
        answer: 'Yes. We offer a complimentary Technical Assessment for qualified enterprises (typically with $20K+ transformation budgets). This includes a 60-minute consultation with Usama Idrees, a detailed 15-20 page assessment report, infrastructure audit, cost optimization analysis, ROI projections, and a phased transformation roadmap. No sales pitch—just actionable insights.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept: Bank wire transfers (domestic and international), ACH payments, Credit cards (for smaller invoices), Cryptocurrency (Bitcoin, Ethereum) for select clients, and Purchase orders from established enterprise accounts. All payments are processed securely with detailed invoicing and receipts.'
      },
      {
        question: 'Do you provide ROI guarantees?',
        answer: 'While we cannot guarantee specific ROI due to variable business factors, we provide detailed ROI projections based on historical data from similar engagements. Our average client achieves 30-60% cost reduction in cloud infrastructure, 10x scalability improvements, 99.9% uptime, and <2 hour incident resolution. We include performance metrics and KPIs in all agreements to ensure measurable outcomes.'
      }
    ]
  },
  {
    category: 'Process & Timeline',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What is the typical project timeline?',
        answer: 'Timelines vary by scope: Small optimizations: 2-4 weeks, Medium migrations/implementations: 6-12 weeks, Large enterprise transformations: 3-6 months, Ongoing retainers: Month-to-month or annual. We provide detailed project plans with milestones, deliverables, and timelines during the discovery phase. Rush projects can be accommodated with dedicated resources.'
      },
      {
        question: 'How does the engagement process work?',
        answer: 'Our process: 1) Initial consultation (free for qualified leads) 2) Discovery & assessment (requirements gathering, infrastructure audit) 3) Proposal & SOW (detailed scope, timeline, pricing) 4) NDA & contract execution 5) Kickoff & planning 6) Implementation with regular updates 7) Testing & validation 8) Deployment & handoff 9) Post-launch support. You\'re involved at every stage with complete transparency.'
      },
      {
        question: 'How involved will my team need to be?',
        answer: 'Involvement level depends on preference and project type. Minimum: Kickoff meeting, periodic check-ins, final review (~5-10 hours total). Moderate: Weekly status meetings, requirements clarification, testing participation (~15-20 hours total). High: Daily standups, pair programming, knowledge transfer sessions (~40+ hours total). We adapt to your availability and collaboration preferences.'
      },
      {
        question: 'Do you provide documentation and knowledge transfer?',
        answer: 'Yes. Every project includes: Comprehensive architecture documentation, Infrastructure diagrams and topology maps, Runbooks for operations and troubleshooting, Code repositories with detailed README files, Knowledge transfer sessions (recorded), Post-deployment training for your team, and 30-90 days of handoff support. We ensure your team can operate and maintain solutions independently.'
      },
      {
        question: 'What happens if the project scope changes mid-engagement?',
        answer: 'Scope changes are managed through formal change requests: 1) Client submits change request with details 2) We assess impact on timeline, budget, resources 3) Provide revised SOW addendum for approval 4) Upon agreement, changes are implemented 5) All changes documented and tracked. We maintain flexibility while ensuring transparency and mutual agreement on any deviations from original scope.'
      },
      {
        question: 'Can I pause or cancel an engagement?',
        answer: 'For project-based work: Cancellation requires 30-day notice; completed work billed at agreed rates; refunds for unused prepayments. For retainers: Can be paused or canceled with 30-day notice; no cancellation fees for 90+ day relationships; final invoice for prorated period. Emergency cancellations considered on case-by-case basis. We aim for fair, transparent exit terms.'
      }
    ]
  },
  {
    category: 'Technical & Support',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What technologies and platforms do you work with?',
        answer: 'Cloud Platforms: AWS, Google Cloud, Microsoft Azure. Containers: Docker, Kubernetes, Helm. IaC: Terraform, Ansible, CloudFormation. CI/CD: Jenkins, GitLab CI/CD, GitHub Actions, CircleCI. Monitoring: Datadog, New Relic, Prometheus, Grafana, ELK Stack. Data: Hadoop, Kafka, Snowflake, BigQuery, Redshift. Languages: Python, Go, Bash, JavaScript/Node.js. Databases: PostgreSQL, MySQL, MongoDB, DynamoDB, Redis. And many more—we work with the entire modern enterprise stack.'
      },
      {
        question: 'Do you provide 24/7 support?',
        answer: 'Support levels depend on SLA tier: Standard SLA: Business hours (Mon-Fri, 9am-6pm client timezone) with emergency contact for critical issues. Enterprise SLA: 24/7/365 support with dedicated Technical Account Manager, emergency hotline, and guaranteed <15 minute response for critical incidents. Post-project support: 30-90 days included, then optional retainer for ongoing support.'
      },
      {
        question: 'How do you handle security and compliance?',
        answer: 'Security is embedded in everything we do: Secure by design architectures, Infrastructure hardening and least-privilege access, Encryption at-rest and in-transit, Security scanning and vulnerability management, Compliance consulting (SOC 2, HIPAA, PCI-DSS, GDPR, etc.), Regular security audits and penetration testing, Incident response planning, and Complete audit trails. We can work within your security policies and achieve compliance certifications.'
      },
      {
        question: 'What SLA commitments do you offer?',
        answer: 'We offer two SLA tiers: Standard SLA: 99.5% uptime, <2 hour P1 response, business hours support, monthly reporting. Enterprise SLA: 99.9% uptime, <15 minute P1 response, 24/7/365 support, dedicated TAM, proactive monitoring, weekly reporting. Both include automatic service credits for SLA breaches. Custom SLAs available for unique requirements.'
      },
      {
        question: 'Do you sign NDAs?',
        answer: 'Yes. We sign mutual NDAs (Non-Disclosure Agreements) with all clients as standard practice. This protects your confidential information, intellectual property, and trade secrets. NDAs can be standard HUK SONS IT template or your company\'s preferred NDA format. We also sign Master Service Agreements (MSAs), Data Processing Agreements (DPAs), and custom legal contracts as needed. View our NDA page for details.'
      },
      {
        question: 'What monitoring and reporting do you provide?',
        answer: 'Monitoring: Real-time infrastructure health dashboards, Automated alerting for anomalies and incidents, Performance metrics and trending, Security and compliance monitoring, Cost tracking and optimization alerts. Reporting: Weekly status updates (project phase), Monthly SLA reports with uptime/performance data, Quarterly business reviews with stakeholders, Custom reports on demand. All data accessible via client portal 24/7.'
      }
    ]
  },
  {
    category: 'Getting Started',
    icon: HelpCircle,
    faqs: [
      {
        question: 'How do I get started with HUK SONS IT?',
        answer: 'Simple 3-step process: 1) Contact us via email (info@huksons.com), phone, or "Get Started" form on our website. 2) Schedule a free consultation call with Usama Idrees to discuss your needs, challenges, and goals. 3) Receive a detailed proposal with scope, timeline, and pricing. If aligned, we proceed to NDA/contract and kickoff. Most engagements start within 1-2 weeks of initial contact.'
      },
      {
        question: 'What information should I prepare before contacting you?',
        answer: 'Helpful (but not required) information: Current infrastructure overview (cloud providers, services used), Pain points or challenges you\'re facing, Project goals and desired outcomes, Timeline constraints or deadlines, Budget range or approval process, Technical team structure and availability, Any compliance or regulatory requirements. Don\'t worry if you don\'t have all details—we help you define requirements during discovery.'
      },
      {
        question: 'Can you work with our existing vendors and partners?',
        answer: 'Absolutely. We collaborate seamlessly with your existing technology vendors, managed service providers, cloud partners, and internal teams. We integrate into your ecosystem without disrupting existing relationships. Many clients use us as an extension of their team or to provide specialized expertise their current vendors lack. We believe in partnership, not vendor lock-in.'
      },
      {
        question: 'Do you require long-term contracts?',
        answer: 'No. While we offer discounts for annual commitments, we do not require long-term contracts. Project-based work: Contracted per project scope (typically 1-6 months). Monthly retainers: Month-to-month with 30-day cancellation notice. Annual retainers: Optional for cost savings (10-20% discount). We earn your business through results, not contractual lock-in.'
      },
      {
        question: 'What if I only need short-term help?',
        answer: 'We support short-term engagements: One-time assessments/audits (1-2 weeks), Specific problem solving (2-4 weeks), Project rescue/troubleshooting (as needed), Interim infrastructure management (1-3 months), Technical due diligence for M&A (2-3 weeks). Short-term work priced accordingly with clear deliverables and exit criteria.'
      },
      {
        question: 'Still have questions?',
        answer: 'We\'re here to help! Contact us: Email: info@huksons.com (response within 24 hours). Schedule a call: Use the "Get Started" page to book a free consultation. Phone: Available for qualified enterprise inquiries. We respond quickly and are happy to answer any questions about your specific needs.'
      }
    ]
  }
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
      <SEOHead
        title="Frequently Asked Questions (FAQ) | HUK SONS IT"
        description="Find answers to common questions about HUK SONS IT's solutions, pricing, process, SLA commitments, and technical capabilities. Comprehensive FAQ covering DevOps, cloud migration, and enterprise transformation."
        keywords="FAQ, frequently asked questions, DevOps consulting, cloud migration, enterprise services, technical support, pricing"
        canonical="https://huksonsit.com/faq"
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
                <HelpCircle className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Frequently Asked Questions</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  Questions?
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  We Have Answers
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Everything you need to know about HUK SONS IT's solutions, pricing, process, and technical capabilities.
              </p>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-3xl mx-auto mb-8">
                <p className="text-sm text-body dark:text-white/80">
                  <strong>Subsidiary Disclosure:</strong> HUK SONS IT operates as a legally separate subsidiary of HUK SONS. When you engage with this site or our services, you are interacting with HUK SONS IT (a subsidiary of HUK SONS) as the contracting entity, unless a signed agreement specifies otherwise.
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground/60 dark:text-white/40" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-white/[0.03] border-2 border-subtle dark:border-white/10 rounded-xl text-heading dark:text-white placeholder-muted-foreground/60 dark:placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="p-8 md:p-10 bg-card border-2 border-subtle">
                  <h2 className="text-3xl text-heading dark:text-white mb-6 flex items-center gap-3">
                    <category.icon className="w-8 h-8 text-primary" />
                    {category.category}
                  </h2>

                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const isOpen = openIndex === `${categoryIndex}-${faqIndex}`;
                      return (
                        <div
                          key={faqIndex}
                          className="border-2 border-subtle dark:border-white/10 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300"
                        >
                          <button
                            onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                            className="w-full p-6 text-left flex items-center justify-between gap-4 bg-muted/50 dark:bg-white/[0.02] hover:bg-primary/5 transition-colors"
                          >
                            <span className="text-lg text-heading dark:text-white">{faq.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="p-6 bg-white dark:bg-main border-t-2 border-subtle dark:border-white/10">
                              <p className="text-body dark:text-white/80 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            ))}

            {filteredCategories.length === 0 && (
              <Card className="p-12 text-center bg-card border-2 border-subtle">
                <p className="text-xl text-body dark:text-white/70 mb-4">
                  No results found for "{searchTerm}"
                </p>
                <p className="text-muted-foreground dark:text-white/60">
                  Try a different search term or contact us directly
                </p>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-heading dark:text-white mb-6">
              Still Have <span className="text-primary">Questions?</span>
            </h2>
            <p className="text-xl text-body dark:text-white/70 mb-8 max-w-2xl mx-auto">
              We're here to help. Contact us directly and we'll respond within 24 hours.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 bg-card border-2 border-subtle hover:border-primary transition-all duration-300">
                <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg text-heading dark:text-white mb-2">Email Us</h3>
                <p className="text-sm text-body dark:text-white/70 mb-4">info@huksons.com</p>
                <p className="text-xs text-primary">Response within 24 hours</p>
              </Card>

              <Card className="p-6 bg-card border-2 border-subtle hover:border-primary transition-all duration-300">
                <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg text-heading dark:text-white mb-2">Schedule Call</h3>
                <p className="text-sm text-body dark:text-white/70 mb-4">Book a free consultation</p>
                <p className="text-xs text-primary">30-minute sessions available</p>
              </Card>

              <Card className="p-6 bg-card border-2 border-subtle hover:border-primary transition-all duration-300">
                <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg text-heading dark:text-white mb-2">Get Started</h3>
                <p className="text-sm text-body dark:text-white/70 mb-4">Submit project inquiry</p>
                <p className="text-xs text-primary">Receive proposal within 48 hours</p>
              </Card>
            </div>

            <Button
              onClick={() => navigate('/get-started')}
              className="bg-primary hover:bg-primary/90 text-heading px-10 py-6 text-lg group"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}