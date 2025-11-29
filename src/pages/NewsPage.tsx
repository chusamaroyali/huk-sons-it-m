import { useEffect, useState } from 'react';
import { Calendar, TrendingUp, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/appwrite/api';
import { Models } from 'appwrite';

export function NewsPage() {
  const navigate = useNavigate();
  const [newsItems, setNewsItems] = useState<Models.Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.getNews();
        setNewsItems(response.documents);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Helper to format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Helper to get excerpt
  const getExcerpt = (content: string) => {
    return content.substring(0, 150) + '...';
  };

  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none [animation-duration:8s]" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8">
              <span className="bg-gradient-to-r from-heading via-heading to-heading/60 bg-clip-text text-transparent">
                Company
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                News
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-body/70 max-w-3xl mx-auto leading-relaxed">
              Latest updates, announcements, and milestones from HUK SONS IT.
            </p>
          </div>
        </div>
      </section>

      {/* News Items */}
      <section className="relative py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            {loading ? (
              <div className="text-center text-body/70">Loading news...</div>
            ) : (
              <>
                {/* Featured News (First item) */}
                {newsItems.length > 0 && (
                  <div className="mb-16">
                    <div className="relative min-h-[350px] p-12 md:p-16 bg-gradient-to-br from-primary/10 via-transparent to-transparent border border-subtle rounded-3xl overflow-hidden group hover:border-primary/40 transition-all duration-300 cursor-pointer">
                      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                      
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm text-primary uppercase tracking-wider">
                            {newsItems[0].category || 'News'}
                          </span>
                          <div className="flex items-center gap-2 text-sm text-body/60">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(newsItems[0].$createdAt)}</span>
                          </div>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl text-heading mb-6 group-hover:text-primary transition-colors">
                          {newsItems[0].title}
                        </h2>
                        
                        <p className="text-xl text-body/70 mb-8 leading-relaxed max-w-3xl">
                          {getExcerpt(newsItems[0].content)}
                        </p>
                        
                        <div className="flex items-center gap-4">
                          <Button variant="premium" className="group">
                            Read More
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          {newsItems[0].externalLink && (
                            <a 
                              href={newsItems[0].externalLink} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-body/40 hover:text-primary transition-colors"
                              aria-label="Read more on external site"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Regular News Grid */}
                <div className="space-y-6">
                  {newsItems.slice(1).map((item, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="relative p-8 bg-card border border-subtle hover:border-primary/40 rounded-2xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary">
                              {item.category || 'News'}
                            </span>
                            <div className="flex items-center gap-2 text-sm text-body/60">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(item.$createdAt)}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl text-heading mb-3 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          
                          <p className="text-body/70 leading-relaxed">
                            {getExcerpt(item.content)}
                          </p>
                        </div>
                        
                        <div className="flex flex-col gap-2 items-end">
                          <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all flex-shrink-0">
                            <span className="text-sm">Read More</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                          </div>
                          {item.externalLink && (
                            <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="text-sm text-body/40 hover:text-primary transition-colors flex items-center gap-1 mt-2">
                              External Link <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="relative py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 md:p-16 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-3xl overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl text-heading mb-6">
                  Stay <span className="text-primary">Informed</span>
                </h2>
                <p className="text-xl text-body/70 mb-10">
                  Get the latest news and updates from HUK SONS IT
                </p>
                <Button
                  onClick={() => navigate('/get-started')}
                  variant="premium"
                  className="px-10 py-6 text-lg group transition-all duration-300"
                >
                  Get in Touch
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
