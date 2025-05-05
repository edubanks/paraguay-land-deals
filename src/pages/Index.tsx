
import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import WhyParaguay from '@/components/WhyParaguay';
import PropertyShowcase from '@/components/PropertyShowcase';
import LeadForm from '@/components/LeadForm';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <WhyParaguay />
      <PropertyShowcase />
      <LeadForm />
      <Testimonials />
      <About />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
