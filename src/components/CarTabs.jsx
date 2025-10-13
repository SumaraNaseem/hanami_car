import React from 'react'
import vector31 from "../assets/vector31.png";
import vector32 from "../assets/vector32.png";
import vector33 from "../assets/vector33.png";
import vector34 from "../assets/vector34.png";

function CarTabs() {
  return (
    <div>
      <div className="flex flex-wrap gap-3 mt-5 px-6">

        <div className="bg-[#D7061F] text-white px-4 py-1 rounded-[4px] font-[700] text-[11px] leading-[16px] flex items-center gap-1">

        <div className='w-[20px] h-[20px] overflow-hidden'>
          <img src={vector31} alt="search" className='w-full h-full object-contain'/>
        </div> 
           New Arrivals
        </div>

        <div className="bg-[#f0f1f2] text-[#D7061F] border border-[#D7061F] px-4 py-1 rounded-[4px] font-[700] text-[11px] leading-[16px] flex items-center gap-1">
        <div className='w-[20px] h-[20px] overflow-hidden'>
          <img src={vector32} alt="search" className='w-full h-full object-contain'/>
        </div>
          Clearance
        </div>

        <div className="bg-[#f0f1f2] text-[#D7061F] border border-[#D7061F] px-4 py-1 rounded-[4px] font-[700] text-[11px] leading-[16px] flex items-center gap-1">
        <div className='w-[20px] h-[20px] overflow-hidden'>
          <img src={vector33} alt="search" className='w-full h-full object-contain'/>
        </div>
          Premium Class
        </div>

        <div className="bg-[#f0f1f2] text-[#D7061F] border border-[#D7061F] px-4 py-1 rounded-[4px] font-[700] text-[11px] leading-[16px] flex items-center gap-1">
        <div className='w-[20px] h-[20px] overflow-hidden'>
          <img src={vector34} alt="search" className='w-full h-full object-contain'/>
        </div>
          3rd Party Seller
        </div>

      </div>
    </div>
  )
}

export default CarTabs
