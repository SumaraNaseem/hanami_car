import React from 'react'
import vector31 from "../assets/vector31.png";
import vector32 from "../assets/vector32.png";
import vector33 from "../assets/vector33.png";
import vector34 from "../assets/vector34.png";

function CarTabs() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mt-5  sm:px-4 lg:px-6">

        <div className="w-full sm:w-auto bg-[#D7061F] text-white px-3 sm:px-4 py-2 sm:py-1.5 rounded-[4px] font-inter font-[700] text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] flex items-center justify-center gap-1 sm:gap-2 cursor-pointer hover:bg-[#B8051A] transition duration-200">

        <div className='w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px] overflow-hidden'>
          <img src={vector31} alt="search" className='w-full h-full object-contain'/>
        </div> 
           <span className="whitespace-nowrap">New Arrivals</span>
        </div>

        <div className="w-full sm:w-auto bg-[#f0f1f2] text-[#D7061F] border border-[#D7061F] px-3 sm:px-4 py-2 sm:py-1.5 rounded-[4px] font-inter font-[700] text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] flex items-center justify-center gap-1 sm:gap-2 cursor-pointer hover:bg-[#D7061F] hover:text-white transition duration-200">
        <div className='w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px] overflow-hidden'>
          <img src={vector32} alt="search" className='w-full h-full object-contain'/>
        </div>
          <span className="whitespace-nowrap">Clearance</span>
        </div>

        <div className="w-full sm:w-auto bg-[#f0f1f2] text-[#D7061F] border border-[#D7061F] px-3 sm:px-4 py-2 sm:py-1.5 rounded-[4px] font-inter font-[700] text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] flex items-center justify-center gap-1 sm:gap-2 cursor-pointer hover:bg-[#D7061F] hover:text-white transition duration-200">
        <div className='w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px] overflow-hidden'>
          <img src={vector33} alt="search" className='w-full h-full object-contain'/>
        </div>
          <span className="whitespace-nowrap">Premium Class</span>
        </div>

        <div className="w-full sm:w-auto bg-[#f0f1f2] text-[#D7061F] border border-[#D7061F] px-3 sm:px-4 py-2 sm:py-1.5 rounded-[4px] font-inter font-[700] text-[10px] sm:text-[11px] leading-[14px] sm:leading-[16px] flex items-center justify-center gap-1 sm:gap-2 cursor-pointer hover:bg-[#D7061F] hover:text-white transition duration-200">
        <div className='w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px] overflow-hidden'>
          <img src={vector34} alt="search" className='w-full h-full object-contain'/>
        </div>
          <span className="whitespace-nowrap">3rd Party Seller</span>
        </div>

      </div>
    </div>
  )
}

export default CarTabs
