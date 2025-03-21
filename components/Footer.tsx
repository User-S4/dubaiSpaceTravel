'use client';

import Link from 'next/link';
import { FaRocket, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-space-dark border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FaRocket className="text-dubai-gold text-2xl" />
              <span className="text-xl font-bold text-white">
                Dubai <span className="text-dubai-gold">Space</span> Travel
              </span>
            </div>
            <p className="text-space-light mb-6">
              The premier destination for luxury space travel experiences. 
              From our hub in Dubai, we're taking adventurers to new frontiers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-space-blue flex items-center justify-center text-space-light hover:text-dubai-gold transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-space-blue flex items-center justify-center text-space-light hover:text-dubai-gold transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-space-blue flex items-center justify-center text-space-light hover:text-dubai-gold transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-space-blue flex items-center justify-center text-space-light hover:text-dubai-gold transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/destinations" className="text-space-light hover:text-dubai-gold transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-space-light hover:text-dubai-gold transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/accommodations" className="text-space-light hover:text-dubai-gold transition-colors">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-space-light hover:text-dubai-gold transition-colors">
                  Book a Trip
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-space-light hover:text-dubai-gold transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-space-light">
                <FaMapMarkerAlt className="text-dubai-gold flex-shrink-0 mt-1" />
                <span>Burj Khalifa, Downtown Dubai, UAE</span>
              </li>
              <li className="flex gap-3 text-space-light">
                <FaPhoneAlt className="text-dubai-gold flex-shrink-0 mt-1" />
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex gap-3 text-space-light">
                <FaEnvelope className="text-dubai-gold flex-shrink-0 mt-1" />
                <span>info@dubaispacetravel.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-space-light mb-4">
              Subscribe to our newsletter for the latest news and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-space-blue rounded px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-dubai-gold flex-1"
              />
              <button type="submit" className="btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-space-light text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dubai Space Travel. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-space-light text-sm hover:text-dubai-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-space-light text-sm hover:text-dubai-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-space-light text-sm hover:text-dubai-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 