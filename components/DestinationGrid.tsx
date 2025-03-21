'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaRocket, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { destinations } from '../lib/mockData';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

// DestinationCard component
const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
        />
        {destination.featured && (
          <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <FaCalendarAlt className="mr-2 text-indigo-500" />
            <span>{destination.duration} days</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FaMapMarkerAlt className="mr-2 text-indigo-500" />
            <span>{destination.distance} km</span>
          </div>
        </div>
        <div className="mt-auto">
          <div className="text-lg font-bold text-indigo-600 mb-4">
            ${destination.price.toLocaleString()}
          </div>
          <Link 
            href={`/destinations/${destination.id}`}
            className="inline-flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors"
          >
            View Details
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// TeaserCard component to encourage browsing all destinations
const TeaserCard: React.FC = () => {
  return (
    <div className="bg-indigo-50 rounded-xl shadow-lg overflow-hidden h-full flex flex-col justify-center items-center p-8 text-center">
      <FaRocket className="text-5xl text-indigo-400 mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">Explore More Destinations</h3>
      <p className="text-gray-600 mb-6">Discover all our available journeys to the stars and beyond.</p>
      <Link 
        href="/destinations"
        className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition-colors"
      >
        Browse All
        <FaArrowRight className="ml-2" />
      </Link>
    </div>
  );
};

const DestinationGrid: React.FC = () => {
  // Filter to only show featured destinations on the home page
  const featuredDestinations = destinations.filter(dest => dest.featured);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most popular space journeys chosen by adventurous travelers
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredDestinations.map((destination) => (
            <motion.div key={destination.id} variants={itemVariants}>
              <DestinationCard destination={destination} />
            </motion.div>
          ))}
          
          {/* If we have fewer than 3 featured destinations, add a teaser card */}
          {featuredDestinations.length < 3 && (
            <motion.div variants={itemVariants}>
              <TeaserCard />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationGrid; 