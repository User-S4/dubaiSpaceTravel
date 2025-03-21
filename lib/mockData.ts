// Mock data for the space travel platform

export const destinations = [
  {
    id: 'orbital-station',
    name: 'Orbital Luxury Station',
    image: '/images/destinations/orbital-station.jpg',
    description: 'Experience zero gravity in our state-of-the-art space station with panoramic Earth views.',
    longDescription: `
      The Orbital Luxury Station sits 400 kilometers above Earth, offering unparalleled views of our blue planet. 
      This first-class space habitat features luxury quarters, gourmet dining in zero gravity, and guided spacewalks.
      
      Guests can enjoy daily science demonstrations, photography sessions with Earth as your backdrop, and 
      virtual reality simulations of future Mars missions.
    `,
    price: 125000,
    duration: '7 days',
    distance: '400 km',
    featured: true,
    amenities: [
      'Zero-G lounge',
      'Observation deck',
      'Space cuisine',
      'Scientific activities',
      'Spacewalk opportunity',
      'Professional photography'
    ]
  },
  {
    id: 'lunar-gateway',
    name: 'Lunar Gateway Hotel',
    image: '/images/destinations/lunar-gateway.svg',
    description: 'Stay at the first hotel in lunar orbit with exclusive moon surface excursions.',
    longDescription: `
      The Lunar Gateway Hotel orbits just 100 kilometers above the lunar surface, providing spectacular 
      views of both the Moon and Earth. The highlight of this experience is the exclusive lunar landing excursion, 
      where guests will spend a full day exploring the Moon's surface in specialized vehicles.
      
      The Gateway features artificial gravity in living quarters for comfort, with designated zero-gravity 
      recreational areas for the authentic space experience.
    `,
    price: 250000,
    duration: '10 days',
    distance: '384,400 km',
    featured: true,
    amenities: [
      'Lunar excursion',
      'Moon dust souvenir',
      'Virtual reality suite',
      'Earth observation deck',
      'Space meditation chamber',
      'Artificial gravity quarters'
    ]
  },
  {
    id: 'mars-base',
    name: 'Mars Base One',
    image: '/images/destinations/mars-base.jpg',
    description: 'Visit the red planet and be among the first humans to set foot on Martian soil.',
    longDescription: `
      This pinnacle of space tourism takes you to humanity's frontier - Mars Base One. After a 6-month journey aboard 
      our luxury Mars Transit Vehicle, you'll land on the red planet for a month-long stay at our permanent Mars habitat.
      
      Explore the Martian landscape in pressurized rovers, conduct real scientific research, and experience what it's 
      like to live on another planet. Return with the ultimate bragging rights as one of the first hundred humans to visit Mars.
    `,
    price: 450000,
    duration: '90 days',
    distance: '54.6 million km',
    featured: false,
    amenities: [
      'Martian surface walks',
      'Scientific research participation',
      'Rover expeditions',
      'Long-duration space habitat',
      'Interplanetary communication',
      'Martian soil sample collection'
    ]
  },
  {
    id: 'venus-flyby',
    name: 'Venus Flyby Experience',
    image: '/images/destinations/venus-flyby.jpg',
    description: "Journey past Earth's mysterious sister planet on this scientific expedition.",
    longDescription: `
      Experience the scorching beauty of our nearest planetary neighbor on this scientific expedition. The Venus Flyby 
      spacecraft will take you on a 30-day journey, approaching within 1000 km of Venus's cloud tops.
      
      Participate in scientific observations, help collect data on Venus's atmosphere, and witness the most spectacular 
      views of this enigmatic world ever seen by human eyes.
    `,
    price: 175000,
    duration: '30 days',
    distance: '41 million km',
    featured: false,
    amenities: [
      'Scientific mission participation',
      'Astronomy lessons',
      'Cloud-top imaging',
      'Spectroscopy experiments',
      'Astrophotography opportunities',
      'Research publication credit'
    ]
  },
  {
    id: 'asteroid-mining',
    name: 'Asteroid Mining Operation',
    image: '/images/destinations/asteroid-mining.jpg',
    description: 'Join a commercial asteroid mining mission and bring home authentic space resources.',
    longDescription: `
      For the adventure capitalist, this expedition puts you at the forefront of the space resource economy. Join a commercial 
      mining operation to a near-Earth asteroid rich in precious metals and rare elements.
      
      Learn about resource extraction in zero gravity, help operate mining robots, and return with a certified space-mined 
      sample worth more than the trip itself. A truly unique combination of adventure tourism and investment opportunity.
    `,
    price: 300000,
    duration: '21 days',
    distance: 'Variable (NEO)',
    featured: false,
    amenities: [
      'Resource extraction participation',
      'Robot operation training',
      'Asteroid sample ownership',
      'Zero-G mineral processing',
      'Space economy investment opportunities',
      'Commercial space operations certificate'
    ]
  }
];

