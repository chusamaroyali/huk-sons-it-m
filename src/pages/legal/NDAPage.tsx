'use client';

import { Shield, FileText, CheckCircle2, Lock, ArrowRight, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function NDAPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-main transition-colors duration-300">
            <SEOHead
        title="Non-Disclosure Agreement (NDA) | HUK SONS IT"
        description="Review our Mutual Non-Disclosure Agreement terms. We protect your confidential information with industry-standard legal frameworks."
        keywords="NDA, non-disclosure agreement, confidentiality, legal protection, mutual NDA"
        canonical="https://huksonsit.com/legal/nda"
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
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-8">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Non-Disclosure Agreement</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading dark:from-white to-heading/60 dark:to-white/60 bg-clip-text text-transparent">
                  Your Confidentiality
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Is Protected
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl leading-relaxed">
                HUK SONS IT signs mutual Non-Disclosure Agreements with all clients as standard practice to protect your confidential information, intellectual property, and trade secrets.
              </p>

              <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-3xl">
                <p className="text-sm text-body dark:text-white/80">
                  <strong>Subsidiary Disclosure:</strong> HUK SONS IT operates as a legally separate subsidiary of HUK SONS. When you engage with this site or our services, you are interacting with HUK SONS IT (a subsidiary of HUK SONS) as the contracting entity, unless a signed agreement specifies otherwise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NDA Overview */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: 'Mutual Protection', description: 'Two-way confidentiality protecting both parties equally' },
                { icon: Lock, title: 'Legally Binding', description: 'Enforceable agreements with clear terms and penalties' },
                { icon: FileText, title: 'Flexible Terms', description: 'Your template or ours—we accommodate your legal requirements' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-8 bg-card border-2 border-subtle hover:border-primary transition-all duration-300 text-center h-full min-h-[260px] flex flex-col justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl text-heading dark:text-white mb-4">{item.title}</h3>
                    <p className="text-body dark:text-white/70">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NDA Details */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* What is Covered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-card border-2 border-subtle">
                <h2 className="text-3xl text-heading dark:text-white mb-6">What is Covered by Our NDA</h2>
                
                <p className="text-lg text-body dark:text-white/80 mb-6">
                  HUK SONS IT's mutual NDA protects all confidential and proprietary information exchanged during our engagement:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-xl text-heading dark:text-white mb-4">Technical Information:</h3>
                    {[
                      'System architecture and infrastructure details',
                      'Source code, algorithms, and technical documentation',
                      'API keys, credentials, and access tokens',
                      'Database schemas and data models',
                      'Performance metrics and analytics data',
                      'Security vulnerabilities and remediation plans'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-body dark:text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl text-heading dark:text-white mb-4">Business Information:</h3>
                    {[
                      'Business strategies and roadmaps',
                      'Financial data and budget information',
                      'Customer lists and user data',
                      'Pricing models and contract terms',
                      'Marketing plans and competitive analysis',
                      'Trade secrets and proprietary processes'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-body dark:text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Key Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-card border-2 border-subtle">
                <h2 className="text-3xl text-heading dark:text-white mb-6">Key NDA Terms</h2>
                
                <div className="space-y-6">
                  <div className="p-6 bg-muted/50 dark:bg-white/[0.02] rounded-lg">
                    <h3 className="text-xl text-heading dark:text-white mb-3">1. Mutual Confidentiality</h3>
                    <p className="text-body dark:text-white/80">
                      Both HUK SONS IT and Client agree to protect each other's confidential information with the same degree of care used to protect their own confidential information (but no less than reasonable care). This creates balanced, reciprocal obligations.
                    </p>
                  </div>

                  <div className="p-6 bg-muted/50 dark:bg-white/[0.02] rounded-lg">
                    <h3 className="text-xl text-heading dark:text-white mb-3">2. Duration of Confidentiality</h3>
                    <p className="text-body dark:text-white/80 mb-3">
                      <strong className="text-primary">Standard Term:</strong> 5 years from the date of disclosure<br />
                      <strong className="text-primary">Trade Secrets:</strong> Protected indefinitely as long as information remains confidential<br />
                      <strong className="text-primary">Post-Engagement:</strong> Confidentiality survives termination of services
                    </p>
                  </div>

                  <div className="p-6 bg-muted/50 dark:bg-white/[0.02] rounded-lg">
                    <h3 className="text-xl text-heading dark:text-white mb-3">3. Permitted Use</h3>
                    <p className="text-body dark:text-white/80">
                      Confidential information may only be used for the specific purpose of evaluating and performing services under the engagement. No other use permitted without explicit written consent. Information disclosed only to employees and contractors with a legitimate need to know.
                    </p>
                  </div>

                  <div className="p-6 bg-muted/50 dark:bg-white/[0.02] rounded-lg">
                    <h3 className="text-xl text-heading dark:text-white mb-3">4. Exceptions</h3>
                    <p className="text-body dark:text-white/80">
                      Information is not confidential if: (a) publicly available through no fault of receiving party, (b) rightfully received from third party without confidentiality obligation, (c) independently developed without use of confidential information, or (d) required to be disclosed by law (with notice to disclosing party where permitted).
                    </p>
                  </div>

                  <div className="p-6 bg-muted/50 dark:bg-white/[0.02] rounded-lg">
                    <h3 className="text-xl text-heading dark:text-white mb-3">5. Return of Information</h3>
                    <p className="text-body dark:text-white/80">
                      Upon request or termination of engagement, all confidential information (including copies, notes, derivatives) must be returned or destroyed with written certification of destruction. Electronic data securely wiped using industry-standard methods.
                    </p>
                  </div>

                  <div className="p-6 bg-primary/10 border-2 border-primary/30 rounded-lg">
                    <h3 className="text-xl text-heading dark:text-white mb-3">6. Remedies for Breach</h3>
                    <p className="text-body dark:text-white/80 mb-3">
                      Breach of NDA may cause irreparable harm not adequately compensable by monetary damages. Both parties entitled to:
                    </p>
                    <ul className="space-y-2 text-body dark:text-white/80">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Injunctive Relief:</strong> Immediate court orders to stop unauthorized disclosure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Monetary Damages:</strong> Compensation for actual and consequential damages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span><strong>Legal Fees:</strong> Recovery of attorney fees and costs for enforcement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-card border-2 border-subtle">
                <h2 className="text-3xl text-heading dark:text-white mb-6">NDA Signing Process</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl text-heading dark:text-white mb-4">Standard Process:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">1</div>
                        <div>
                          <div className="text-heading dark:text-white mb-1">Initial Contact</div>
                          <div className="text-sm text-body dark:text-white/70">Express interest in services via email or consultation</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">2</div>
                        <div>
                          <div className="text-heading dark:text-white mb-1">NDA Provided</div>
                          <div className="text-sm text-body dark:text-white/70">We send our standard NDA or review yours</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">3</div>
                        <div>
                          <div className="text-heading dark:text-white mb-1">Review & Negotiation</div>
                          <div className="text-sm text-body dark:text-white/70">Legal teams review, negotiate terms if needed</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">4</div>
                        <div>
                          <div className="text-heading dark:text-white mb-1">Execution</div>
                          <div className="text-sm text-body dark:text-white/70">Both parties sign (electronic or wet signature)</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">5</div>
                        <div>
                          <div className="text-heading dark:text-white mb-1">Engagement Begins</div>
                          <div className="text-sm text-body dark:text-white/70">Proceed with discovery and project kickoff</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl text-heading dark:text-white mb-4">Flexible Options:</h3>
                    <div className="space-y-4 text-body dark:text-white/80">
                      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <div className="text-primary mb-2">Use Our Template</div>
                        <p className="text-sm">Standard HUK SONS IT mutual NDA—simple, fair, industry-standard terms</p>
                      </div>
                      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <div className="text-primary mb-2">Use Your Template</div>
                        <p className="text-sm">Send us your company's NDA—we'll review and sign if terms are reasonable</p>
                      </div>
                      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <div className="text-primary mb-2">Custom Agreement</div>
                        <p className="text-sm">Need special terms? We'll work with your legal team to craft appropriate language</p>
                      </div>
                      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <div className="text-primary mb-2">Fast Track</div>
                        <p className="text-sm">Electronic signature available—execute NDA in minutes, not days</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/10 border-2 border-primary/30 rounded-lg">
                  <p className="text-body dark:text-white/80">
                    <strong className="text-primary">Timeline:</strong> NDA review and execution typically completed within 1-3 business days. Rush processing available for time-sensitive engagements.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Additional Protections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-card border-2 border-subtle">
                <h2 className="text-3xl text-heading dark:text-white mb-6">Beyond the NDA: Additional Security Measures</h2>
                
                <p className="text-lg text-body dark:text-white/80 mb-6">
                  HUK SONS IT goes beyond legal agreements to protect your information:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Access Controls', desc: 'Least-privilege access, multi-factor authentication, role-based permissions' },
                    { title: 'Data Encryption', desc: 'End-to-end encryption for data at rest and in transit (AES-256, TLS 1.3)' },
                    { title: 'Secure Infrastructure', desc: 'SOC 2 compliant infrastructure, regular security audits, penetration testing' },
                    { title: 'Employee Training', desc: 'All team members trained on confidentiality, data handling, and security protocols' },
                    { title: 'Secure Communication', desc: 'Encrypted email, secure file sharing, private Slack/Teams channels' },
                    { title: 'Data Disposal', desc: 'Secure deletion protocols, certificate of destruction, no data retention post-engagement' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-muted/50 dark:bg-white/[0.02] rounded-lg">
                      <h4 className="text-lg text-heading dark:text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-body dark:text-white/70">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to <span className="text-primary">Get Started?</span>
            </h2>
            <p className="text-xl text-body dark:text-white/70 mb-8 max-w-2xl mx-auto">
              We'll sign an NDA before any confidential discussions. Your information security is our priority from day one.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => window.location.href = 'mailto:info@huksons.com?subject=Request NDA'}
                className="bg-primary hover:bg-primary/90 text-black px-10 py-6 text-lg group"
              >
                <Mail className="mr-2 w-5 h-5" />
                Request NDA
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => navigate('/get-started')}
                variant="outline"
                className="border-2 border-heading dark:border-white px-10 py-6 text-lg"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
