'use client';

import { Briefcase, TrendingUp, Users, Clock, DollarSign, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { SEOHead } from '../components/SEOHead';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CASE_STUDIES } from '../utils/data';

export function CaseStudiesPage() {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    navigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const overallStats = [
    { value: '1500+', label: 'Projects Delivered', desc: 'Across all industries' },
    { value: '98%', label: 'Success Rate', desc: 'End-to-end solutions' },
    { value: '32+', label: 'Industries Served', desc: 'Global expertise' },
    { value: '$500M+', label: 'Client Value Generated', desc: 'Through optimization' }
  ];

  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
      <SEOHead
        title="Case Studies | Client Success Stories | HUK SONS IT"
        description="Real-world case studies showcasing HUK SONS IT's cloud migration, DevOps transformation, and infrastructure optimization projects across industries."
        keywords="case studies, client success, cloud migration, DevOps transformation, infrastructure optimization"
        canonical="https://huksonsit.com/case-studies"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-accent)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-accent)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-pulse pointer-events-none [animation-duration:8s]" />

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
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/30 rounded-full mb-8">
                <Briefcase className="w-5 h-5 text-accent" />
                <span className="text-sm uppercase tracking-wider text-accent">Client Success Stories</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="bg-gradient-to-r from-heading to-heading/60 bg-clip-text text-transparent">
                  Case Studies
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed">
                Real transformations, measurable results. Discover how we've helped organizations modernize infrastructure, accelerate growth, and achieve operational excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {overallStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 text-center bg-card border-2 border-accent/20 hover:border-accent transition-all duration-300">
                    <div className="text-4xl text-accent mb-2">{stat.value}</div>
                    <div className="text-heading mb-1">{stat.label}</div>
                    <div className="text-sm text-muted/60">{stat.desc}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative py-16 md:py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-7xl mx-auto space-y-12">
            {CASE_STUDIES.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 md:p-10 bg-card border-2 border-subtle hover:border-accent/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm">
                      {study.industry}
                    </span>
                    <span className="text-muted/50">•</span>
                    <span className="text-muted/70 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {study.duration}
                    </span>
                  </div>

                  <h2 className="text-3xl text-heading mb-6">{study.title}</h2>

                  <div className="grid lg:grid-cols-3 gap-8 mb-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-lg text-heading mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-[var(--error)] rounded-full" />
                          The Challenge
                        </h3>
                        <p className="text-muted/80 line-clamp-3">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-lg text-heading mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          The Solution
                        </h3>
                        <p className="text-muted/80 line-clamp-3">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-sm text-muted/60 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-3 py-1 bg-alt border border-subtle rounded-full text-xs text-muted/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg text-heading mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-accent" />
                          Key Results
                        </h3>
                        <div className="space-y-4">
                          {study.results.slice(0, 3).map((result, resultIdx) => (
                            <div key={resultIdx} className="p-4 bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <CheckCircle2 className="w-4 h-4 text-accent" />
                                <div className="text-lg text-accent font-medium">{result}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => handleNavigate(`/case-studies/${study.slug}`)}
                        className="mt-6 w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Read Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent">
        <div className="container-enterprise relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-heading mb-6">
              Ready to Write Your <span className="text-accent">Success Story?</span>
            </h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Join 1500+ organizations that have transformed their infrastructure and operations with HUK SONS IT.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => handleNavigate('/contact-us')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => handleNavigate('/solutions')}
                variant="outline"
                className="border-2 border-strong px-10 py-6 text-lg"
              >
                Explore Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
