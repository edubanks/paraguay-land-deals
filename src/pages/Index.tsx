
import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import WhyParaguay from '@/components/WhyParaguay';
import PropertyShowcase from '@/components/PropertyShowcase';
import ImageGallery from '@/components/ImageGallery';
import InteractiveMap from '@/components/InteractiveMap';
import RoiCalculator from '@/components/RoiCalculator';
import Faq from '@/components/Faq';
import LeadForm from '@/components/LeadForm';
import Testimonials from '@/components/Testimonials';
import VideoTestimonials from '@/components/VideoTestimonials';
import Partners from '@/components/Partners';
import MarketStats from '@/components/MarketStats';
import About from '@/components/About';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import LiveChat from '@/components/LiveChat';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <LanguageSwitcher />
      <Header />
      <WhyParaguay />
      <PropertyShowcase />
      <ImageGallery />
      <InteractiveMap />
      <RoiCalculator />
      <MarketStats />
      <Testimonials />
      <VideoTestimonials />
      <Partners />
      <Faq />
      <NewsSection />
      <LeadForm />
      <About />
      <Footer />
      <ScrollToTop />
      <LiveChat />
    </div>
  );
};

export default Index;
