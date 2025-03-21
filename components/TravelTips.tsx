'use client';

import React, { useState } from '@/types/react-import-fix';
import { motion } from 'framer-motion';
import { FaLightbulb, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

interface Tip {
  id: number;
  title: string;
  content: string;
  category: 'pre-flight' | 'in-flight' | 'destination' | 'health';
}

const tips: Tip[] = [
  {
    id: 1,
    title: 'Pre-flight Training',
    content: 'Complete all 12 hours of virtual reality training simulations before your departure to familiarize yourself with zero-gravity conditions.',
    category: 'pre-flight'
  },
  {
    id: 2,
    title: 'Medication',
    content: 'Pack your prescribed space adaptation medication and take it 2 hours before launch as directed by your space physician.',
    category: 'health'
  },
  {
    id: 3,
    title: 'Hydration',
    content: 'In space, your body doesn\'t signal thirst as effectively. Set reminders to drink at least 2 liters of water daily during your journey.',
    category: 'in-flight'
  },
  {
    id: 4,
    title: 'Photography',
    content: 'Earth looks best from space during orbital sunrise/sunset. Set alarms for these events for spectacular photo opportunities.',
    category: 'destination'
  },
  {
    id: 5,
    title: 'Space Walks',
    content: 'Book your space walk at least 48 hours in advance to ensure equipment availability and proper preparation time.',
    category: 'destination'
  },
  {
    id: 6,
    title: 'Sleeping in Space',
    content: 'Secure yourself to your sleeping pod and use the provided straps for your arms. Many travelers find earplugs helpful for better rest.',
    category: 'in-flight'
  }
];

interface TravelTipsProps {
  destination?: string;
}

const TravelTips: React.FC<TravelTipsProps> = ({ destination }) => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredTips = selectedCategory 
    ? tips.filter(tip => tip.category === selectedCategory) 
    : tips;
  
  const nextTip = () => {
    setCurrentTipIndex((prevIndex) => 
      prevIndex === filteredTips.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTip = () => {
    setCurrentTipIndex((prevIndex) => 
      prevIndex === 0 ? filteredTips.length - 1 : prevIndex - 1
    );
  };
  
  const categories = [
    { value: null, label: 'All Tips' },
    { value: 'pre-flight', label: 'Pre-Flight' },
    { value: 'in-flight', label: 'In-Flight' },
    { value: 'destination', label: 'Destination' },
    { value: 'health', label: 'Health & Safety' }
  ];
  
  const currentTip = filteredTips[currentTipIndex] || tips[0];
  
  return (
    <motion.div 
      className="card h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-dubai-gold/20 p-3 rounded-full mr-4">
          <FaLightbulb className="text-dubai-gold text-xl" />
        </div>
        <h2 className="text-xl font-semibold">Space Travel Tips</h2>
      </div>
      
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(category => (
          <button
            key={category.value || 'all'}
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
              selectedCategory === category.value 
                ? 'bg-dubai-gold text-space-dark' 
                : 'bg-space-dark/50 text-space-light hover:bg-space-dark'
            }`}
            onClick={() => {
              setSelectedCategory(category.value);
              setCurrentTipIndex(0);
            }}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="relative h-[180px]">
        <motion.div
          key={currentTip.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-space-dark/40 rounded-lg p-5 h-full border border-white/10"
        >
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-medium text-dubai-gold">{currentTip.title}</h3>
            <span className="text-xs px-2 py-1 bg-space-blue rounded-full capitalize">
              {currentTip.category.replace('-', ' ')}
            </span>
          </div>
          <p className="text-sm text-space-light">{currentTip.content}</p>
        </motion.div>
        
        <div className="absolute top-1/2 -translate-y-1/2 -left-3">
          <button 
            onClick={prevTip} 
            className="bg-space-dark/80 text-white rounded-full p-2 hover:bg-dubai-gold/20 hover:text-dubai-gold transition-colors"
            aria-label="Previous tip"
          >
            <FaChevronLeft />
          </button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 -right-3">
          <button 
            onClick={nextTip} 
            className="bg-space-dark/80 text-white rounded-full p-2 hover:bg-dubai-gold/20 hover:text-dubai-gold transition-colors"
            aria-label="Next tip"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        {filteredTips.map((tip, index) => (
          <button
            key={tip.id}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentTipIndex ? 'bg-dubai-gold' : 'bg-space-light/30'
            }`}
            onClick={() => setCurrentTipIndex(index)}
            aria-label={`Go to tip ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-dubai-gold text-sm hover:underline">
          View All Space Travel Tips
        </button>
      </div>
    </motion.div>
  );
};

export default TravelTips; 