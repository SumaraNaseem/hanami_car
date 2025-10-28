import ClearanceCarCard from './ClearanceCarCard';
import svg1 from '../assets/SVG1.png';
import { mockNewArrivals } from '../data/mockData';

export default function NewArrivals() {
  return (
    <section className="py-4">
      <div className="mx-auto sm:px-4 lg:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="bg-[#D7061F] text-[8px] sm:text-[9px] lg:text-[10.15px] leading-[10px] sm:leading-[12px] lg:leading-[13.54px] text-white px-2 sm:px-3 py-1 rounded-sm">
              New
            </div>
            <h2 className="font-roboto font-bold text-[16px] sm:text-[18px] lg:text-[20.31px] leading-[20px] sm:leading-[24px] lg:leading-[27.08px] align-middle text-gray-800">New Arrivals</h2>
          </div>
          <button className="border text-[9px] sm:text-[10px] lg:text-[11px] leading-[12px] sm:leading-[14px] lg:leading-[16px] border-[#D7061F] text-[#D7061F] px-2 sm:px-3 lg:px-4 py-1 rounded-[4px] bg-white transition duration-300 font-bold flex items-center gap-1">
            See More 
            <img src={svg1} alt="arrow" className="w-[7px] h-[7px] sm:w-[8px] sm:h-[8px] lg:w-[10px] lg:h-[10px]" />
          </button>
        </div>
        
        {/* Car Grid - Mobile Scroll, Desktop Grid */}
        <div className="block sm:hidden">
          {/* Mobile: Horizontal Scroll */}
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {mockNewArrivals.map((car) => (
              <div key={car.id} className="flex-shrink-0 w-[200px]">
                <ClearanceCarCard car={car} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4">
          {clearanceCars.map((car) => (
            <ClearanceCarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
