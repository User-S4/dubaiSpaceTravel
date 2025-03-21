'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaCog, FaSignOutAlt, FaMedal, FaStar } from 'react-icons/fa';

interface UserProfileProps {
  user?: {
    name: string;
    email: string;
    profileImage: string;
    memberSince: string;
    membershipTier: string;
    spacePoints: number;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({
  user = {
    name: 'Mohammed Al Mansoori',
    email: 'mohammed@example.com',
    profileImage: '/images/user-profile.jpg',
    memberSince: 'January 2024',
    membershipTier: 'Gold',
    spacePoints: 1250
  }
}) => {
  // Placeholder avatar if no profile image is available
  const avatarFallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0A1128&color=D4AF37&size=150`;
  
  return (
    <motion.div 
      className="card h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-dubai-gold">
          <Image
            src={user.profileImage || avatarFallback}
            alt={user.name}
            fill
            className="object-cover"
            onError={(e) => {
              // If image fails to load, fallback to avatar
              const target = e.target as HTMLImageElement;
              target.src = avatarFallback;
            }}
          />
        </div>
        
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-space-light text-sm mb-2">{user.email}</p>
          
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <span className="bg-dubai-gold/20 text-dubai-gold text-xs px-3 py-1 rounded-full flex items-center">
              <FaMedal className="mr-1" />
              {user.membershipTier} Member
            </span>
            <span className="bg-space-dark/50 text-space-light text-xs px-3 py-1 rounded-full">
              Member since {user.memberSince}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 border-t border-b border-white/10 py-4 my-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-space-light">Space Points</p>
            <div className="flex items-center">
              <FaStar className="text-dubai-gold mr-2" />
              <span className="font-semibold text-xl">{user.spacePoints.toLocaleString()}</span>
            </div>
          </div>
          
          <Link 
            href="/dashboard/rewards" 
            className="text-dubai-gold text-sm hover:underline"
          >
            View Rewards
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <Link 
          href="/dashboard/profile" 
          className="flex flex-col items-center p-3 bg-space-dark/30 rounded-lg hover:bg-space-dark/50 transition-colors"
        >
          <FaUser className="text-dubai-gold mb-2" />
          <span className="text-xs">Profile</span>
        </Link>
        
        <Link 
          href="/dashboard/settings" 
          className="flex flex-col items-center p-3 bg-space-dark/30 rounded-lg hover:bg-space-dark/50 transition-colors"
        >
          <FaCog className="text-dubai-gold mb-2" />
          <span className="text-xs">Settings</span>
        </Link>
        
        <button 
          className="flex flex-col items-center p-3 bg-space-dark/30 rounded-lg hover:bg-space-dark/50 transition-colors"
        >
          <FaSignOutAlt className="text-dubai-gold mb-2" />
          <span className="text-xs">Sign Out</span>
        </button>
      </div>
    </motion.div>
  );
};

export default UserProfile; 