'use client';

import React, { useState } from '@/types/react-import-fix';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UserProfile from '@/components/UserProfile';
import UpcomingTrips from '@/components/UpcomingTrips';
import CountdownTimer from '@/components/CountdownTimer';
import TravelTips from '@/components/TravelTips';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Mock data - in a real app this would come from a database
  const user = {
    name: 'Sarah Al Maktoum',
    email: 'sarah@example.com',
    profileImage: '/images/avatar.jpg',
    memberSince: '2023-09-15',
    membershipTier: 'Platinum',
    spacePoints: 12500,
  };
  
  const upcomingTrips = [
    {
      id: 'trip-001',
      destination: 'Orbital Luxury Station',
      departureDate: '2025-07-15T10:30:00',
      returnDate: '2025-07-22T14:45:00',
      status: 'Confirmed',
      seatClass: 'First Class',
      accommodation: 'Premium Suite',
      price: 125000,
    },
    {
      id: 'trip-002',
      destination: 'Lunar Gateway Hotel',
      departureDate: '2025-12-24T08:15:00',
      returnDate: '2026-01-03T16:30:00',
      status: 'Pending',
      seatClass: 'Business',
      accommodation: 'Deluxe Room',
      price: 240000,
    }
  ];
  
  const pastTrips = [
    {
      id: 'trip-000',
      destination: 'Earth Orbit Experience',
      departureDate: '2024-05-10T07:00:00',
      returnDate: '2024-05-10T19:30:00',
      status: 'Completed',
      seatClass: 'Economy Plus',
      accommodation: 'N/A',
      price: 28000,
    }
  ];
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome Back, <span className="text-dubai-gold">{user.name.split(' ')[0]}</span>
            </h1>
            <p className="text-space-light text-lg">
              Manage your space journeys and prepare for your upcoming adventures.
            </p>
          </motion.div>
          
          {upcomingTrips.length > 0 && (
            <div className="mb-12">
              <div className="glass-panel p-8">
                <h2 className="text-2xl font-bold mb-6">Your Next Journey</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-bold text-dubai-gold mb-2">
                      {upcomingTrips[0].destination}
                    </h3>
                    <p className="text-space-light mb-4">
                      Departing in:
                    </p>
                    <CountdownTimer targetDate={new Date(upcomingTrips[0].departureDate)} />
                    <div className="mt-6">
                      <button className="btn-primary">View Details</button>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <TravelTips destination={upcomingTrips[0].destination} />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-2/3">
              <div className="glass-panel p-8">
                <div className="flex border-b border-white/10 mb-6">
                  <button 
                    className={`pb-4 px-4 font-medium ${activeTab === 'upcoming' ? 'text-dubai-gold border-b-2 border-dubai-gold' : 'text-space-light'}`}
                    onClick={() => setActiveTab('upcoming')}
                  >
                    Upcoming Trips
                  </button>
                  <button 
                    className={`pb-4 px-4 font-medium ${activeTab === 'past' ? 'text-dubai-gold border-b-2 border-dubai-gold' : 'text-space-light'}`}
                    onClick={() => setActiveTab('past')}
                  >
                    Past Journeys
                  </button>
                  <button 
                    className={`pb-4 px-4 font-medium ${activeTab === 'saved' ? 'text-dubai-gold border-b-2 border-dubai-gold' : 'text-space-light'}`}
                    onClick={() => setActiveTab('saved')}
                  >
                    Saved Itineraries
                  </button>
                </div>
                
                {activeTab === 'upcoming' && <UpcomingTrips trips={upcomingTrips} />}
                {activeTab === 'past' && <UpcomingTrips trips={pastTrips} />}
                {activeTab === 'saved' && (
                  <div className="text-center py-12">
                    <p className="text-space-light">You don't have any saved itineraries yet.</p>
                    <button className="btn-outline mt-4">Explore Destinations</button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="w-full md:w-1/3">
              <UserProfile user={user} />
              
              <div className="glass-panel p-6 mt-8">
                <h3 className="text-xl font-bold mb-4">Space Weather Alerts</h3>
                <p className="text-space-light mb-4">
                  All systems nominal for upcoming launches. Solar activity is within normal parameters.
                </p>
                <div className="mt-4 text-sm text-space-light">
                  Last updated: 2 hours ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 