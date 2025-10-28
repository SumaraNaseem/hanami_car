import React from 'react'
import vector30 from "../assets/Vector30.png";
import { filterOptions, specialCategories } from '../data/mockData';

function UsedCar() {

  return (
    <section className="bg-[#ffffff] mx-0 sm:mx-4 lg:mx-6 py-3 px-3 sm:px-4 lg:px-6 relative z-10">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center text-[10px] sm:text-[11px] lg:text-sm text-gray-600 mb-3 sm:mb-4">
        <span>Japanese Used Cars TOP</span>
        <svg className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-800 font-medium">Car list</span>
      </div>

      <h2 className="font-roboto font-bold text-[16px] sm:text-[18px] lg:text-[20.31px] leading-[20px] sm:leading-[24px] lg:leading-[27.08px] tracking-[0%] align-middle mb-3 sm:mb-4">
        Japanese used cars for sale in stock
      </h2>
      {/* First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-2 items-center">
        <div className='lg:col-span-6'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2">

            <div className="sm:col-span-1">
              <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] w-full align-middle">
                <option>Select Maker</option>
              </select>
            </div>

            <div className="sm:col-span-1">
              <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] w-full align-middle">
                <option>Select Model</option>
              </select>
            </div>
          </div>
        </div>

        <div className='lg:col-span-6'>
            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-12 gap-2 items-center'>

              <div className="lg:col-span-3">
                <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Min Year</option>
                </select>
              </div>

              <div className="lg:col-span-3">
                <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Max Year</option>
                </select>
              </div>

              <div className="lg:col-span-3">
                <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Min Price</option>
                </select>
              </div>

              <div className="lg:col-span-3">
                <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Max Price</option>
                </select>
              </div>
            </div>
        </div>

      </div>
    
      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-2 mt-3">
        <div className='lg:col-span-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 items-center'>
              <div className="sm:col-span-1">
                <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Body Type</option>
                </select>
              </div>
              <div className="sm:col-span-1">
                <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Select Steering</option>
                </select>
              </div>
            </div>
        </div>

        <div className="lg:col-span-6">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2'>
        <div className="sm:col-span-1 lg:col-span-6">
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>

            <div className="sm:col-span-1">
                <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Min Mileage</option>
                </select>
            </div>

            <div className="sm:col-span-1">
                <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
                  <option>Max Mileage</option>
                </select>
            </div>
            
          </div>
          </div>

          <div className="sm:col-span-1 lg:col-span-6">
          <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
            <option>Transmission</option>
          </select>
          </div>
          </div>
        
        </div>

      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-2 mt-3">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="sm:col-span-1">
              <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Min Eng.cc</option>
              </select>
            </div>
            <div className="sm:col-span-1">
              <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Max Eng.cc</option>
              </select>
            </div>
          </div>
        </div>

        <div className="lg:col-span-9">
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2'>

            <div className="sm:col-span-1 lg:col-span-4">
              <input 
                type="text" 
                placeholder="Engine Code" 
                className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] w-full align-middle"
              />
            </div>

            <div className="sm:col-span-1 lg:col-span-4">
              <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Color</option>
              </select>
            </div>

            <div className="sm:col-span-1 lg:col-span-4">
              <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
                <option>Fuel</option>
              </select>
            </div>

          </div>
        </div>

      </div>

      {/* Fourth Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-2 mt-3 w-full">
        <div className='lg:col-span-3'>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="sm:col-span-1">
          <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
            <option>Min Seats</option>
          </select>
        </div>
        <div className="sm:col-span-1">
          <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
            <option>Max Seats</option>
          </select>
        </div>
        </div>
        </div>


        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2">
        <div className="sm:col-span-1 lg:col-span-4">
          <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
            <option>Deck</option>
          </select>
        </div>
        <div className="sm:col-span-1 lg:col-span-4">
          <select className="border border-gray-300 rounded-md px-2 py-2 sm:py-2 font-inter font-normal text-[10px] sm:text-[11px] lg:text-[11.85px] leading-[14px] sm:leading-[15px] lg:leading-[16.92px] tracking-[0%] align-middle w-full">
            <option>Loading Capacity</option>
          </select>
        </div>
        <div className="sm:col-span-1 lg:col-span-4">
          
        </div>
        </div>
        </div>
      </div>

    

    <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
      <button className="bg-[#D7061F] px-6 sm:px-8 py-2 sm:py-2 rounded-md text-white gap-2 flex items-center justify-center text-[12px] sm:text-[13px] lg:text-[14px]">
        <div className='w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px] overflow-hidden'>
          <img src={vector30} alt="search" className='w-full h-full object-contain'/>
        </div> 
        Search
    </button>
      <button className="bg-gray-300 text-gray-700 px-6 sm:px-8 py-2 sm:py-2 rounded-md font-semibold hover:bg-gray-400 transition text-[12px] sm:text-[13px] lg:text-[14px]">
        Reset
      </button>
    </div>
  </section>
  )
}

export default UsedCar
