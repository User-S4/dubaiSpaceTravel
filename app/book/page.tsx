'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import TripSummary from '@/components/TripSummary';
import { motion } from 'framer-motion';

export default function BookPage() {
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    tripType: '',
    destination: '',
    departureDate: null,
    returnDate: null,
    passengers: 1,
    accommodationType: '',
    seatClass: 'economy',
    extras: [],
    totalPrice: 0,
  });
  
  const updateBookingData = (data: any) => {
    setBookingData({ ...bookingData, ...data });
  };
  
  const nextStep = () => {
    setBookingStep(bookingStep + 1);
  };
  
  const prevStep = () => {
    setBookingStep(bookingStep - 1);
  };
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gold-glow">
              Book Your Space Journey
            </h1>
            <p className="text-space-light max-w-3xl mx-auto text-lg">
              Select your destination, choose your accommodation, and prepare for the adventure of a lifetime.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-2/3">
              <div className="glass-panel p-8">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-8">
                    {[1, 2, 3, 4].map((step) => (
                      <div 
                        key={step}
                        className={`relative flex items-center justify-center w-10 h-10 rounded-full 
                          ${bookingStep >= step ? 'bg-dubai-gold text-space-dark' : 'bg-space-blue text-space-light'} 
                          font-bold z-10`}
                      >
                        {step}
                        {step < 4 && (
                          <div 
                            className={`absolute left-full top-1/2 h-0.5 w-[calc(100%-40px)] -z-10
                              ${bookingStep > step ? 'bg-dubai-gold' : 'bg-space-blue'}`}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">
                    {bookingStep === 1 && 'Select Your Destination'}
                    {bookingStep === 2 && 'Choose Departure & Return'}
                    {bookingStep === 3 && 'Select Accommodations & Extras'}
                    {bookingStep === 4 && 'Review & Confirm'}
                  </h2>
                </div>
                
                <BookingForm 
                  step={bookingStep} 
                  bookingData={bookingData}
                  updateBookingData={updateBookingData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/3">
              <TripSummary bookingData={bookingData} />
              
              <div className="glass-panel p-6 mt-8">
                <h3 className="text-xl font-bold mb-4 text-dubai-gold">Need Assistance?</h3>
                <p className="text-space-light mb-4">
                  Our space travel experts are available 24/7 to help you plan your journey.
                </p>
                <button className="btn-outline w-full">Contact Support</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 