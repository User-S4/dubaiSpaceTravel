'use client';

import React, { useState, useEffect } from '@/types/react-import-fix';
import { motion } from 'framer-motion';
import { FaRocket, FaCalendarAlt, FaUserAstronaut, FaCheck } from 'react-icons/fa';

type BookingFormProps = {
  step: number;
  bookingData: any;
  updateBookingData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
};

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
    image: '/images/accommodations/standard.jpg',
  },
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    description: 'Spacious quarters with premium amenities and enhanced comfort',
    price: 15000,
    image: '/images/accommodations/deluxe.jpg',
  },
  {
    id: 'premium',
    name: 'Premium Observatory',
    description: 'Luxury suite with private observation deck and premium service',
    price: 35000,
    image: '/images/accommodations/premium.jpg',
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

const BookingForm = ({ step, bookingData, updateBookingData, nextStep, prevStep }: BookingFormProps) => {
  const [selectedExtras, setSelectedExtras] = useState<string[]>(bookingData.extras || []);
  
  const calculateTotal = () => {
    let total = 0;
    
    // Base price from destination
    if (bookingData.destination) {
      const destination = destinations.find(d => d.id === bookingData.destination);
      if (destination) total += destination.price;
    }
    
    // Add accommodation price
    if (bookingData.accommodationType) {
      const accommodation = accommodationOptions.find(a => a.id === bookingData.accommodationType);
      if (accommodation) total += accommodation.price;
    }
    
    // Add extras
    if (selectedExtras.length > 0) {
      selectedExtras.forEach(extraId => {
        const extra = extras.find(e => e.id === extraId);
        if (extra) total += extra.price;
      });
    }
    
    // Adjust for passenger count
    total *= bookingData.passengers || 1;
    
    return total;
  };
  
  useEffect(() => {
    const newTotal = calculateTotal();
    updateBookingData({ totalPrice: newTotal, extras: selectedExtras });
  }, [selectedExtras, bookingData.destination, bookingData.accommodationType, bookingData.passengers]);
  
  const handleExtrasToggle = (extraId: string) => {
    if (selectedExtras.includes(extraId)) {
      setSelectedExtras(selectedExtras.filter(id => id !== extraId));
    } else {
      setSelectedExtras([...selectedExtras, extraId]);
    }
  };
  
  const handleSubmit = () => {
    if (step === 4) {
      alert('Booking confirmed! Your journey to the stars awaits.');
      // In a real app, this would submit to a backend API
    } else {
      nextStep();
    }
  };
  
  return (
    <div>
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className={`card cursor-pointer p-0 overflow-hidden transition-all duration-300 ${
                  bookingData.destination === destination.id 
                    ? 'ring-2 ring-dubai-gold scale-[1.02]' 
                    : 'hover:scale-[1.01]'
                }`}
                onClick={() => updateBookingData({ destination: destination.id })}
              >
                <div 
                  className="h-40 bg-center bg-cover" 
                  style={{ 
                    backgroundImage: `url(${destination.image || 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072'})` 
                  }}
                >
                  {bookingData.destination === destination.id && (
                    <div className="flex justify-end p-2">
                      <span className="bg-dubai-gold text-space-dark px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <FaCheck className="mr-1" /> Selected
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-space-light text-sm mb-3">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-dubai-gold font-bold">
                      ${destination.price.toLocaleString()}
                    </div>
                    <div className="text-space-light text-sm">
                      {destination.duration} • {destination.distance}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-between">
            <div></div>
            <button 
              className="btn-primary" 
              onClick={nextStep}
              disabled={!bookingData.destination}
            >
              Continue
            </button>
          </div>
        </motion.div>
      )}
      
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-space-light mb-2">Departure Date</label>
                <div className="bg-space-blue/50 rounded-md p-3 flex items-center">
                  <FaCalendarAlt className="text-dubai-gold mr-3" />
                  <input 
                    type="date" 
                    className="bg-transparent outline-none flex-1"
                    min={new Date().toISOString().split('T')[0]}
                    value={bookingData.departureDate || ''}
                    onChange={(e) => updateBookingData({ departureDate: e.target.value })}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-space-light mb-2">Return Date</label>
                <div className="bg-space-blue/50 rounded-md p-3 flex items-center">
                  <FaCalendarAlt className="text-dubai-gold mr-3" />
                  <input 
                    type="date" 
                    className="bg-transparent outline-none flex-1"
                    min={bookingData.departureDate || new Date().toISOString().split('T')[0]}
                    value={bookingData.returnDate || ''}
                    onChange={(e) => updateBookingData({ returnDate: e.target.value })}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-space-light mb-2">Number of Passengers</label>
              <div className="bg-space-blue/50 rounded-md p-3 flex items-center">
                <FaUserAstronaut className="text-dubai-gold mr-3" />
                <select 
                  className="bg-transparent outline-none flex-1"
                  value={bookingData.passengers || 1}
                  onChange={(e) => updateBookingData({ passengers: parseInt(e.target.value) })}
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num} className="bg-space-dark">
                      {num} {num === 1 ? 'Passenger' : 'Passengers'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-space-light mb-2">Seat Class</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['economy', 'business', 'first'].map((seatClass) => (
                  <div
                    key={seatClass}
                    className={`bg-space-blue/50 rounded-md p-3 cursor-pointer transition-all ${
                      bookingData.seatClass === seatClass ? 'ring-2 ring-dubai-gold' : ''
                    }`}
                    onClick={() => updateBookingData({ seatClass })}
                  >
                    <div className="font-medium capitalize">{seatClass}</div>
                    <div className="text-space-light text-sm">
                      {seatClass === 'economy' && 'Standard amenities'}
                      {seatClass === 'business' && 'Enhanced comfort'}
                      {seatClass === 'first' && 'Ultimate luxury'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between">
            <button className="btn-outline" onClick={prevStep}>
              Back
            </button>
            <button 
              className="btn-primary" 
              onClick={nextStep}
              disabled={!bookingData.departureDate || !bookingData.returnDate}
            >
              Continue
            </button>
          </div>
        </motion.div>
      )}
      
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Select Accommodation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {accommodationOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`bg-space-blue/50 rounded-md overflow-hidden cursor-pointer transition-all ${
                      bookingData.accommodationType === option.id ? 'ring-2 ring-dubai-gold' : ''
                    }`}
                    onClick={() => updateBookingData({ accommodationType: option.id })}
                  >
                    <div 
                      className="h-32 bg-center bg-cover" 
                      style={{ 
                        backgroundImage: `url(${option.image || 'https://images.unsplash.com/photo-1512824793006-d67c61371c63?q=80&w=1974'})` 
                      }}
                    ></div>
                    <div className="p-3">
                      <div className="font-medium">{option.name}</div>
                      <div className="text-space-light text-sm mb-2">
                        {option.description}
                      </div>
                      <div className="text-dubai-gold font-bold">
                        {option.price > 0 ? `+$${option.price.toLocaleString()}` : 'Included'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Extras & Experiences</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {extras.map((extra) => (
                  <div
                    key={extra.id}
                    className={`bg-space-blue/50 rounded-md p-4 cursor-pointer transition-all ${
                      selectedExtras.includes(extra.id) ? 'ring-2 ring-dubai-gold' : ''
                    }`}
                    onClick={() => handleExtrasToggle(extra.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ${
                        selectedExtras.includes(extra.id) ? 'bg-dubai-gold border-dubai-gold' : 'border-space-light'
                      }`}>
                        {selectedExtras.includes(extra.id) && <FaCheck className="text-space-dark text-xs" />}
                      </div>
                      <div>
                        <div className="font-medium">{extra.name}</div>
                        <div className="text-space-light text-sm mb-1">
                          {extra.description}
                        </div>
                        <div className="text-dubai-gold font-bold">
                          +${extra.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between">
            <button className="btn-outline" onClick={prevStep}>
              Back
            </button>
            <button 
              className="btn-primary" 
              onClick={nextStep}
              disabled={!bookingData.accommodationType}
            >
              Review Booking
            </button>
          </div>
        </motion.div>
      )}
      
      {step === 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            <div className="bg-space-blue/50 rounded-md p-6">
              <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b border-white/10">
                  <div className="text-space-light">Destination</div>
                  <div className="font-medium">
                    {destinations.find(d => d.id === bookingData.destination)?.name || 'Not selected'}
                  </div>
                </div>
                
                <div className="flex justify-between pb-3 border-b border-white/10">
                  <div className="text-space-light">Travel Dates</div>
                  <div className="font-medium">
                    {bookingData.departureDate} - {bookingData.returnDate}
                  </div>
                </div>
                
                <div className="flex justify-between pb-3 border-b border-white/10">
                  <div className="text-space-light">Passengers</div>
                  <div className="font-medium">
                    {bookingData.passengers} {bookingData.passengers === 1 ? 'Passenger' : 'Passengers'}
                  </div>
                </div>
                
                <div className="flex justify-between pb-3 border-b border-white/10">
                  <div className="text-space-light">Seat Class</div>
                  <div className="font-medium capitalize">
                    {bookingData.seatClass}
                  </div>
                </div>
                
                <div className="flex justify-between pb-3 border-b border-white/10">
                  <div className="text-space-light">Accommodation</div>
                  <div className="font-medium">
                    {accommodationOptions.find(a => a.id === bookingData.accommodationType)?.name || 'Not selected'}
                  </div>
                </div>
                
                {selectedExtras.length > 0 && (
                  <div className="pb-3 border-b border-white/10">
                    <div className="text-space-light mb-2">Extras</div>
                    <ul className="space-y-1">
                      {selectedExtras.map(extraId => (
                        <li key={extraId} className="font-medium">
                          {extras.find(e => e.id === extraId)?.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex justify-between pt-2">
                  <div className="text-xl font-bold">Total Price</div>
                  <div className="text-xl font-bold text-dubai-gold">
                    ${bookingData.totalPrice?.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-space-accent/10 border border-space-accent/30 rounded-md p-4">
              <p className="text-space-light">
                By proceeding with this booking, you agree to our Terms and Conditions and 
                acknowledge our Privacy Policy. A deposit of 20% will be charged at the time 
                of booking.
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between">
            <button className="btn-outline" onClick={prevStep}>
              Back
            </button>
            <button 
              className="btn-primary"
              onClick={handleSubmit}
            >
              Confirm Booking
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BookingForm; 