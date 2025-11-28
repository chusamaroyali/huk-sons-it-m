'use client';

import { Linkedin, Mail, Award, Briefcase, Code, ArrowRight, Users, TrendingUp, Target, Sparkles, Calendar, MessageSquare, FileText, Phone, Globe2, CheckCircle2, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { SEOHead } from '../components/SEOHead';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';

const leadershipStats = [
  { icon: TrendingUp, value: '17+', label: 'Years Experience', gradient: 'from-[#00D3A9] to-[#00D3A9]/60' },
  { icon: Users, value: '200+', label: 'Enterprises Led', gradient: 'from-[#00D3A9] to-[#00D3A9]/60' },
  { icon: Target, value: '32+', label: 'Industries', gradient: 'from-[#00D3A9] to-[#00D3A9]/60' },
  { icon: Sparkles, value: '95%+', label: 'Success Rate', gradient: 'from-[#00D3A9] to-[#00D3A9]/60' },
  { icon: Globe2, value: '3', label: 'Continents', gradient: 'from-[#00D3A9] to-[#00D3A9]/60' },
  { icon: Star, value: '100%', label: 'Senior-Led', gradient: 'from-[#00D3A9] to-[#00D3A9]/60' },
];

const experience = [
  {
    period: '2008 - Present',
    title: 'DevOps/DataOps Engineering Excellence',
    description: '17+ years of cross-sector experience in IT, Banking, and Education',
    icon: TrendingUp,
    highlights: [
      'Led 200+ enterprise transformations',
      'Reduced infrastructure costs by 30-60%',
      'Automated critical business workflows',
      'Zero downtime migrations'
    ]
  },
  {
    period: 'Specialization',
    title: 'Cloud & Infrastructure Automation',
    description: 'Expert in AWS, GCP, Azure, and Kubernetes at enterprise scale',
    icon: Zap,
    highlights: [
      'Multi-cloud architecture design',
      'Kubernetes at enterprise scale',
      'Infrastructure as Code excellence',
      'Security by design implementation'
    ]
  },
  {
    period: 'Key Projects',
    title: 'Enterprise Modernization Leadership',
    description: 'Modernization projects with Hadoop, Kafka, Terraform, Jenkins, and automation',
    icon: Code,
    highlights: [
      'Big data infrastructure (Hadoop, Kafka)',
      'CI/CD pipeline automation (Jenkins, GitLab)',
      'Cloud migration & optimization',
      'Data engineering at scale'
    ]
  },
];

const expertise = [
  {
    category: 'Cloud Platforms',
    icon: Globe2,
    color: '#00D3A9',
    skills: ['AWS (Advanced)', 'Google Cloud Platform', 'Microsoft Azure', 'Multi-cloud Architecture', 'Hybrid Cloud Solutions'],
  },
  {
    category: 'DevOps & Automation',
    icon: Zap,
    color: '#00D3A9',
    skills: ['Terraform', 'Ansible', 'Jenkins', 'GitLab CI/CD', 'GitHub Actions'],
  },
  {
    category: 'Container & Orchestration',
    icon: Target,
    color: '#00D3A9',
    skills: ['Kubernetes', 'Docker', 'Helm', 'Container Security', 'Service Mesh'],
  },
  {
    category: 'Data Engineering',
    icon: TrendingUp,
    color: '#00D3A9',
    skills: ['Hadoop', 'Kafka', 'Snowflake', 'BigQuery', 'ETL/ELT Pipelines'],
  },
  {
    category: 'Programming & Scripting',
    icon: Code,
    color: '#00D3A9',
    skills: ['Python', 'Bash', 'Go', 'Infrastructure as Code', 'API Development'],
  },
  {
    category: 'Monitoring & Observability',
    icon: Sparkles,
    color: '#00D3A9',
    skills: ['Datadog', 'New Relic', 'Prometheus', 'Grafana', 'ELK Stack'],
  },
];

const certifications = [
  { name: 'AWS Solutions Architect Professional', issuer: 'Amazon Web Services', year: 'Current' },
  { name: 'Google Professional Cloud Architect', issuer: 'Google Cloud', year: 'Current' },
  { name: 'Kubernetes Certified Administrator (CKA)', issuer: 'CNCF', year: 'Current' },
  { name: 'HashiCorp Certified: Terraform Associate', issuer: 'HashiCorp', year: 'Current' },
  { name: 'ITIL Foundation', issuer: 'Axelos', year: 'Current' },
];

const philosophy = [
  {
    title: 'Engineering Precision',
    description: 'Every technical decision must be backed by data, benchmarks, and business logic—not trends or preferences.',
    icon: Code,
    principle: 'Data-driven decisions, measurable outcomes'
  },
  {
    title: 'Business Scalability',
    description: 'Systems should enable growth, not constrain it. Build for 10x scale, optimize for current reality.',
    icon: Briefcase,
    principle: 'Future-proof architecture, present efficiency'
  },
  {
    title: 'Radical Accountability',
    description: 'Own the outcome, not just the output. Success is measured by business impact, not deployment frequency.',
    icon: Award,
    principle: 'Results matter, not activity metrics'
  },
];

const achievements = [
  { metric: '30-60%', label: 'Average Cost Reduction', description: 'Through cloud optimization' },
  { metric: '10x', label: 'Scalability Increase', description: 'Infrastructure capacity gains' },
  { metric: '99.9%', label: 'Uptime Achieved', description: 'Enterprise-grade reliability' },
  { metric: '<2hrs', label: 'Average Response', description: 'Critical incident resolution' },
];

export function LeadershipPage() {
  const navigate = useNavigate();

  const handleScheduleCall = () => {
    window.location.href = 'mailto:info@huksons.com?subject=Schedule Strategy Call with Usama';
  };

  const handleLinkedIn = () => {
    // Add LinkedIn profile URL when available
    window.open('https://linkedin.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      <SEOHead
        title="Leadership | Usama Idrees - Founder & Principal Architect | HUK SONS IT"
        description="Meet Usama Idrees, Founder & Principal Architect of HUK SONS IT. 17+ years of DevOps/DataOps engineering expertise across IT, Banking, and Education sectors. Senior-level leadership driving every enterprise engagement."
        keywords="Usama Idrees, DevOps expert, DataOps engineer, cloud architect, AWS certified, Kubernetes, technical leadership, enterprise transformation"
        canonical="https://huksonsit.com/leadership"
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #00D3A9 1px, transparent 1px),
            linear-gradient(to bottom, #00D3A9 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D3A9]/5 dark:bg-[#00D3A9]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#00D3A9]/3 dark:bg-[#00D3A9]/8 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />
      <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#00D3A9]/4 dark:bg-[#00D3A9]/6 rounded-full blur-[90px] animate-pulse pointer-events-none" style={{ animationDuration: '15s' }} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#00D3A9]/10 border border-[#00D3A9]/30 rounded-full">
                <Users className="w-5 h-5 text-[#00D3A9]" />
                <span className="text-sm uppercase tracking-wider text-[#00D3A9]">Leadership Excellence</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8"
            >
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                Meet the Architect Behind
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00D3A9] to-[#00D3A9]/60 bg-clip-text text-transparent">
                Your Transformation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-[#0A0D12]/70 dark:text-white/70 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              17+ years of enterprise engineering excellence. Every project personally led by senior-level expertise—no delegation, no junior teams, just proven results.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                onClick={handleScheduleCall}
                className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-8 py-6 text-lg group"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleLinkedIn}
                variant="outline"
                className="border-2 border-[#0A0D12] dark:border-white text-[#0A0D12] dark:text-white hover:bg-[#0A0D12]/5 dark:hover:bg-white/5 px-8 py-6 text-lg"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                Connect on LinkedIn
              </Button>
            </motion.div>

            <div className="flex justify-center mt-16">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00D3A9] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid - 6 Cards */}
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0D12] dark:text-white mb-4">
              Leadership by the <span className="text-[#00D3A9]">Numbers</span>
            </h2>
            <p className="text-lg text-[#0A0D12]/70 dark:text-white/70">
              Proven track record of enterprise excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {leadershipStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 text-center group min-h-[180px] flex flex-col justify-center">
                  <div className="w-12 h-12 bg-[#00D3A9]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-[#00D3A9]" />
                  </div>
                  <div className="text-3xl md:text-4xl text-[#00D3A9] mb-2">{stat.value}</div>
                  <div className="text-sm text-[#0A0D12]/70 dark:text-white/70">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile - New Layout */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0D12] dark:text-white mb-4">
                Founder & <span className="text-[#00D3A9]">Principal Architect</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-8">
              {/* Left: Profile Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-3"
              >
                <Card className="p-8 md:p-10 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00D3A9]/20 to-[#00D3A9]/5 border-2 border-[#00D3A9]/30 rounded-2xl flex items-center justify-center text-4xl text-[#00D3A9]">
                      UI
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl text-[#0A0D12] dark:text-white mb-1">Usama Idrees</h3>
                      <p className="text-xl text-[#00D3A9]">Founder & Principal Architect</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 text-lg text-[#0A0D12]/80 dark:text-white/80 mb-8">
                    <p className="leading-relaxed">
                      A veteran DevOps/DataOps Engineer with over <strong className="text-[#00D3A9]">17 years</strong> of cross-sector experience spanning IT, Banking, and Education. Usama has personally led <strong className="text-[#00D3A9]">200+ enterprise transformations</strong>, modernizing mission-critical infrastructure with technologies including Hadoop, Kafka, Terraform, Jenkins, and comprehensive automation frameworks.
                    </p>
                    <p className="leading-relaxed">
                      His leadership philosophy centers on blending <strong className="text-[#00D3A9]">engineering precision</strong> with <strong className="text-[#00D3A9]">business scalability</strong>, ensuring every technical decision drives measurable ROI. Usama's hands-on approach means clients work directly with senior-level expertise—no delegation, no intermediaries, just proven results.
                    </p>
                    <p className="leading-relaxed">
                      Under his guidance, HUK SONS IT has helped global enterprises reduce cloud costs by <strong className="text-[#00D3A9]">30-60%</strong>, automate critical workflows, achieve <strong className="text-[#00D3A9]">99.9% uptime</strong>, and build data infrastructures that support sustainable, long-term growth.
                    </p>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-[#0A0D12]/10 dark:border-white/10">
                    <Button
                      onClick={() => window.location.href = 'mailto:info@huksons.com'}
                      className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-6 py-3 group"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email Directly
                    </Button>
                    <Button
                      onClick={handleLinkedIn}
                      variant="outline"
                      className="border-2 border-[#0A0D12]/20 dark:border-white/20 text-[#0A0D12] dark:text-white hover:border-[#00D3A9] px-6 py-3"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect
                    </Button>
                    <Button
                      onClick={handleScheduleCall}
                      variant="outline"
                      className="border-2 border-[#0A0D12]/20 dark:border-white/20 text-[#0A0D12] dark:text-white hover:border-[#00D3A9] px-6 py-3"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Call
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* Right: Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-2 space-y-6"
              >
                <Card className="p-8 bg-gradient-to-br from-[#00D3A9]/10 to-transparent border-2 border-[#00D3A9]/20 rounded-2xl text-center hover:shadow-2xl hover:shadow-[#00D3A9]/20 transition-all duration-500 min-h-[100px] flex flex-col justify-center">
                  <div className="text-6xl text-[#00D3A9] mb-2">17+</div>
                  <div className="text-lg text-[#0A0D12] dark:text-white">Years of Excellence</div>
                </Card>

                {[
                  { value: '1500+', label: 'Projects Delivered', desc: 'Consultation to execution' },
                  { value: '98%', label: 'End-to-End', desc: 'Complete solutions delivered' },
                  { value: '32+', label: 'Industries', desc: 'Global expertise' }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card className="p-6 bg-white/80 dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 rounded-xl hover:border-[#00D3A9]/40 hover:shadow-lg hover:shadow-[#00D3A9]/10 transition-all duration-300 text-center min-h-[100px] flex flex-col justify-center">
                      <div className="text-3xl text-[#00D3A9] mb-1">{stat.value}</div>
                      <div className="text-sm text-[#0A0D12] dark:text-white mb-1">{stat.label}</div>
                      <div className="text-xs text-[#0A0D12]/60 dark:text-white/60">{stat.desc}</div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA #1 - Book Technical Assessment */}
      <section className="relative py-24 md:py-32 min-h-[70vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00D3A9]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00D3A9]/15 rounded-full blur-3xl" />
        </div>
        
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D3A9]/20 border border-[#00D3A9]/40 rounded-full mb-6">
                  <FileText className="w-4 h-4 text-[#00D3A9]" />
                  <span className="text-sm text-[#00D3A9] uppercase tracking-wider">Complimentary</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-6">
                  Get a Free <span className="text-[#00D3A9]">Technical Assessment</span>
                </h2>
                <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-8 leading-relaxed">
                  Receive a comprehensive infrastructure audit, gap analysis, and transformation roadmap personally conducted by Usama. No sales pitch—just actionable insights.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Infrastructure audit & bottleneck analysis',
                    'Cloud cost optimization opportunities',
                    'Security & compliance review',
                    'Scalability assessment',
                    'Custom transformation roadmap'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#00D3A9] flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-[#0A0D12]/80 dark:text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => window.location.href = 'mailto:info@huksons.com?subject=Request Technical Assessment'}
                    className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-10 py-7 text-xl group"
                  >
                    <FileText className="mr-2 w-6 h-6" />
                    Request Assessment
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <p className="text-sm text-[#0A0D12]/50 dark:text-white/50 mt-4">
                  Available for enterprises with $20K+ transformation budgets
                </p>
              </div>

              <Card className="p-8 bg-white/90 dark:bg-white/[0.05] backdrop-blur-sm border-2 border-[#00D3A9]/30">
                <h3 className="text-2xl text-[#0A0D12] dark:text-white mb-6">What You'll Receive:</h3>
                <div className="space-y-4">
                  {[
                    { icon: Target, title: '60-Min Consultation', desc: 'Direct with Usama Idrees' },
                    { icon: FileText, title: 'Detailed Report', desc: '15-20 page assessment' },
                    { icon: TrendingUp, title: 'ROI Projections', desc: 'Cost savings forecast' },
                    { icon: Calendar, title: 'Roadmap', desc: 'Phased implementation plan' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-[#0A0D12]/5 dark:bg-white/[0.02] rounded-lg">
                      <div className="w-10 h-10 bg-[#00D3A9]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#00D3A9]" />
                      </div>
                      <div>
                        <div className="text-[#0A0D12] dark:text-white mb-1">{item.title}</div>
                        <div className="text-sm text-[#0A0D12]/60 dark:text-white/60">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-4">
                Professional <span className="text-[#00D3A9]">Journey</span>
              </h2>
              <p className="text-xl text-[#0A0D12]/70 dark:text-white/70">17+ years of enterprise engineering excellence</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {experience.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-8 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 rounded-2xl hover:border-[#00D3A9]/40 hover:shadow-xl hover:shadow-[#00D3A9]/10 transition-all duration-300 h-full group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-[#00D3A9]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-7 h-7 text-[#00D3A9]" />
                      </div>
                      <span className="px-3 py-1 bg-[#00D3A9]/10 border border-[#00D3A9]/30 rounded-full text-xs text-[#00D3A9]">
                        {item.period}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl text-[#0A0D12] dark:text-white mb-3">{item.title}</h3>
                    <p className="text-[#0A0D12]/70 dark:text-white/70 mb-6">{item.description}</p>
                    
                    <div className="space-y-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00D3A9] mt-2 flex-shrink-0" />
                          <span className="text-sm text-[#0A0D12]/70 dark:text-white/70">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-4">
                Proven <span className="text-[#00D3A9]">Impact</span>
              </h2>
              <p className="text-xl text-[#0A0D12]/70 dark:text-white/70">
                Measurable results across 200+ enterprise engagements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-8 bg-gradient-to-br from-white to-[#00D3A9]/5 dark:from-white/[0.03] dark:to-[#00D3A9]/5 border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 text-center group min-h-[200px] flex flex-col justify-center">
                    <div className="text-5xl text-[#00D3A9] mb-3 group-hover:scale-110 transition-transform">{achievement.metric}</div>
                    <div className="text-lg text-[#0A0D12] dark:text-white mb-2">{achievement.label}</div>
                    <div className="text-sm text-[#0A0D12]/60 dark:text-white/60">{achievement.description}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA #2 - Schedule Executive Briefing */}
      <section className="relative py-24 md:py-32 min-h-[70vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-[#0A0D12]/5 dark:from-white/[0.02] to-transparent">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#00D3A9]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D3A9]/20 border border-[#00D3A9]/40 rounded-full mb-8">
              <MessageSquare className="w-4 h-4 text-[#00D3A9]" />
              <span className="text-sm text-[#00D3A9] uppercase tracking-wider">Executive Briefing</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-8">
              Discuss Your Infrastructure <span className="text-[#00D3A9]">Directly with Usama</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#0A0D12]/70 dark:text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every conversation is with the principal architect—no sales teams, no account managers. Get immediate technical insights and a clear transformation path forward.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Phone, title: '30-Min Call', desc: 'Technical discussion' },
                { icon: Target, title: 'Zero Pressure', desc: 'No sales pitch ever' },
                { icon: CheckCircle2, title: 'Actionable Plan', desc: 'Walk away with clarity' }
              ].map((item, idx) => (
                <Card key={idx} className="p-6 bg-white/90 dark:bg-white/[0.05] border-2 border-[#0A0D12]/10 dark:border-white/10">
                  <item.icon className="w-10 h-10 text-[#00D3A9] mx-auto mb-4" />
                  <div className="text-lg text-[#0A0D12] dark:text-white mb-2">{item.title}</div>
                  <div className="text-sm text-[#0A0D12]/60 dark:text-white/60">{item.desc}</div>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleScheduleCall}
                className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-12 py-8 text-xl group transition-all duration-300 hover:shadow-xl hover:shadow-[#00D3A9]/20"
              >
                <Calendar className="mr-2 w-6 h-6" />
                Schedule Executive Briefing
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => window.location.href = 'mailto:info@huksons.com'}
                variant="outline"
                className="border-2 border-[#0A0D12] dark:border-white text-[#0A0D12] dark:text-white hover:bg-[#0A0D12]/5 dark:hover:bg-white/5 px-12 py-8 text-xl"
              >
                <Mail className="mr-2 w-6 h-6" />
                Email Instead
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-4">
                Technical <span className="text-[#00D3A9]">Expertise</span>
              </h2>
              <p className="text-xl text-[#0A0D12]/70 dark:text-white/70">Deep expertise across the modern enterprise stack</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-8 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 rounded-2xl hover:border-[#00D3A9]/40 hover:shadow-xl hover:shadow-[#00D3A9]/10 transition-all duration-300 h-full group">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-[#00D3A9]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <area.icon className="w-6 h-6 text-[#00D3A9]" />
                      </div>
                      <h3 className="text-xl text-[#0A0D12] dark:text-white">{area.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 bg-[#0A0D12]/5 dark:bg-white/5 border border-[#0A0D12]/10 dark:border-white/10 rounded-lg text-sm text-[#0A0D12]/70 dark:text-white/70 hover:border-[#00D3A9]/30 hover:bg-[#00D3A9]/5 hover:text-[#00D3A9] transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-4">
                Industry <span className="text-[#00D3A9]">Certifications</span>
              </h2>
              <p className="text-xl text-[#0A0D12]/70 dark:text-white/70">Current professional credentials and expertise validation</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 rounded-xl hover:border-[#00D3A9]/40 hover:shadow-xl hover:shadow-[#00D3A9]/10 transition-all duration-300 min-h-[120px] flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-[#00D3A9]/10 border-2 border-[#00D3A9]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Award className="w-8 h-8 text-[#00D3A9]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg text-[#0A0D12] dark:text-white mb-1">{cert.name}</h4>
                      <p className="text-sm text-[#0A0D12]/60 dark:text-white/60">{cert.issuer} • {cert.year}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="relative py-16 md:py-24 bg-[#0A0D12]/5 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-4">
                Leadership <span className="text-[#00D3A9]">Philosophy</span>
              </h2>
              <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 max-w-2xl mx-auto">
                The principles that guide every engagement and technical decision
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {philosophy.map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-8 bg-white dark:bg-white/[0.03] border-2 border-[#0A0D12]/10 dark:border-white/10 rounded-2xl hover:border-[#00D3A9]/40 hover:shadow-2xl hover:shadow-[#00D3A9]/10 transition-all duration-300 text-center h-full group min-h-[320px] md:min-h-[360px] flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00D3A9]/20 to-[#00D3A9]/5 border-2 border-[#00D3A9]/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <principle.icon className="w-8 h-8 text-[#00D3A9]" />
                    </div>
                    <h3 className="text-2xl text-[#0A0D12] dark:text-white mb-4">{principle.title}</h3>
                    <p className="text-[#0A0D12]/70 dark:text-white/70 leading-relaxed mb-4 flex-1">{principle.description}</p>
                    <div className="pt-4 border-t border-[#0A0D12]/10 dark:border-white/10">
                      <p className="text-sm text-[#00D3A9] italic">{principle.principle}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="relative p-12 md:p-20 bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent border-2 border-[#00D3A9]/20 rounded-3xl overflow-hidden text-center hover:shadow-2xl hover:shadow-[#00D3A9]/20 transition-all duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D3A9]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00D3A9]/10 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="text-6xl text-[#00D3A9]/20 mb-4">"</div>
                  <blockquote className="text-3xl md:text-4xl lg:text-5xl text-[#0A0D12]/90 dark:text-white/90 italic leading-relaxed mb-8">
                    We succeed when your systems make growth inevitable.
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-1 h-12 bg-[#00D3A9]" />
                    <div className="text-left">
                      <p className="text-xl text-[#00D3A9]">Usama Idrees</p>
                      <p className="text-[#0A0D12]/60 dark:text-white/60">Founder & Principal Architect</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Multiple Options */}
      <section className="relative py-24 md:py-32 min-h-[70vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00D3A9]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00D3A9]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
        </div>
        
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0D12] dark:text-white mb-8">
              Ready to Work with <span className="text-[#00D3A9]">Senior-Level Expertise?</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#0A0D12]/70 dark:text-white/70 mb-16 max-w-3xl mx-auto leading-relaxed">
              Every engagement is personally led by Usama. No junior teams, no delegation—just 17+ years of proven enterprise experience focused on your success.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-8 bg-white/90 dark:bg-white/[0.05] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 group">
                <Calendar className="w-12 h-12 text-[#00D3A9] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl text-[#0A0D12] dark:text-white mb-3">Strategy Call</h3>
                <p className="text-[#0A0D12]/70 dark:text-white/70 mb-6">
                  30-minute technical discussion to understand your infrastructure challenges
                </p>
                <Button
                  onClick={handleScheduleCall}
                  className="w-full bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12]"
                >
                  Schedule Now
                </Button>
              </Card>

              <Card className="p-8 bg-white/90 dark:bg-white/[0.05] border-2 border-[#00D3A9] hover:shadow-xl hover:shadow-[#00D3A9]/20 transition-all duration-300 group">
                <FileText className="w-12 h-12 text-[#00D3A9] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl text-[#0A0D12] dark:text-white mb-3">Free Assessment</h3>
                <p className="text-[#0A0D12]/70 dark:text-white/70 mb-6">
                  Comprehensive technical audit with actionable transformation roadmap
                </p>
                <Button
                  onClick={() => window.location.href = 'mailto:info@huksons.com?subject=Request Technical Assessment'}
                  className="w-full bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12]"
                >
                  Request Assessment
                </Button>
              </Card>

              <Card className="p-8 bg-white/90 dark:bg-white/[0.05] border-2 border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9] transition-all duration-300 group">
                <Mail className="w-12 h-12 text-[#00D3A9] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl text-[#0A0D12] dark:text-white mb-3">Email Directly</h3>
                <p className="text-[#0A0D12]/70 dark:text-white/70 mb-6">
                  Reach out directly to discuss your specific technical requirements
                </p>
                <Button
                  onClick={() => window.location.href = 'mailto:info@huksons.com'}
                  className="w-full bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12]"
                >
                  Send Email
                </Button>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => navigate('/get-started')}
                variant="outline"
                className="border-2 border-[#0A0D12] dark:border-white text-[#0A0D12] dark:text-white hover:bg-[#0A0D12]/5 dark:hover:bg-white/5 px-10 py-6 text-lg"
              >
                View All Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => navigate('/why-us')}
                variant="outline"
                className="border-2 border-[#0A0D12] dark:border-white text-[#0A0D12] dark:text-white hover:bg-[#0A0D12]/5 dark:hover:bg-white/5 px-10 py-6 text-lg"
              >
                Why Choose Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}