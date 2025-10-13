import { Link } from 'react-router-dom';
import carImage from "../assets/truck.png";
import group1 from "../assets/group1.png";
import whatsapp from "../assets/Component2.png";

export default function ClearanceCarCard({ car }) {
  return (
    <div className="overflow-hidden transition duration-300">
      
      
      <div className="overflow-hidden bg-gray-200 flex items-center justify-center">
         <img src={carImage} alt={car.name} className="w-full h-full object-cover" />
      </div>
        
      
      
      {/* Car Details */}
      <div className="mt-2 h-[88px]  relative">
          <div className='h-[34px]'>
          <h3 className="font-[Font_1] font-[700] text-[11.15px] leading-[16.54px] tracking-[0%] align-middle">{car.name}</h3>
          </div>
          <div className=' h-[54px] absolute left-0 bottom-0'>
          {/* Price Section */}
          <div className="mb- flex justify-between">
            <p className="font-[Font_1] font-[400] text-[13.15px] leading-[20.54px] tracking-[0%] text-gray-600">Price</p>
            <p className="font-[Font_1] font-bold text-[15.15px] leading-[23.54px] tracking-[0%] text-[#D7061F]">${car.price.toLocaleString()}</p>
          </div>
          
          {/* Discount */}
          <div className="mb-">
            <p className="text-[10.15px] leading-[13.54px]  text-gray-600">Save {car.discount}%</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <Link 
              to={`/cars/${car.id}`}
              className="text-[#D7061F] font-bold  text-[10.15px] leading-[13.54px] flex items-center"
            >
              View Details
              <img src={group1} alt="arrow" className="w-[10px] h-[10px]" />
            </Link>
            
            <button className="w-[20px]  h-[20px] overflow-hidden transition duration-200">
              <img src={whatsapp} alt="icon" className="w-full h-full object-contain" />
            </button>
          </div>
          </div>

      </div>
    </div>
  );
}
