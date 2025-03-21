'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaRocket, FaClock, FaGlobeAsia, FaSearch } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { destinations } from '@/lib/mockData';
import { Destination } from '@/types';

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPrice, setFilterPrice] = useState<number | null>(null);
  const [filterDuration, setFilterDuration] = useState<string | null>(null);
  
  // Filter destinations based on search term and filters
  const filteredDestinations = destinations.filter((destination) => {
    // Search term filter
    if (searchTerm && 
        !destination.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !destination.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Price filter
    if (filterPrice && destination.price > filterPrice) {
      return false;
    }
    
    // Duration filter - simple string match for now
    if (filterDuration && !destination.duration.includes(filterDuration)) {
      return false;
    }
    
    return true;
  });
  
  const resetFilters = () => {
    setSearchTerm('');
    setFilterPrice(null);
    setFilterDuration(null);
  };
  
  const DestinationCard = ({ destination }: { destination: Destination }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-panel overflow-hidden rounded-lg"
    >
      <div className="relative h-48 bg-space-blue/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <FaRocket className="text-dubai-gold text-4xl" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
        <p className="text-space-light mb-4 line-clamp-2">{destination.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <FaClock className="text-dubai-gold mr-2" />
            <span className="text-sm text-space-light">{destination.duration}</span>
          </div>
          <div className="flex items-center">
            <FaGlobeAsia className="text-dubai-gold mr-2" />
            <span className="text-sm text-space-light">{destination.distance}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-dubai-gold font-bold">
            ${destination.price.toLocaleString()}
          </div>
          <Link 
            href={`/destinations/${destination.id}`}
            className="btn-primary text-sm py-1.5 px-4"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-space-dark/70 to-space-dark z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1974')",
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Space <span className="text-dubai-gold gold-glow">Destinations</span>
            </h1>
            <p className="text-space-light text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore our extraordinary destinations beyond Earth. From orbital stations to lunar outposts and Martian colonies.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Filters and Results */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Filters Panel */}
            <div className="w-full lg:w-1/4">
              <div className="glass-panel p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Filters</h2>
                
                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <label className="block text-space-light mb-2">Search</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search destinations..."
                        className="bg-space-blue/50 rounded-md pl-10 pr-4 py-3 w-full text-white focus:outline-none focus:ring-1 focus:ring-dubai-gold"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-space-light" />
                    </div>
                  </div>
                  
                  {/* Price Filter */}
                  <div>
                    <label className="block text-space-light mb-2">Price Range</label>
                    <select
                      className="bg-space-blue/50 rounded-md px-4 py-3 w-full text-white focus:outline-none focus:ring-1 focus:ring-dubai-gold appearance-none"
                      value={filterPrice?.toString() || ''}
                      onChange={(e) => setFilterPrice(e.target.value ? parseInt(e.target.value) : null)}
                    >
                      <option value="">Any price</option>
                      <option value="150000">Under $150,000</option>
                      <option value="250000">Under $250,000</option>
                      <option value="350000">Under $350,000</option>
                    </select>
                  </div>
                  
                  {/* Duration Filter */}
                  <div>
                    <label className="block text-space-light mb-2">Duration</label>
                    <select
                      className="bg-space-blue/50 rounded-md px-4 py-3 w-full text-white focus:outline-none focus:ring-1 focus:ring-dubai-gold appearance-none"
                      value={filterDuration || ''}
                      onChange={(e) => setFilterDuration(e.target.value || null)}
                    >
                      <option value="">Any duration</option>
                      <option value="7 days">1 week</option>
                      <option value="10 days">10 days</option>
                      <option value="30 days">30 days</option>
                      <option value="90 days">90 days</option>
                    </select>
                  </div>
                  
                  <button 
                    className="btn-outline w-full mt-4"
                    onClick={resetFilters}
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
            
            {/* Results Grid */}
            <div className="w-full lg:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">
                  {filteredDestinations.length} Destinations
                </h2>
                <div className="text-space-light">
                  Showing all available destinations
                </div>
              </div>
              
              {filteredDestinations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDestinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
                </div>
              ) : (
                <div className="glass-panel p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">No destinations found</h3>
                  <p className="text-space-light mb-6">
                    We couldn't find any destinations matching your search criteria.
                  </p>
                  <button 
                    className="btn-primary"
                    onClick={resetFilters}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Journeys */}
      <section className="py-16 px-4 sm:px-6 bg-space-blue">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-space-light max-w-3xl mx-auto mb-12">
            Whether you're looking for a short orbital experience or a lengthy journey to Mars, 
            Dubai Space Travel has the perfect itinerary for your extraterrestrial adventure.
          </p>
          <Link href="/book" className="btn-primary text-lg px-8 py-4">
            Start Planning Your Journey
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 