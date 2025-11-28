'use client';

import { ArrowLeft, Shield, Clock, CheckCircle2, AlertCircle, Phone, Mail, FileText, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function StandardSLAPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      <SEOHead
        title="Standard SLA | Service Level Agreement | HUK SONS IT"
        description="HUK SONS IT Standard Service Level Agreement with 99.5% uptime guarantee, response times, support coverage, and service commitments for enterprise clients."
        keywords="standard SLA, service level agreement, uptime guarantee, support hours, response time, enterprise support"
        canonical="https://huksonsit.com/sla/standard"
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

              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#00D3A9]/10 border border-[#00D3A9]/30 rounded-full mb-8">
                <FileText className="w-5 h-5 text-[#00D3A9]" />
                <span className="text-sm uppercase tracking-wider text-[#00D3A9]">Standard Service Level Agreement</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl mb-8">
                <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                  Standard SLA
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#0A0D12]/70 dark:text-white/70 max-w-3xl leading-relaxed mb-6">
                Comprehensive service commitments for growing enterprises with predictable infrastructure needs and business-hours support requirements.
              </p>

              <p className="text-sm text-[#0A0D12]/50 dark:text-white/50">
                <strong>Effective Date:</strong> January 1, 2025 | <strong>Version:</strong> 2.1 | <strong>Last Updated:</strong> November 26, 2024
              </p>

              <div className="mt-6 p-4 bg-[#00D3A9]/10 border border-[#00D3A9]/20 rounded-lg">
                <p className="text-sm text-[#0A0D12]/70 dark:text-white/70">
                  <strong>HUK SONS IT</strong> is a business unit of <strong>HUK SONS</strong>. Other business units of HUK SONS have their own Legal information.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Shield, label: 'Uptime Guarantee', value: '99.5%' },
                { icon: Clock, label: 'Critical Response', value: '< 2 hours' },
                { icon: Phone, label: 'Support Hours', value: '5/9 Business' },
                { icon: TrendingUp, label: 'Projects Delivered', value: '1500+' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 text-center bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 min-h-[180px] flex flex-col justify-center">
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
            
            {/* 1. Uptime Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10">
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-[#00D3A9]" />
                  1. Uptime Commitment
                </h2>
                
                <div className="space-y-4 text-[#0A0D12]/80 dark:text-white/80">
                  <p className="text-lg leading-relaxed">
                    HUK SONS IT guarantees <strong className="text-[#00D3A9]">99.5% uptime</strong> for all managed infrastructure and services covered under this Standard SLA.
                  </p>

                  <div className="bg-[#0A0D12]/5 dark:bg-white/[0.02] p-6 rounded-lg">
                    <h3 className="text-xl text-[#0A0D12] dark:text-white mb-4">Calculation Method:</h3>
                    <p className="mb-4">Uptime Percentage = ((Total Minutes in Month - Downtime Minutes) / Total Minutes in Month) × 100</p>
                    <div className="space-y-2">
                      <p><strong>Measured monthly:</strong> Calendar month basis (00:00:01 first day to 23:59:59 last day)</p>
                      <p><strong>Downtime defined as:</strong> Any period where core services are unavailable or degraded beyond operational thresholds</p>
                      <p><strong>Excludes:</strong> Planned maintenance (with 72-hour notice), client-caused outages, force majeure events</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-[#00D3A9]/5 border border-[#00D3A9]/20 p-4 rounded-lg">
                      <h4 className="text-lg text-[#0A0D12] dark:text-white mb-2">Maximum Downtime</h4>
                      <p className="text-2xl text-[#00D3A9]">~3.6 hours/month</p>
                      <p className="text-sm text-[#0A0D12]/60 dark:text-white/60 mt-1">Based on 99.5% uptime</p>
                    </div>
                    <div className="bg-[#00D3A9]/5 border border-[#00D3A9]/20 p-4 rounded-lg">
                      <h4 className="text-lg text-[#0A0D12] dark:text-white mb-2">Planned Maintenance</h4>
                      <p className="text-2xl text-[#00D3A9]">4 hours/month</p>
                      <p className="text-sm text-[#0A0D12]/60 dark:text-white/60 mt-1">Maximum allowed window</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 2. Response Times */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10">
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                  <Clock className="w-8 h-8 text-[#00D3A9]" />
                  2. Response Time Commitments
                </h2>

                <p className="text-lg text-[#0A0D12]/80 dark:text-white/80 mb-6">
                  Response times are measured from ticket creation to first qualified technical response during business hours.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#0A0D12]/5 dark:bg-white/[0.02]">
                        <th className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4 text-left text-[#0A0D12] dark:text-white">Priority Level</th>
                        <th className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4 text-left text-[#0A0D12] dark:text-white">Description</th>
                        <th className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4 text-left text-[#0A0D12] dark:text-white">Response Time</th>
                        <th className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4 text-left text-[#0A0D12] dark:text-white">Resolution Target</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#0A0D12]/80 dark:text-white/80">
                      <tr>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">
                          <span className="px-3 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded-full text-sm">P1 - Critical</span>
                        </td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">Complete service outage, production down, critical data loss</td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4"><strong className="text-[#00D3A9]">&lt; 2 hours</strong></td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">8 business hours</td>
                      </tr>
                      <tr>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">
                          <span className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-sm">P2 - High</span>
                        </td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">Major functionality impaired, significant performance degradation</td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4"><strong className="text-[#00D3A9]">&lt; 4 hours</strong></td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">2 business days</td>
                      </tr>
                      <tr>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">
                          <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">P3 - Medium</span>
                        </td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">Minor functionality affected, workaround available</td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4"><strong className="text-[#00D3A9]">&lt; 8 hours</strong></td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">5 business days</td>
                      </tr>
                      <tr>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">
                          <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm">P4 - Low</span>
                        </td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">General inquiries, feature requests, documentation</td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4"><strong className="text-[#00D3A9]">&lt; 1 business day</strong></td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">Best effort</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-[#00D3A9]/5 border border-[#00D3A9]/20 p-6 rounded-lg">
                  <h4 className="text-lg text-[#0A0D12] dark:text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-[#00D3A9]" />
                    Business Hours Definition
                  </h4>
                  <p className="text-[#0A0D12]/80 dark:text-white/80">
                    <strong>Monday - Friday:</strong> 9:00 AM to 6:00 PM (Client's Local Time Zone)<br />
                    <strong>Excludes:</strong> Public holidays in the United States, Canada, and major international holidays<br />
                    <strong>After-hours:</strong> Emergency contact available for P1 Critical incidents only (best effort response)
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* 3. Support Channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10">
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                  <Phone className="w-8 h-8 text-[#00D3A9]" />
                  3. Support Channels & Coverage
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl text-[#0A0D12] dark:text-white mb-4">Available Channels:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-4 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                        <Mail className="w-5 h-5 text-[#00D3A9] mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-[#0A0D12] dark:text-white mb-1">Email Support</div>
                          <div className="text-sm text-[#0A0D12]/60 dark:text-white/60">info@huksons.com</div>
                          <div className="text-xs text-[#00D3A9] mt-1">Primary channel - guaranteed response</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                        <Phone className="w-5 h-5 text-[#00D3A9] mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-[#0A0D12] dark:text-white mb-1">Phone Support</div>
                          <div className="text-sm text-[#0A0D12]/60 dark:text-white/60">P1/P2 incidents during business hours</div>
                          <div className="text-xs text-[#00D3A9] mt-1">Provided after onboarding</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                        <FileText className="w-5 h-5 text-[#00D3A9] mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-[#0A0D12] dark:text-white mb-1">Support Portal</div>
                          <div className="text-sm text-[#0A0D12]/60 dark:text-white/60">Ticket tracking, documentation, status updates</div>
                          <div className="text-xs text-[#00D3A9] mt-1">24/7 access</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl text-[#0A0D12] dark:text-white mb-4">Escalation Procedure:</h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-[#00D3A9]/5 border border-[#00D3A9]/20 rounded-lg">
                        <div className="text-sm text-[#00D3A9] mb-1">Level 1: Support Engineer</div>
                        <div className="text-sm text-[#0A0D12]/70 dark:text-white/70">Initial response and triage</div>
                      </div>
                      <div className="p-4 bg-[#00D3A9]/5 border border-[#00D3A9]/20 rounded-lg">
                        <div className="text-sm text-[#00D3A9] mb-1">Level 2: Senior Engineer</div>
                        <div className="text-sm text-[#0A0D12]/70 dark:text-white/70">If unresolved within 50% of target time</div>
                      </div>
                      <div className="p-4 bg-[#00D3A9]/5 border border-[#00D3A9]/20 rounded-lg">
                        <div className="text-sm text-[#00D3A9] mb-1">Level 3: Principal Architect</div>
                        <div className="text-sm text-[#0A0D12]/70 dark:text-white/70">Critical incidents or complex issues</div>
                      </div>
                      <div className="p-4 bg-[#00D3A9]/5 border border-[#00D3A9]/20 rounded-lg">
                        <div className="text-sm text-[#00D3A9] mb-1">Level 4: Executive</div>
                        <div className="text-sm text-[#0A0D12]/70 dark:text-white/70">SLA breach or business-critical escalation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 4. Service Credits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10">
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-[#00D3A9]" />
                  4. Service Credits & Remedies
                </h2>

                <p className="text-lg text-[#0A0D12]/80 dark:text-white/80 mb-6">
                  If HUK SONS IT fails to meet the uptime commitment, clients are entitled to service credits automatically applied to future invoices.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#0A0D12]/5 dark:bg-white/[0.02]">
                        <th className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4 text-left text-[#0A0D12] dark:text-white">Monthly Uptime Achieved</th>
                        <th className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4 text-left text-[#0A0D12] dark:text-white">Service Credit</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#0A0D12]/80 dark:text-white/80">
                      <tr>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">≥ 99.5% but &lt; 99.9%</td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4"><strong className="text-[#00D3A9]">5%</strong> of monthly service fees</td>
                      </tr>
                      <tr>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">≥ 99.0% but &lt; 99.5%</td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4"><strong className="text-[#00D3A9]">10%</strong> of monthly service fees</td>
                      </tr>
                      <tr>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4">≥ 98.0% but &lt; 99.0%</td>
                        <td className="border-2 border-[#0A0D12]/10 dark:border-white/10 p-4"><strong className="text-[#00D3A9]">25%</strong> of monthly service fees</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#00D3A9]/5 border border-[#00D3A9]/20 p-6 rounded-lg space-y-3 text-[#0A0D12]/80 dark:text-white/80">
                  <h4 className="text-lg text-[#0A0D12] dark:text-white mb-3">Credit Claim Process:</h4>
                  <p><strong>1. Automatic Calculation:</strong> Credits are calculated automatically each month based on monitored uptime</p>
                  <p><strong>2. Notification:</strong> Clients receive credit notification within 5 business days of month-end</p>
                  <p><strong>3. Application:</strong> Credits applied to next invoice automatically; no action required</p>
                  <p><strong>4. Dispute Period:</strong> 10 business days to dispute calculations with supporting evidence</p>
                  <p><strong>5. Maximum Credit:</strong> Cannot exceed 50% of monthly service fees per incident/month</p>
                </div>
              </Card>
            </motion.div>

            {/* 5. Exclusions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10">
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                  <AlertCircle className="w-8 h-8 text-[#00D3A9]" />
                  5. SLA Exclusions
                </h2>

                <p className="text-lg text-[#0A0D12]/80 dark:text-white/80 mb-6">
                  The following circumstances are excluded from uptime calculations and SLA commitments:
                </p>

                <div className="space-y-3">
                  {[
                    'Planned maintenance windows with 72-hour advance notice (maximum 4 hours/month)',
                    'Emergency maintenance required for security vulnerabilities (best effort notice)',
                    'Outages caused by client actions, configurations, or custom code',
                    'Third-party service failures beyond HUK SONS IT\'s reasonable control (DNS, ISPs, cloud providers)',
                    'Force majeure events (natural disasters, wars, pandemics, government actions)',
                    'Client network or infrastructure issues preventing access',
                    'Denial of Service (DoS/DDoS) attacks or malicious activities',
                    'Beta features, preview services, or non-production environments',
                    'Services operating on deprecated or unsupported platforms after notice period'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#00D3A9] mt-0.5 flex-shrink-0" />
                      <p className="text-[#0A0D12]/80 dark:text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* 6. Monitoring & Reporting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10">
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-[#00D3A9]" />
                  6. Monitoring & Reporting
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl text-[#0A0D12] dark:text-white mb-4">Monitoring Tools:</h3>
                    <div className="space-y-3 text-[#0A0D12]/80 dark:text-white/80">
                      <p>• <strong>Synthetic monitoring:</strong> Every 60 seconds from multiple global locations</p>
                      <p>• <strong>Real user monitoring:</strong> Actual user experience tracking</p>
                      <p>• <strong>Infrastructure health:</strong> CPU, memory, disk, network metrics</p>
                      <p>• <strong>Application performance:</strong> Response times, error rates, throughput</p>
                      <p>• <strong>Security monitoring:</strong> Intrusion detection, vulnerability scanning</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl text-[#0A0D12] dark:text-white mb-4">Monthly Reports Include:</h3>
                    <div className="space-y-3 text-[#0A0D12]/80 dark:text-white/80">
                      <p>• <strong>Uptime percentage:</strong> Detailed breakdown by service</p>
                      <p>• <strong>Incident summary:</strong> All P1/P2 incidents with root cause</p>
                      <p>• <strong>Response metrics:</strong> Average response/resolution times by priority</p>
                      <p>• <strong>Change log:</strong> All infrastructure changes and deployments</p>
                      <p>• <strong>Performance trends:</strong> Month-over-month comparisons</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-[#00D3A9]/5 border border-[#00D3A9]/20 rounded-lg">
                  <p className="text-[#0A0D12]/80 dark:text-white/80">
                    <strong className="text-[#00D3A9]">Report Delivery:</strong> Monthly SLA reports delivered by the 5th business day of each month via email and support portal. Custom reporting available upon request.
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
                <h2 className="text-3xl text-[#0A0D12] dark:text-white mb-6">7. Term & Modifications</h2>
                
                <div className="space-y-4 text-[#0A0D12]/80 dark:text-white/80">
                  <p className="text-lg">
                    This SLA is effective from the service start date specified in the client's Master Service Agreement (MSA) and remains in effect for the duration of active service.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="p-6 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                      <h4 className="text-lg text-[#0A0D12] dark:text-white mb-3">Modification Rights</h4>
                      <p>HUK SONS IT may modify this SLA with 60 days written notice. Material changes affecting uptime or response times require 90 days notice.</p>
                    </div>
                    <div className="p-6 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                      <h4 className="text-lg text-[#0A0D12] dark:text-white mb-3">Client Opt-Out</h4>
                      <p>If modified SLA terms are unacceptable, client may terminate service within 30 days of notice without penalty.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0D12] dark:text-white mb-6">
              Need Enterprise-Grade <span className="text-[#00D3A9]">SLA Coverage?</span>
            </h2>
            <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
              Upgrade to Enterprise SLA for 24/7/365 support, 99.9% uptime guarantee, and dedicated resources.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => navigate('/sla/enterprise')}
                className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-10 py-6 text-lg"
              >
                View Enterprise SLA
              </Button>
              <Button
                onClick={() => navigate('/get-started')}
                variant="outline"
                className="border-2 border-[#0A0D12] dark:border-white px-10 py-6 text-lg"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}