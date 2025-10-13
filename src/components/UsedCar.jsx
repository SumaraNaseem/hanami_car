import React from 'react'
import vector37 from "../assets/vector37.png";
import vector36 from "../assets/vector36.png";
import vector35 from "../assets/vector35.png";
import vector30 from "../assets/Vector30.png";

function UsedCar() {
  const filterOptions = [
    { name: "Sale", type: "text" },
    { name: "Recommend", type: "text" },
    { name: "Commercial", type: "text" },
    { name: "Featured Stocks", type: "text" },
    { name: "Limited Offer", type: "text" },
    { name: "Vector 37", type: "image", image: vector37 },
    { name: "Vector 36", type: "image", image: vector36 },
    { name: "Vector 35", type: "image", image: vector35 }
  ];

  return (
    <section className="bg-[#ffffff] mx-6 py-3 px-6 rounded-lg shadow-sm  relative z-10">
    <h2 className="font-roboto font-bold text-[20.31px] leading-[27.08px] tracking-[0%] align-middle mb-4">
      Japanese Used Cars for Sale
    </h2>
    <div className="grid grid-cols-12 gap-2 w-full">
      <div className=" grid grid-cols-12 gap-2 lg:col-span-6">
      <div className="col-span-6">
        <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] w-full align-middle ">
          <option>Select Maker</option>
        </select>
      </div>
      <div className="col-span-6">
        <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] w-full align-middle">
          <option className=" ">Select Model</option>
        </select>
      </div>
      </div>
      <div className=" grid grid-cols-12 gap-2 lg:col-span-6">
      <div className="col-span-6 lg:col-span-3">
        <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
          <option>Min Year</option>
        </select>
      </div>
      <div className="col-span-6 lg:col-span-3">
        <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
          <option>Max Year</option>
        </select>
      </div>
      <div className="col-span-6 lg:col-span-3">
        <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
          <option>Min Price</option>
        </select>
      </div>
      <div className="col-span-6 lg:col-span-3">
        <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
          <option>Max Price</option>
        </select>
      </div>
     

      </div>
     
    </div>
    
    <div className="grid grid-cols-12 gap-2 mt-3 w-full">
      <div className=" grid grid-cols-12 gap-2 lg:col-span-6">
      <div className="col-span-6">
      <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
           <option>Body Type</option>
         </select>

     
      </div>
      <div className="col-span-6">
      <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
        <option className=" ">Select Steering</option>
      </select>
      </div>
      </div>
      <div className=" grid grid-cols-12 gap-2 lg:col-span-6">
    
     

      </div>
     
    </div>
    
   

    <div className="flex items-center gap-3  md:col-span-3 mt-2 w-full">
        {filterOptions.map((item, index) => (
          <label key={index} className="flex items-center gap-1 text-[14px]">
            <input type="checkbox" />
            {item.type === 'image' ? (
              <img src={item.image} alt={item.name} className="w-[72px] h-[14px] object-contain" />
            ) : (
              item.name
            )}
          </label>
        ))}
      </div>

    <div className="flex justify-center gap-3 mt-4">
      <button className="bg-[#D7061F]  px-8 py-1 rounded-md text-white gap-2 flex items-center">
        <div className='w-[20px] h-[20px] overflow-hidden'>
          <img src={vector30} alt="search" className='w-full h-full object-contain'/>
        </div> 
        Search
    </button>
      <button className="bg-gray-300 text-gray-700 px-8 py-1 rounded-md font-semibold hover:bg-gray-400 transition">
        Reset
      </button>
    </div>
  </section>
  )
}

export default UsedCar
