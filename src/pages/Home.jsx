import RightSidebar from '../components/RightSidebar';
import HeroSection from '../components/HeroSection';
import UsedCar from '../components/UsedCar';
import CarTabs from '../components/CarTabs';
import ClearanceSection from '../components/ClearanceSection';
import TopSellersSection from '../components/TopSellersSection';
import VehicleTags from '../components/VehicleTags';
import CustomerReviewsSection from '../components/CustomerReviewsSection';
import NewArrivals from '../components/NewArrivals';

export default function Home() {
  return (
    <div className="md:flex mb-6 bg-[#f0f1f2] justify-between">
      <div className="flex-1 mt-6">
        <HeroSection />
      <UsedCar/>
       <CarTabs/>
        <ClearanceSection />
        
         <NewArrivals />
      <TopSellersSection />
         <VehicleTags />
        <CustomerReviewsSection /> 
      </div>

      <div className='lg:w-[250px]  w-full mt-6'>
        <RightSidebar />
      </div>                                                     
    </div>
  );
}
