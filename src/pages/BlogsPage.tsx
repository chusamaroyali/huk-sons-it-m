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
    <div className="min-h-screen bg-white dark:bg-[#0E1117] transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D3A9_1px,transparent_1px),linear-gradient(to_bottom,#00D3A9_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D3A9]/5 rounded-full blur-[120px] animate-pulse opacity-0 dark:opacity-100 pointer-events-none [animation-duration:8s]" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40">
        <div className="container-enterprise relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8">
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white via-[#0A0D12] dark:via-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                Technical
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00D3A9] to-[#00D3A9]/60 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
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
                  ? 'bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12]'
                  : 'border-[#0A0D12]/20 dark:border-white/20 text-[#0A0D12] dark:text-white hover:border-[#00D3A9]'
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
              <div className="text-center text-[#0A0D12]/70 dark:text-white/70">Loading articles...</div>
            ) : (
              <>
                {/* Featured Post (First item) */}
                {blogPosts.length > 0 && (
                  <div className="mb-16">
                    <div className="relative min-h-[400px] p-12 md:p-16 bg-gradient-to-br from-[#00D3A9]/10 via-transparent to-transparent border border-[#0A0D12]/10 dark:border-white/10 rounded-3xl overflow-hidden group hover:border-[#00D3A9]/40 transition-all duration-300 cursor-pointer">
                      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D3A9]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                      
                      <div className="relative max-w-3xl">
                        <span className="px-4 py-2 bg-[#00D3A9]/20 border border-[#00D3A9]/30 rounded-full text-sm text-[#00D3A9] uppercase tracking-wider">
                          Featured
                        </span>
                        
                        <h2 className="text-4xl md:text-5xl text-[#0A0D12] dark:text-white mt-6 mb-4 group-hover:text-[#00D3A9] transition-colors">
                          {blogPosts[0].title}
                        </h2>
                        
                        <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-6 leading-relaxed">
                          {getExcerpt(blogPosts[0].content)}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-6 text-sm text-[#0A0D12]/60 dark:text-white/60 mb-8">
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
                        
                        <Button className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] group">
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
                      <div className="relative min-h-[420px] p-8 bg-white/80 dark:bg-white/[0.03] border border-[#0A0D12]/10 dark:border-white/10 hover:border-[#00D3A9]/40 rounded-2xl transition-all duration-300 flex flex-col">
                        <span className="px-3 py-1 bg-[#00D3A9]/10 border border-[#00D3A9]/30 rounded-full text-xs text-[#00D3A9] self-start mb-4">
                          {post.category || 'Tech'}
                        </span>
                        
                        <h3 className="text-2xl text-[#0A0D12] dark:text-white mb-4 group-hover:text-[#00D3A9] transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-[#0A0D12]/70 dark:text-white/70 mb-6 flex-1 leading-relaxed">
                          {getExcerpt(post.content)}
                        </p>
                        
                        <div className="space-y-3 pt-4 border-t border-[#0A0D12]/10 dark:border-white/10">
                          <div className="flex items-center gap-2 text-sm text-[#0A0D12]/60 dark:text-white/60">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-[#0A0D12]/60 dark:text-white/60">
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
            <div className="relative p-12 md:p-16 bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent border border-[#00D3A9]/20 rounded-3xl overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D3A9]/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl text-[#0A0D12] dark:text-white mb-6">
                  Stay <span className="text-[#00D3A9]">Updated</span>
                </h2>
                <p className="text-xl text-[#0A0D12]/70 dark:text-white/70 mb-10">
                  Subscribe to our newsletter for the latest technical insights
                </p>
                <Button
                  onClick={() => navigate('/contact-us')}
                  className="bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] px-10 py-6 text-lg group transition-all duration-300 hover:shadow-xl hover:shadow-[#00D3A9]/20"
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
