import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  MessageCircle,
  Mail,
  Phone,
  Clock,
  Globe,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Users,
  Lightbulb,
  Heart
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    sector: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle'|'loading'|'success'|'deduped'|'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      if (!formData.name || !formData.email || !formData.message) {
        setStatus('error');
        setErrorMsg('Please fill in the required fields.');
        return;
      }

      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (res.ok && json?.ok) {
        setStatus(json.deduped ? 'deduped' : 'success');
        if (!json.deduped) {
          setFormData({ name: '', email: '', company: '', sector: '', message: '' });
        }
      } else {
        setStatus('error');
        setErrorMsg(json?.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Drop us a line anytime',
      contact: 'info@zakariaconcepts.com',
      action: 'Send Email',
      highlight: 'Fast Response'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      contact: '+1-773-771-8626',
      action: 'Call Now',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick chat for immediate questions',
      contact: '+57 (324) 3671521',
      action: 'Start Chat',
      highlight: 'Fast Response'
    }
  ];

  const sectors = ['Textiles', 'Healthy Foods', 'Technology', 'Personal and Home Care', 'Other'];

  const benefits = [
    { icon: Clock, text: '24/7 support across all time zones' },
    { icon: Users, text: 'Dedicated partnership specialists' },
    { icon: Globe, text: 'Global reach with local expertise' },
    { icon: Lightbulb, text: 'Innovative solutions tailored to your needs' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/bg.png')` }}
      >
        <div className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">
                  Let's Build Something Amazing Together
                </span>
              </div>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Ready to <span className="text-primary"> Transform Your Business?</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8">
                Whether you're a manufacturer seeking new markets or a distributor looking for quality partners, we're here to listen, understand your vision, and create opportunities that drive real growth.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <benefit.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="mb-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      Start the Conversation
                    </h2>
                    <p className="text-muted-foreground">
                      Tell us about your business goals, and we'll show you how we can help make them a reality.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="name" type="text" value={formData.name} onChange={handleInputChange}
                        placeholder="John Smith" required maxLength={120} />
                      <Input name="email" type="email" value={formData.email} onChange={handleInputChange}
                        placeholder="john@company.com" required maxLength={200} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="company" type="text" value={formData.company} onChange={handleInputChange}
                        placeholder="Your Company" maxLength={160} />
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="w-full h-10 px-3 py-2 text-sm bg-background border border-border rounded-md"
                      >
                        <option value="">Select your sector</option>
                        {sectors.map((sector) => (
                          <option key={sector} value={sector}>{sector}</option>
                        ))}
                      </select>
                    </div>

                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your goals, challenges, or opportunities..."
                      rows={5}
                      required
                      maxLength={4000}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={status === 'loading'}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {status === 'loading' ? 'Sending…' : 'Send Message & Start Partnership'}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    {/* Confirmation States */}
                    {status === 'success' && (
                      <div className="flex items-center gap-2 text-sm text-green-600 mt-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Your message was sent. We’ll get back to you shortly.</span>
                      </div>
                    )}
                    {status === 'deduped' && (
                      <div className="flex items-center gap-2 text-sm text-amber-600 mt-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>We’ve already received this message recently (within 5 hours).</span>
                      </div>
                    )}
                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-sm text-red-600 mt-2">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errorMsg}</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="order-1 lg:order-2">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Choose Your Preferred Way to Connect</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                            <method.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{method.title}</h4>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
