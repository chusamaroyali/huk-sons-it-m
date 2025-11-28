import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Mail } from 'lucide-react';

export function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-[#F8FAFC] dark:bg-[#0E1116] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#19B394]/10 border border-[#19B394]/30 rounded-full text-[#19B394] uppercase tracking-wider">
              Leadership
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-[#0F6B4D] dark:text-[#F8FAFC] mb-6">
            Led by <span className="text-[#19B394]">Industry Veterans</span>
          </h2>
          <p className="text-xl text-[#0F6B4D]/70 dark:text-[#F8FAFC]/70">
            Senior-level expertise driving every engagement from strategy to execution.
          </p>
        </div>

        {/* Leadership Profile */}
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-[#0F6B4D]/12 dark:border-[#F8FAFC]/10 p-8 lg:p-12 bg-white dark:bg-white/[0.03]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Photo */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-48 h-48 rounded-lg overflow-hidden border-4 border-[#19B394]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MjI2MzMyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Leadership"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#19B394] text-white px-4 py-2 rounded-lg shadow-lg">
                    <div>17+ Years</div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-2">
                <h3 className="text-3xl text-[#0F6B4D] dark:text-[#F8FAFC] mb-2">Usama Idrees</h3>
                <p className="text-[#19B394] mb-6">Founder & Principal Architect</p>
                
                <div className="space-y-4 text-[#0F6B4D]/80 dark:text-[#F8FAFC]/80 mb-6">
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
                  <div className="text-sm text-[#19B394] uppercase tracking-wider mb-3">Core Expertise</div>
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
                        className="px-3 py-1 bg-[#0F6B4D]/5 dark:bg-[#F8FAFC]/5 border border-[#0F6B4D]/12 dark:border-[#F8FAFC]/10 rounded-full text-sm text-[#0F6B4D]/70 dark:text-[#F8FAFC]/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#0F6B4D]/12 dark:border-[#F8FAFC]/10">
                  <a
                    href="mailto:info@huksons.com"
                    className="flex items-center gap-2 text-[#0F6B4D]/70 dark:text-[#F8FAFC]/70 hover:text-[#19B394] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-[#0F6B4D]/70 dark:text-[#F8FAFC]/70 hover:text-[#19B394] transition-colors"
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
            <Card className="bg-[#0F6B4D]/5 dark:bg-[#0E1116] border-[#0F6B4D]/12 dark:border-[#F8FAFC]/10 p-6 text-center">
              <div className="text-[#19B394] text-3xl mb-2">100%</div>
              <p className="text-[#0F6B4D]/70 dark:text-[#F8FAFC]/70">Senior-Led Projects</p>
            </Card>
            <Card className="bg-[#0F6B4D]/5 dark:bg-[#0E1116] border-[#0F6B4D]/12 dark:border-[#F8FAFC]/10 p-6 text-center">
              <div className="text-[#19B394] text-3xl mb-2">No</div>
              <p className="text-[#0F6B4D]/70 dark:text-[#F8FAFC]/70">Middle-Layer Outsourcing</p>
            </Card>
            <Card className="bg-[#0F6B4D]/5 dark:bg-[#0E1116] border-[#0F6B4D]/12 dark:border-[#F8FAFC]/10 p-6 text-center">
              <div className="text-[#19B394] text-3xl mb-2">Direct</div>
              <p className="text-[#0F6B4D]/70 dark:text-[#F8FAFC]/70">Client Communication</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
