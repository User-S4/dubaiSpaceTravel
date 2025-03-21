'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import DestinationGrid from '@/components/DestinationGrid';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSlider from '@/components/TestimonialSlider';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <HeroSection />
      
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gold-glow">
            <span className="text-dubai-gold">Dubai</span> - Your Gateway to the Stars
          </h2>
          <p className="text-space-light max-w-3xl mx-auto text-lg">
            Experience the future of travel with Dubai Space Travel. From luxury orbital 
            hotels to lunar expeditions, we offer the most exclusive space experiences
            to discerning travelers.
          </p>
        </motion.div>
        
        <FeatureSection />
      </section>
      
      <section className="py-20 px-4 sm:px-6 bg-space-blue">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Popular Destinations</h2>
            <p className="text-space-light max-w-3xl mx-auto text-lg">
              Explore our most sought-after space destinations and experiences
            </p>
          </motion.div>
          
          <DestinationGrid />
          
          <div className="text-center mt-12">
            <Link href="/destinations" className="btn-outline">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 sm:px-6 glass-panel my-20 mx-4 sm:mx-8 md:mx-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Travelers Say</h2>
          </motion.div>
          
          <TestimonialSlider />
        </div>
      </section>
      
      <section className="py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for the Journey?</h2>
            <p className="text-space-light max-w-3xl mx-auto text-lg mb-8">
              Take the first step towards your ultimate space adventure
            </p>
            <Link href="/book" className="btn-secondary">
              Book Your Space Trip
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute inset-0 bg-stars-pattern opacity-20"></div>
      </section>
      
      <Footer />
    </main>
  );
} 