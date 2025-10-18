import { Link } from 'react-router-dom';
import RightSidebar from '../components/RightSidebar';
import HeroSection from '../components/HeroSection';
import UsedcarList from '../components/UsedcarList';
import PriceCalculator from '../components/PriceCalculator';
import SearchResults from '../components/SearchResults';
import VehicleTags from '../components/VehicleTags';
import TopSellersSection from '../components/TopSellersSection';
import CustomerReviewsSection from '../components/CustomerReviewsSection';

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
    <div className="md:flex bg-[#f0f1f2] justify-between lg:px-4">
      <div className="md:flex-1 mt-6" >
        <HeroSection />
        <UsedcarList/>
        <PriceCalculator />
        <SearchResults />
        <VehicleTags/>
        <TopSellersSection/>
        <div className=' mt-6'>
        <CustomerReviewsSection/>
        </div>
        
      </div>
      <div className='lg:w-[250px] w-full mt-6'><RightSidebar /></div>
      
    </div>
  );
}
