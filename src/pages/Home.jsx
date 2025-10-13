import Sidebar from '../components/Sidebar';
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
    <div className="flex  bg-[#f0f1f2] justify-between px-4">
      
      <div className='w-[200px]  '><Sidebar /></div>

      <div className="flex-1">
        <HeroSection />
        <UsedCar/>
        <CarTabs/>
        <ClearanceSection />
        <NewArrivals />
        <TopSellersSection />
        <VehicleTags />
        <CustomerReviewsSection />
      </div>

      <div className='w-[200px] '>
      <RightSidebar />
      </div>                                                     

    </div>
  );
}
