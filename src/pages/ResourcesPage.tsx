import { FileText, Calendar, ArrowRight, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useNavigate } from 'react-router-dom';

export function ResourcesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border-l-2 border-primary rounded-r-full">
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary">Resources</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8">
              <span className="bg-gradient-to-r from-heading via-heading to-heading/60 bg-clip-text text-transparent">
                Insights &
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Knowledge Hub
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-body/70 max-w-3xl mx-auto leading-relaxed">
              Expert perspectives on cloud infrastructure, DevOps automation, and technical transformation.
            </p>

            <div className="flex justify-center mt-12">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="relative py-12">
        <div className="container-enterprise relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-body/40" />
              <Input
                placeholder="Search articles, guides, and resources..."
                className="w-full pl-12 pr-4 py-6 bg-card border border-subtle rounded-xl text-lg"
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
                <div className="relative min-h-[300px] p-12 bg-gradient-to-br from-primary/10 via-transparent to-transparent border border-subtle hover:border-primary/40 rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative">
                    <FileText className="w-12 h-12 text-primary mb-6" />
                    <h2 className="text-4xl text-heading mb-4">Blog</h2>
                    <p className="text-lg text-body/70 mb-6">
                      Technical deep-dives, case studies, and industry insights from our engineering team.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
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
                <div className="relative min-h-[300px] p-12 bg-gradient-to-br from-primary/10 via-transparent to-transparent border border-subtle hover:border-primary/40 rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative">
                    <Calendar className="w-12 h-12 text-primary mb-6" />
                    <h2 className="text-4xl text-heading mb-4">News</h2>
                    <p className="text-lg text-body/70 mb-6">
                      Company updates, product announcements, and industry news from HUK SONS IT.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
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
            <div className="relative p-12 md:p-16 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-3xl overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl text-heading mb-6">
                  Ready to Get <span className="text-primary">Started?</span>
                </h2>
                <p className="text-xl text-body/70 mb-10">
                  Let's discuss how we can transform your infrastructure
                </p>
                <Button
                  onClick={() => navigate('/get-started')}
                  className="bg-primary hover:bg-primary/90 text-heading px-10 py-6 text-lg group transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
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
