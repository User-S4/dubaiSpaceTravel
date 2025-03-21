'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaRocket, FaCalendarAlt, FaClock, FaUser, FaEllipsisV } from 'react-icons/fa';

interface Trip {
  id: string;
  destination: string;
  destinationId: string;
  image: string;
  departureDate: string;
  status: 'upcoming' | 'in-progress' | 'completed' | 'cancelled';
  daysRemaining: number;
}

// Mock data - in a real app this would come from an API
const mockTrips: Trip[] = [
  {
    id: 'trip-1',
    destination: 'Orbital Luxury Station',
    destinationId: 'orbital-station',
    image: '/images/destinations/orbital-station.jpg',
    departureDate: '2025-06-15',
    status: 'upcoming',
    daysRemaining: 65
  },
  {
    id: 'trip-2',
    destination: 'Lunar Gateway Hotel',
    destinationId: 'lunar-gateway',
    image: '/images/destinations/lunar-gateway.jpg',
    departureDate: '2025-09-22',
    status: 'upcoming',
    daysRemaining: 163
  }
];

const UpcomingTrips = () => {
  const [trips] = useState<Trip[]>(mockTrips);
  const [activeTrip, setActiveTrip] = useState<string | null>(null);

  const toggleTripMenu = (tripId: string) => {
    setActiveTrip(activeTrip === tripId ? null : tripId);
  };

  return (
    <motion.div 
      className="card h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Upcoming Trips</h2>
        <Link href="/dashboard/trips" className="text-dubai-gold text-sm hover:underline">
          View All
        </Link>
      </div>
      
      {trips.length > 0 ? (
        <div className="space-y-4">
          {trips.map((trip) => (
            <motion.div 
              key={trip.id}
              className="bg-space-dark/50 rounded-lg overflow-hidden border border-white/10"
              whileHover={{ y: -2, boxShadow: '0 4px 20px rgba(212, 175, 55, 0.1)' }}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-32 h-24">
                  <Image
                    src={trip.image}
                    alt={trip.destination}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-space-dark/70 to-transparent" />
                </div>
                
                <div className="flex-1 p-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{trip.destination}</h3>
                    <div className="relative">
                      <button 
                        onClick={() => toggleTripMenu(trip.id)}
                        className="text-space-light hover:text-white p-1"
                      >
                        <FaEllipsisV />
                      </button>
                      
                      {activeTrip === trip.id && (
                        <div className="absolute right-0 mt-1 w-40 bg-space-blue border border-white/10 rounded-md shadow-lg z-10">
                          <ul>
                            <li className="px-4 py-2 hover:bg-space-dark/50 cursor-pointer">View Details</li>
                            <li className="px-4 py-2 hover:bg-space-dark/50 cursor-pointer">Contact Support</li>
                            <li className="px-4 py-2 hover:bg-space-dark/50 cursor-pointer text-space-accent">Cancel Trip</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1 text-sm">
                    <div className="flex items-center text-space-light">
                      <FaCalendarAlt className="mr-2 text-dubai-gold" />
                      {trip.departureDate}
                    </div>
                    <div className="flex items-center text-space-light">
                      <FaClock className="mr-2 text-dubai-gold" />
                      {trip.daysRemaining} days left
                    </div>
                    <div className="flex items-center text-space-light">
                      <FaRocket className="mr-2 text-dubai-gold" />
                      {trip.status}
                    </div>
                    <div className="flex items-center text-space-light">
                      <FaUser className="mr-2 text-dubai-gold" />
                      1 Traveler
                    </div>
                  </div>
                  
                  <div className="mt-3 flex">
                    <Link 
                      href={`/destinations/${trip.destinationId}`}
                      className="text-dubai-gold text-sm hover:underline mr-4"
                    >
                      Destination Info
                    </Link>
                    <Link 
                      href={`/dashboard/trips/${trip.id}`}
                      className="text-dubai-gold text-sm hover:underline"
                    >
                      Trip Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <FaRocket size={40} className="text-space-light mb-4" />
          <h3 className="text-lg font-medium mb-2">No upcoming trips</h3>
          <p className="text-space-light mb-4">You don't have any trips scheduled yet.</p>
          <Link 
            href="/destinations" 
            className="btn-primary"
          >
            Explore Destinations
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default UpcomingTrips; 