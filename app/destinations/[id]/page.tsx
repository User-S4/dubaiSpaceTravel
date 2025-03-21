'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCheck, 
  FaArrowLeft,
  FaUserAstronaut
} from 'react-icons/fa';
import { destinations } from '../../../lib/mockData';
import { Destination } from '../../../types';

const DestinationDetailsPage: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      const foundDestination = destinations.find(dest => dest.id === id);
      setDestination(foundDestination || null);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Destination Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">We couldn't find the destination you're looking for.</p>
        <Link
          href="/destinations"
          className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Browse All Destinations
        </Link>
      </div>
    );
  }

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
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
        {destination.image ? (
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            priority
            className="object-cover opacity-70"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <FaUserAstronaut className="text-6xl text-indigo-400" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <div className="container mx-auto max-w-6xl">
            <Link 
              href="/destinations" 
              className="inline-flex items-center text-white mb-4 hover:text-indigo-300 transition-colors"
            >
              <FaArrowLeft className="mr-2" /> Back to Destinations
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{destination.name}</h1>
            <p className="text-xl text-indigo-200 max-w-2xl">{destination.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="md:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <motion.h2 
                variants={itemVariants} 
                className="text-2xl font-bold text-gray-800 mb-4"
              >
                About this Journey
              </motion.h2>
              <motion.div 
                variants={itemVariants}
                className="prose prose-lg max-w-none text-gray-600"
              >
                <p className="text-lg leading-relaxed mb-6">{destination.longDescription}</p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {destination.amenities?.map((amenity, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Booking Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                Trip Summary
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 text-indigo-500" />
                    <span>Duration</span>
                  </div>
                  <span className="font-semibold">{destination.duration} days</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-indigo-500" />
                    <span>Distance</span>
                  </div>
                  <span className="font-semibold">{destination.distance} km</span>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-gray-800 font-semibold">Base Price</span>
                  <span className="text-2xl font-bold text-indigo-600">
                    ${destination.price.toLocaleString()}
                  </span>
                </div>
              </div>
              
              <Link 
                href={`/booking?destination=${destination.id}`}
                className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 px-4 rounded-lg transition-colors"
              >
                Book Now
              </Link>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                * Price is per person, excludes accommodations and extras
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationDetailsPage; 