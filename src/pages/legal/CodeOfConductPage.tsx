'use client';

import { Shield, Users, Heart, Scale, AlertTriangle, CheckCircle2, Book, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/card';
import { SEOHead } from '../../components/SEOHead';
import { motion } from 'motion/react';

export function CodeOfConductPage() {
  const navigate = useNavigate();

  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty, transparency, and ethical behavior in all our interactions and deliverables.'
    },
    {
      icon: Users,
      title: 'Respect',
      description: 'We treat all individuals with dignity, fostering an inclusive environment that values diversity and different perspectives.'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional quality, continuously improving our skills, and exceeding client expectations.'
    },
    {
      icon: Scale,
      title: 'Accountability',
      description: 'We take responsibility for our actions, commitments, and outcomes, ensuring transparency in all our business practices.'
    }
  ];

  const conductPrinciples = [
    {
      title: 'Professional Conduct',
      icon: Users,
      guidelines: [
        'Maintain professional behavior in all business communications and interactions',
        'Honor commitments and deliver on promises within agreed timelines',
        'Provide accurate information and avoid misleading statements',
        'Respect intellectual property rights and confidential information',
        'Avoid conflicts of interest and disclose when they arise',
        'Uphold client confidentiality and data protection standards'
      ]
    },
    {
      title: 'Technical Excellence',
      icon: Book,
      guidelines: [
        'Follow industry best practices and established coding standards',
        'Implement security-first architecture in all solutions',
        'Conduct thorough testing and quality assurance',
        'Document code, processes, and architectural decisions comprehensively',
        'Stay current with emerging technologies and methodologies',
        'Mentor junior team members and share knowledge proactively'
      ]
    },
    {
      title: 'Client Relations',
      icon: MessageSquare,
      guidelines: [
        'Communicate clearly, promptly, and transparently with clients',
        'Listen actively to client needs and concerns',
        'Provide realistic estimates and manage expectations appropriately',
        'Escalate issues promptly with proposed solutions',
        'Protect client data with enterprise-grade security measures',
        'Maintain professional boundaries and avoid inappropriate conduct'
      ]
    },
    {
      title: 'Workplace Environment',
      icon: Heart,
      guidelines: [
        'Foster an inclusive environment free from discrimination and harassment',
        'Support work-life balance and mental health awareness',
        'Collaborate effectively across teams and time zones',
        'Provide constructive feedback and accept it graciously',
        'Celebrate successes and learn from failures as a team',
        'Report misconduct through appropriate channels without fear of retaliation'
      ]
    }
  ];

  const prohibitedConduct = [
    'Discrimination or harassment based on race, gender, religion, age, disability, or any protected characteristic',
    'Misuse of company resources, including time, equipment, or confidential information',
    'Acceptance of bribes, kickbacks, or inappropriate gifts from clients or vendors',
    'Insider trading or use of confidential information for personal gain',
    'Negligent handling of sensitive client data or security breaches',
    'Plagiarism, intellectual property theft, or license violations',
    'Substance abuse that impairs professional judgment or workplace safety',
    'Retaliation against individuals who report violations in good faith'
  ];

  const reportingProcedure = [
    {
      step: '1',
      title: 'Identify the Issue',
      description: 'Document the conduct violation with specific details, dates, and any supporting evidence or witnesses.'
    },
    {
      step: '2',
      title: 'Report Through Channels',
      description: 'Submit reports to HR, direct supervisor, or use the anonymous ethics hotline (ethics@huksons.com).'
    },
    {
      step: '3',
      title: 'Investigation Process',
      description: 'Our compliance team conducts a confidential investigation, interviewing relevant parties within 5-7 business days.'
    },
    {
      step: '4',
      title: 'Resolution & Action',
      description: 'Appropriate corrective action is taken based on findings, with follow-up to ensure issue resolution and prevention.'
    }
  ];

  const consequences = [
    {
      severity: 'Minor Violations',
      examples: ['First-time policy oversight', 'Unintentional conduct issues', 'Documentation gaps'],
      actions: ['Verbal warning', 'Mandatory training', 'Written documentation']
    },
    {
      severity: 'Moderate Violations',
      examples: ['Repeated policy violations', 'Inappropriate communication', 'Time/resource misuse'],
      actions: ['Written warning', 'Performance improvement plan', 'Temporary suspension']
    },
    {
      severity: 'Serious Violations',
      examples: ['Harassment or discrimination', 'Confidentiality breach', 'Financial misconduct'],
      actions: ['Immediate suspension', 'Contract termination', 'Legal action if warranted']
    }
  ];

  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
      <SEOHead
        title="Code of Conduct | Ethics & Professional Standards | HUK SONS IT"
        description="HUK SONS IT's Code of Conduct outlines our commitment to integrity, respect, excellence, and accountability. Professional standards, ethical guidelines, and reporting procedures."
        keywords="code of conduct, ethics, professional standards, workplace conduct, integrity, compliance, corporate governance"
        canonical="https://huksonsit.com/code-of-conduct"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-8">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Code of Conduct</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading to-heading/60 bg-clip-text text-transparent">
                  Ethics &<br />Professional Standards
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-body dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
                Our commitment to integrity, respect, and excellence guides every interaction and decision we make.
              </p>

              <div className="mt-8 text-sm text-muted-foreground dark:text-white/60">
                Last Updated: November 26, 2025 | Version 2.0
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
        <div className="container-enterprise relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-heading dark:text-white mb-6">
                Our Core <span className="text-primary">Values</span>
              </h2>
              <p className="text-xl text-body dark:text-white/70 max-w-3xl mx-auto">
                The foundation of our organizational culture and professional conduct.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 text-center h-full bg-card border-2 border-subtle hover:border-primary/30 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-transparent border-2 border-primary/30 rounded-2xl flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl text-heading dark:text-white mb-3">{value.title}</h3>
                    <p className="text-body dark:text-white/70 text-sm">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conduct Principles */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-heading dark:text-white mb-6">
                Professional <span className="text-primary">Guidelines</span>
              </h2>
              <p className="text-xl text-body dark:text-white/70 max-w-3xl mx-auto">
                Standards that define how we conduct business and interact with colleagues, clients, and partners.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {conductPrinciples.map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-8 h-full bg-card border-2 border-subtle">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                        <principle.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl text-heading dark:text-white">{principle.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {principle.guidelines.map((guideline, gIdx) => (
                        <li key={gIdx} className="flex items-start gap-3 text-body dark:text-white/80">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Conduct */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-10 bg-card border-2 border-red-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-10 h-10 text-red-500" />
                  <h2 className="text-3xl text-heading dark:text-white">Prohibited Conduct</h2>
                </div>
                <p className="text-lg text-body dark:text-white/80 mb-6">
                  The following behaviors are strictly prohibited and may result in disciplinary action up to and including termination:
                </p>
                <ul className="space-y-3">
                  {prohibitedConduct.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-body dark:text-white/80">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reporting Procedure */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-heading dark:text-white mb-6">
                Reporting <span className="text-primary">Violations</span>
              </h2>
              <p className="text-xl text-body dark:text-white/70 max-w-3xl mx-auto">
                We encourage reporting of any conduct violations. All reports are treated confidentially and without retaliation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {reportingProcedure.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 h-full bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/20">
                    <div className="w-12 h-12 mb-4 bg-primary text-heading rounded-xl flex items-center justify-center text-2xl">
                      {step.step}
                    </div>
                    <h3 className="text-lg text-heading dark:text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-body dark:text-white/70">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="p-8 bg-card border-2 border-primary/20">
              <h3 className="text-2xl text-heading dark:text-white mb-4">Reporting Channels</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-muted/50 dark:bg-white/[0.02] rounded-xl">
                  <MessageSquare className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-sm text-muted-foreground dark:text-white/60 mb-2">Ethics Hotline</div>
                  <div className="text-primary">ethics@huksons.com</div>
                </div>
                <div className="text-center p-6 bg-muted/50 dark:bg-white/[0.02] rounded-xl">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-sm text-muted-foreground dark:text-white/60 mb-2">Human Resources</div>
                  <div className="text-primary">hr@huksons.com</div>
                </div>
                <div className="text-center p-6 bg-muted/50 dark:bg-white/[0.02] rounded-xl">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-sm text-muted-foreground dark:text-white/60 mb-2">Compliance Officer</div>
                  <div className="text-primary">compliance@huksons.com</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Consequences */}
      <section className="relative py-16 md:py-24 bg-muted/50 dark:bg-white/[0.02]">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-heading dark:text-white mb-6">
                Enforcement & <span className="text-primary">Consequences</span>
              </h2>
              <p className="text-xl text-body dark:text-white/70 max-w-3xl mx-auto">
                Violations are addressed based on severity, with consequences proportionate to the offense.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {consequences.map((level, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 h-full bg-card border-2 border-subtle">
                    <h3 className="text-xl text-heading dark:text-white mb-4">{level.severity}</h3>
                    <div className="mb-4">
                      <div className="text-sm text-muted-foreground dark:text-white/60 mb-2">Examples:</div>
                      <ul className="space-y-1 text-sm text-body dark:text-white/70">
                        {level.examples.map((example, eIdx) => (
                          <li key={eIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground dark:text-white/60 mb-2">Potential Actions:</div>
                      <ul className="space-y-1 text-sm text-body dark:text-white/70">
                        {level.actions.map((action, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="p-10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl text-heading dark:text-white mb-6">
                Our Commitment
              </h2>
              <p className="text-lg text-body dark:text-white/80 mb-6">
                HUK SONS IT is committed to maintaining the highest ethical standards and creating a workplace where integrity, respect, and excellence thrive. Every team member, contractor, and partner is expected to uphold these principles and contribute to our culture of professionalism and accountability.
              </p>
              <p className="text-body dark:text-white/70">
                This Code of Conduct is a living document, reviewed annually and updated to reflect evolving best practices and organizational values.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
