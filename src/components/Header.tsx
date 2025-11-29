import { useState, useEffect } from 'react';
import { Menu, X, Globe2, Sun, Moon, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../utils/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const solutions = [
    { label: 'Cloud Infrastructure', path: '/solutions/cloud-infrastructure' },
    { label: 'AI & Automation', path: '/solutions/ai-automation' },
    { label: 'Data Infrastructure', path: '/solutions/data-infrastructure' },
    { label: 'Emergency Intervention', path: '/solutions/emergency-intervention' },
    { label: 'Digital Marketing', path: '/solutions/digital-marketing' },
    { label: 'Emerging Technologies', path: '/solutions/emerging-technologies' },
    { label: 'Business Process Solutions', path: '/solutions/business-process' },
    { label: 'Growth Solutions', path: '/solutions/growth' },
  ];

  const resources = [
    { label: 'Blog', path: '/resources/blogs' },
    { label: 'News', path: '/resources/news' },
    { label: 'Legal Center', path: '/legal' },
  ];

  const company = [
    { label: 'About', path: '/about' },
    { label: 'Why Us', path: '/why-us' },
    { label: 'Leadership', path: '/leadership' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-main/98 backdrop-blur-xl shadow-lg border-b border-subtle'
          : 'bg-main/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="container-enterprise">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('/')}
            className="flex flex-col items-start group relative z-[110]"
            aria-label="HUK SONS IT Home"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                <Globe2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <span
                  className="text-body uppercase tracking-[0.04em] transition-colors group-hover:text-primary block leading-none font-bold text-[28px]"
                >
                  HUK SONS IT
                </span>
                <span
                  className="text-body/60 mt-1 transition-colors group-hover:text-body block leading-none text-[11px] tracking-[-0.01em] font-normal"
                >
                  Built for Scale.
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavigate('/solutions')}
                aria-expanded={activeDropdown === 'solutions' ? "true" : "false"}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive('/solutions')
                    ? 'text-primary bg-primary/10'
                    : 'text-body/80 hover:text-primary hover:bg-body/5'
                }`}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown with proper hover area */}
              <div
                className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                  activeDropdown === 'solutions' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="w-72 bg-alt border border-subtle rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-2">
                    {solutions.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNavigate(item.path)}
                        className="w-full text-left px-4 py-3 rounded-lg text-sm text-body/80 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavigate('/resources')}
                aria-expanded={activeDropdown === 'resources' ? "true" : "false"}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive('/resources')
                    ? 'text-primary bg-primary/10'
                    : 'text-body/80 hover:text-primary hover:bg-body/5'
                }`}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              
              <div
                className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                  activeDropdown === 'resources' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="w-48 bg-alt border border-subtle rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-2">
                    {resources.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNavigate(item.path)}
                        className="w-full text-left px-4 py-3 rounded-lg text-sm text-body/80 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                aria-expanded={activeDropdown === 'company' ? "true" : "false"}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                  ['/about', '/why-us', '/leadership'].some(path => isActive(path))
                    ? 'text-primary bg-primary/10'
                    : 'text-body/80 hover:text-primary hover:bg-body/5'
                }`}
              >
                Company
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              
              <div
                className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                  activeDropdown === 'company' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="w-48 bg-alt border border-subtle rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-2">
                    {company.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNavigate(item.path)}
                        className="w-full text-left px-4 py-3 rounded-lg text-sm text-body/80 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Industries */}
            <button
              onClick={() => handleNavigate('/industries')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/industries')
                  ? 'text-primary bg-primary/10'
                  : 'text-body/80 hover:text-primary hover:bg-body/5'
              }`}
            >
              Industries
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg text-body/80 hover:text-primary hover:bg-body/5 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <Button
              onClick={() => handleNavigate('/contact-us')}
              variant="premium"
              className="ml-4 px-6 py-3 transition-all duration-300"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2 z-50">
            <button
              onClick={toggleTheme}
              className="text-body p-2 hover:bg-body/5 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="text-body p-2 hover:bg-body/5 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-main/98 backdrop-blur-xl border-t border-subtle py-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              
              {/* Solutions Mobile */}
              <div className="px-4">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                  className="w-full flex items-center justify-between py-3 text-left text-body/80"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'solutions' && (
                  <div className="pl-4 space-y-1">
                    {solutions.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNavigate(item.path)}
                        className="w-full text-left px-4 py-2 rounded-lg text-sm text-body/70 hover:text-primary hover:bg-primary/5"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Mobile */}
              <div className="px-4">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                  className="w-full flex items-center justify-between py-3 text-left text-body/80"
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'resources' && (
                  <div className="pl-4 space-y-1">
                    {resources.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNavigate(item.path)}
                        className="w-full text-left px-4 py-2 rounded-lg text-sm text-body/70 hover:text-primary hover:bg-primary/5"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Company Mobile */}
              <div className="px-4">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                  className="w-full flex items-center justify-between py-3 text-left text-body/80"
                >
                  <span>Company</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'company' && (
                  <div className="pl-4 space-y-1">
                    {company.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNavigate(item.path)}
                        className="w-full text-left px-4 py-2 rounded-lg text-sm text-body/70 hover:text-primary hover:bg-primary/5"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries Mobile */}
              <button
                onClick={() => handleNavigate('/industries')}
                className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/industries')
                    ? 'text-primary bg-primary/10 mx-4'
                    : 'text-body/80 hover:text-primary hover:bg-primary/5 mx-4'
                }`}
              >
                Industries
              </button>

              <Button
                onClick={() => handleNavigate('/contact-us')}
                variant="premium"
                className="mx-4 mt-2"
              >
                Contact Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
