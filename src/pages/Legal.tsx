import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Shield, Eye, Cookie, Scale } from 'lucide-react';

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Legal Information
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Your trust is important to us. Here you'll find all the legal information regarding our services, privacy practices, and terms of use.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" onClick={() => document.getElementById('terms')?.scrollIntoView({ behavior: 'smooth' })}>
              <Scale className="w-4 h-4 mr-2" />
              Terms & Conditions
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('privacy')?.scrollIntoView({ behavior: 'smooth' })}>
              <Eye className="w-4 h-4 mr-2" />
              Privacy Policy
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('cookies')?.scrollIntoView({ behavior: 'smooth' })}>
              <Cookie className="w-4 h-4 mr-2" />
              Cookie Policy
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('compliance')?.scrollIntoView({ behavior: 'smooth' })}>
              <Shield className="w-4 h-4 mr-2" />
              Compliance
            </Button>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section id="terms" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 rounded-lg p-3">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Terms & Conditions
              </h2>
            </div>

            <Card className="p-8 mb-8">
              <CardContent className="p-0 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">1. Service Agreement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By engaging Zakaria Concepts for distribution services, you agree to our terms of service. Our services include global sourcing, procurement, distribution, logistics, and market entry advisory across textile, food, personal care, and technology sectors.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">2. Payment Terms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Payment terms are agreed upon in individual service contracts. Standard terms include 30% advance payment, with remaining balance upon delivery confirmation. All prices are subject to applicable taxes and duties.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">3. Quality Assurance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain rigorous quality control standards and conduct pre-shipment inspections. However, clients are responsible for final product approval and quality acceptance upon delivery.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">4. Limitation of Liability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our liability is limited to the contract value of services provided. We are not responsible for market fluctuations, regulatory changes, or force majeure events beyond our control.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">5. Termination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Either party may terminate the agreement with 30 days written notice. Ongoing shipments and commitments will be completed unless otherwise agreed upon.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 rounded-lg p-3">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Privacy Policy
              </h2>
            </div>

            <Card className="p-8 mb-8">
              <CardContent className="p-0 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect business contact information, company details, product specifications, and communication records necessary to provide our distribution services. Personal data is processed only for business purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information is used to process orders, coordinate shipments, maintain quality records, and communicate about our services. We do not sell or share personal information with third parties for marketing purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Data Security</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures to protect your data. All sensitive information is encrypted and stored securely. Access is restricted to authorized personnel only.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Your Rights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, modify, or request deletion of your personal information. Contact us at privacy@zakariaconcepts.com for any privacy-related requests.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section id="cookies" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 rounded-lg p-3">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Cookie Policy
              </h2>
            </div>

            <Card className="p-8 mb-8">
              <CardContent className="p-0 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">What Are Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and analyze website performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Types of Cookies We Use</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li>• <strong>Analytics Cookies:</strong> Help us understand website usage</li>
                    <li>• <strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Managing Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 rounded-lg p-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Compliance & Certifications
              </h2>
            </div>

            <Card className="p-8 mb-8">
              <CardContent className="p-0 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">International Trade Compliance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain full compliance with international trade regulations including customs requirements, import/export licenses, and documentation standards across all operating regions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Quality Certifications</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our quality management systems are certified to international standards including ISO 9001:2015. We work only with certified suppliers who meet our rigorous quality criteria.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Ethical Sourcing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to ethical business practices and responsible sourcing. All our suppliers undergo due diligence checks for labor practices, environmental compliance, and business ethics.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Data Protection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We comply with GDPR, CCPA, and other applicable data protection regulations. Regular audits ensure ongoing compliance with privacy and data security requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Legal Matters */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Questions About Our Legal Policies?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              If you have any questions about our terms, privacy practices, or compliance standards, our legal team is here to help.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 group"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Legal Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;