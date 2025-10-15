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

  const specialCategories = [
    { name: "Singapore Deals", bgColor: "bg-red-600", textColor: "text-white", borderColor: "border-white" },
    { name: "Cars For USA", bgColor: "bg-blue-600", textColor: "text-white", borderColor: "border-white" },
    { name: "SUPERCARS", bgColor: "bg-gray-800", textColor: "text-blue-300", borderColor: "border-blue-300" }
  ];

  return (
    <section className="bg-[#ffffff] mx-6 py-3 px-6 relative z-10">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <span>Japanese Used Cars TOP</span>
        <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-800 font-medium">Car list</span>
      </div>

      <h2 className="font-roboto font-bold text-[20.31px] leading-[27.08px] tracking-[0%] align-middle mb-4">
        Japanese used cars for sale in stock
      </h2>
      {/* First Row */}
      <div className="grid grid-cols-12 gap-2 items-center">
        <div className='col-span-6'>
            <div className="grid grid-cols-12 gap-2 ">

            <div className="col-span-6 ">
              <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] w-full align-middle">
                <option>Select Maker</option>
              </select>
            </div>

            <div className="col-span-6 ">
              <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] w-full align-middle">
                <option>Select Model</option>
              </select>
            </div>
          </div>
        </div>

        <div className='col-span-6'>
            <div className='grid grid-cols-12 gap-2 items-center'>

              <div className="col-span-3 ">
                <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Min Year</option>
                </select>
              </div>

              <div className="col-span-3 ">
                <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Max Year</option>
                </select>
              </div>

              <div className="col-span-3 ">
                <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Min Price</option>
                </select>
              </div>

              <div className="col-span-3 ">
                <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Max Price</option>
                </select>
              </div>
            </div>
        </div>

      </div>
    
      {/* Second Row */}
      <div className="grid grid-cols-12 gap-2 mt-3 ">
        <div className='col-span-6'>
            <div className='grid grid-cols-12 gap-2 items-center'>
              <div className="col-span-6 ">
                <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Body Type</option>
                </select>
              </div>
              <div className="col-span-6 ">
                <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Select Steering</option>
                </select>
              </div>
            </div>
        </div>

        <div className="col-span-6 ">
        <div className='grid grid-cols-12 gap-2'>
        <div className="col-span-6">
          <div className='grid grid-cols-12 gap-2'>

           
            
            <div className="col-span-6 ">
                <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Min Mileage</option>
                </select>
            </div>

            <div className="col-span-6 ">
                <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Max Mileage</option>
                </select>
            </div>
            
          
          </div>
          </div>

          <div className="col-span-6">
          <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
            <option>Transmission</option>
          </select>
          </div>
          </div>
        
        </div>

       

        

      </div>

      {/* Third Row */}
      <div className="grid grid-cols-12 gap-2 mt-3">
        <div className="col-span-3">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6">
              <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Min Eng.cc</option>
              </select>
            </div>
            <div className="col-span-6 ">
              <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Max Eng.cc</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-span-9">
          <div className='grid grid-cols-12 gap-2'>

            <div className="col-span-4 ">
              <input 
                type="text" 
                placeholder="Engine Code" 
                className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] w-full align-middle"
              />
            </div>

            <div className="col-span-4 ">
              <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Color</option>
              </select>
            </div>

            <div className="col-span-4 ">
              <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Fuel</option>
              </select>
            </div>

            

          </div>
        </div>

      </div>

      {/* Fourth Row */}
      <div className="grid grid-cols-12 gap-2 mt-3 w-full">
        <div className='col-span-3'>
          <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6 ">
          <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
            <option>Min Seats</option>
          </select>
        </div>
        <div className="col-span-6 ">
          <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
            <option>Max Seats</option>
          </select>
        </div>
        </div>
        </div>


        <div className="col-span-9">
          <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4 ">
          <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
            <option>Deck</option>
          </select>
        </div>
        <div className="col-span-4 ">
          <select className="border border-gray-300 rounded-md px-2 py-1 font-[Font_1] font-normal text-[11.85px] leading-[16.92px] tracking-[0%] align-middle w-full">
            <option>Loading Capacity</option>
          </select>
        </div>
        <div className="col-span-4 ">
          
        </div>
        </div>
        </div>
      </div>

      {/* <div className="flex items-center gap-3  md:col-span-3 mt-2 w-full">
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
      </div> */}

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
