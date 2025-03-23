import React from 'react';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-primary text-white py-12 mb-8">
          <div className="container-custom">
            <h1 className="heading-xl text-center">Our Services</h1>
            <p className="text-center mt-4 max-w-3xl mx-auto text-lg">
              Comprehensive social media and digital marketing solutions tailored for your business needs.
            </p>
          </div>
        </div>
        <Services />
      </main>
      <Footer />
    </>
  );
} 