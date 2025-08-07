import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Drop us a line anytime',
      contact: 'partnerships@zakariaconcepts.com',
      action: 'Send Email',
      highlight: 'Usually respond within 2 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      contact: '+1 (555) 123-4567',
      action: 'Call Now',
      highlight: 'Available 24/7'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick chat for immediate questions',
      contact: '+1 (555) 987-6543',
      action: 'Start Chat',
      highlight: 'Instant responses'
    }
  ];

  const sectors = [
    'Textiles',
    'Healthy Foods', 
    'Technology',
    'Personal and Home Care',
    'Other'
  ];

  const benefits = [
    {
      icon: Clock,
      text: '24/7 support across all time zones'
    },
    {
      icon: Users,
      text: 'Dedicated partnership specialists'
    },
    {
      icon: Globe,
      text: 'Global reach with local expertise'
    },
    {
      icon: Lightbulb,
      text: 'Innovative solutions tailored to your needs'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      



      {/* Hero Section */}
{/* Hero Section */}
<section
  className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url('public/assets/bg.png')` }}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
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
                      Tell us about your business goals, and we'll show you how we can help make them a reality. Every great partnership starts with a simple conversation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Name *
                        </label>
                        <Input
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Smith"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <Input
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                          className="bg-background border-border"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Industry Sector
                        </label>
                        <select
                          name="sector"
                          value={formData.sector}
                          onChange={handleInputChange}
                          className="w-full h-10 px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                          <option value="">Select your sector</option>
                          {sectors.map((sector) => (
                            <option key={sector} value={sector}>{sector}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tell Us About Your Goals
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Share your business objectives, challenges, or opportunities. The more you tell us, the better we can help you succeed."
                        rows={5}
                        className="bg-background border-border resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Send Message & Start Partnership
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>We'll respond within 2 hours during business days</span>
                    </div>
                  </form>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="order-1 lg:order-2">
                <div className="mb-8">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Choose Your Preferred Way to Connect
                  </h3>
                  <p className="text-muted-foreground">
                    We believe in being accessible when you need us. Reach out through whichever channel works best for you.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                            <method.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-foreground">{method.title}</h4>
                              <Badge variant="secondary" className="text-xs">
                                {method.highlight}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                            <p className="font-medium text-primary mb-2">{method.contact}</p>
                            <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/10">
                              {method.action}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Professional Partnership Team</h4>
                  <p className="text-sm text-muted-foreground">
                    Our experienced team spans multiple time zones to provide you with responsive, knowledgeable support whenever you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              We're Ready to Help You Grow
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every successful partnership begins with understanding. Let's discuss your vision, explore opportunities, and create solutions that drive meaningful results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Schedule a Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                Download Our Partnership Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;