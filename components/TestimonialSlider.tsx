'use client';

import React, { useState, useEffect } from '@/types/react-import-fix';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../lib/mockData';

interface TestimonialSliderProps {
  maxVisible?: number;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ maxVisible = 3 }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1); // 1 for right, -1 for left
  const [autoplay, setAutoplay] = useState<boolean>(true);

  // Only use the number of testimonials specified by maxVisible prop
  const visibleTestimonials = testimonials.slice(0, maxVisible);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => clearInterval(interval);
  }, [activeIndex, autoplay, visibleTestimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % visibleTestimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + visibleTestimonials.length) % visibleTestimonials.length);
  };

  const handlePauseAutoplay = () => {
    setAutoplay(false);
  };

  const handleResumeAutoplay = () => {
    setAutoplay(true);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
        size={18}
      />
    ));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from those who have experienced the extraordinary journey beyond Earth.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto"
          onMouseEnter={handlePauseAutoplay}
          onMouseLeave={handleResumeAutoplay}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-8 md:mb-0 md:mr-10 flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-indigo-100">
                    <Image
                      src={visibleTestimonials[activeIndex].image}
                      alt={visibleTestimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-bold text-lg text-gray-800">{visibleTestimonials[activeIndex].name}</h3>
                    <p className="text-sm text-gray-500">{visibleTestimonials[activeIndex].role}</p>
                    <div className="flex justify-center mt-2">
                      {renderStars(visibleTestimonials[activeIndex].rating)}
                    </div>
                    <p className="text-xs mt-2 font-medium text-indigo-600">
                      {visibleTestimonials[activeIndex].trip}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <FaQuoteLeft className="text-4xl text-indigo-100 mb-4" />
                  <p className="text-gray-600 text-lg italic leading-relaxed">
                    {visibleTestimonials[activeIndex].content}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-3">
            <button
              onClick={prevTestimonial}
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider; 