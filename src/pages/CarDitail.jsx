import { Link, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import VehicleTags from '../components/VehicleTags';
import TopSellersSection from '../components/TopSellersSection';
import CustomerReviewsSection from '../components/CustomerReviewsSection';
import CarDitail from '../components/CarDitail';
import Gallery from '../components/Gallery';
import Specification from '../components/Specification';
import CarPrice from '../components/CarPrice';

// Sample car data
const cars = [
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
  { 
    id: 4, 
    name: 'Mercedes C-Class', 
    year: 2023, 
    price: '$45,000', 
    image: '🚗',
    description: 'Elegant luxury sedan with cutting-edge technology and comfort.',
    features: ['MBUX System', 'Ambient Lighting', 'Premium Package', 'Driver Assistance'],
    mileage: '15,000 miles',
    color: 'Blue'
  },
  { 
    id: 5, 
    name: 'Audi A4', 
    year: 2023, 
    price: '$40,000', 
    image: '🚙',
    description: 'Sophisticated sedan with quattro all-wheel drive and premium interior.',
    features: ['Quattro AWD', 'Virtual Cockpit', 'Bang & Olufsen', 'Sport Package'],
    mileage: '20,000 miles',
    color: 'Gray'
  },
  { 
    id: 6, 
    name: 'Tesla Model 3', 
    year: 2023, 
    price: '$35,000', 
    image: '🚘',
    description: 'Electric vehicle with autopilot capabilities and over-the-air updates.',
    features: ['Autopilot', 'Supercharging', 'Glass Roof', 'Premium Interior'],
    mileage: '8,000 miles',
    color: 'Red'
  },
];

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find(c => c.id === parseInt(id));

  if (!car) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 ">
        <CarDitail/>
          <div className=' grid grid-cols-12 px-6 gap-6'>
            <div className='col-span-7'>
              <Gallery />
              <Specification />
            </div>
            <div className='col-span-5'>
              <CarPrice />
            </div>
          </div>
        <VehicleTags/>
        <TopSellersSection/>
        <div className=' mt-6'>
        <CustomerReviewsSection/>
        </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <Link 
              to="/cars" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Car List
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <div className="text-8xl text-center mb-6">{car.image}</div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{car.name}</h1>
                <p className="text-3xl font-bold text-green-600 mb-6">{car.price}</p>
              </div>
              
              <div className="md:w-1/2 p-8 bg-gray-50">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Car Details</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="font-semibold text-gray-700">Year:</span>
                    <span className="ml-2 text-gray-600">{car.year}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Mileage:</span>
                    <span className="ml-2 text-gray-600">{car.mileage}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Color:</span>
                    <span className="ml-2 text-gray-600">{car.color}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                  <p className="text-gray-600">{car.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {car.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-blue-50">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Interested in this car?</h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
