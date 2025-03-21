// Common types used across the application

// Destination types
export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  longDescription: string;
  price: number;
  duration: string;
  distance: string;
  featured: boolean;
  amenities: string[];
}

// Accommodation types
export interface Accommodation {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
}

// Extra service types
export interface Extra {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
}

// Testimonial types
export interface Testimonial {
  id: number;
  name: string;
  image: string;
  role: string;
  content: string;
  rating: number;
  trip: string;
}

// Booking data type
export interface BookingData {
  destinationId: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  seatClass: 'economy' | 'business' | 'first';
  accommodationId: string;
  extraIds: string[];
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  specialRequests?: string;
}

// User profile type
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  membershipTier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  spacePoints: number;
  createdAt: string;
  phoneNumber?: string;
  address?: string;
  preferences?: UserPreferences;
}

// User preferences type
export interface UserPreferences {
  seatPreference?: 'window' | 'aisle' | 'middle';
  mealPreference?: 'standard' | 'vegetarian' | 'vegan' | 'gluten-free';
  notificationPreferences?: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  travelInterests?: string[];
}

// Trip type
export interface Trip {
  id: string;
  destinationId: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  status: 'upcoming' | 'in-progress' | 'completed' | 'cancelled';
  seatClass: 'economy' | 'business' | 'first';
  accommodationId: string;
  accommodation: string;
  passengers: number;
  price: number;
  bookingDate: string;
  extraIds?: string[];
  extras?: string[];
} 