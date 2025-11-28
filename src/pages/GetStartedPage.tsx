import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, MapPin, Globe, Calendar, DollarSign, Clock, CheckCircle2, FileText, Send } from 'lucide-react';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { getServiceNames, getIndustryNames, COUNTRIES, BUDGETS, TIMELINES, COMPANY_INFO, ENGAGEMENT_TERMS } from '../utils/data';
import { api } from '../utils/appwrite/api';

export function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    industry: '',
    projectType: '',
    timeline: '',
    budget: '',
    teamSize: '',
    primaryChallenge: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Construct the message with all details
      const fullMessage = `
Project Type: ${formData.projectType}
Industry: ${formData.industry}
Country: ${formData.country}
Phone: ${formData.phone}
Timeline: ${formData.timeline}
Budget: ${formData.budget}
Team Size: ${formData.teamSize}
Primary Challenge: ${formData.primaryChallenge}

Message:
${formData.message}
      `.trim();

      await api.createContact({
        firstName: formData.name,
        email: formData.email,
        company: formData.company,
        message: fullMessage,
      });
      
      toast.success('Your request has been submitted! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        industry: '',
        projectType: '',
        timeline: '',
        budget: '',
        teamSize: '',
        primaryChallenge: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00D3A9]/20 via-[#00D3A9]/10 to-transparent border-l-2 border-[#00D3A9] rounded-r-full">
                <Send className="w-5 h-5 text-[#00D3A9]" />
                <span className="text-sm uppercase tracking-wider text-[#00D3A9]">Get Started</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-8">
              <span className="bg-gradient-to-r from-[#0A0D12] dark:from-white via-[#0A0D12] dark:via-white to-[#0A0D12]/60 dark:to-white/60 bg-clip-text text-transparent">
                Ready to
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00D3A9] to-[#00D3A9]/60 bg-clip-text text-transparent">
                Transform?
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-[#0A0D12]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              Start your technical transformation journey with a strategic audit and architecture review.
            </p>

            <div className="flex justify-center mt-12">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00D3A9] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-24">
        <div className="container-enterprise relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl text-[#0A0D12] dark:text-white mb-6">Project Inquiry Form</h2>
                <div className="p-8 bg-white/80 dark:bg-white/[0.03] border border-[#0A0D12]/10 dark:border-white/10 rounded-2xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-[#0A0D12] dark:text-white mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white dark:bg-white/5"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[#0A0D12] dark:text-white mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white dark:bg-white/5"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-[#0A0D12] dark:text-white mb-2">
                          Company Name *
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-white dark:bg-white/5"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-[#0A0D12] dark:text-white mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white dark:bg-white/5"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="country" className="block text-[#0A0D12] dark:text-white mb-2">
                          Country *
                        </label>
                        <Select
                          value={formData.country}
                          onValueChange={(value) => setFormData({ ...formData, country: value })}
                        >
                          <SelectTrigger className="w-full bg-white dark:bg-white/5">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            {COUNTRIES.map((country) => (
                              <SelectItem key={country} value={country}>{country}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="industry" className="block text-[#0A0D12] dark:text-white mb-2">
                          Industry *
                        </label>
                        <Select
                          value={formData.industry}
                          onValueChange={(value) => setFormData({ ...formData, industry: value })}
                        >
                          <SelectTrigger className="w-full bg-white dark:bg-white/5">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {getIndustryNames().map((industry) => (
                              <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-[#0A0D12] dark:text-white mb-2">
                        Service / Project Type *
                      </label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                      >
                        <SelectTrigger className="w-full bg-white dark:bg-white/5">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          {getServiceNames().map((service) => (
                            <SelectItem key={service} value={service}>{service}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="timeline" className="block text-[#0A0D12] dark:text-white mb-2">
                          Timeline *
                        </label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                        >
                          <SelectTrigger className="w-full bg-white dark:bg-white/5">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {TIMELINES.map((timeline) => (
                              <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-[#0A0D12] dark:text-white mb-2">
                          Budget Range *
                        </label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => setFormData({ ...formData, budget: value })}
                        >
                          <SelectTrigger className="w-full bg-white dark:bg-white/5">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {BUDGETS.map((budget) => (
                              <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="teamSize" className="block text-[#0A0D12] dark:text-white mb-2">
                        Team Size
                      </label>
                      <Input
                        id="teamSize"
                        name="teamSize"
                        type="text"
                        value={formData.teamSize}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-white/5"
                        placeholder="Number of team members"
                      />
                    </div>

                    <div>
                      <label htmlFor="primaryChallenge" className="block text-[#0A0D12] dark:text-white mb-2">
                        Primary Challenge
                      </label>
                      <Textarea
                        id="primaryChallenge"
                        name="primaryChallenge"
                        value={formData.primaryChallenge}
                        onChange={handleChange}
                        className="w-full min-h-[150px] bg-white dark:bg-white/5"
                        placeholder="Identify the main challenge you're facing..."
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[#0A0D12] dark:text-white mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-[150px] bg-white dark:bg-white/5"
                        placeholder="Tell us about your project requirements, challenges, and goals..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#00D3A9] hover:bg-[#00D3A9]/90 text-[#0A0D12] py-6 text-lg"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl text-[#0A0D12] dark:text-white mb-6">What to Expect</h2>
                  <div className="space-y-6">
                    {[
                      { icon: Clock, title: '24-Hour Response', desc: 'Initial consultation within one business day' },
                      { icon: FileText, title: 'Strategic Audit', desc: 'Comprehensive infrastructure and process review' },
                      { icon: Calendar, title: 'Transparent Timeline', desc: 'Clear milestones and delivery schedule' },
                      { icon: DollarSign, title: 'Fixed Pricing', desc: 'No hidden costs or scope creep' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-6 bg-white/80 dark:bg-white/[0.03] border border-[#0A0D12]/10 dark:border-white/10 rounded-xl">
                        <div className="w-12 h-12 bg-[#00D3A9]/10 border border-[#00D3A9]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-[#00D3A9]" />
                        </div>
                        <div>
                          <h3 className="text-lg text-[#0A0D12] dark:text-white mb-1">{item.title}</h3>
                          <p className="text-[#0A0D12]/70 dark:text-white/70">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-[#00D3A9]/10 via-[#00D3A9]/5 to-transparent border border-[#00D3A9]/20 rounded-2xl">
                  <h3 className="text-2xl text-[#0A0D12] dark:text-white mb-4">Engagement Terms</h3>
                  <div className="space-y-3 text-[#0A0D12]/80 dark:text-white/80">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00D3A9] flex-shrink-0 mt-0.5" />
                      <span>Custom-tailored enterprise pricing</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00D3A9] flex-shrink-0 mt-0.5" />
                      <span>Milestone-based delivery</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00D3A9] flex-shrink-0 mt-0.5" />
                      <span>Transparent scope & pricing</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white/80 dark:bg-white/[0.03] border border-[#0A0D12]/10 dark:border-white/10 rounded-2xl">
                  <h3 className="text-2xl text-[#0A0D12] dark:text-white mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#00D3A9]" />
                      <a href="mailto:info@huksons.com" className="text-[#0A0D12]/80 dark:text-white/80 hover:text-[#00D3A9]">
                        info@huksons.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-[#00D3A9]" />
                      <span className="text-[#0A0D12]/80 dark:text-white/80">Global Operations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#00D3A9]" />
                      <span className="text-[#0A0D12]/80 dark:text-white/80">Pakistan, USA, UAE</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}