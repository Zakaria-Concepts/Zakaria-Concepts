import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Shield, Eye, Cookie, Scale, FileText, RefreshCw, Truck, AlertTriangle, Users, BookOpen, Mail, Clock } from 'lucide-react';

const Legal = () => {
  const [activeSection, setActiveSection] = useState('');

  // Sticky TOC functionality
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const policies = [
    { id: 'terms', title: 'Terms & Conditions', icon: Scale, description: 'Legal agreement and service terms' },
    { id: 'privacy', title: 'Privacy Policy', icon: Eye, description: 'How we collect and protect your data' },
    { id: 'cookies', title: 'Cookie Policy', icon: Cookie, description: 'Our use of cookies and tracking' },
    { id: 'refunds', title: 'Refund & Returns', icon: RefreshCw, description: 'Return and refund procedures' },
    { id: 'shipping', title: 'Shipping & Delivery', icon: Truck, description: 'Delivery terms and processes' },
    { id: 'disclaimer', title: 'Disclaimer', icon: AlertTriangle, description: 'Legal disclaimers and limitations' },
    { id: 'aup', title: 'Acceptable Use Policy', icon: Users, description: 'Guidelines for using our services' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-primary/10 rounded-lg p-3">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground">
                Legal Center
              </h1>
            </div>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4">
              Welcome to the Legal Center. Choose a policy to learn how we operate and protect your data.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last updated: August 20, 2025</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sticky Sidebar TOC */}
          <aside className="lg:w-80">
            <div className="sticky top-8">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {policies.map((policy) => (
                    <button
                      key={policy.id}
                      onClick={() => scrollToSection(policy.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 hover:bg-muted/50 ${
                        activeSection === policy.id 
                          ? 'bg-primary/10 text-primary border-l-4 border-primary' 
                          : 'text-muted-foreground'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <policy.icon className="w-4 h-4" />
                        <div>
                          <div className="font-medium text-sm">{policy.title}</div>
                          <div className="text-xs opacity-75">{policy.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </nav>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            {/* Terms & Conditions */}
            <section id="terms" data-section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                    Terms & Conditions
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">Last updated: August 20, 2025</p>
                </div>
              </div>

              <Card className="p-8">
                <CardContent className="p-0">
                  <Accordion type="multiple" defaultValue={["intro", "changes", "use", "ip", "liability", "governing", "contact"]} className="space-y-4">
                    <AccordionItem value="intro">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Introduction & Acceptance
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        These Terms & Conditions constitute a legal agreement between you ("User") and Zakaria Concepts ("we", "our"). By accessing or using this site, you agree to be bound by these Terms.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="changes">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Changes to Terms
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        We may update these Terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised Terms.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="use">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Permitted Use & Prohibited Behavior
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                        <p>• Use the site and services only for lawful purposes.</p>
                        <p>• Do not spam, scrape, hack, impersonate others, or upload malicious code.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ip">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Intellectual Property
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        All content, trademarks, logos, and design elements are owned by Zakaria Concepts or its licensors and protected by applicable laws.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="liability">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Disclaimer & Limitation of Liability
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        We provide the site and services "as is" without warranties. Zakaria Concepts shall not be liable for indirect, incidental, or consequential damages.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="governing">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Governing Law & Dispute Resolution
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        These Terms are governed by the laws of the United States and Colombia. Venue and jurisdiction shall lie with competent courts in these jurisdictions.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="contact">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Contact
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        <p>Questions about these Terms? Email <a href="mailto:legal@zakariaconcepts.com" className="text-primary hover:underline">legal@zakariaconcepts.com</a></p>
                        <p className="mt-2 text-sm">Related policies: Privacy · Cookies · Refunds · Shipping · Disclaimer · AUP</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* Privacy Policy */}
            <section id="privacy" data-section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                    Privacy Policy
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">Last updated: August 20, 2025</p>
                </div>
              </div>

              <Card className="p-8">
                <CardContent className="p-0">
                  <Accordion type="multiple" defaultValue={["scope", "collect", "use", "rights", "cookies", "privacy-contact"]} className="space-y-4">
                    <AccordionItem value="scope">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Scope
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        This Privacy Policy explains how Zakaria Concepts collects, uses, and protects your personal information.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="collect">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Information We Collect
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                        <p>• Contact details (name, email, phone).</p>
                        <p>• Business details submitted via forms.</p>
                        <p>• Cookies and usage analytics data.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="use">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        How We Use Information
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                        <p>• Respond to inquiries and deliver services.</p>
                        <p>• Improve site functionality and offerings.</p>
                        <p>• Send important updates and marketing (with opt-out options).</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rights">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Your Rights
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                        <p>• Access, correct, or delete your personal data.</p>
                        <p>• Opt out of marketing communications.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="cookies">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Cookies & Tracking
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        We use cookies as described in our Cookie Policy. You can manage cookies in your browser settings.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="privacy-contact">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Contact
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        Privacy inquiries: <a href="mailto:privacy@zakariaconcepts.com" className="text-primary hover:underline">privacy@zakariaconcepts.com</a>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* Cookie Policy */}
            <section id="cookies" data-section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                    Cookie Policy
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">Last updated: August 20, 2025</p>
                </div>
              </div>

              <Card className="p-8">
                <CardContent className="p-0">
                  <Accordion type="multiple" defaultValue={["what", "types", "managing"]} className="space-y-4">
                    <AccordionItem value="what">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        What Are Cookies?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        Cookies are small text files stored on your device to improve user experience and analyze site performance.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="types">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Types of Cookies We Use
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                        <p>• <strong>Essential:</strong> Required for core site functionality.</p>
                        <p>• <strong>Analytics:</strong> Understand how visitors use the site.</p>
                        <p>• <strong>Marketing:</strong> Improve relevance of advertising (if used).</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="managing">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Managing Cookies
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        <p>You can block or delete cookies in your browser settings. Blocking some cookies may impact functionality.</p>
                        <p className="mt-2 text-sm">See also: Privacy Policy.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* Refund & Returns Policy */}
            <section id="refunds" data-section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary/10 rounded-lg p-3">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                    Refund & Returns Policy
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">Last updated: August 20, 2025</p>
                </div>
              </div>

              <Card className="p-8">
                <CardContent className="p-0">
                  <Accordion type="multiple" defaultValue={["eligibility", "return-process", "refund-process"]} className="space-y-4">
                    <AccordionItem value="eligibility">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Eligibility
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                        <p>• Returns accepted within 30 days of delivery.</p>
                        <p>• Items must be unused and in original, resalable condition and packaging.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="return-process">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        How to Start a Return
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                        <p>• Email <a href="mailto:support@zakariaconcepts.com" className="text-primary hover:underline">support@zakariaconcepts.com</a> with your order details.</p>
                        <p>• We'll provide a return authorization and instructions.</p>
                        <p>• Ship the product back per instructions; tracking is recommended.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="refund-process">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Refunds & Exchanges
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                        <p>• Refunds are issued to the original payment method after inspection.</p>
                        <p>• Exchanges may be available depending on stock.</p>
                        <p>• Custom or digital products may be non-refundable.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* Shipping & Delivery Policy */}
            <section id="shipping" data-section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                    Shipping & Delivery Policy
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">Last updated: August 20, 2025</p>
                </div>
              </div>

              <Card className="p-8">
                <CardContent className="p-0">
                  <Accordion type="multiple" defaultValue={["processing", "delivery", "customs", "shipping-contact"]} className="space-y-4">
                    <AccordionItem value="processing">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Processing Time
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        Orders are typically processed within 2–5 business days.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="delivery">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Delivery
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                        <p>• Domestic and international shipping available.</p>
                        <p>• Delivery times vary by location and carrier.</p>
                        <p>• Tracking details will be provided when available.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="customs">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Customs Duties & Taxes
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        International orders may be subject to duties and taxes, payable by the customer.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="shipping-contact">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Shipping Questions
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        Contact: <a href="mailto:logistics@zakariaconcepts.com" className="text-primary hover:underline">logistics@zakariaconcepts.com</a>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* Disclaimer */}
            <section id="disclaimer" data-section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary/10 rounded-lg p-3">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                    Disclaimer
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">Last updated: August 20, 2025</p>
                </div>
              </div>

              <Card className="p-8">
                <CardContent className="p-0">
                  <Accordion type="multiple" defaultValue={["warranty", "disclaimer-liability", "accuracy"]} className="space-y-4">
                    <AccordionItem value="warranty">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        No Warranty
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        Zakaria Concepts provides its website, services, and products "as is" without warranties of any kind.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="disclaimer-liability">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Limitation of Liability
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        We are not liable for indirect, incidental, or consequential damages arising from the use of our site or services.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="accuracy">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Information Accuracy
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        We strive for accuracy but do not warrant that content is error-free or complete.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* Acceptable Use Policy */}
            <section id="aup" data-section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                    Acceptable Use Policy
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">Last updated: August 20, 2025</p>
                </div>
              </div>

              <Card className="p-8">
                <CardContent className="p-0">
                  <Accordion type="multiple" defaultValue={["overview", "prohibited", "enforcement"]} className="space-y-4">
                    <AccordionItem value="overview">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Overview
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        This Acceptable Use Policy (AUP) governs use of our website and services.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="prohibited">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Prohibited Activities
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                        <p>• Unauthorized access, hacking, or attempts to circumvent security.</p>
                        <p>• Data scraping or automated harvesting without permission.</p>
                        <p>• Fraudulent misrepresentation or impersonation.</p>
                        <p>• Uploading malicious code, spam, or illegal content.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="enforcement">
                      <AccordionTrigger className="text-xl font-semibold text-foreground">
                        Enforcement
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        Violations may result in restricted access, service termination, or legal action.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </section>

            {/* Footer Note */}
            <Card className="p-6 text-center bg-muted/30">
              <CardContent className="p-0">
                <p className="text-sm text-muted-foreground mb-4">
                  © 2025 Zakaria Concepts. This page is provided for transparency and does not constitute legal advice.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = '/contact'}
                  className="group"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Legal Team
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Legal;