import { FileCheck, Scale, AlertTriangle, Users, Briefcase, Globe2, CheckCircle2, ArrowRight, Shield } from 'lucide-react';

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-main relative overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/2 right-0 w-[500px] h-[500px] bg-primary/3 dark:bg-primary/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 dark:bg-gradient-to-r dark:from-primary/20 dark:via-primary/10 dark:to-transparent border-l-2 border-primary rounded-r-full">
                <Scale className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Legal Terms</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8">
              <span className="bg-gradient-to-r from-heading via-heading to-heading/60 bg-clip-text text-transparent">
                Terms of
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Service
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
            
            {/* Agreement to Terms */}
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-primary/30">
                <h2 className="text-4xl md:text-5xl text-heading mb-6">Agreement to Terms</h2>
                <div className="space-y-4 text-lg md:text-xl text-body/70 leading-relaxed">
                  <p>
                    Welcome to HUK SONS IT. These Terms of Service ("Terms") govern your access to and use of HUK SONS IT's website, products, and solutions (collectively, the "Solutions"). By accessing or using our Solutions, you agree to be bound by these Terms.
                  </p>
                  <p>
                    HUK SONS IT is a business unit of HUK SONS. Other business units of HUK SONS have their own Legal information and processes; please check the relevant site for exact details.
                  </p>
                  <p>
                    Please read these Terms carefully before using our Solutions. If you do not agree to these Terms, you may not access or use our Solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Description */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 dark:bg-gradient-to-br dark:from-primary/20 dark:to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl text-heading">Solutions Description</h2>
              </div>

              <div className="relative p-10 bg-card border border-subtle rounded-3xl">
                <p className="text-xl text-body/90 mb-8">
                  HUK SONS IT is a global technical transformation and engineering firm that provides:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Cloud Modernization and Infrastructure Solutions',
                    'AI and Automation Engineering Solutions',
                    'Revenue and Data Infrastructure Development',
                    'Emergency Technical Intervention Solutions'
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-lg text-body/70">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary">{idx + 1}</span>
                      </div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-primary/5 border-l-2 border-primary rounded-r-xl">
                  <p className="text-body/80">
                    <span className="text-primary">Enterprise Pricing:</span> All solutions feature custom-tailored pricing for each enterprise client and are provided under separate service agreements.
                  </p>
                </div>
              </div>
            </div>

            {/* Eligibility */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 dark:bg-gradient-to-br dark:from-primary/20 dark:to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl text-heading">Eligibility</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'You are at least 18 years of age',
                  'You have legal capacity to enter binding contracts',
                  'You are authorized to represent your organization',
                  'You will comply with all applicable laws and regulations'
                ].map((item, idx) => (
                  <div key={idx} className="group p-6 bg-card border border-subtle rounded-xl hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg text-body/70">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Agreements */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 dark:bg-gradient-to-br dark:from-primary/20 dark:to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <FileCheck className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl text-heading">Service Agreements</h2>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-body/90">
                  Specific services will be provided under separate Master Service Agreements (MSAs) or Statements of Work (SOWs) that include:
                </p>

                <div className="grid gap-4">
                  {[
                    { icon: '📋', title: 'Scope of work and deliverables' },
                    { icon: '⏱️', title: 'Timelines and milestones' },
                    { icon: '💰', title: 'Pricing and payment terms' },
                    { icon: '🎯', title: 'Service level agreements (SLAs)' },
                    { icon: '🔒', title: 'Confidentiality and intellectual property provisions' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-5 bg-card border-l-2 border-primary/30 rounded-r-xl hover:border-primary/60 transition-all duration-300">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-lg text-body/70">{item.title}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-6 bg-card border border-subtle rounded-xl">
                  <p className="text-body/60 italic">
                    In case of conflict between these Terms and a specific service agreement, the service agreement will prevail.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-4">
              <h2 className="text-3xl md:text-4xl text-heading">Intellectual Property Rights</h2>
              <div className="space-y-4 text-lg text-body/70 leading-relaxed">
                <p>
                  All content, features, and functionality of our Solutions, including but not limited to text, graphics, logos, icons, images, software, and documentation, are owned by HUK SONS IT or its licensors and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  Unless otherwise specified in a service agreement, all deliverables, work product, and intellectual property created during an engagement shall be governed by the terms of the applicable MSA or SOW.
                </p>
              </div>
            </div>

            {/* User Obligations */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl text-heading mb-6">User Obligations</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: '✓', title: 'Accurate Information', desc: 'Provide accurate and complete information' },
                  { icon: '🔐', title: 'Account Security', desc: 'Maintain confidentiality of credentials' },
                  { icon: '⚖️', title: 'Legal Compliance', desc: 'Use Solutions in compliance with laws' },
                  { icon: '🚫', title: 'No Unauthorized Access', desc: 'Do not attempt unauthorized access' },
                  { icon: '✅', title: 'Proper Use', desc: 'Use Solutions for lawful purposes only' },
                  { icon: '🤝', title: 'Cooperation', desc: 'Provide necessary access and information' }
                ].map((item, idx) => (
                  <div key={idx} className="group p-6 bg-card border border-subtle rounded-xl hover:border-primary/30 hover:bg-body/5 transition-all duration-300">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="text-heading mb-2">{item.title}</div>
                    <div className="text-sm text-body/60">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Terms */}
            <div className="relative p-10 bg-primary/5 dark:bg-gradient-to-br dark:from-primary/[0.02] dark:via-transparent dark:to-transparent border border-primary/10 rounded-3xl">
              <h2 className="text-3xl md:text-4xl text-heading mb-6">Payment Terms</h2>
              <div className="space-y-6 text-lg text-body/70 leading-relaxed">
                <div className="flex items-start gap-4 p-6 bg-card border-l-2 border-primary rounded-r-xl shadow-sm dark:shadow-none">
                  <span className="text-3xl">💵</span>
                  <div>
                    <p className="text-primary mb-2">Enterprise Pricing Model</p>
                    <p className="text-body/60">All solutions feature custom-tailored pricing for each enterprise client.</p>
                  </div>
                </div>
                <p>Specific payment terms will be outlined in the applicable service agreement, including:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {['Payment schedules and milestones', 'Invoicing procedures', 'Late payment penalties', 'Accepted payment methods'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-body/60 italic mt-6">
                  All fees are exclusive of applicable taxes, which shall be the responsibility of the client.
                </p>
              </div>
            </div>

            {/* Confidentiality */}
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl text-heading">Confidentiality</h2>
              </div>
              <div className="space-y-4 text-lg text-body/70 leading-relaxed">
                <p>
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of the engagement. This includes but is not limited to:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {['Technical information and trade secrets', 'Business strategies and financial information', 'Client data and proprietary systems', 'Any information marked as confidential'].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 dark:bg-gradient-to-br dark:from-primary/20 dark:to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl text-heading">Warranties & Disclaimers</h2>
              </div>

              <div className="relative p-10 bg-card border border-subtle rounded-3xl">
                <div className="space-y-6 text-lg text-body/70 leading-relaxed">
                  <p>
                    While we strive to provide high-quality solutions, we make no warranties or representations about the accuracy or completeness of the content of our Solutions or the content of any websites linked to our Solutions.
                  </p>
                  <div className="p-6 bg-card border-l-4 border-primary rounded-r-xl shadow-sm dark:shadow-none">
                    <p className="uppercase text-heading">
                      TO THE FULLEST EXTENT PERMITTED BY LAW, OUR SOLUTIONS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                    </p>
                  </div>
                  <p className="text-body/60 italic">
                    Specific warranties related to deliverables and performance will be outlined in applicable service agreements.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="relative p-10 bg-card border border-subtle rounded-3xl">
              <h2 className="text-3xl md:text-4xl text-heading mb-6">Limitation of Liability</h2>
              <div className="space-y-6 text-lg text-body/70 leading-relaxed">
                <div className="p-6 bg-card border-l-4 border-primary rounded-r-xl shadow-sm dark:shadow-none">
                  <p className="uppercase text-heading">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL HUK SONS IT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
                  </p>
                </div>
                <p>
                  Our total liability for any claims arising out of or related to these Terms or the Solutions shall not exceed the amount paid by you to HUK SONS IT in the twelve (12) months preceding the event giving rise to the claim.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary/10 dark:bg-gradient-to-br dark:from-primary/20 dark:to-primary/5 border border-primary/30 rounded-2xl flex items-center justify-center">
                  <Globe2 className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl text-heading">Governing Law</h2>
              </div>

              <div className="space-y-4 text-lg text-body/70 leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. For clients in specific jurisdictions, governing law may be specified in the applicable service agreement.
                </p>
                <p>
                  Any disputes arising out of or relating to these Terms or the Solutions shall be resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration or in the courts of competent jurisdiction as specified in the service agreement.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="relative mt-24 p-12 bg-primary/5 dark:bg-gradient-to-br dark:from-primary/10 dark:via-primary/5 dark:to-transparent border border-primary/20 rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl text-heading mb-6">Contact Us</h2>
                <p className="text-lg text-body/70 mb-6">
                  If you have any questions about these Terms, please contact us:
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