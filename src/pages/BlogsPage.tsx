import { useEffect, useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/appwrite/api';
import { Models } from 'appwrite';

const categories = ['All', 'Cloud Infrastructure', 'DevOps', 'Data Engineering', 'Infrastructure', 'AI & Automation', 'Security'];

export function BlogsPage() {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState<Models.Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.getBlogs();
        setBlogPosts(response.documents);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Helper to format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Helper to estimate read time
  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Helper to get excerpt
  const getExcerpt = (content: string) => {
    return content.substring(0, 150) + '...';
  };

  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--brand-accent)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-accent)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none [animation-duration:8s]" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8">
              <span className="bg-gradient-to-r from-heading via-heading to-heading/60 bg-clip-text text-transparent">
                Technical
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-muted max-w-3xl mx-auto leading-relaxed">
              Deep technical content on infrastructure, automation, and DevOps best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="relative py-12">
        <div className="container-enterprise relative z-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, idx) => (
              <Button
                key={idx}
                variant={idx === 0 ? 'default' : 'outline'}
                className={idx === 0 
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  : 'border-subtle text-heading hover:border-accent'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="text-center text-muted">Loading articles...</div>
            ) : (
              <>
                {/* Featured Post (First item) */}
                {blogPosts.length > 0 && (
                  <div className="mb-16">
                    <div className="relative min-h-[400px] p-12 md:p-16 bg-gradient-to-br from-accent/10 via-transparent to-transparent border border-subtle rounded-3xl overflow-hidden group hover:border-accent/40 transition-all duration-300 cursor-pointer">
                      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                      
                      <div className="relative max-w-3xl">
                        <span className="px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-sm text-accent uppercase tracking-wider">
                          Featured
                        </span>
                        
                        <h2 className="text-4xl md:text-5xl text-heading mt-6 mb-4 group-hover:text-accent transition-colors">
                          {blogPosts[0].title}
                        </h2>
                        
                        <p className="text-xl text-muted mb-6 leading-relaxed">
                          {getExcerpt(blogPosts[0].content)}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted/60 mb-8">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{blogPosts[0].author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(blogPosts[0].$createdAt)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{getReadTime(blogPosts[0].content)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            <span>{blogPosts[0].category || 'Tech'}</span>
                          </div>
                        </div>
                        
                        <Button variant="premium" className="group">
                          Read Article
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Regular Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.slice(1).map((post, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="relative min-h-[420px] p-8 bg-card border border-subtle hover:border-accent/40 rounded-2xl transition-all duration-300 flex flex-col">
                        <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent self-start mb-4">
                          {post.category || 'Tech'}
                        </span>
                        
                        <h3 className="text-2xl text-heading mb-4 group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted mb-6 flex-1 leading-relaxed">
                          {getExcerpt(post.content)}
                        </p>
                        
                        <div className="space-y-3 pt-4 border-t border-subtle">
                          <div className="flex items-center gap-2 text-sm text-muted/60">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-muted/60">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.$createdAt)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{getReadTime(post.content)}</span>
                            </div>
                          </div>
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

      {/* Newsletter CTA */}
      <section className="relative py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 md:p-16 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 rounded-3xl overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl text-heading mb-6">
                  Stay <span className="text-accent">Updated</span>
                </h2>
                <p className="text-xl text-muted mb-10">
                  Subscribe to our newsletter for the latest technical insights
                </p>
                <Button
                  onClick={() => navigate('/contact-us')}
                  variant="premium"
                  className="px-10 py-6 text-lg group transition-all duration-300"
                >
                  Subscribe Now
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
