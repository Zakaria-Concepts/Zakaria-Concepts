import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import GlobalPresence from '@/components/GlobalPresence';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import PartnerLogos from '@/components/PartnerLogos';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <PartnerLogos />
      <GlobalPresence />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
