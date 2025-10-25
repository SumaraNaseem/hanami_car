import { Link } from 'react-router-dom';
import carImage from "../assets/truck.png";
import group1 from "../assets/group1.png";
import whatsapp from "../assets/Component2.png";

export default function ClearanceCarCard({ car }) {
  return (
    <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-sm hover:shadow-md">
      {/* Car Image */}
      <div className="overflow-hidden bg-gray-200 flex items-center justify-center h-[161px] sm:h-[140px] lg:h-[160px]">
         <img src={carImage} alt={car.name} className="w-full h-full object-cover" />
      </div>
        
      {/* Car Details */}
      <div className="p-2 sm:p-3">
        <div className='mb-2'>
          <h3 className="font-inter font-[700] text-[10px] sm:text-[11px] lg:text-[11.15px] leading-[14px] sm:leading-[15px] lg:leading-[16.54px] tracking-[0%] align-middle line-clamp-2">{car.name}</h3>
        </div>
        
        <div className='space-y-1'>
          {/* Price Section */}
          <div className="flex justify-between items-center">
            <p className="font-inter font-[400] text-[11px] sm:text-[12px] lg:text-[13.15px] leading-[16px] sm:leading-[18px] lg:leading-[20.54px] tracking-[0%] text-gray-600">Price</p>
            <p className="font-inter font-bold text-[12px] sm:text-[13px] lg:text-[15.15px] leading-[16px] sm:leading-[18px] lg:leading-[23.54px] tracking-[0%] text-[#D7061F]">${car.price.toLocaleString()}</p>
          </div>
          
          {/* Discount */}
          <div className="mb-2">
            <p className="text-[9px] sm:text-[10px] lg:text-[10.15px] leading-[12px] sm:leading-[13px] lg:leading-[13.54px] text-gray-600">Save {car.discount}%</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <Link 
              to={`/cars/${car.id}`}
              className="text-[#D7061F] font-bold text-[9px] sm:text-[10px] lg:text-[10.15px] leading-[12px] sm:leading-[13px] lg:leading-[13.54px] flex items-center hover:underline"
            >
              View Details
              <img src={group1} alt="arrow" className="w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] lg:w-[10px] lg:h-[10px] ml-1" />
            </Link>
            
            <button className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px] overflow-hidden transition duration-200 hover:scale-110">
              <img src={whatsapp} alt="icon" className="w-full h-full object-contain" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
