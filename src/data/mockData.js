/**
 * Mock data for development and testing
 * This file contains all mock data arrays used throughout the application
 */

import toyota from '../assets/toyota.png';
import nishan from '../assets/nishan.png';
import honda from '../assets/honda.png';
import mitsubishi from '../assets/mitsubishi.png';
import mazda from '../assets/mazda.png';
import subaru from '../assets/subaru.png';
import suzuki from '../assets/suzuki.png';
import daishat from '../assets/dihatsu.png';
import isuzu from '../assets/isuzu.png';
import hino from '../assets/hino.png';
import lexus from '../assets/lexus.png';
import mercedes from '../assets/mercidas.png';
import bmw from '../assets/bmw.png';
import audi from '../assets/audi.png';
import volvo from '../assets/volwo.png';
import ford from '../assets/ford.png';
import dongfeng from '../assets/dongfeng.png';
import sedan from '../assets/Vector1.png';
import coupe from '../assets/Vector2.png';
import wagon from '../assets/Vector3.png';
import hatchback from '../assets/Vector4.png';
import suv from '../assets/Vector5.png';
import convertible from '../assets/Vector6.png';
import pickup from '../assets/Vector7.png';
import trucks from '../assets/Vector8.png';
import bus from '../assets/Vector9.png';
import doller from '../assets/Vector10.png';
import jdm from '../assets/vector15.png';
import certified from '../assets/vector16.png';
import leftHandDrive from '../assets/Vector11.png';
import Manual from '../assets/Vector12.png';
import Diesel from '../assets/Vector13.png';
import fourWheelDrive from '../assets/vector14.png';
import Japan from '../assets/vector17.png';
import singapore from '../assets/vector18.png';
import thailand from '../assets/vector19.png';
import china from '../assets/vector20.png';
import vector37 from '../assets/vector37.png';
import vector36 from '../assets/vector36.png';
import vector35 from '../assets/vector35.png';
import searchCarImage from '../assets/Searchcar.jpg';

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
  { name: "Vector 37", type: "image", image: vector37 },
  { name: "Vector 36", type: "image", image: vector36 },
  { name: "Vector 35", type: "image", image: vector35 }
];

// Special Categories
export const specialCategories = [
  { name: "Singapore Deals", bgColor: "bg-red-600", textColor: "text-white", borderColor: "border-white" },
  { name: "Cars For USA", bgColor: "bg-blue-600", textColor: "text-white", borderColor: "border-white" },
  { name: "SUPERCARS", bgColor: "bg-gray-800", textColor: "text-blue-300", borderColor: "border-blue-300" }
];

// Car Brands (from Sidebar)
export const carBrands = [
  { name: 'Toyota', count: 30042, logo: toyota },
  { name: 'Nissan', count: 2505, logo: nishan },
  { name: 'Honda', count: 2016, logo: honda },
  { name: 'Mitsubishi', count: 877, logo: mitsubishi },
  { name: 'Mitsubishi Fuso', count: 190, logo: mitsubishi },
  { name: 'Mazda', count: 996, logo: mazda },
  { name: 'Subaru', count: 400, logo: subaru },
  { name: 'Suzuki', count: 198, logo: suzuki },
  { name: 'Daihatsu', count: 190, logo: daishat },
  { name: 'Isuzu', count: 190, logo: isuzu },
  { name: 'Hino', count: 141, logo: hino },
  { name: 'Lexus', count: 100, logo: lexus },
  { name: 'Mercedes-Benz', count: 68, logo: mercedes },
  { name: 'BMW', count: 34, logo: bmw },
  { name: 'Audi', count: 10, logo: audi },
  { name: 'Volvo', count: 6, logo: volvo },
  { name: 'Ford', count: 2, logo: ford },
  { name: 'Dong Feng', count: 1, logo: dongfeng }
];

// Body Types (from Sidebar)
export const bodyTypes = [
  { name: 'Sedan', count: 2505, icon: sedan },
  { name: 'Coupe', count: 240, icon: coupe },
  { name: 'Wagon', count: 400, icon: wagon },
  { name: 'Hatchback', count: 260, icon: hatchback },
  { name: 'SUV', count: 190, icon: suv },
  { name: 'Convertible', count: 14, icon: convertible },
  { name: 'Pickup (MiniBus)', count: 20, icon: pickup },
  { name: 'Trucks', count: 10, icon: trucks },
  { name: 'Bus', count: 10, icon: bus }
];

