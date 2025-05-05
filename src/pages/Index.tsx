
import React from 'react';
import Header from '@/components/Header';
import WhyParaguay from '@/components/WhyParaguay';
import PropertyShowcase from '@/components/PropertyShowcase';
import LeadForm from '@/components/LeadForm';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhyParaguay />
      <PropertyShowcase />
      <LeadForm />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
