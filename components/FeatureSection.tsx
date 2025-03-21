'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaGlobeAsia, 
  FaBed, 
  FaUserAstronaut, 
  FaShieldAlt, 
  FaGlobe
} from 'react-icons/fa';

interface FeatureProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const FeatureSection: React.FC = () => {
  const features: FeatureProps[] = [
    {
      id: 'luxury',
      title: 'Luxury Experience',
      description: 'Travel in unparalleled comfort with our meticulously designed spacecraft, offering panoramic views and exquisite onboard services.',
      icon: <FaRocket />,
      color: 'bg-indigo-100 text-indigo-500'
    },
    {
      id: 'destinations',
      title: 'Unique Destinations',
      description: 'Explore destinations beyond Earth from orbital stations to the lunar surface and Mars habitats — sights few have ever experienced.',
      icon: <FaGlobeAsia />,
      color: 'bg-blue-100 text-blue-500'
    },
    {
      id: 'accommodations',
      title: 'Space Accommodations',
      description: 'Stay in state-of-the-art space habitats and hotels, each offering spectacular views and zero-gravity experiences in complete safety.',
      icon: <FaBed />,
      color: 'bg-purple-100 text-purple-500'
    },
    {
      id: 'training',
      title: 'Expert Training',
      description: 'Our comprehensive pre-flight training program prepares you physically and mentally for the unique experience of space travel.',
      icon: <FaUserAstronaut />,
      color: 'bg-green-100 text-green-500'
    },
    {
      id: 'safety',
      title: 'Safety First',
      description: 'Your well-being is our top priority, with multiple redundant safety systems and experienced crew members ensuring a secure journey.',
      icon: <FaShieldAlt />,
      color: 'bg-red-100 text-red-500'
    },
    {
      id: 'technology',
      title: 'Cutting-Edge Technology',
      description: 'Experience space travel powered by the latest innovations in propulsion, life support systems, and spacecraft engineering.',
      icon: <FaGlobe />,
      color: 'bg-yellow-100 text-yellow-500'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
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
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Dubai Space Travel</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience space travel like never before with our luxury services tailored to provide the ultimate celestial journey.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="p-8">
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection; 