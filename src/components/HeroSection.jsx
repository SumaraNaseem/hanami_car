import React from "react";
import carImage from "../assets/JapaneseCar.png"; // add your image in src/assets

const App = () => {
  return (
    <div className=" ">
      
      <section className="mb-5  sm:px-6 md:flex md:flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-[428px] mb-8 lg:mb-0">
          <span className="bg-[#D7061F] text-white px-3 py-1 rounded-full font-inter font-[700] text-[7.79px] leading-[10.39px] tracking-[0%] align-middle">
            Trusted Since 2010
          </span>

          <h1 className="w-full lg:w-[428px] font-inter font-bold text-[24px] sm:text-[32px] lg:text-[38.97px] leading-[28px] sm:leading-[36px] lg:leading-[38.97px] tracking-[0%] align-middle text-gray-900 mt-4">
            Import Quality Japanese Cars to Tanzania
          </h1>

          <p className="w-full lg:w-[428px] font-inter font-normal text-[12px] sm:text-[12.99px] leading-[16px] sm:leading-[18.19px] tracking-[0%] align-middle text-gray-600 mt-3">
            Full transparency on pricing. See FOB, shipping, clearing, and TRA
            taxes upfront. No hidden costs.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="bg-[#D7061F] text-white px-6 py-2 sm:py-1 rounded-md hover:bg-[#D7061F] transition font-inter font-bold text-[11.69px] leading-[18.19px] tracking-[0%] text-center align-middle">
              Browse Cars
            </button>
            <button className="bg-white border border-gray-300 px-6 py-2 sm:py-1 rounded-md hover:bg-gray-50 transition font-inter font-bold text-[11.69px] leading-[18.19px] tracking-[0%] text-center align-middle">
              How It Works
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-full lg:w-auto mt-0 lg:mt-0">
          <img 
            src={carImage} 
            alt="Car" 
            className="w-full max-w-[300px] sm:max-w-[400px] lg:w-[428px] mx-auto lg:mx-0" 
          />
        </div>
      </section>

      
    </div>
  );
};

export default App;
