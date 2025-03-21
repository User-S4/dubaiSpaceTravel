'use client';

import React, { useState } from '@/types/react-import-fix';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRocket, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const destinations = [
  { id: 'orbital', name: 'Orbital Station' },
  { id: 'moon', name: 'Lunar Gateway' },
  { id: 'mars', name: 'Mars Base' },
  { id: 'venus', name: 'Venus Flyby' },
];

const HeroSection = () => {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0].id);
  
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-space-dark/70 to-space-dark z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/space-hero.svg')",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-dubai-gold gold-glow">Dubai</span> to the <br />
                <span className="text-glow">Stars</span>
              </h1>
              <p className="text-space-light text-lg md:text-xl mb-8 max-w-xl">
                Experience the next frontier in luxury travel. Book your journey from Dubai to space stations, 
                lunar hotels, and beyond.
              </p>
              
              <div className="glass-panel p-6 mb-8 max-w-lg">
                <h3 className="text-xl font-bold mb-4">Quick Booking</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-space-light mb-2">Destination</label>
                    <div className="flex gap-3 flex-wrap">
                      {destinations.map((dest) => (
                        <button
                          key={dest.id}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedDestination === dest.id 
                              ? 'bg-dubai-gold text-space-dark' 
                              : 'bg-space-blue/50 text-space-light hover:bg-space-blue'
                          }`}
                          onClick={() => setSelectedDestination(dest.id)}
                        >
                          {dest.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/2">
                      <label className="block text-space-light mb-2">Departure</label>
                      <div className="relative">
                        <div className="bg-space-blue/50 rounded-md px-4 py-3 flex items-center">
                          <FaCalendarAlt className="text-dubai-gold mr-3" />
                          <span>Select Date</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label className="block text-space-light mb-2">Travelers</label>
                      <div className="bg-space-blue/50 rounded-md px-4 py-3 flex items-center">
                        <span>2 Adults</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link href="/book" className="btn-primary w-full mt-2">
                    <FaRocket className="mr-2" />
                    Search Flights
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-dubai-gold text-2xl font-bold">100+</div>
                  <div className="text-space-light text-sm">Trips Completed</div>
                </div>
                <div className="h-10 w-px bg-space-light/20"></div>
                <div className="text-center">
                  <div className="text-dubai-gold text-2xl font-bold">97%</div>
                  <div className="text-space-light text-sm">Customer Satisfaction</div>
                </div>
                <div className="h-10 w-px bg-space-light/20"></div>
                <div className="text-center">
                  <div className="text-dubai-gold text-2xl font-bold">24/7</div>
                  <div className="text-space-light text-sm">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-dubai-gold/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-space-accent/10 rounded-full filter blur-3xl"></div>
              <Image
                src="/images/space-hero.svg"
                alt="Space shuttle launching from Dubai"
                width={650}
                height={500}
                className="rounded-xl object-cover"
              />
              <div className="absolute top-4 left-4 glass-panel px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Live Launch</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating particles decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatParticle ${5 + Math.random() * 10}s linear infinite`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 