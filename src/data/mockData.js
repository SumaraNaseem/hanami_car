/**
 * Mock data for development and testing
 * This file contains all mock data arrays used throughout the application
 */

// Vehicle Tags
export const vehicleTags = [
  'Vans', 'High Deck', 'Low Deck', '6 nuts', 'Truck', 'Air Brake',
  'Dump', 'Refrigerator(Freezer)', 'Flat Body', 'Box Body', 'Tanker', 'Vacuum',
  'Other', 'Sun Roof', 'Carrier', 'A/C', 'Push Start', 'Excavators',
  'Forklifts', 'JDM', 'Kei Truck'
];

// Filter Options
export const filterOptions = [
  { name: "Sale", type: "text" },
  { name: "Recommend", type: "text" },
  { name: "Commercial", type: "text" },
  { name: "Featured Stocks", type: "text" },
  { name: "Limited Offer", type: "text" },
];

// Special Categories
export const specialCategories = [
  { name: "Singapore Deals", bgColor: "bg-red-600", textColor: "text-white", borderColor: "border-white" },
  { name: "Cars For USA", bgColor: "bg-blue-600", textColor: "text-white", borderColor: "border-white" },
  { name: "SUPERCARS", bgColor: "bg-gray-800", textColor: "text-blue-300", borderColor: "border-blue-300" }
];

// Clearance Cars
export const mockClearanceCars = [
  { id: 1, name: 'Mitsubishi Fuso ', price: 12750, discount: 36, ref: '3040111' },
  { id: 2, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040112' },
  { id: 3, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040113' },
  { id: 4, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040114' },
  { id: 5, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040115' },
  { id: 6, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040116' },
  { id: 7, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040117' },
  { id: 8, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040118' },
  { id: 9, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040119' },
  { id: 10, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040120' },
  { id: 11, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040121' },
  { id: 12, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040122' },
  { id: 13, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040123' },
  { id: 14, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040124' }
];

// New Arrivals (same as clearance for now)
export const mockNewArrivals = [
  { id: 1, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040111' },
  { id: 2, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040112' },
  { id: 3, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040113' },
  { id: 4, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040114' },
  { id: 5, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040115' },
  { id: 6, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040116' },
  { id: 7, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040117' },
  { id: 8, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040118' },
  { id: 9, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040119' },
  { id: 10, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040120' },
  { id: 11, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040121' },
  { id: 12, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040122' },
  { id: 13, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040123' },
  { id: 14, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040124' }
];

// Top Sellers
export const mockTopSellers = [
  { id: 1, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' },
  { id: 2, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' },
  { id: 3, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' },
  { id: 4, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' },
  { id: 5, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' },
  { id: 6, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' },
  { id: 7, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' },
];

// Customer Reviews
export const customerReviews = [
  {
    id: 1,
    productName: 'Toyota Ractis',
    rating: 4,
    text: 'Smooth process from start to finish. The car arrived in perfect condition, exactly as described. Highly recommend Hanami Japan for anyone looking for reliable Japanese imports.',
    reviewerName: 'David R.'
  },
  {
    id: 2,
    productName: 'Honda Civic',
    rating: 5,
    text: 'Excellent service and communication throughout the entire process. The vehicle exceeded my expectations and arrived on time. Will definitely use Hanami Japan again.',
    reviewerName: 'Sarah M.'
  },
  {
    id: 3,
    productName: 'Nissan Skyline',
    rating: 4,
    text: 'Great experience buying my dream car. The team was professional and helpful. The car was exactly as advertised and in excellent condition.',
    reviewerName: 'Michael K.'
  }
];

// Sample cars data for CarDetail page
export const mockCars = [
  { 
    id: 1, 
    name: 'Toyota Camry', 
    year: 2023, 
    price: '$25,000', 
    image: '🚗',
    description: 'The Toyota Camry is a reliable and fuel-efficient sedan perfect for daily commuting.',
    features: ['Hybrid Engine', 'Safety Sense 2.0', 'Apple CarPlay', 'Heated Seats'],
    mileage: '25,000 miles',
    color: 'Silver'
  },
  { 
    id: 2, 
    name: 'Honda Civic', 
    year: 2023, 
    price: '$22,000', 
    image: '🚙',
    description: 'Sporty and efficient, the Honda Civic offers excellent value and performance.',
    features: ['Turbo Engine', 'Honda Sensing', 'Android Auto', 'Sunroof'],
    mileage: '18,000 miles',
    color: 'White'
  },
  { 
    id: 3, 
    name: 'BMW X5', 
    year: 2023, 
    price: '$55,000', 
    image: '🚘',
    description: 'Luxury SUV with premium features and exceptional driving dynamics.',
    features: ['xDrive AWD', 'Premium Sound', 'Leather Seats', 'Navigation'],
    mileage: '12,000 miles',
    color: 'Black'
  },
];

/**
 * Note: SearchResults.jsx currently has its own mock data inline.
 * When you're ready to use API, you can export mockSearchCars from here
 * and import it in SearchResults.jsx similar to other components.
 */