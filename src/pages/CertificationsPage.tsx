'use client';

import { Award, Shield, CheckCircle2, TrendingUp, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { SEOHead } from '../components/SEOHead';
import { motion } from 'motion/react';

export function CertificationsPage() {
  const navigate = useNavigate();

  const certifications = [
    {
      name: 'AWS Advanced Consulting Partner',
      provider: 'Amazon Web Services',
      icon: '☁️',
      level: 'Advanced Tier',
      description: 'Certified expertise in AWS cloud architecture, migration, and optimization with proven track record of 200+ successful deployments.',
      competencies: ['Cloud Migration', 'DevOps', 'Security', 'Well-Architected Framework']
    },
    {
      name: 'Google Cloud Partner',
      provider: 'Google Cloud Platform',
      icon: '🔷',
      level: 'Certified Partner',
      description: 'Validated proficiency in GCP services, infrastructure design, and enterprise-scale implementations across multiple industries.',
      competencies: ['Infrastructure', 'Data Analytics', 'Machine Learning', 'Kubernetes']
    },
    {
      name: 'Microsoft Azure Solutions Partner',
      provider: 'Microsoft Azure',
      icon: '🔵',
      level: 'Solutions Partner',
      description: 'Recognized expertise in Azure cloud services, hybrid cloud solutions, and enterprise application modernization.',
      competencies: ['Cloud Infrastructure', 'Azure DevOps', 'Security', 'AI & ML']
    },
    {
      name: 'HashiCorp Terraform Certified',
      provider: 'HashiCorp',
      icon: '⚙️',
      level: 'Professional',
      description: 'Infrastructure as Code expertise with Terraform for multi-cloud deployments and automated provisioning.',
      competencies: ['IaC', 'Multi-Cloud', 'Automation', 'State Management']
    },
    {
      name: 'Kubernetes Certified Administrator',
      provider: 'Cloud Native Computing Foundation',
      icon: '☸️',
      level: 'CKA Certified',
      description: 'Expert-level Kubernetes administration, orchestration, and production-grade cluster management capabilities.',
      competencies: ['Container Orchestration', 'Cluster Management', 'Security', 'Scaling']
    },
    {
      name: 'ISO 27001 Compliant',
      provider: 'International Organization for Standardization',
      icon: '🔒',
      level: 'Certified',
      description: 'Information security management systems certification ensuring enterprise-grade security practices and compliance.',
      competencies: ['Security Management', 'Risk Assessment', 'Compliance', 'Data Protection']
    },
    {
      name: 'SOC 2 Type II Certified',
      provider: 'AICPA',
      icon: '✅',
      level: 'Type II',
      description: 'Audited security, availability, and confidentiality controls demonstrating commitment to client data protection.',
      competencies: ['Security Controls', 'Availability', 'Confidentiality', 'Privacy']
    },
    {
      name: 'Docker Certified Associate',
      provider: 'Docker',
      icon: '🐳',
      level: 'Associate',
      description: 'Containerization expertise for building, shipping, and running applications in production environments.',
      competencies: ['Containerization', 'Image Management', 'Orchestration', 'Best Practices']
    }
  ];

  const stats = [
    { value: '15+', label: 'Certifications', description: 'Across cloud platforms' },
    { value: '50+', label: 'Certified Engineers', description: 'Expert-level professionals' },
    { value: '1500+', label: 'Projects Delivered', description: 'Using certified practices' },
    { value: '98%', label: 'Success Rate', description: 'Client satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      <SEOHead
        title="Certifications & Partnerships | HUK SONS IT"
        description="HUK SONS IT holds advanced certifications from AWS, Google Cloud, Microsoft Azure, HashiCorp, and more. ISO 27001 and SOC 2 Type II compliant for enterprise security."
        keywords="AWS certified, Google Cloud Partner, Azure Solutions Partner, Terraform certified, Kubernetes CKA, ISO 27001, SOC 2"
        canonical="https://huksonsit.com/certifications"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #00D3A9 1px, transparent 1px),
            linear-gradient(to bottom, #00D3A9 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D3A9]/5 dark:bg-[#00D3A9]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />

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
                <Award className="w-5 h-5 text-[#00D3A9]" />
                <span className="text-sm uppercase tracking-wider text-[#00D3A9]">Certified Excellence</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                  Certifications &<br />Partnerships
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
                Enterprise-grade certifications from the world's leading technology providers, ensuring the highest standards of technical excellence and security compliance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 text-center bg-gradient-to-br from-[#00D3A9]/10 to-transparent border-2 border-[#00D3A9]/20 hover:border-[#00D3A9] transition-all duration-300">
                    <div className="text-4xl text-[#00D3A9] mb-2">{stat.value}</div>
                    <div className="text-[#0A0D12] dark:text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-[#0A0D12]/60 dark:text-white/60">{stat.description}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-[#0A0D12] dark:text-white mb-6">
                Our <span className="text-[#00D3A9]">Certifications</span>
              </h2>
              <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto">
                Industry-recognized credentials demonstrating our commitment to excellence, security, and best practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-8 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9]/30 transition-all duration-300 h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-5xl">{cert.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl text-[#0A0D12] dark:text-white">{cert.name}</h3>
                          <span className="px-3 py-1 bg-[#00D3A9]/10 text-[#00D3A9] text-xs rounded-full whitespace-nowrap ml-2">
                            {cert.level}
                          </span>
                        </div>
                        <p className="text-sm text-[#0A0D12]/60 dark:text-white/60 mb-2">{cert.provider}</p>
                      </div>
                    </div>

                    <p className="text-[#0A0D12]/80 dark:text-white/80 mb-6">
                      {cert.description}
                    </p>

                    <div>
                      <div className="text-sm text-[#0A0D12]/60 dark:text-white/60 mb-3">Core Competencies:</div>
                      <div className="flex flex-wrap gap-2">
                        {cert.competencies.map((comp, compIdx) => (
                          <span
                            key={compIdx}
                            className="px-3 py-1 bg-[#0A0D12]/5 dark:bg-white/[0.02] border border-[#0A0D12]/10 dark:border-white/10 rounded-full text-xs text-[#0A0D12]/70 dark:text-white/70"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-10 bg-white dark:bg-white/[0.03] border-2 border-[#00D3A9]/20">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-10 h-10 text-[#00D3A9]" />
                  <h2 className="text-3xl text-[#0A0D12] dark:text-white">Security & Compliance</h2>
                </div>

                <p className="text-lg text-[#0A0D12]/80 dark:text-white/80 mb-8">
                  Our certifications extend beyond technical competence to include rigorous security and compliance standards, ensuring your data and infrastructure meet the highest industry requirements.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'ISO 27001 Information Security',
                      items: ['Risk management framework', 'Security controls', 'Continuous improvement', 'Audit compliance']
                    },
                    {
                      title: 'SOC 2 Type II',
                      items: ['Security controls audit', 'Availability monitoring', 'Confidentiality measures', 'Processing integrity']
                    },
                    {
                      title: 'GDPR & Data Protection',
                      items: ['Data privacy compliance', 'Right to erasure', 'Data portability', 'Breach notification']
                    },
                    {
                      title: 'HIPAA Compliance (Healthcare)',
                      items: ['Protected health information', 'Access controls', 'Audit logging', 'Encryption standards']
                    }
                  ].map((section, idx) => (
                    <div key={idx} className="p-6 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                      <h4 className="text-lg text-[#0A0D12] dark:text-white mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#00D3A9]" />
                        {section.title}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-sm text-[#0A0D12]/70 dark:text-white/70 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#00D3A9] rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0D12] dark:text-white mb-6">
              Work with <span className="text-[#00D3A9]">Certified Experts</span>
            </h2>
            <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
              Partner with a team that holds the industry's most respected certifications and follows proven best practices.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => navigate('/get-started')}
                className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-10 py-6 text-lg"
              >
                Start Your Project
              </Button>
              <Button
                onClick={() => navigate('/about')}
                variant="outline"
                className="border-2 border-[#0A0D12] dark:border-white px-10 py-6 text-lg"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
