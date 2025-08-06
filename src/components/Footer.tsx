import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: ['About Us', 'Our Services', 'Philosophy', 'Careers']
    },
    {
      title: 'Services',
      links: ['Global Distribution', 'Logistics', 'Quality Assurance', 'Technology Solutions']
    },
    {
      title: 'Support',
      links: ['Contact Us', 'Documentation', 'Help Center', 'FAQ']
    },
    {
      title: 'Legal',
      links: ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Compliance']
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
                <div className="flex justify-start lg:justify-center mb-6">
                <img 
                  src="/lovable-uploads/logo.png" 
                  alt="Zakaria Concepts" 
                  className="h-28 w-28 mx-auto"
                />
                </div>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Leading global distribution company connecting businesses with quality products across textiles, food, personal care, and technology sectors.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                placeholder="Enter your email"
                className="flex-1 bg-muted border-border"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4" />
                </Button>
              </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Zakaria Concepts. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;