import React from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-primary text-white py-12 mb-8">
          <div className="container-custom">
            <h1 className="heading-xl text-center">About Us</h1>
            <p className="text-center mt-4 max-w-3xl mx-auto text-lg">
              Learn about our journey, our mission, and the team behind Mr Media Agency.
            </p>
          </div>
        </div>
        <About />
      </main>
      <Footer />
    </>
  );
} 