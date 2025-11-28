import { FileText, Calendar, ArrowRight, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useNavigate } from 'react-router-dom';

export function ResourcesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D3A9]/5 rounded-full blur-[120px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none" style={{ animationDuration: '8s' }} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00D3A9]/20 via-[#00D3A9]/10 to-transparent border-l-2 border-[#00D3A9] rounded-r-full">
                <FileText className="w-5 h-5 text-[#00D3A9]" />
                <span className="text-sm uppercase tracking-wider text-[#00D3A9]">Resources</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8">
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white via-[#0A0D12] dark:via-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                Insights &
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00D3A9] to-[#00D3A9]/60 bg-clip-text text-transparent">
                Knowledge Hub
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              Expert perspectives on cloud infrastructure, DevOps automation, and technical transformation.
            </p>

            <div className="flex justify-center mt-12">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00D3A9] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="relative py-12">
        <div className="container-enterprise relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A0D12]/40 dark:text-white/40" />
              <Input
                placeholder="Search articles, guides, and resources..."
                className="w-full pl-12 pr-4 py-6 bg-white/80 dark:bg-white/[0.03] border border-[#0A0D12]/10 dark:border-white/10 rounded-xl text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="relative py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Blogs */}
              <div
                onClick={() => navigate('/resources/blogs')}
                className="group cursor-pointer"
              >
                <div className="relative min-h-[300px] p-12 bg-gradient-to-br from-[#00D3A9]/10 via-transparent to-transparent border border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9]/40 rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#00D3A9]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative">
                    <FileText className="w-12 h-12 text-[#00D3A9] mb-6" />
                    <h2 className="text-4xl text-[#0A0D12] dark:text-white mb-4">Blog</h2>
                    <p className="text-lg text-[#0A0D12]/70 dark:text-white/70 mb-6">
                      Technical deep-dives, case studies, and industry insights from our engineering team.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#00D3A9] group-hover:gap-4 transition-all">
                    <span>Explore Articles</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>

              {/* News */}
              <div
                onClick={() => navigate('/resources/news')}
                className="group cursor-pointer"
              >
                <div className="relative min-h-[300px] p-12 bg-gradient-to-br from-[#00D3A9]/10 via-transparent to-transparent border border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9]/40 rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#00D3A9]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative">
                    <Calendar className="w-12 h-12 text-[#00D3A9] mb-6" />
                    <h2 className="text-4xl text-[#0A0D12] dark:text-white mb-4">News</h2>
                    <p className="text-lg text-[#0A0D12]/70 dark:text-white/70 mb-6">
                      Company updates, product announcements, and industry news from HUK SONS IT.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#00D3A9] group-hover:gap-4 transition-all">
                    <span>Read Updates</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 md:p-16 bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent border border-[#00D3A9]/20 rounded-3xl overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D3A9]/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl text-[#0A0D12] dark:text-white mb-6">
                  Ready to Get <span className="text-[#00D3A9]">Started?</span>
                </h2>
                <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-10">
                  Let's discuss how we can transform your infrastructure
                </p>
                <Button
                  onClick={() => navigate('/get-started')}
                  className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-10 py-6 text-lg group transition-all duration-300 hover:shadow-xl hover:shadow-[#00D3A9]/20"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
