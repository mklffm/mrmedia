import React from 'react';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-primary text-white py-12 mb-8">
          <div className="container-custom">
            <h1 className="heading-xl text-center">Client Testimonials</h1>
            <p className="text-center mt-4 max-w-3xl mx-auto text-lg">
              Read what our clients have to say about working with Mr Media Agency.
            </p>
          </div>
        </div>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
} 