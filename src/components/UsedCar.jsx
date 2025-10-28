import React from 'react'
import vector30 from "../assets/Vector30.png";
import { filterOptions } from '../data/mockData';

function UsedCar() {

  return (
    <section className="bg-[#ffffff] sm:mx-4 lg:mx-6 py-3 px-3 sm:px-4 lg:px-6 rounded-md shadow-sm relative z-10">
      <h2 className="font-roboto font-bold text-[16px] sm:text-[18px] lg:text-[20.31px] leading-[20px] sm:leading-[24px] lg:leading-[27.08px] tracking-[0%] align-middle mb-4">
        Japanese Used Cars for Sale
      </h2>
      
      {/* First Row - Maker and Model */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2 w-full">
        <div className="sm:col-span-1 lg:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <select className="border border-gray-300 rounded-md px-2 py-2 font-inter font-normal text-[11px] sm:text-[11.85px] leading-[14px] sm:leading-[16.92px] tracking-[0%] w-full align-middle">
                <option>Select Maker</option>
              </select>
            </div>
            <div>
              <select className="border border-gray-300 rounded-md px-2 py-2 font-inter font-normal text-[11px] sm:text-[11.85px] leading-[14px] sm:leading-[16.92px] tracking-[0%] w-full align-middle">
                <option>Select Model</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="sm:col-span-1 lg:col-span-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <div>
              <select className="border border-gray-300 rounded-md px-2 py-2 font-inter font-normal text-[11px] sm:text-[11.85px] leading-[14px] sm:leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Min Year</option>
              </select>
            </div>
            <div>
              <select className="border border-gray-300 rounded-md px-2 py-2 font-inter font-normal text-[11px] sm:text-[11.85px] leading-[14px] sm:leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Max Year</option>
              </select>
            </div>
            <div>
              <select className="border border-gray-300 rounded-md px-2 py-2 font-inter font-normal text-[11px] sm:text-[11.85px] leading-[14px] sm:leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Min Price</option>
              </select>
            </div>
            <div>
              <select className="border border-gray-300 rounded-md px-2 py-2 font-inter font-normal text-[11px] sm:text-[11.85px] leading-[14px] sm:leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Max Price</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Row - Body Type and Steering */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2 mt-3 w-full">
        <div className="sm:col-span-1 lg:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <select className="border border-gray-300 rounded-md px-2 py-2 font-inter font-normal text-[11px] sm:text-[11.85px] leading-[14px] sm:leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Body Type</option>
              </select>
            </div>
            <div>
              <select className="border border-gray-300 rounded-md px-2 py-2 font-inter font-normal text-[11px] sm:text-[11.85px] leading-[14px] sm:leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Select Steering</option>
              </select>
            </div>
          </div>
        </div>
        <div className="sm:col-span-1 lg:col-span-6">
          {/* Empty space for desktop layout consistency */}
        </div>
      </div>
      
      {/* Filter Options */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 w-full">
        {filterOptions.map((item, index) => (
          <label key={index} className="flex items-center gap-1 text-[12px] sm:text-[14px] whitespace-nowrap">
            <input type="checkbox" className="w-3 h-3 sm:w-4 sm:h-4" />
            {item.type === 'image' ? (
              <img src={item.image} alt={item.name} className="w-[60px] sm:w-[72px] h-[12px] sm:h-[14px] object-contain" />
            ) : (
              <span className="text-[11px] sm:text-[12px] lg:text-[14px]">{item.name}</span>
            )}
          </label>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
        <button className="bg-[#D7061F] px-6 sm:px-8 py-2 sm:py-1 rounded-md text-white gap-2 flex items-center justify-center">
          <div className='w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] overflow-hidden'>
            <img src={vector30} alt="search" className='w-full h-full object-contain'/>
          </div> 
          <span className="text-[12px] sm:text-[14px]">Search</span>
        </button>
        <button className="bg-gray-300 text-gray-700 px-8 sm:px-12 py-2 sm:py-1 rounded-md font-semibold hover:bg-gray-400 transition text-[12px] sm:text-[14px]">
          Reset
        </button>
      </div>
    </section>
  )
}

export default UsedCar
