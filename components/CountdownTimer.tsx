'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCalendarAlt } from 'react-icons/fa';

interface CountdownTimerProps {
  targetDate?: string; // ISO date string
  title?: string;
  subtitle?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate = '2025-06-15T00:00:00Z', // Default date
  title = 'Orbital Luxury Station Launch',
  subtitle = 'Your next adventure awaits'
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    // Calculate immediately and then set interval
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <motion.div 
      className="card h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="text-center mb-6">
        <div className="flex justify-center mb-3">
          <div className="bg-dubai-gold/20 p-3 rounded-full">
            <FaRocket className="text-dubai-gold text-2xl" />
          </div>
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex items-center justify-center text-space-light text-sm mt-1">
          <FaCalendarAlt className="mr-2 text-dubai-gold" />
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 text-center">
        {timeUnits.map(unit => (
          <motion.div 
            key={unit.label}
            className="bg-space-dark/50 rounded-lg p-3 border border-white/5"
            whileHover={{ y: -2, borderColor: 'rgba(212, 175, 55, 0.3)' }}
          >
            <motion.p 
              className="text-2xl font-semibold text-dubai-gold"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                repeatType: 'loop',
                repeatDelay: unit.label === 'Seconds' ? 0 : unit.label === 'Minutes' ? 59 : unit.label === 'Hours' ? 3599 : 86399
              }}
            >
              {unit.value.toString().padStart(2, '0')}
            </motion.p>
            <p className="text-xs text-space-light">{unit.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-space-light">
          Your journey to the stars begins soon. Make sure all pre-flight requirements are complete.
        </p>
        <button className="mt-4 px-4 py-2 bg-dubai-gold/20 text-dubai-gold rounded-md text-sm hover:bg-dubai-gold/30 transition-colors">
          View Pre-flight Checklist
        </button>
      </div>
    </motion.div>
  );
};

export default CountdownTimer; 