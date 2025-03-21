'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-space-dark/70 to-space-dark z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1974')",
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Contact <span className="text-dubai-gold gold-glow">Us</span>
            </h1>
            <p className="text-space-light text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Have questions about our space travel experiences? Our team of experts is here to help.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div 
              className="w-full lg:w-2/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass-panel p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaPaperPlane className="text-green-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Thank You!</h3>
                    <p className="text-space-light mb-6">
                      Your message has been sent successfully. One of our space travel advisors will contact you soon.
                    </p>
                    <button 
                      className="btn-primary"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-space-light mb-2">
                          Name <span className="text-dubai-gold">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-space-blue/50 rounded-md px-4 py-3 w-full text-white focus:outline-none focus:ring-1 focus:ring-dubai-gold"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-space-light mb-2">
                          Email <span className="text-dubai-gold">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-space-blue/50 rounded-md px-4 py-3 w-full text-white focus:outline-none focus:ring-1 focus:ring-dubai-gold"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-space-light mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-space-blue/50 rounded-md px-4 py-3 w-full text-white focus:outline-none focus:ring-1 focus:ring-dubai-gold"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-space-light mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="bg-space-blue/50 rounded-md px-4 py-3 w-full text-white focus:outline-none focus:ring-1 focus:ring-dubai-gold appearance-none"
                        >
                          <option value="">Select a subject</option>
                          <option value="Booking Inquiry">Booking Inquiry</option>
                          <option value="Destination Question">Destination Question</option>
                          <option value="Price Information">Price Information</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-space-light mb-2">
                        Message <span className="text-dubai-gold">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-space-blue/50 rounded-md px-4 py-3 w-full h-40 text-white focus:outline-none focus:ring-1 focus:ring-dubai-gold resize-none"
                        placeholder="Tell us how we can help you..."
                        required
                      ></textarea>
                    </div>
                    
                    {error && (
                      <div className="mb-6 p-4 bg-red-500/20 rounded-md text-red-100">
                        {error}
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      className="btn-primary w-full py-4 flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="glass-panel p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-space-blue/50 flex items-center justify-center mr-4 text-dubai-gold flex-shrink-0">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Address</h3>
                      <p className="text-space-light">
                        Burj Khalifa, Downtown Dubai<br />
                        United Arab Emirates
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-space-blue/50 flex items-center justify-center mr-4 text-dubai-gold flex-shrink-0">
                      <FaPhone />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-space-light">
                        +971 4 123 4567<br />
                        +971 50 987 6543
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-space-blue/50 flex items-center justify-center mr-4 text-dubai-gold flex-shrink-0">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-space-light">
                        info@dubaispacetravel.com<br />
                        support@dubaispacetravel.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full bg-space-blue/50 flex items-center justify-center mr-4 text-dubai-gold flex-shrink-0">
                      <FaClock />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Hours</h3>
                      <p className="text-space-light">
                        Monday - Friday: 9am - 8pm<br />
                        Saturday: 10am - 6pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-panel p-8">
                <h2 className="text-xl font-bold mb-4">VIP Contact</h2>
                <p className="text-space-light mb-6">
                  For private bookings and personalized space travel experiences, contact our VIP services team.
                </p>
                <button className="btn-secondary w-full">
                  Request VIP Contact
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 bg-space-blue">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Launch Center</h2>
          <p className="text-space-light max-w-3xl mx-auto mb-12">
            Tour our state-of-the-art facilities and experience our space travel technology firsthand.
          </p>
          <div className="h-80 w-full glass-panel overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <FaMapMarkerAlt className="text-dubai-gold text-6xl" />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 