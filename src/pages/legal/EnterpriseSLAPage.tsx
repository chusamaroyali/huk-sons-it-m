'use client';

import { ArrowLeft, Shield, Clock, CheckCircle2, AlertCircle, Phone, Mail, FileText, TrendingUp, Zap, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function EnterpriseSLAPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      <SEOHead
        title="Enterprise SLA | Premium Service Level Agreement | HUK SONS IT"
        description="HUK SONS IT Enterprise Service Level Agreement with 99.9% uptime guarantee, 24/7/365 support, dedicated resources, and premium response times for mission-critical operations."
        keywords="enterprise SLA, premium support, 24/7 support, mission critical, uptime guarantee, dedicated support"
        canonical="https://huksonsit.com/sla/enterprise"
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
            >
              <Button
                onClick={() => navigate('/sla')}
                variant="outline"
                className="mb-8 border-2 border-[#0A0D12]/20 dark:border-white/20 hover:border-[#00D3A9]"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to SLA Overview
              </Button>

              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00D3A9]/20 to-[#00D3A9]/10 border border-[#00D3A9]/40 rounded-full mb-8">
                <Shield className="w-5 h-5 text-[#00D3A9]" />
                <span className="text-sm uppercase tracking-wider text-[#00D3A9]">Enterprise Service Level Agreement</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl mb-8">
                <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                  Enterprise SLA
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#0A0D12]/70 dark:text-white/70 max-w-3xl leading-relaxed mb-6">
                Premium service commitments with 24/7/365 support, dedicated resources, and guaranteed <span className="text-[#00D3A9]">99.9% uptime</span> for mission-critical enterprise operations.
              </p>

              <p className="text-sm text-[#0A0D12]/50 dark:text-white/50">
                <strong>Effective Date:</strong> January 1, 2025 | <strong>Version:</strong> 3.0 | <strong>Last Updated:</strong> November 26, 2024
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, label: 'Uptime Guarantee', value: '99.9%', highlight: true },
                { icon: Clock, label: 'Critical Response', value: '< 15 min', highlight: true },
                { icon: Phone, label: 'Support Coverage', value: '24/7/365', highlight: true },
                { icon: Users, label: 'Dedicated TAM', value: 'Included', highlight: true }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className={`p-6 text-center border-2 transition-all duration-300 min-h-[180px] flex flex-col justify-center ${
                    stat.highlight 
                      ? 'bg-gradient-to-br from-[#00D3A9]/10 to-transparent border-[#00D3A9]/30 hover:border-[#00D3A9]' 
                      : 'bg-white dark:bg-white/[0.03] border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9]'
                  }`}>
                    <stat.icon className="w-10 h-10 text-[#00D3A9] mx-auto mb-4" />
                    <div className="text-3xl text-[#00D3A9] mb-2">{stat.value}</div>
                    <div className="text-sm text-[#0A0D12]/70 dark:text-white/70">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* 1. Premium Uptime Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-gradient-to-br from-white to-[#00D3A9]/5 dark:from-white/[0.03] dark:to-[#00D3A9]/5 border-2 border-[#00D3A9]/20">
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-[#00D3A9]" />
                  1. Premium Uptime Commitment
                </h2>
                
                <div className="space-y-4 text-[#0A0D12]/80 dark:text-white/80">
                  <p className="text-lg leading-relaxed">
                    HUK SONS IT guarantees <strong className="text-[#00D3A9]">99.9% uptime</strong> for all managed infrastructure and solutions covered under this Enterprise SLA—the highest tier commitment available.
                  </p>

                  <div className="bg-[#00D3A9]/10 border border-[#00D3A9]/30 p-6 rounded-lg">
                    <h3 className="text-xl text-[#0A0D12] dark:text-white mb-4">Calculation Method:</h3>
                    <p className="mb-4">Uptime Percentage = ((Total Minutes in Month - Downtime Minutes) / Total Minutes in Month) × 100</p>
                    <div className="space-y-2">
                      <p><strong>Measured continuously:</strong> 24/7/365 monitoring with 30-second check intervals</p>
                      <p><strong>Downtime defined as:</strong> Any period where core services are unavailable, degraded beyond 80% capacity, or response times exceed 2x baseline</p>
                      <p><strong>Excludes:</strong> Planned maintenance (with 7-day notice), client-caused outages, force majeure events</p>
                      <p><strong className="text-[#00D3A9]">Zero-downtime deployments:</strong> All updates deployed with rolling releases to maintain continuous availability</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-[#00D3A9]/10 border-2 border-[#00D3A9]/30 p-4 rounded-lg">
                      <h4 className="text-lg text-[#0A0D12] dark:text-white mb-2">Maximum Downtime</h4>
                      <p className="text-2xl text-[#00D3A9]">~43 minutes/month</p>
                      <p className="text-sm text-[#0A0D12]/60 dark:text-white/60 mt-1">Based on 99.9% uptime</p>
                    </div>
                    <div className="bg-[#00D3A9]/10 border-2 border-[#00D3A9]/30 p-4 rounded-lg">
                      <h4 className="text-lg text-[#0A0D12] dark:text-white mb-2">Planned Maintenance</h4>
                      <p className="text-2xl text-[#00D3A9]">2 hours/month</p>
                      <p className="text-sm text-[#0A0D12]/60 dark:text-white/60 mt-1">Maximum allowed window</p>
                    </div>
                    <div className="bg-[#00D3A9]/10 border-2 border-[#00D3A9]/30 p-4 rounded-lg">
                      <h4 className="text-lg text-[#0A0D12] dark:text-white mb-2">Redundancy</h4>
                      <p className="text-2xl text-[#00D3A9]">Multi-AZ</p>
                      <p className="text-sm text-[#0A0D12]/60 dark:text-white/60 mt-1">High availability architecture</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 2. Premium Response Times */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10">
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-[#00D3A9]" />
                  2. Premium Response Time Commitments
                </h2>

                <p className="text-lg text-[#0A0D12]/80 dark:text-white/80 mb-6">
                  Enterprise SLA provides industry-leading response times measured from ticket creation to first qualified technical response, <strong className="text-[#00D3A9]">24/7/365</strong>.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#00D3A9]/10">
                        <th className="border-2 border-[#00D3A9]/20 p-4 text-left text-[#0A0D12] dark:text-white">Priority Level</th>
                        <th className="border-2 border-[#00D3A9]/20 p-4 text-left text-[#0A0D12] dark:text-white">Description</th>
                        <th className="border-2 border-[#00D3A9]/20 p-4 text-left text-[#0A0D12] dark:text-white">Response Time</th>
                        <th className="border-2 border-[#00D3A9]/20 p-4 text-left text-[#0A0D12] dark:text-white">Resolution Target</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#0A0D12]/80 dark:text-white/80">
                      <tr className="bg-red-500/5">
                        <td className="border-2 border-[#00D3A9]/20 p-4">
                          <span className="px-3 py-1 bg-red-500/20 text-red-600 dark:text-red-400 rounded-full text-sm">P1 - Critical</span>
                        </td>
                        <td className="border-2 border-[#00D3A9]/20 p-4">Complete service outage, production down, critical data loss, security breach</td>
                        <td className="border-2 border-[#00D3A9]/20 p-4"><strong className="text-[#00D3A9] text-lg">&lt; 15 minutes</strong></td>
                        <td className="border-2 border-[#00D3A9]/20 p-4">4 hours</td>
                      </tr>
                      <tr className="bg-orange-500/5">
                        <td className="border-2 border-[#00D3A9]/20 p-4">
                          <span className="px-3 py-1 bg-orange-500/20 text-orange-600 dark:text-orange-400 rounded-full text-sm">P2 - High</span>
                        </td>
                        <td className="border-2 border-[#00D3A9]/20 p-4">Major functionality impaired, significant performance degradation affecting users</td>
                        <td className="border-2 border-[#00D3A9]/20 p-4"><strong className="text-[#00D3A9] text-lg">&lt; 1 hour</strong></td>
                        <td className="border-2 border-[#00D3A9]/20 p-4">8 hours</td>
                      </tr>
                      <tr className="bg-yellow-500/5">
                        <td className="border-2 border-[#00D3A9]/20 p-4">
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">P3 - Medium</span>
                        </td>
                        <td className="border-2 border-[#00D3A9]/20 p-4">Minor functionality affected, workaround available, limited user impact</td>
                        <td className="border-2 border-[#00D3A9]/20 p-4"><strong className="text-[#00D3A9] text-lg">&lt; 2 hours</strong></td>
                        <td className="border-2 border-[#00D3A9]/20 p-4">2 business days</td>
                      </tr>
                      <tr className="bg-blue-500/5">
                        <td className="border-2 border-[#00D3A9]/20 p-4">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm">P4 - Low</span>
                        </td>
                        <td className="border-2 border-[#00D3A9]/20 p-4">General inquiries, feature requests, documentation, optimization</td>
                        <td className="border-2 border-[#00D3A9]/20 p-4"><strong className="text-[#00D3A9] text-lg">&lt; 4 hours</strong></td>
                        <td className="border-2 border-[#00D3A9]/20 p-4">5 business days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-[#00D3A9]/10 border-2 border-[#00D3A9]/30 p-6 rounded-lg">
                  <h4 className="text-lg text-[#0A0D12] dark:text-white mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#00D3A9]" />
                    24/7/365 Coverage
                  </h4>
                  <p className="text-[#0A0D12]/80 dark:text-white/80 mb-3">
                    <strong>Around-the-Clock Support:</strong> All response times apply 24 hours a day, 7 days a week, 365 days a year including weekends and holidays.
                  </p>
                  <p className="text-[#0A0D12]/80 dark:text-white/80">
                    <strong className="text-[#00D3A9]">Dedicated Emergency Hotline:</strong> Direct phone line with senior engineers for P1/P2 incidents—no ticket queues, no waiting.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* 3. Dedicated Support Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10">
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-[#00D3A9]" />
                  3. Dedicated Support Resources
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-6 bg-gradient-to-br from-[#00D3A9]/10 to-transparent border-2 border-[#00D3A9]/20 rounded-lg">
                    <h3 className="text-xl text-[#0A0D12] dark:text-white mb-4 flex items-center gap-2">
                      <Users className="w-6 h-6 text-[#00D3A9]" />
                      Technical Account Manager (TAM)
                    </h3>
                    <div className="space-y-2 text-[#0A0D12]/80 dark:text-white/80">
                      <p>• <strong>Dedicated resource</strong> assigned to your account</p>
                      <p>• <strong>Single point of contact</strong> for all technical matters</p>
                      <p>• <strong>Proactive monitoring</strong> and optimization recommendations</p>
                      <p>• <strong>Quarterly business reviews</strong> with executive stakeholders</p>
                      <p>• <strong>Direct escalation path</strong> to engineering leadership</p>
                      <p>• <strong>Custom runbooks</strong> and documentation tailored to your infrastructure</p>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-[#00D3A9]/10 to-transparent border-2 border-[#00D3A9]/20 rounded-lg">
                    <h3 className="text-xl text-[#0A0D12] dark:text-white mb-4 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-[#00D3A9]" />
                      Principal Architect Access
                    </h3>
                    <div className="space-y-2 text-[#0A0D12]/80 dark:text-white/80">
                      <p>• <strong>Direct access</strong> to Usama Idrees (Principal Architect)</p>
                      <p>• <strong>Architecture reviews</strong> for major changes</p>
                      <p>• <strong>Strategic planning</strong> sessions (quarterly)</p>
                      <p>• <strong>Emergency escalation</strong> for critical incidents</p>
                      <p>• <strong>Technology roadmap</strong> guidance</p>
                      <p>• <strong>Best practice consulting</strong> included in retainer</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl text-[#0A0D12] dark:text-white mb-4">Premium Support Channels:</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                      <Phone className="w-5 h-5 text-[#00D3A9] mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-[#0A0D12] dark:text-white mb-1">Emergency Hotline</div>
                        <div className="text-sm text-[#0A0D12]/60 dark:text-white/60">P1/P2 incidents - direct to senior engineers</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                      <Mail className="w-5 h-5 text-[#00D3A9] mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-[#0A0D12] dark:text-white mb-1">Priority Email</div>
                        <div className="text-sm text-[#0A0D12]/60 dark:text-white/60">Dedicated queue with guaranteed response</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                      <FileText className="w-5 h-5 text-[#00D3A9] mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-[#0A0D12] dark:text-white mb-1">Enterprise Portal</div>
                        <div className="text-sm text-[#0A0D12]/60 dark:text-white/60">Custom dashboard, reporting, analytics</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 4. Enhanced Service Credits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10">
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-[#00D3A9]" />
                  4. Enhanced Service Credits & Remedies
                </h2>

                <p className="text-lg text-[#0A0D12]/80 dark:text-white/80 mb-6">
                  Enterprise clients receive significantly higher service credits for any SLA breaches, with automatic calculation and immediate application.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#00D3A9]/10">
                        <th className="border-2 border-[#00D3A9]/20 p-4 text-left text-[#0A0D12] dark:text-white">Monthly Uptime Achieved</th>
                        <th className="border-2 border-[#00D3A9]/20 p-4 text-left text-[#0A0D12] dark:text-white">Service Credit</th>
                        <th className="border-2 border-[#00D3A9]/20 p-4 text-left text-[#0A0D12] dark:text-white">Additional Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#0A0D12]/80 dark:text-white/80">
                      <tr>
                        <td className="border-2 border-[#00D3A9]/20 p-4">≥ 99.9% but &lt; 99.95%</td>
                        <td className="border-2 border-[#00D3A9]/20 p-4"><strong className="text-[#00D3A9]">10%</strong> of monthly fees</td>
                        <td className="border-2 border-[#00D3A9]/20 p-4">Root cause analysis report</td>
                      </tr>
                      <tr>
                        <td className="border-2 border-[#00D3A9]/20 p-4">≥ 99.5% but &lt; 99.9%</td>
                        <td className="border-2 border-[#00D3A9]/20 p-4"><strong className="text-[#00D3A9]">25%</strong> of monthly fees</td>
                        <td className="border-2 border-[#00D3A9]/20 p-4">+ Executive review meeting</td>
                      </tr>
                      <tr>
                        <td className="border-2 border-[#00D3A9]/20 p-4">≥ 99.0% but &lt; 99.5%</td>
                        <td className="border-2 border-[#00D3A9]/20 p-4"><strong className="text-[#00D3A9]">50%</strong> of monthly fees</td>
                        <td className="border-2 border-[#00D3A9]/20 p-4">+ Remediation plan + priority on roadmap</td>
                      </tr>
                      <tr>
                        <td className="border-2 border-[#00D3A9]/20 p-4">&lt; 99.0%</td>
                        <td className="border-2 border-[#00D3A9]/20 p-4"><strong className="text-[#00D3A9]">100%</strong> of monthly fees</td>
                        <td className="border-2 border-[#00D3A9]/20 p-4">+ Penalty-free contract termination option</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#00D3A9]/10 border-2 border-[#00D3A9]/30 p-6 rounded-lg space-y-3 text-[#0A0D12]/80 dark:text-white/80">
                    <h4 className="text-lg text-[#0A0D12] dark:text-white mb-3">Response Time Credits:</h4>
                    <p><strong>P1 breach (&gt;15 min):</strong> $500 per incident + 5% monthly credit</p>
                    <p><strong>P2 breach (&gt;1 hr):</strong> $250 per incident + 2.5% monthly credit</p>
                    <p><strong>Multiple breaches:</strong> Credits stack up to 100% of monthly fees</p>
                  </div>

                  <div className="bg-[#00D3A9]/10 border-2 border-[#00D3A9]/30 p-6 rounded-lg space-y-3 text-[#0A0D12]/80 dark:text-white/80">
                    <h4 className="text-lg text-[#0A0D12] dark:text-white mb-3">Credit Application:</h4>
                    <p><strong>Automatic:</strong> No claim required—system tracks and applies</p>
                    <p><strong>Notification:</strong> Within 48 hours of month-end</p>
                    <p><strong>Application:</strong> Next invoice or cash refund (client choice)</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 5. Proactive Monitoring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10">
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-[#00D3A9]" />
                  5. Proactive Monitoring & Prevention
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xl text-[#0A0D12] dark:text-white mb-4">Advanced Monitoring:</h3>
                    <div className="space-y-3 text-[#0A0D12]/80 dark:text-white/80">
                      <p>• <strong>30-second intervals:</strong> Real-time health checks from 12+ global locations</p>
                      <p>• <strong>Predictive analytics:</strong> ML-based anomaly detection and forecasting</p>
                      <p>• <strong>Auto-remediation:</strong> Self-healing systems for common issues</p>
                      <p>• <strong>Capacity planning:</strong> Proactive scaling recommendations</p>
                      <p>• <strong>Security monitoring:</strong> 24/7 threat detection and response</p>
                      <p>• <strong>Performance baselines:</strong> Custom thresholds for your workloads</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl text-[#0A0D12] dark:text-white mb-4">Incident Prevention:</h3>
                    <div className="space-y-3 text-[#0A0D12]/80 dark:text-white/80">
                      <p>• <strong>Weekly health checks:</strong> Comprehensive infrastructure audits</p>
                      <p>• <strong>Monthly optimization:</strong> Performance tuning and cost analysis</p>
                      <p>• <strong>Quarterly disaster recovery:</strong> Full DR testing and validation</p>
                      <p>• <strong>Patch management:</strong> Proactive security updates with zero downtime</p>
                      <p>• <strong>Change advisory:</strong> Pre-review of all infrastructure changes</p>
                      <p>• <strong>Trend analysis:</strong> Historical data analysis with recommendations</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#00D3A9]/10 border-2 border-[#00D3A9]/30 rounded-lg">
                  <h4 className="text-lg text-[#0A0D12] dark:text-white mb-3">Custom Reporting & Analytics:</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-[#0A0D12]/80 dark:text-white/80">
                    <div>
                      <p className="text-[#00D3A9] mb-1">Real-Time Dashboard</p>
                      <p className="text-sm">Live infrastructure metrics, alerts, incident tracking</p>
                    </div>
                    <div>
                      <p className="text-[#00D3A9] mb-1">Weekly Reports</p>
                      <p className="text-sm">Performance trends, resource utilization, cost analysis</p>
                    </div>
                    <div>
                      <p className="text-[#00D3A9] mb-1">Monthly Executive Summary</p>
                      <p className="text-sm">SLA compliance, incidents, recommendations, ROI metrics</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 6. Exclusions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10">
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                  <AlertCircle className="w-8 h-8 text-[#00D3A9]" />
                  6. SLA Exclusions (Limited)
                </h2>

                <p className="text-lg text-[#0A0D12]/80 dark:text-white/80 mb-6">
                  Enterprise SLA has minimal exclusions to ensure maximum accountability:
                </p>

                <div className="space-y-3">
                  {[
                    'Planned maintenance windows with 7-day advance notice (maximum 2 hours/month, scheduled during client-approved windows)',
                    'Emergency security patches (best effort 24-hour notice, zero-downtime deployment required)',
                    'Outages directly caused by client misconfigurations after documented warnings',
                    'Force majeure events (natural disasters, wars, pandemics) beyond reasonable control',
                    'Third-party DNS provider failures (mitigated by multi-provider setup)',
                    'Distributed Denial of Service (DDoS) attacks (mitigated with included DDoS protection up to 100 Gbps)'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#00D3A9] mt-0.5 flex-shrink-0" />
                      <p className="text-[#0A0D12]/80 dark:text-white/80">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-6 bg-[#00D3A9]/10 border-2 border-[#00D3A9]/30 rounded-lg">
                  <p className="text-[#0A0D12]/80 dark:text-white/80">
                    <strong className="text-[#00D3A9]">Note:</strong> Unlike Standard SLA, Enterprise clients receive proactive mitigation for most third-party risks through redundant providers, multi-region architecture, and advanced DDoS protection—significantly reducing exclusion scenarios.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* 7. Term & Modification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10">
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6">7. Term, Modifications & Guarantees</h2>
                
                <div className="space-y-6 text-[#0A0D12]/80 dark:text-white/80">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                      <h4 className="text-lg text-[#0A0D12] dark:text-white mb-3">SLA Term</h4>
                      <p>Effective from service start date and remains in force for the entire contract duration. Annual renewal with guaranteed rate lock for multi-year commitments.</p>
                    </div>
                    <div className="p-6 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                      <h4 className="text-lg text-[#0A0D12] dark:text-white mb-3">Modification Rights</h4>
                      <p>HUK SONS IT may modify with 90 days notice. Material changes to uptime/response times require 120 days notice and client consent.</p>
                    </div>
                    <div className="p-6 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                      <h4 className="text-lg text-[#0A0D12] dark:text-white mb-3">Performance Guarantee</h4>
                      <p>If SLA is breached for 3 consecutive months, client may terminate without penalty or receive free infrastructure audit and remediation.</p>
                    </div>
                    <div className="p-6 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                      <h4 className="text-lg text-[#0A0D12] dark:text-white mb-3">Upgrade Path</h4>
                      <p>Standard SLA clients can upgrade to Enterprise SLA anytime with pro-rated fees and 30-day transition period.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0D12] dark:text-white mb-6">
              Ready for Enterprise-Grade <span className="text-[#00D3A9]">Commitment?</span>
            </h2>
            <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
              Join 200+ enterprises trusting HUK SONS IT for mission-critical infrastructure with 99.9% uptime and 24/7/365 support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => navigate('/get-started')}
                className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-10 py-6 text-lg"
              >
                Get Enterprise SLA
              </Button>
              <Button
                onClick={() => navigate('/sla/standard')}
                variant="outline"
                className="border-2 border-[#0A0D12] dark:border-white px-10 py-6 text-lg"
              >
                Compare with Standard
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <div className="container-enterprise relative z-10 pb-8 text-center">
         <p className="text-xs text-[#0A0D12]/40 dark:text-white/40">
            HUK SONS IT is a business unit of HUK SONS, a company registered in Pakistan.
         </p>
      </div>
    </div>
  );
}