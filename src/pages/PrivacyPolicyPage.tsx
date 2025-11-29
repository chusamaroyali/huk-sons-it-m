import { Shield, Lock, Eye, Database, FileText, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-main relative overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 dark:bg-primary/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 dark:bg-gradient-to-r dark:from-primary/20 dark:via-primary/10 dark:to-transparent border-l-2 border-primary rounded-r-full">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Privacy Policy</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8">
              <span className="bg-gradient-to-r from-heading via-heading to-heading/60 bg-clip-text text-transparent">
                Your Privacy
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Matters
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-body/60 mb-4">
              Last Updated: November 5, 2025
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
                <h2 className="text-4xl md:text-5xl text-heading mb-6">Introduction</h2>
                <div className="space-y-4 text-lg md:text-xl text-body/70 leading-relaxed">
                  <p>
                    At HUK SONS IT, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our solutions.
                  </p>
                  <p>
                    HUK SONS IT is a business unit of HUK SONS. Other business units of HUK SONS have their own Legal information and processes; please check the relevant site for exact details.
                  </p>
                  <p>
                    As a global technical transformation and engineering firm, we are committed to protecting your personal information and your right to privacy in accordance with applicable data protection laws including GDPR, CCPA, and other relevant regulations.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 dark:bg-gradient-to-br dark:from-primary/20 dark:to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <Database className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl text-heading">Information We Collect</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Personal Information */}
                <div className="group relative p-8 bg-card border border-subtle rounded-2xl hover:border-primary/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative">
                    <h3 className="text-2xl text-heading mb-4 flex items-center gap-2">
                      Personal Information
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </h3>
                    <ul className="space-y-3 text-body/70">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Contact information (name, email, phone, company)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Business information (company size, industry, requirements)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Communication data (inquiries, support, feedback)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Technical Information */}
                <div className="group relative p-8 bg-card border border-subtle rounded-2xl hover:border-primary/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative">
                    <h3 className="text-2xl text-heading mb-4 flex items-center gap-2">
                      Technical Information
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </h3>
                    <ul className="space-y-3 text-body/70">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>IP address, browser type, and device information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Usage data and analytics (pages, time, navigation)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Cookies and tracking technologies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 dark:bg-gradient-to-br dark:from-primary/20 dark:to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl text-heading">How We Use Your Information</h2>
              </div>

              <div className="relative p-10 bg-card border border-subtle rounded-3xl">
                <div className="grid md:grid-cols-2 gap-6 text-body/70 text-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Provide, operate, and maintain our services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Respond to inquiries and provide customer support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Send technical updates and security alerts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Analyze usage trends and improve services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Detect and address technical issues</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Comply with legal obligations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 dark:bg-gradient-to-br dark:from-primary/20 dark:to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <Globe2 className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl text-heading">Information Sharing</h2>
              </div>

              <div className="space-y-6 text-lg text-body/70 leading-relaxed">
                <p className="text-xl">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>

                <div className="grid gap-6 mt-8">
                  {[
                    { title: 'Service Providers', desc: 'Trusted third-party vendors assisting in operations (hosting, analytics, email)' },
                    { title: 'Legal Requirements', desc: 'When required by law, regulation, or legal process' },
                    { title: 'Business Transfers', desc: 'In connection with a merger, acquisition, or sale of assets' },
                    { title: 'With Your Consent', desc: 'When you explicitly authorize information sharing' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-card border-l-2 border-primary/50 rounded-r-xl">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary">{idx + 1}</span>
                      </div>
                      <div>
                        <div className="text-heading mb-1">{item.title}</div>
                        <div className="text-body/60">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 dark:bg-gradient-to-br dark:from-primary/20 dark:to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <Lock className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl text-heading">Data Security</h2>
              </div>

              <div className="relative p-10 bg-primary/5 dark:bg-gradient-to-br dark:from-primary/[0.02] dark:via-transparent dark:to-transparent border border-primary/10 rounded-3xl">
                <div className="space-y-6 text-lg text-body/70 leading-relaxed">
                  <p className="text-xl text-body/90">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    {['Encryption of data in transit and at rest', 'Regular security audits and assessments', 'Access controls and authentication', 'Employee training on data protection'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-body/60 mt-6 italic">
                    However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 dark:bg-gradient-to-br dark:from-primary/20 dark:to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl text-heading">Your Privacy Rights</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Access', desc: 'Request access to your personal information' },
                  { title: 'Correction', desc: 'Request correction of inaccurate information' },
                  { title: 'Deletion', desc: 'Request deletion of your personal information' },
                  { title: 'Portability', desc: 'Request a copy in portable format' },
                  { title: 'Opt-out', desc: 'Opt-out of marketing communications' },
                  { title: 'Restriction', desc: 'Request restriction of processing' }
                ].map((item, idx) => (
                  <div key={idx} className="group p-6 bg-card border border-subtle rounded-xl hover:border-primary/30 hover:bg-body/5 transition-all duration-300">
                    <div className="text-primary mb-2 group-hover:scale-110 transition-transform duration-300">{item.title}</div>
                    <div className="text-body/60 text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>

              <p className="text-lg text-body/70 text-center mt-8">
                To exercise these rights, contact us at <a href="mailto:legal@huksons.com" className="text-primary hover:underline">legal@huksons.com</a>
              </p>
            </div>

            {/* International Transfers */}
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-4">
              <h2 className="text-3xl md:text-4xl text-heading">International Data Transfers</h2>
              <p className="text-lg text-body/70 leading-relaxed">
                As a global company with operations in Pakistan, the United States, and UAE, your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws.
              </p>
            </div>

            {/* Contact Section */}
            <div className="relative mt-24 p-12 bg-primary/5 dark:bg-gradient-to-br dark:from-primary/10 dark:via-primary/5 dark:to-transparent border border-primary/20 rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl text-heading mb-6">Contact Us</h2>
                <p className="text-lg text-body/70 mb-6">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-lg">
                  <a href="mailto:legal@huksons.com" className="inline-flex items-center gap-2 text-primary hover:underline">
                    <span>legal@huksons.com</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <span className="text-body/30 hidden sm:inline">|</span>
                  <a href="mailto:info@huksons.com" className="inline-flex items-center gap-2 text-primary hover:underline">
                    <span>info@huksons.com</span>
                    <ArrowRight className="w-5 h-5" />
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
