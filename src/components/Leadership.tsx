import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Mail } from 'lucide-react';

export function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-main transition-colors duration-300">
      <div className="container-enterprise">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary uppercase tracking-wider">
              Leadership
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-heading mb-6">
            Led by <span className="text-primary">Industry Veterans</span>
          </h2>
          <p className="text-xl text-body/70">
            Senior-level expertise driving every engagement from strategy to execution.
          </p>
        </div>

        {/* Leadership Profile */}
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-subtle p-8 lg:p-12 bg-card">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Photo */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-48 h-48 rounded-lg overflow-hidden border-4 border-primary">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MjI2MzMyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Leadership"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                    <div>17+ Years</div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-2">
                <h3 className="text-3xl text-heading mb-2">Usama Idrees</h3>
                <p className="text-primary mb-6">Founder & Principal Architect</p>
                
                <div className="space-y-4 text-body/80 mb-6">
                  <p>
                    A veteran DevOps/DataOps Engineer with over 17 years of cross-sector experience in IT, Banking, and Education. Usama has led modernization projects involving Hadoop, Kafka, Terraform, Jenkins, and enterprise-grade automation frameworks.
                  </p>
                  <p>
                    His leadership focuses on blending engineering precision with business scalability, ensuring every technical decision drives measurable ROI. Usama's hands-on approach means clients work directly with senior-level expertise—no delegation, no intermediaries.
                  </p>
                  <p>
                    Under his guidance, HUK SONS IT has helped organizations reduce cloud costs by 30-60%, automate critical workflows, and build data infrastructures that support sustainable growth.
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="mb-6">
                  <div className="text-sm text-primary uppercase tracking-wider mb-3">Core Expertise</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'DevOps Architecture',
                      'DataOps Engineering',
                      'Cloud Modernization',
                      'Automation Frameworks',
                      'Infrastructure as Code',
                      'CI/CD Pipelines',
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-body/5 border border-subtle rounded-full text-sm text-body/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 pt-6 border-t border-subtle">
                  <a
                    href="mailto:info@huksons.com"
                    className="flex items-center gap-2 text-body/70 hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-body/70 hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Team Approach */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-body/5 border-subtle p-6 text-center">
              <div className="text-primary text-3xl mb-2">100%</div>
              <p className="text-body/70">Senior-Led Projects</p>
            </Card>
            <Card className="bg-body/5 border-subtle p-6 text-center">
              <div className="text-primary text-3xl mb-2">No</div>
              <p className="text-body/70">Middle-Layer Outsourcing</p>
            </Card>
            <Card className="bg-body/5 border-subtle p-6 text-center">
              <div className="text-primary text-3xl mb-2">Direct</div>
              <p className="text-body/70">Client Communication</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
