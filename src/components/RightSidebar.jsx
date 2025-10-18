import { useState } from 'react';
import user from "../assets/User.png";
import calander from "../assets/calander.png";
import creataccount from "../assets/creataccount.png";
import star from "../assets/star.png";
import whatsapplink from "../assets/watsapplink.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twiter.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

export default function RightSidebar() {
  const [isAccountExpanded, setIsAccountExpanded] = useState(false);

  return (
    <div className="  h-full overflow-y-auto">
      {/* Create Account Section */}
      <div className="p-2 border-b rounded-lg mb-2 bg-white ">
        <div className="flex items-center space-x-2 mb-2 ">
          <div className="w-[15px] h-[15px] overflow-hidden ">
            <img src={user} alt="user" className='w-full h-full object-cover' />
          </div>
          <h2 className="text-[14px] leading-[15px] font-[700] text-[#D7061F]">Create account</h2>
        </div>
        <p className="text-[9px] leading-[11px] font-[400] text-[#6B7280] mb-3">Sign up & enjoy these features</p>
        
        {/* Feature Icons */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex flex-col text-center items-center">
            <div className="w-[30px] h-[30px] overflow-hidden  mb-2">
              <img src={calander} alt="calander" className='w-full h-full object-cover' />
            </div>
            <p className="text-[9px] leading-[11px] text-gray-700">Shipping Schedule</p>
          </div>
          <div className="flex flex-col text-center items-center">
            <div className="w-[30px] h-[30px] overflow-hidden  mb-2">
             <img src={creataccount} alt="createAccount" className='w-full h-full object-cover' />  
            </div>
            <p className="text-[9px] leading-[11px] text-gray-700">Create Account</p>
          </div>
          <div className="flex flex-col text-center items-center">
            <div className="w-[30px] h-[30px] overflow-hidden mb-2">
             <img src={star} alt="carreviews" className='w-full h-full object-cover' />
            </div>
            <p className="text-[9px] leading-[11px] text-[#D7061F] font-medium">Car Reviews</p>
          </div>
        </div>
        
        {/* Create Account Button */}
        <button className="w-full bg-[#D7061F] text-[9px] leading-[11px] font-[700] text-white  py-3 px-4 rounded-[4px] transition duration-300 uppercase">
          Create Account
        </button>

        {/* Point Up Campaign Section */}
        <div className="p-1 bg-blue-600 text-white rounded-lg mt-2">
        <div className="text-center">
          <p className="text-[7px] font-[700] leading-[9px]">POINT UP CAMPAIGN</p>
          <p className="text-[10px] leading-[12px] font-[800] font-inter text-yellow-300 ">EARN 10 POINTS ($10)</p>
          <p className="text-[7px] leading-[8px] font-[600]  font-inter">WHEN YOU CREATE AN ACCOUNT</p>
        </div>
        </div>

      </div>

      

      {/* Contact WhatsApp Section */}
      <div className="w-full h-[44px] overflow-hidden rounded-[4px]">
        
        <img src={whatsapplink} alt="whatsapp" className='w-full h-full object-cover' />
      </div>

      {/* Follow Us Section */}
      <div className="p-6 border-t-2 mt-4 border-b-2  border-red-500 ">
        <h3 className="text-[14px] leading-[14px] font-[700] text-gray-800 mb-4">Follow us on:</h3>
        
        {/* Social Media Icons */}
        <div className="flex space-x-3">
          {/* Facebook */}
          <div className="w-[32px] h-[32px] overflow-hidden rounded-md">
           <img src={facebook} alt="facebook" className='w-full h-full object-cover' />
          </div>
          
          {/* Twitter/X */}
          <div className="w-[32px] h-[32px] overflow-hidden rounded-md">
           <img src={twitter} alt="twitter" className='w-full h-full object-cover' />
          </div>
          
          {/* Instagram */}
          <div className="w-[32px] h-[32px] overflow-hidden rounded-md ">
           <img src={instagram} alt="instagram" className='w-full h-full object-cover' />
          </div>
          
          {/* YouTube */}
          <div className="w-[32px] h-[32px] overflow-hidden rounded-md">
           <img src={youtube} alt="youtube" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  );
}
