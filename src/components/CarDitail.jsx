import React from "react";
import carImage from "../assets/JapaneseCar.png"; // add your image in src/assets

const App = () => {
  return (
    <div className=" ">
      
      <section className=" mt-12 mb-5 px-6  flex flex-col md:flex-row items-center justify-between">
        <div className="  ">
          <span className="bg-[#D7061F] text-white px-3 py-1 rounded-full font-[Font_1] font-bold text-[7.79px] leading-[10.39px] tracking-[0%] align-middle">
            Trusted Since 2010
          </span>

          <h1 className="h-[117] font-roboto font-bold text-[38.97px] leading-[38.97px] tracking-[0%] align-middle text-gray-900 mt-4">
            Import Quality Japanese Cars to Tanzania
          </h1>

          <p className="w-[428px] h-[37px] font-[Font_1] font-normal text-[12.99px] leading-[18.19px] tracking-[0%] align-middle text-gray-600 mt-3">
            Full transparency on pricing. See FOB, shipping, clearing, and TRA
            taxes upfront. No hidden costs.
          </p>

          <div className="mt-6 flex gap-3">
            <button className="bg-[#D7061F] text-white px-6 py-1 rounded-md hover:bg-[#D7061F] transition font-[Font_1] font-bold text-[11.69px] leading-[18.19px] tracking-[0%] text-center align-middle">
              Browse Cars
            </button>
            <button className="bg-white border border-gray-300 px-6 py-1 rounded-md hover:bg-gray-50 transition font-[Font_1] font-bold text-[11.69px] leading-[18.19px] tracking-[0%] text-center align-middle">
              How It Works
            </button>
          </div>

        </div>

        {/* <div className="mt-10 md:mt-0 ">
          <img src={carImage} alt="Car" className="w-[428px] md:w-[px]" />
        </div> */}
      </section>

      
    </div>
  );
};

export default App;
