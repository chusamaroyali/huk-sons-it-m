import { Shield, Lock, Key, CheckCircle2, FileCheck, AlertTriangle, Server, Globe2, Eye, Zap, ArrowRight } from 'lucide-react';

export function SecurityPage() {
  return (
    <div className="min-h-screen bg-main relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '7s' }} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border-l-2 border-primary rounded-r-full">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Enterprise Security</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8">
              <span className="bg-gradient-to-r from-heading via-heading to-heading/60 bg-clip-text text-transparent">
                Security at
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                HUK SONS IT
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-body/70 max-w-3xl mx-auto">
              Enterprise-grade security practices protecting your infrastructure, data, and operations
            </p>

            {/* Divider */}
            <div className="flex justify-center mt-12">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-32">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto space-y-24">
            
            {/* Introduction */}
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-primary/30">
                <h2 className="text-4xl md:text-5xl text-heading mb-6">Our Commitment to Security</h2>
                <div className="space-y-4 text-lg md:text-xl text-body/70 leading-relaxed">
                  <p>
                    At HUK SONS IT, security is not an afterthought—it's fundamental to everything we do. As a global technical transformation firm handling critical infrastructure, automation systems, and data platforms, we maintain enterprise-grade security practices that meet the highest industry standards.
                  </p>
                  <p>
                    Our security framework is designed to protect your data, systems, and operations while enabling the agility and innovation your business requires.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Framework - 4 Pillars */}
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl text-heading mb-4">Security Framework</h2>
                <p className="text-xl text-body/60">Four pillars of comprehensive protection</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Lock,
                    title: 'Data Protection',
                    desc: 'End-to-end encryption for data in transit and at rest using industry-standard protocols (TLS 1.3, AES-256)',
                    color: 'from-primary/20 to-primary/5'
                  },
                  {
                    icon: Key,
                    title: 'Access Control',
                    desc: 'Multi-factor authentication (MFA), role-based access control (RBAC), and principle of least privilege',
                    color: 'from-blue-500/20 to-blue-500/5'
                  },
                  {
                    icon: Server,
                    title: 'Infrastructure Security',
                    desc: 'Hardened infrastructure, network segmentation, and continuous monitoring of all systems',
                    color: 'from-purple-500/20 to-purple-500/5'
                  },
                  {
                    icon: AlertTriangle,
                    title: 'Threat Detection',
                    desc: '24/7 security monitoring, intrusion detection systems, and automated threat response',
                    color: 'from-orange-500/20 to-orange-500/5'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-body/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative p-8 bg-gradient-to-br from-body/5 to-transparent border border-subtle rounded-2xl hover:border-primary/40 transition-all duration-500">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} border border-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl text-heading mb-4 flex items-center gap-2">
                        {item.title}
                        <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </h3>
                      <p className="text-body/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance & Certifications */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <FileCheck className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl text-heading">Compliance & Certifications</h2>
              </div>

              <p className="text-xl text-body/90 mb-8">
                We maintain compliance with international security standards and regulations:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { name: 'ISO 27001', desc: 'Information Security' },
                  { name: 'SOC 2 Type II', desc: 'Compliance' },
                  { name: 'GDPR', desc: 'Data Privacy' },
                  { name: 'AWS', desc: 'Best Practices' },
                  { name: 'GCP', desc: 'Security Standards' },
                  { name: 'Azure', desc: 'Security Framework' },
                  { name: 'OWASP', desc: 'Security Standards' },
                  { name: 'CSA', desc: 'Cloud Security' },
                  { name: 'PCI DSS', desc: 'Data Security' }
                ].map((cert, idx) => (
                  <div key={idx} className="group relative p-6 bg-gradient-to-br from-body/5 to-transparent border border-subtle rounded-xl hover:border-primary/50 hover:bg-body/5 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-heading">{cert.name}</span>
                      </div>
                      <p className="text-sm text-body/60">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Practices */}
            <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl text-heading text-center mb-12">Security Practices</h2>

              <div className="space-y-8">
                {[
                  {
                    title: 'Code Security',
                    items: [
                      'Secure code review and static analysis for all deployments',
                      'Automated vulnerability scanning in CI/CD pipelines',
                      'Dependency management and regular security updates',
                      'Secrets management using HashiCorp Vault and cloud-native solutions'
                    ]
                  },
                  {
                    title: 'Infrastructure Security',
                    items: [
                      'Infrastructure as Code (IaC) with security scanning (Terraform, Ansible)',
                      'Network segmentation and zero-trust architecture',
                      'Regular penetration testing and security audits',
                      'Automated patch management and system hardening'
                    ]
                  },
                  {
                    title: 'Data Security',
                    items: [
                      'Encryption at rest and in transit for all sensitive data',
                      'Data classification and handling procedures',
                      'Regular backups with encryption and secure storage',
                      'Data loss prevention (DLP) mechanisms'
                    ]
                  }
                ].map((section, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                      <h3 className="text-2xl md:text-3xl text-heading">{section.title}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 pl-6 border-l-2 border-primary/20">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3 p-4 bg-body/5 border border-subtle rounded-lg hover:border-primary/30 hover:bg-body/5 transition-all duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-body/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Incident Response */}
            <div className="relative p-10 bg-gradient-to-br from-primary/[0.02] via-transparent to-transparent border border-primary/10 rounded-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl text-heading">Incident Response</h2>
              </div>

              <p className="text-lg text-body/90 mb-6">
                We maintain a comprehensive incident response plan to quickly identify, contain, and remediate security incidents:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: '🔍', text: '24/7 security operations center (SOC) monitoring' },
                  { icon: '⚡', text: 'Defined escalation procedures and response timelines' },
                  { icon: '🎯', text: 'Regular incident response drills and tabletop exercises' },
                  { icon: '📊', text: 'Post-incident analysis and continuous improvement' },
                  { icon: '📢', text: 'Client notification protocols for security events' },
                  { icon: '🛡️', text: 'Automated threat containment and remediation' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-5 bg-body/5 border border-subtle rounded-xl hover:border-primary/30 transition-all duration-300">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-body/70">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Employee Security */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl text-heading">Employee Security</h2>
                </div>
                <p className="text-lg text-body/70 leading-relaxed">
                  Our team members undergo rigorous security training and follow strict security protocols:
                </p>
                <div className="space-y-3">
                  {[
                    'Background checks and security clearances',
                    'Mandatory security awareness training',
                    'Secure development lifecycle (SDLC) training',
                    'NDAs and confidentiality commitments',
                    'Secure device management'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-body/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe2 className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl text-heading">Physical Security</h2>
                </div>
                <p className="text-lg text-body/70 leading-relaxed">
                  Our global operations maintain strict physical security controls:
                </p>
                <div className="space-y-3">
                  {[
                    'Secure office facilities with access control',
                    'Visitor management and escort policies',
                    'Secure disposal of sensitive materials',
                    'Clean desk and screen policies',
                    'Secure remote work environments'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-body/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Continuous Improvement */}
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-6">
              <h2 className="text-3xl md:text-4xl text-heading">Continuous Security Improvement</h2>
              <p className="text-lg text-body/90">
                Security is an ongoing commitment. We continuously improve our security posture through:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Regular security assessments',
                  'Penetration testing',
                  'Threat intelligence monitoring',
                  'Security metrics tracking',
                  'KPI monitoring',
                  'Security forum participation',
                  'Policy updates',
                  'Training programs',
                  'Technology evaluation'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-body/5 border border-subtle rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-body/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsible Disclosure */}
            <div className="relative p-10 bg-gradient-to-br from-body/5 to-transparent border border-subtle rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl text-heading">Responsible Disclosure</h2>
              </div>
              
              <p className="text-lg text-body/70 mb-6 leading-relaxed">
                We welcome responsible disclosure of security vulnerabilities. If you believe you have found a security issue, please contact us immediately.
              </p>

              <div className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-l-2 border-primary rounded-r-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 border border-primary/40 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-heading mb-3">
                      <strong>Security Team:</strong> <a href="mailto:security@huksons.com" className="text-primary hover:underline">security@huksons.com</a>
                    </p>
                    <p className="text-body/60 text-sm">
                      Please include detailed information about the vulnerability and steps to reproduce it. We commit to responding within 24 hours and will work with you to understand and address the issue promptly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="relative mt-24 p-12 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl text-heading mb-6">Security Inquiries</h2>
                <p className="text-lg text-body/70 mb-6">
                  For security-related questions, compliance documentation, or to report a security concern:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <a href="mailto:security@huksons.com" className="flex items-center gap-2 p-4 bg-body/5 border border-subtle rounded-xl hover:border-primary/50 transition-all duration-300 group">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-body/60">Security Team</div>
                      <div className="text-primary group-hover:underline">security@huksons.com</div>
                    </div>
                  </a>
                  <a href="mailto:compliance@huksons.com" className="flex items-center gap-2 p-4 bg-body/5 border border-subtle rounded-xl hover:border-primary/50 transition-all duration-300 group">
                    <FileCheck className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-body/60">Compliance</div>
                      <div className="text-primary group-hover:underline">compliance@huksons.com</div>
                    </div>
                  </a>
                  <a href="mailto:info@huksons.com" className="flex items-center gap-2 p-4 bg-body/5 border border-subtle rounded-xl hover:border-primary/50 transition-all duration-300 group">
                    <Globe2 className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-body/60">General</div>
                      <div className="text-primary group-hover:underline">info@huksons.com</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
