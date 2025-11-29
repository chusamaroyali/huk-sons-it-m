import { useState } from 'react';
import { Mail, MapPin, Globe, Linkedin, Twitter, Github, Globe2, Send } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../utils/data';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-main border-t border-subtle relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
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
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center transition-transform hover:scale-110 duration-300">
                  <Globe2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div
                    className="text-heading uppercase tracking-[0.04em]"
                    style={{ fontWeight: 700, fontSize: '24px', letterSpacing: '0.04em' }}
                  >
                    HUK SONS IT
                  </div>
                  <div
                    className="text-body/60 mt-1"
                    style={{ fontSize: '10px', letterSpacing: '-0.01em', fontWeight: 400 }}
                  >
                    {COMPANY_INFO.tagline}
                  </div>
                </div>
              </div>
              <p className="text-body/70 text-sm md:text-base leading-relaxed max-w-md">
                Global technical transformation firm helping organizations modernize infrastructure, automate operations, engineer data systems, and accelerate growth for sustainable business expansion.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/company/huksons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-body/5 hover:bg-primary/20 border border-subtle hover:border-primary/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-body/70 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://twitter.com/huksons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-body/5 hover:bg-primary/20 border border-subtle hover:border-primary/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-body/70 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/huksons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-body/5 hover:bg-primary/20 border border-subtle hover:border-primary/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-body/70 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-2">
              <h3 className="text-heading mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wider">Services</h3>
              <ul className="space-y-3 text-body/60 text-sm">
                {SERVICES.slice(0, 4).map((service) => (
                  <li key={service.page}>
                    <button
                      onClick={() => navigate(service.page)}
                      className="hover:text-primary transition-colors duration-200 inline-block text-left"
                    >
                      {service.title.replace(' & ', ' & ')}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Services Column */}
            <div className="lg:col-span-2">
              <h3 className="text-heading mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wider opacity-0 md:opacity-100">More</h3>
              <ul className="space-y-3 text-body/60 text-sm">
                {SERVICES.slice(4, 8).map((service) => (
                  <li key={service.page}>
                    <button
                      onClick={() => navigate(service.page)}
                      className="hover:text-primary transition-colors duration-200 inline-block text-left"
                    >
                      {service.title.replace(' Services', '')}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="lg:col-span-2">
              <h3 className="text-heading mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wider">Company</h3>
              <ul className="space-y-3 text-body/60 text-sm">
                <li>
                  <button
                    onClick={() => navigate('about')}
                    className="hover:text-primary transition-colors duration-200 inline-block"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('why-us')}
                    className="hover:text-primary transition-colors duration-200 inline-block"
                  >
                    Why Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('leadership')}
                    className="hover:text-primary transition-colors duration-200 inline-block"
                  >
                    Leadership
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('certifications')}
                    className="hover:text-primary transition-colors duration-200 inline-block"
                  >
                    Certifications
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('case-studies')}
                    className="hover:text-primary transition-colors duration-200 inline-block"
                  >
                    Case Studies
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="lg:col-span-3">
              <h3 className="text-heading mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wider">Legal</h3>
              <ul className="space-y-3 text-body/60 text-sm">
                <li>
                  <button
                    onClick={() => navigate('sla')}
                    className="hover:text-primary transition-colors duration-200 inline-block"
                  >
                    SLA
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('nda')}
                    className="hover:text-primary transition-colors duration-200 inline-block"
                  >
                    NDA Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('privacy-policy')}
                    className="hover:text-primary transition-colors duration-200 inline-block"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('security')}
                    className="hover:text-primary transition-colors duration-200 inline-block"
                  >
                    Security
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('code-of-conduct')}
                    className="hover:text-primary transition-colors duration-200 inline-block"
                  >
                    Code of Conduct
                  </button>
                </li>
              </ul>

              {/* Certifications Badge */}
              <div className="mt-6 bg-body/5 border border-subtle rounded-xl p-4 hover:border-primary/30 transition-all duration-300">
                <div className="text-xs text-body/50 uppercase tracking-wider mb-2">Certified Partners</div>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'GCP', 'Azure', 'Terraform'].map((cert, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-body/5 border border-subtle rounded text-xs text-body/70 hover:border-primary/30 hover:text-primary transition-all duration-200"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CENTER-ALIGNED ANIMATED HUK SONS IT BRANDING - FILLS FREE SPACE */}
          <div className="mt-16 mb-8">
            <div className="max-w-6xl mx-auto">
              <div className="relative overflow-hidden p-12 md:p-16 lg:p-20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 rounded-3xl">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider animate-pulse" style={{ fontWeight: 900, animationDuration: '3s' }}>
                    <span className="bg-gradient-to-r from-primary via-body to-primary bg-clip-text text-transparent animate-gradient-x" style={{
                      backgroundSize: '200% auto',
                      animation: 'gradient 4s ease infinite'
                    }}>
                      HUK SONS IT
                    </span>
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-body/70 mt-6 tracking-wide" style={{ fontWeight: 600 }}>
                    Transforming Infrastructure
                  </div>
                  <div className="mt-8 flex items-center justify-center gap-8 flex-wrap">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl text-primary" style={{ fontWeight: 700 }}>1500+</div>
                      <div className="text-xs md:text-sm text-body/60 mt-1">Projects Delivered</div>
                    </div>
                    <div className="w-px h-12 bg-subtle"></div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl text-primary" style={{ fontWeight: 700 }}>98%</div>
                      <div className="text-xs md:text-sm text-body/60 mt-1">Success Rate</div>
                    </div>
                    <div className="w-px h-12 bg-subtle"></div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl text-primary" style={{ fontWeight: 700 }}>32</div>
                      <div className="text-xs md:text-sm text-body/60 mt-1">Industries</div>
                    </div>
                    <div className="w-px h-12 bg-subtle"></div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl text-primary" style={{ fontWeight: 700 }}>24/7</div>
                      <div className="text-xs md:text-sm text-body/60 mt-1">Enterprise Support</div>
                    </div>
                  </div>
                </div>
                {/* Animated decorative elements */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
                <div className="absolute right-1/4 top-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s' }} />
              </div>
            </div>
          </div>

          {/* Newsletter & Contact Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Newsletter Subscription */}
            <div className="bg-body/5 border border-subtle rounded-2xl p-8">
              <h3 className="text-heading mb-4 text-lg uppercase tracking-wider">Newsletter</h3>
              <p className="text-body/60 text-sm mb-6">
                Stay updated with our latest insights, innovations, and industry trends
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-card"
                  disabled={isSubmitting}
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-body/5 border border-subtle rounded-2xl p-8">
              <h3 className="text-heading mb-4 text-lg uppercase tracking-wider">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-body/50 mb-1">Email</div>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="text-primary hover:underline transition-all duration-200"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-body/50 mb-1">Global Presence</div>
                    <div className="text-sm text-body/70">
                      {COMPANY_INFO.locations.operations.join(' • ')}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-body/50 mb-1">Website</div>
                    <div className="text-primary">www.huksonsit.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-subtle py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-body/50">
            <div className="text-center md:text-left">
              <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm">
              <button 
                onClick={() => navigate('privacy-policy')}
                className="hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate('terms-of-service')}
                className="hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => navigate('security')}
                className="hover:text-primary transition-colors duration-200"
              >
                Security
              </button>
              <button 
                onClick={() => navigate('code-of-conduct')}
                className="hover:text-primary transition-colors duration-200"
              >
                Code of Conduct
              </button>
              <button 
                onClick={() => navigate('sitemap')}
                className="hover:text-primary transition-colors duration-200"
              >
                Sitemap
              </button>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary">Enterprise Support Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
