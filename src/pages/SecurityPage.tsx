import { Shield, Lock, Key, CheckCircle2, FileCheck, AlertTriangle, Server, Globe2, Eye, Zap, ArrowRight } from 'lucide-react';

export function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#0E1117] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #00D3A9 1px, transparent 1px),
            linear-gradient(to bottom, #00D3A9 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#00D3A9]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00D3A9]/3 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00D3A9]/4 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '7s' }} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00D3A9]/20 via-[#00D3A9]/10 to-transparent border-l-2 border-[#00D3A9] rounded-r-full">
                <Shield className="w-5 h-5 text-[#00D3A9]" />
                <span className="text-sm uppercase tracking-wider text-[#00D3A9]">Enterprise Security</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8">
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Security at
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00D3A9] to-[#00D3A9]/60 bg-clip-text text-transparent">
                HUK SONS IT
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-white/70 max-w-3xl mx-auto">
              Enterprise-grade security practices protecting your infrastructure, data, and operations
            </p>

            {/* Divider */}
            <div className="flex justify-center mt-12">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00D3A9] to-transparent" />
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
              <div className="relative pl-8 border-l-2 border-[#00D3A9]/30">
                <h2 className="text-4xl md:text-5xl text-white mb-6">Our Commitment to Security</h2>
                <div className="space-y-4 text-lg md:text-xl text-white/70 leading-relaxed">
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
                <h2 className="text-4xl md:text-5xl text-white mb-4">Security Framework</h2>
                <p className="text-xl text-white/60">Four pillars of comprehensive protection</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Lock,
                    title: 'Data Protection',
                    desc: 'End-to-end encryption for data in transit and at rest using industry-standard protocols (TLS 1.3, AES-256)',
                    color: 'from-[#00D3A9]/20 to-[#00D3A9]/5'
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
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl hover:border-[#00D3A9]/40 transition-all duration-500">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} border border-[#00D3A9]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <item.icon className="w-8 h-8 text-[#00D3A9]" />
                      </div>
                      <h3 className="text-2xl text-white mb-4 flex items-center gap-2">
                        {item.title}
                        <ArrowRight className="w-5 h-5 text-[#00D3A9] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </h3>
                      <p className="text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance & Certifications */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00D3A9]/20 to-[#00D3A9]/5 border border-[#00D3A9]/30 rounded-2xl flex items-center justify-center">
                  <FileCheck className="w-7 h-7 text-[#00D3A9]" />
                </div>
                <h2 className="text-4xl md:text-5xl text-white">Compliance & Certifications</h2>
              </div>

              <p className="text-xl text-white/90 mb-8">
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
                  <div key={idx} className="group relative p-6 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-xl hover:border-[#00D3A9]/50 hover:bg-white/[0.05] transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00D3A9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-[#00D3A9] group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-white">{cert.name}</span>
                      </div>
                      <p className="text-sm text-white/60">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Practices */}
            <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl text-white text-center mb-12">Security Practices</h2>

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
                      <div className="w-3 h-3 bg-[#00D3A9] rounded-full animate-pulse" />
                      <h3 className="text-2xl md:text-3xl text-white">{section.title}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 pl-6 border-l-2 border-[#00D3A9]/20">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-lg hover:border-[#00D3A9]/30 hover:bg-white/[0.03] transition-all duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00D3A9] mt-2 flex-shrink-0" />
                          <span className="text-white/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Incident Response */}
            <div className="relative p-10 bg-gradient-to-br from-[#00D3A9]/[0.02] via-transparent to-transparent border border-[#00D3A9]/10 rounded-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00D3A9]/20 to-[#00D3A9]/5 border border-[#00D3A9]/30 rounded-2xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-[#00D3A9]" />
                </div>
                <h2 className="text-3xl md:text-4xl text-white">Incident Response</h2>
              </div>

              <p className="text-lg text-white/90 mb-6">
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
                  <div key={idx} className="flex items-center gap-3 p-5 bg-white/[0.02] border border-white/10 rounded-xl hover:border-[#00D3A9]/30 transition-all duration-300">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-white/70">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Employee Security */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-[#00D3A9]" />
                  <h2 className="text-3xl text-white">Employee Security</h2>
                </div>
                <p className="text-lg text-white/70 leading-relaxed">
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
                      <CheckCircle2 className="w-5 h-5 text-[#00D3A9] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe2 className="w-8 h-8 text-[#00D3A9]" />
                  <h2 className="text-3xl text-white">Physical Security</h2>
                </div>
                <p className="text-lg text-white/70 leading-relaxed">
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
                      <CheckCircle2 className="w-5 h-5 text-[#00D3A9] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Continuous Improvement */}
            <div className="relative pl-8 border-l-2 border-[#00D3A9]/30 space-y-6">
              <h2 className="text-3xl md:text-4xl text-white">Continuous Security Improvement</h2>
              <p className="text-lg text-white/90">
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
                  <div key={idx} className="flex items-center gap-2 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D3A9]" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsible Disclosure */}
            <div className="relative p-10 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-[#00D3A9]" />
                <h2 className="text-3xl md:text-4xl text-white">Responsible Disclosure</h2>
              </div>
              
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                We welcome responsible disclosure of security vulnerabilities. If you believe you have found a security issue, please contact us immediately.
              </p>

              <div className="p-8 bg-gradient-to-br from-[#00D3A9]/10 to-transparent border-l-2 border-[#00D3A9] rounded-r-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00D3A9]/20 border border-[#00D3A9]/40 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-[#00D3A9]" />
                  </div>
                  <div>
                    <p className="text-white mb-3">
                      <strong>Security Team:</strong> <a href="mailto:security@huksons.com" className="text-[#00D3A9] hover:underline">security@huksons.com</a>
                    </p>
                    <p className="text-white/60 text-sm">
                      Please include detailed information about the vulnerability and steps to reproduce it. We commit to responding within 24 hours and will work with you to understand and address the issue promptly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="relative mt-24 p-12 bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent border border-[#00D3A9]/20 rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D3A9]/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl text-white mb-6">Security Inquiries</h2>
                <p className="text-lg text-white/70 mb-6">
                  For security-related questions, compliance documentation, or to report a security concern:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <a href="mailto:security@huksons.com" className="flex items-center gap-2 p-4 bg-white/[0.05] border border-white/10 rounded-xl hover:border-[#00D3A9]/50 transition-all duration-300 group">
                    <Shield className="w-5 h-5 text-[#00D3A9]" />
                    <div>
                      <div className="text-sm text-white/60">Security Team</div>
                      <div className="text-[#00D3A9] group-hover:underline">security@huksons.com</div>
                    </div>
                  </a>
                  <a href="mailto:compliance@huksons.com" className="flex items-center gap-2 p-4 bg-white/[0.05] border border-white/10 rounded-xl hover:border-[#00D3A9]/50 transition-all duration-300 group">
                    <FileCheck className="w-5 h-5 text-[#00D3A9]" />
                    <div>
                      <div className="text-sm text-white/60">Compliance</div>
                      <div className="text-[#00D3A9] group-hover:underline">compliance@huksons.com</div>
                    </div>
                  </a>
                  <a href="mailto:info@huksons.com" className="flex items-center gap-2 p-4 bg-white/[0.05] border border-white/10 rounded-xl hover:border-[#00D3A9]/50 transition-all duration-300 group">
                    <Globe2 className="w-5 h-5 text-[#00D3A9]" />
                    <div>
                      <div className="text-sm text-white/60">General</div>
                      <div className="text-[#00D3A9] group-hover:underline">info@huksons.com</div>
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