export const accommodationOptions = [
  {
    id: 'standard',
    name: 'Standard Pod',
    description: 'Comfortable sleeping quarters with essential amenities',
    longDescription: 'Our Standard Pods provide all the essentials for comfortable space living with efficient use of space. Each pod includes a sleeping chamber, personal storage, entertainment system, and access to shared bathroom facilities.',
    price: 0, // Included in base price
    image: '/images/accommodations/standard.jpg',
  },
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    description: 'Spacious quarters with premium amenities and enhanced comfort',
    longDescription: 'Upgrade to our Deluxe Suite for a more spacious environment with private bathroom facilities. These suites feature larger viewing windows, premium entertainment options, and enhanced sleeping arrangements for better rest in zero gravity.',
    price: 15000,
    image: '/images/accommodations/deluxe.jpg',
  },
  {
    id: 'premium',
    name: 'Premium Observatory',
    description: 'Luxury suite with private observation deck and premium service',
    longDescription: 'The ultimate in space luxury, our Premium Observatory suites feature a private observation dome, allowing 180-degree views of space. These suites include all deluxe amenities plus dedicated service, customized meal options, and priority scheduling for space activities.',
    price: 35000,
    image: '/images/accommodations/premium.jpg',
  }
];

export const extras = [
  {
    id: 'spacewalk',
    name: 'Spacewalk Experience',
    description: 'Guided 2-hour spacewalk outside the station',
    longDescription: 'Step outside into the vacuum of space with our trained EVA specialists. Experience the profound sensation of floating freely above Earth with nothing but your spacesuit between you and the cosmos. This guided experience includes comprehensive training, suit fitting, and a digital recording of your spacewalk.',
    price: 25000,
  },
  {
    id: 'gourmet',
    name: 'Gourmet Meal Package',
    description: 'Fine dining menu created by Michelin-starred chefs',
    longDescription: "Elevate your space dining with our gourmet meal package, featuring specially designed menus from Earth's top chefs. These meals are not just nutritionally optimized for space but represent culinary artistry adapted for zero gravity consumption. Includes special welcome and farewell dining experiences.",
    price: 5000,
  },
  {
    id: 'training',
    name: 'Extended Pre-flight Training',
    description: 'Additional preparation sessions for a more comfortable journey',
    longDescription: 'Maximize your comfort and enjoyment with extended pre-flight training at our Dubai facility. This additional training includes advanced zero-G adaptation techniques, emergency response practice, and personalized physical conditioning to minimize space adaptation syndrome and enhance your overall experience.',
    price: 10000,
  },
  {
    id: 'photography',
    name: 'Professional Photography Package',
    description: 'Professional photographer to document your journey',
    longDescription: 'Our space photography specialists will capture your entire journey from launch preparation to your most awe-inspiring moments in space. Receive a professionally edited photo and video package, including ultra-high resolution images suitable for large format printing and a documentary-style video of your space adventure.',
    price: 7500,
  },
  {
    id: 'comms',
    name: 'Enhanced Communication Package',
    description: 'Daily private video calls with family and personalized space broadcasts',
    longDescription: 'Stay connected with loved ones through daily high-bandwidth private video calls. This package also includes the ability to broadcast your experience to friends and family, with our production team assisting in creating personalized "space reports" that you can stream to your social media or share privately.',
    price: 3500,
  },
  {
    id: 'science',
    name: 'Science Mission Participation',
    description: 'Assist with real scientific experiments conducted in space',
    longDescription: 'Become a citizen scientist by participating in actual space research. Work alongside our science officers to conduct experiments that take advantage of the microgravity environment. Areas of research include materials science, biology, physics, and Earth observation. Receive academic credit on any resulting publications.',
    price: 8000,
  }
];

// Testimonials
export const testimonials = [
  {
    id: "1",
    name: "Ahmed Al Falasi",
    role: "CEO, Tech Innovators Ltd",
    image: "/images/testimonials/ahmed.svg",
    content: "The Mars Base One experience exceeded all expectations. The pre-flight training was comprehensive, and the staff made sure we were prepared for every aspect of the journey. Watching the Earth from such a distance was humbling and life-changing.",
    rating: 5,
    trip: "Mars Base One Expedition"
  },
  {
    id: "2",
    name: "Sophie Chen",
    role: "Astrophysicist",
    image: "/images/testimonials/sophie.svg",
    content: "As a scientist, I was thrilled by the educational aspects of the Venus Flyby. The team ensured we had optimal viewing positions during key moments. The on-board lectures added tremendous value to the experience.",
    rating: 5,
    trip: "Venus Flyby Experience"
  },
  {
    id: "3",
    name: "Jamal Ibrahim",
    role: "Adventure Blogger",
    image: "/images/testimonials/jamal.svg",
    content: "The Lunar Gateway Hotel offers unparalleled luxury in space. The Earth-rise view from my suite was breathtaking, and the zero-gravity spa treatments were innovative and relaxing. Worth every dirham!",
    rating: 4,
    trip: "Lunar Gateway Hotel Stay"
  },
  {
    id: "4",
    name: "Priya Sharma",
    role: "Travel Influencer",
    image: "/images/testimonials/priya.svg",
    content: "My week at the Orbital Luxury Station was the most unique travel experience of my career. The attention to detail is impressive, from the gourmet meals to the thoughtfully designed living spaces. The views are simply indescribable.",
    rating: 5,
    trip: "Orbital Luxury Station"
  },
  {
    id: "5",
    name: "Michael Rodriguez",
    role: "Retired Astronaut",
    image: "/images/testimonials/michael.svg",
    content: "Even with my background in space travel, Dubai Space Travel managed to create an experience that surprised and delighted me. Their commitment to both safety and luxury is unmatched in the private space tourism industry.",
    rating: 5,
    trip: "Asteroid Mining Operation"
  }
]; 