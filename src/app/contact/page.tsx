import React from 'react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-primary text-white py-12 mb-8">
          <div className="container-custom">
            <h1 className="heading-xl text-center">Contact Us</h1>
            <p className="text-center mt-4 max-w-3xl mx-auto text-lg">
              Get in touch with our team to learn how we can help your business grow.
            </p>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
} 