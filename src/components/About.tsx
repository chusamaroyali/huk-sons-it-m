import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Target, Eye, Award, Globe2, Users, Shield } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-main relative overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container-enterprise relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 md:px-6 py-2 md:py-3 bg-primary/10 border border-primary/30 rounded-full">
            <Globe2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="text-xs md:text-sm text-primary uppercase tracking-wider">
              About HUK SONS IT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading mb-4 md:mb-6 leading-tight">
            Not a Vendor. A <span className="text-primary">Technical Partner.</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-body/80 leading-relaxed px-4">
            Global technical transformation and engineering firm helping scaling organizations modernize infrastructure, automate operations, and engineer data systems for sustainable growth.
          </p>
        </div>

        {/* Image + Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16 lg:mb-20 max-w-7xl mx-auto">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden border-2 border-subtle shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3NjIyODc3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Data Center Infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-white px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-2xl">
              <div className="text-2xl md:text-3xl lg:text-4xl">17+</div>
              <div className="text-xs md:text-sm">Years Experience</div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-heading mb-4 md:mb-6">Executive Summary</h3>
              <p className="text-sm md:text-base lg:text-lg text-body/80 leading-relaxed mb-4 md:mb-6">
                Headquartered in <span className="text-primary">Pakistan</span> with operational reach in the{' '}
                <span className="text-primary">United States</span> and{' '}
                <span className="text-primary">United Arab Emirates</span>, HUK SONS IT functions as an enterprise-grade, remote-first consultancy.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-body/70 leading-relaxed">
                Unlike traditional agencies or outsourcing shops, HUK SONS IT operates as a technical partner—bridging engineering depth with financial logic. Every engagement is led by senior-level architects who combine hands-on execution with business-outcome accountability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="glass-effect p-4 md:p-6 rounded-xl border-primary/20 min-h-[100px] flex flex-col justify-center">
                <div className="text-xl md:text-2xl lg:text-3xl text-primary mb-1 md:mb-2">100%</div>
                <div className="text-xs md:text-sm text-body/80">Remote-First</div>
              </div>
              <div className="glass-effect p-4 md:p-6 rounded-xl border-primary/20 min-h-[100px] flex flex-col justify-center">
                <div className="text-xl md:text-2xl lg:text-3xl text-primary mb-1 md:mb-2">Senior-Led</div>
                <div className="text-xs md:text-sm text-body/80">No Outsourcing</div>
              </div>
              <div className="glass-effect p-4 md:p-6 rounded-xl border-primary/20 min-h-[100px] flex flex-col justify-center">
                <div className="text-xl md:text-2xl lg:text-3xl text-primary mb-1 md:mb-2">3</div>
                <div className="text-xs md:text-sm text-body/80">Continents</div>
              </div>
              <div className="glass-effect p-4 md:p-6 rounded-xl border-primary/20 min-h-[100px] flex flex-col justify-center">
                <div className="text-xl md:text-2xl lg:text-3xl text-primary mb-1 md:mb-2">Custom</div>
                <div className="text-xs md:text-sm text-body/80">Pricing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Purpose - Enhanced Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-heading mb-3 md:mb-4">Our Foundation</h3>
            <p className="text-sm md:text-base lg:text-lg text-body/70 max-w-2xl mx-auto">
              Every decision, every project, every engagement is guided by our core purpose, mission, and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {[
              {
                icon: Target,
                title: 'Core Purpose',
                description: 'To build resilient, cost-efficient, and scalable digital foundations that empower organizations to grow faster—with fewer risks, lower costs, and greater predictability.',
              },
              {
                icon: Award,
                title: 'Mission',
                description: 'To modernize the world\'s digital infrastructure—system by system—so organizations can scale intelligently, operate efficiently, and make data-driven decisions at every level.',
              },
              {
                icon: Eye,
                title: 'Vision',
                description: 'To become a global authority in technical transformation—where cloud, automation, and data converge to create measurable enterprise advantage.',
              },
            ].map((item, index) => (
              <Card key={index} className="glass-effect border-subtle p-6 md:p-8 lg:p-10 hover:border-primary/50 transition-all duration-500 group min-h-[320px] md:min-h-[360px] flex flex-col">
                <div className="flex justify-center mb-6 md:mb-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-primary/10 border-2 border-primary/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl lg:text-3xl text-heading mb-3 md:mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-body/70 text-center leading-relaxed flex-1">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Presence Indicators */}
        <div className="max-w-5xl mx-auto mt-12 md:mt-16 lg:mt-20">
          <Card className="glass-effect border-primary/30 p-6 md:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <Globe2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <h3 className="text-xl md:text-2xl lg:text-3xl text-heading">Global Operations</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: Globe2, label: 'Pakistan', sublabel: 'Headquarters' },
                { icon: Globe2, label: 'United States', sublabel: 'Operations' },
                { icon: Globe2, label: 'UAE', sublabel: 'Operations' },
                { icon: Users, label: 'Remote-First', sublabel: '24/7 Support' },
              ].map((location, index) => (
                <div key={index} className="bg-body/5 border border-subtle rounded-xl p-4 md:p-6 hover:border-primary/50 transition-all duration-300">
                  <location.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3" />
                  <div className="text-sm md:text-base lg:text-lg text-heading mb-1">{location.label}</div>
                  <div className="text-xs md:text-sm text-body/60">{location.sublabel}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