// Price Ranges (from Sidebar)
export const priceRanges = [
  { name: 'Used Cars under $1000', count: 0, icon: doller },
  { name: 'Used Cars under $2000', count: 0, icon: doller },
  { name: 'Used Cars under $3000', count: 0, icon: doller },
  { name: 'Used Cars under $4000', count: 0, icon: doller },
  { name: 'Used Cars under $5000', count: 0, icon: doller }
];

// Categories (from Sidebar)
export const categories = [
  { name: 'Left Hand Drive', count: 0, icon: leftHandDrive },
  { name: 'Manual', count: 0, icon: Manual },
  { name: 'Diesel', count: 0, icon: Diesel },
  { name: '4WD', count: 0, icon: fourWheelDrive },
  { name: 'JDM', count: 0, icon: jdm },
  { name: 'Certified Dealer', count: 0, icon: certified }
];

// Stock Locations (from Sidebar)
export const stockLocations = [
  { name: 'Japan', count: 348, flag: Japan },
  { name: 'Singapore', count: 84, flag: singapore },
  { name: 'Thailand', count: 16, flag: thailand },
  { name: 'China', count: 4, flag: china }
];

// Search Results Cars (from SearchResults)
export const mockAllCars = [
  { id: 1, year: "2024", make: "Toyota", model: "PRIUS HYBRID", capacity: "1.8L", image: searchCarImage, mileage: "15,200 km", engine: "1,800 cc (98)", transmission: "CVT", drive: "FWD", steering: "Right", price: "18,500", originalPrice: "22,000", discount: "3,500", discountPercent: "16%" },
  { id: 2, year: "2023", make: "Honda", model: "CIVIC TYPE R", capacity: "2.0L", image: searchCarImage, mileage: "8,500 km", engine: "2,000 cc (306)", transmission: "MT", drive: "FWD", steering: "Right", price: "35,200", originalPrice: "38,000", discount: "2,800", discountPercent: "7%" },
  { id: 3, year: "2023", make: "Nissan", model: "LEAF EV", capacity: "Electric", image: searchCarImage, mileage: "12,300 km", engine: "Electric (150)", transmission: "CVT", drive: "FWD", steering: "Right", price: "25,800", originalPrice: "28,500", discount: "2,700", discountPercent: "9%" },
  { id: 4, year: "2024", make: "Mazda", model: "CX-5 SUV", capacity: "2.5L", image: searchCarImage, mileage: "5,200 km", engine: "2,500 cc (187)", transmission: "AT", drive: "AWD", steering: "Right", price: "28,900", originalPrice: "32,000", discount: "3,100", discountPercent: "10%" },
  { id: 5, year: "2023", make: "Subaru", model: "WRX STI", capacity: "2.0L", image: searchCarImage, mileage: "18,500 km", engine: "2,000 cc (268)", transmission: "MT", drive: "AWD", steering: "Right", price: "32,500", originalPrice: "36,000", discount: "3,500", discountPercent: "10%" },
  { id: 6, year: "2018", make: "Toyota", model: "AQUA HYBRID", capacity: "1.5L", image: searchCarImage, mileage: "85,200 km", engine: "1,500 cc (74)", transmission: "CVT", drive: "FWD", steering: "Right", price: "8,200", originalPrice: "10,500", discount: "2,300", discountPercent: "22%" },
  { id: 7, year: "2017", make: "Honda", model: "FIT HYBRID", capacity: "1.3L", image: searchCarImage, mileage: "95,800 km", engine: "1,300 cc (100)", transmission: "CVT", drive: "FWD", steering: "Right", price: "7,800", originalPrice: "9,800", discount: "2,000", discountPercent: "20%" },
  { id: 8, year: "2016", make: "Nissan", model: "NOTE HYBRID", capacity: "1.2L", image: searchCarImage, mileage: "125,500 km", engine: "1,200 cc (79)", transmission: "CVT", drive: "FWD", steering: "Right", price: "6,500", originalPrice: "8,200", discount: "1,700", discountPercent: "21%" },
  { id: 9, year: "2015", make: "Toyota", model: "VITZ", capacity: "1.0L", image: searchCarImage, mileage: "145,200 km", engine: "1,000 cc (69)", transmission: "CVT", drive: "FWD", steering: "Right", price: "5,200", originalPrice: "6,800", discount: "1,600", discountPercent: "24%" },
  { id: 10, year: "2014", make: "Daihatsu", model: "MIRA", capacity: "0.66L", image: searchCarImage, mileage: "165,800 km", engine: "660 cc (52)", transmission: "CVT", drive: "FWD", steering: "Right", price: "4,800", originalPrice: "6,200", discount: "1,400", discountPercent: "23%" },
  { id: 11, year: "2022", make: "Lexus", model: "LC 500", capacity: "5.0L", image: searchCarImage, mileage: "12,500 km", engine: "5,000 cc (471)", transmission: "AT", drive: "RWD", steering: "Right", price: "85,500", originalPrice: "95,000", discount: "9,500", discountPercent: "10%" },
  { id: 12, year: "2021", make: "BMW", model: "M3 COMPETITION", capacity: "3.0L", image: searchCarImage, mileage: "18,200 km", engine: "3,000 cc (510)", transmission: "AT", drive: "RWD", steering: "Right", price: "72,800", originalPrice: "82,000", discount: "9,200", discountPercent: "11%" },
  { id: 13, year: "2020", make: "Mercedes", model: "AMG GT 63S", capacity: "4.0L", image: searchCarImage, mileage: "25,800 km", engine: "4,000 cc (630)", transmission: "AT", drive: "AWD", steering: "Right", price: "95,200", originalPrice: "105,000", discount: "9,800", discountPercent: "9%" },
  { id: 14, year: "2019", make: "Audi", model: "R8 V10 PLUS", capacity: "5.2L", image: searchCarImage, mileage: "22,500 km", engine: "5,200 cc (610)", transmission: "AT", drive: "AWD", steering: "Right", price: "88,500", originalPrice: "98,000", discount: "9,500", discountPercent: "10%" },
  { id: 15, year: "2018", make: "Porsche", model: "911 TURBO S", capacity: "3.8L", image: searchCarImage, mileage: "28,200 km", engine: "3,800 cc (580)", transmission: "AT", drive: "AWD", steering: "Right", price: "92,800", originalPrice: "102,000", discount: "9,200", discountPercent: "9%" },
  { id: 16, year: "2022", make: "Toyota", model: "CAMRY HYBRID", capacity: "2.5L", image: searchCarImage, mileage: "35,200 km", engine: "2,500 cc (215)", transmission: "CVT", drive: "FWD", steering: "Right", price: "22,800", originalPrice: "26,500", discount: "3,700", discountPercent: "14%" },
  { id: 17, year: "2021", make: "Honda", model: "ACCORD HYBRID", capacity: "2.0L", image: searchCarImage, mileage: "42,500 km", engine: "2,000 cc (212)", transmission: "CVT", drive: "FWD", steering: "Right", price: "19,500", originalPrice: "23,000", discount: "3,500", discountPercent: "15%" },
  { id: 18, year: "2020", make: "Nissan", model: "SKYLINE GT-R", capacity: "3.8L", image: searchCarImage, mileage: "15,800 km", engine: "3,800 cc (570)", transmission: "AT", drive: "AWD", steering: "Right", price: "65,200", originalPrice: "72,000", discount: "6,800", discountPercent: "9%" },
  { id: 19, year: "2019", make: "Mazda", model: "RX-7 SPIRIT R", capacity: "1.3L", image: searchCarImage, mileage: "45,200 km", engine: "1,300 cc (280)", transmission: "MT", drive: "RWD", steering: "Right", price: "42,800", originalPrice: "48,000", discount: "5,200", discountPercent: "11%" },
  { id: 20, year: "2018", make: "Subaru", model: "IMPREZA WRX", capacity: "2.0L", image: searchCarImage, mileage: "55,800 km", engine: "2,000 cc (268)", transmission: "MT", drive: "AWD", steering: "Right", price: "28,500", originalPrice: "32,000", discount: "3,500", discountPercent: "11%" },
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