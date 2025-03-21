'use client';

import React, { useState, useEffect } from '@/types/react-import-fix';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaRocket, FaBars, FaTimes, FaUserAstronaut } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Experience', href: '/experience' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-10 h-10 flex items-center justify-center mr-2">
            <div className={`absolute inset-0 bg-indigo-600 rounded-full opacity-20 ${isScrolled ? 'scale-75' : 'scale-100'} transition-transform duration-300`}></div>
            <FaRocket className={`relative text-2xl text-white`} />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            Dubai Space Travel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === link.href 
                  ? 'text-white bg-indigo-600/20' 
                  : 'text-gray-300 hover:text-white hover:bg-indigo-600/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/booking"
            className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium"
          >
            Book Now
          </Link>
          <Link 
            href="/account"
            className="ml-1 text-white p-2 rounded-full hover:bg-indigo-600/10 transition-colors"
            aria-label="Account"
          >
            <FaUserAstronaut />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="container mx-auto px-4 py-4 bg-gray-900/95 backdrop-blur-md">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`px-4 py-3 rounded-md font-medium ${
                  pathname === link.href 
                    ? 'text-white bg-indigo-600/20' 
                    : 'text-gray-300 hover:text-white hover:bg-indigo-600/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-700 flex items-center justify-between">
              <Link 
                href="/booking"
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-md transition-colors text-center font-medium flex-1 mr-2"
              >
                Book Now
              </Link>
              <Link 
                href="/account"
                className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-md transition-colors text-center flex-1 ml-2"
              >
                My Account
              </Link>
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar; 