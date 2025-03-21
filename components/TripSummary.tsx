'use client';

import React, { useMemo } from '@/types/react-import-fix';
import { motion } from 'framer-motion';
import { FaRocket, FaCalendarAlt, FaUsers, FaBed, FaStar } from 'react-icons/fa';

// Mock data
const destinations = [
  {
    id: 'orbital-station',
    name: 'Orbital Luxury Station',
    image: '/images/destinations/orbital-station.jpg',
    description: 'Experience zero gravity in our state-of-the-art space station with panoramic Earth views.',
    price: 125000,
    duration: '7 days',
    distance: '400 km',
  },
  {
    id: 'lunar-gateway',
    name: 'Lunar Gateway Hotel',
    image: '/images/destinations/lunar-gateway.svg',
    description: 'Stay at the first hotel in lunar orbit with exclusive moon surface excursions.',
    price: 250000,
    duration: '10 days',
    distance: '384,400 km',
  },
  {
    id: 'mars-base',
    name: 'Mars Base One',
    image: '/images/destinations/mars-base.jpg',
    description: 'Visit the red planet and be among the first humans to set foot on Martian soil.',
    price: 450000,
    duration: '90 days',
    distance: '54.6 million km',
  },
];

const accommodationOptions = [
  {
    id: 'standard',
    name: 'Standard Pod',
    description: 'Comfortable sleeping quarters with essential amenities',
    price: 0, // Included in base price
  },
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    description: 'Spacious quarters with premium amenities and enhanced comfort',
    price: 15000,
  },
  {
    id: 'premium',
    name: 'Premium Observatory',
    description: 'Luxury suite with private observation deck and premium service',
    price: 35000,
  },
];

const extras = [
  {
    id: 'spacewalk',
    name: 'Spacewalk Experience',
    description: 'Guided 2-hour spacewalk outside the station',
    price: 25000,
  },
  {
    id: 'gourmet',
    name: 'Gourmet Meal Package',
    description: 'Fine dining menu created by Michelin-starred chefs',
    price: 5000,
  },
  {
    id: 'training',
    name: 'Extended Pre-flight Training',
    description: 'Additional preparation sessions for a more comfortable journey',
    price: 10000,
  },
  {
    id: 'photography',
    name: 'Professional Photography Package',
    description: 'Professional photographer to document your journey',
    price: 7500,
  },
];

type TripSummaryProps = {
  bookingData: {
    tripType?: string;
    destination?: string;
    departureDate?: string | null;
    returnDate?: string | null;
    passengers?: number;
    accommodationType?: string;
    seatClass?: string;
    extras?: string[];
    totalPrice?: number;
  };
};

const TripSummary = ({ bookingData }: TripSummaryProps) => {
  const destination = useMemo(() => {
    if (!bookingData.destination) return null;
    return destinations.find(d => d.id === bookingData.destination);
  }, [bookingData.destination]);
  
  const accommodation = useMemo(() => {
    if (!bookingData.accommodationType) return null;
    return accommodationOptions.find(a => a.id === bookingData.accommodationType);
  }, [bookingData.accommodationType]);
  
  const selectedExtras = useMemo(() => {
    if (!bookingData.extras || bookingData.extras.length === 0) return [];
    return extras.filter(e => bookingData.extras?.includes(e.id));
  }, [bookingData.extras]);
  
  if (!destination) {
    return (
      <div className="glass-panel p-6">
        <h3 className="text-xl font-bold mb-4">Trip Summary</h3>
        <p className="text-space-light">
          Select a destination to see your trip details and pricing.
        </p>
      </div>
    );
  }
  
  return (
    <motion.div 
      className="glass-panel p-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-5 flex items-center">
        <FaRocket className="text-dubai-gold mr-2" />
        Trip Summary
      </h3>
      
      <div className="space-y-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-space-blue/50 rounded-full flex items-center justify-center flex-shrink-0">
            <FaRocket className="text-dubai-gold" />
          </div>
          <div>
            <div className="text-sm text-space-light">Destination</div>
            <div className="font-medium">{destination.name}</div>
            <div className="text-sm text-space-light mt-1">
              {destination.duration} • {destination.distance}
            </div>
          </div>
        </div>
        
        {(bookingData.departureDate || bookingData.returnDate) && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-space-blue/50 rounded-full flex items-center justify-center flex-shrink-0">
              <FaCalendarAlt className="text-dubai-gold" />
            </div>
            <div>
              <div className="text-sm text-space-light">Travel Dates</div>
              <div className="font-medium">
                {bookingData.departureDate 
                  ? new Date(bookingData.departureDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                  : 'Select departure'
                } 
                {bookingData.returnDate && ' → '}
                {bookingData.returnDate 
                  ? new Date(bookingData.returnDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                  : ''
                }
              </div>
            </div>
          </div>
        )}
        
        {bookingData.passengers && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-space-blue/50 rounded-full flex items-center justify-center flex-shrink-0">
              <FaUsers className="text-dubai-gold" />
            </div>
            <div>
              <div className="text-sm text-space-light">Travelers</div>
              <div className="font-medium">
                {bookingData.passengers} {bookingData.passengers === 1 ? 'Passenger' : 'Passengers'}
              </div>
            </div>
          </div>
        )}
        
        {bookingData.seatClass && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-space-blue/50 rounded-full flex items-center justify-center flex-shrink-0">
              <FaStar className="text-dubai-gold" />
            </div>
            <div>
              <div className="text-sm text-space-light">Seat Class</div>
              <div className="font-medium capitalize">{bookingData.seatClass}</div>
            </div>
          </div>
        )}
        
        {accommodation && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-space-blue/50 rounded-full flex items-center justify-center flex-shrink-0">
              <FaBed className="text-dubai-gold" />
            </div>
            <div>
              <div className="text-sm text-space-light">Accommodation</div>
              <div className="font-medium">{accommodation.name}</div>
              {accommodation.price > 0 && (
                <div className="text-sm text-dubai-gold">+${accommodation.price.toLocaleString()}</div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {selectedExtras.length > 0 && (
        <div className="mt-5 pt-5 border-t border-white/10">
          <h4 className="font-medium mb-3">Selected Extras</h4>
          <ul className="space-y-2">
            {selectedExtras.map(extra => (
              <li key={extra.id} className="flex justify-between">
                <span className="text-sm">{extra.name}</span>
                <span className="text-sm text-dubai-gold">+${extra.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="mt-5 pt-5 border-t border-white/10 flex justify-between items-center">
        <div>
          <div className="text-sm text-space-light">Total Price</div>
          <div className="text-2xl font-bold text-dubai-gold">
            ${bookingData.totalPrice?.toLocaleString() || destination.price.toLocaleString()}
          </div>
        </div>
        
        {bookingData.passengers && bookingData.passengers > 1 && (
          <div className="text-right">
            <div className="text-sm text-space-light">Per Person</div>
            <div className="font-medium">
              ${Math.round((bookingData.totalPrice || destination.price) / bookingData.passengers).toLocaleString()}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TripSummary; 