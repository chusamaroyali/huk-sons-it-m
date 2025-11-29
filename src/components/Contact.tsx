import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Mail, MapPin, Globe } from 'lucide-react';
import { toast } from 'sonner';
import { COMPANY_INFO, ENGAGEMENT_TERMS } from '../utils/data';
import { api } from '../utils/appwrite/api';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await api.createContact({
        firstName: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message
      });
      
      toast.success(
        `✅ Thank you! Your message has been received. We'll contact you at ${formData.email} within 24 hours.`,
        { duration: 6000 }
      );
      
      setTimeout(() => {
        toast.info(
          `ℹ️ For immediate assistance, email us at ${COMPANY_INFO.email}`,
          { duration: 8000 }
        );
      }, 500);
      
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast.error(error.message || 'Unable to submit form. Please contact us directly at ' + COMPANY_INFO.email);
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
    <section id="contact" className="py-24 bg-main transition-colors duration-300">
      <div className="container-enterprise">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary uppercase tracking-wider">
              Get Started
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-heading mb-6">
            Ready to <span className="text-primary">Transform?</span>
          </h2>
          <p className="text-xl text-body/70">
            Start your technical transformation with a strategic audit and architecture review.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-2 border-subtle p-8 bg-card">
              <h3 className="text-2xl text-heading mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-heading mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-heading mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-heading mb-2">
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-heading mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[150px]"
                    placeholder="Tell us about your technical challenges and transformation goals..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="premium"
                  className="w-full py-6"
                >
                  {isSubmitting ? 'Sending...' : 'Start Your Transformation'}
                </Button>

                <p className="text-sm text-body/50 text-center">
                  Minimum engagement: {COMPANY_INFO.minimumEngagement} | Response time: 24-48 hours
                </p>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <Card className="bg-body/5 border-subtle p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-heading mb-2">Email</h4>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-primary hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-heading mb-2">Website</h4>
                  <a
                    href={COMPANY_INFO.website}
                    className="text-primary hover:underline"
                  >
                    {COMPANY_INFO.website}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-heading mb-2">Global Presence</h4>
                  <div className="text-body/70 space-y-1">
                    <p>HQ: {COMPANY_INFO.locations.hq}</p>
                    <p>Operations: {COMPANY_INFO.locations.operations.join(' & ')}</p>
                    <p>{COMPANY_INFO.locations.model}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Engagement Terms */}
            <Card className="border-2 border-subtle p-8 bg-card">
              <h4 className="text-xl text-heading mb-4">Engagement Terms</h4>
              <div className="space-y-3 text-body/70">
                {ENGAGEMENT_TERMS.map((term, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{term}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Languages */}
            <Card className="bg-primary/10 border-primary/30 p-8">
              <h4 className="text-heading mb-4">Languages Supported</h4>
              <div className="flex items-center gap-4 text-body/70 flex-wrap">
                {COMPANY_INFO.languages.map((lang, index) => (
                  <span key={index} className="px-3 py-1 bg-card rounded-full">{lang}</span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
