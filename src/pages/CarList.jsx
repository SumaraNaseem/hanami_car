import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';

// Sample car data
const cars = [
  { id: 1, name: 'Toyota Camry', year: 2023, price: '$25,000', image: '🚗' },
  { id: 2, name: 'Honda Civic', year: 2023, price: '$22,000', image: '🚙' },
  { id: 3, name: 'BMW X5', year: 2023, price: '$55,000', image: '🚘' },
  { id: 4, name: 'Mercedes C-Class', year: 2023, price: '$45,000', image: '🚗' },
  { id: 5, name: 'Audi A4', year: 2023, price: '$40,000', image: '🚙' },
  { id: 6, name: 'Tesla Model 3', year: 2023, price: '$35,000', image: '🚘' },
];

export default function CarList() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <Link 
              to="/" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-gray-800 mt-4">Our Car Collection</h1>
            <p className="text-gray-600 mt-2">Choose from our premium selection of vehicles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="text-6xl text-center mb-4">{car.image}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-2">Year: {car.year}</p>
                  <p className="text-2xl font-bold text-green-600 mb-4">{car.price}</p>
                  <Link 
                    to={`/cars/${car.id}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 inline-block text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}
