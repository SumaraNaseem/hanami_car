import { useState } from 'react';
import logo from "../assets/logo.png";
import Login from "../assets/login.png";
import whatsapp from "../assets/whatsapp.png";
import language from "../assets/languae.png";

export default function TopBar() {
  const [searchQuery, setSearchQuery] = useState('');
console.log(searchQuery,"file comment ");

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-1 sm:py-1">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left Section - Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-[77px] h-[77px] overflow-hidden ">
              <img src={logo} alt="logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-[24px] font-[900] font-inter">Hanami</h1>
          </div>

          {/* Middle Section - Search Bar */}
          <div className="flex-1 max-w-[600px] mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Free word (ex. model code)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="absolute right-0 top-0 h-full bg-[#D7061F] rounded-r-md text-white px-4  transition duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section - User Actions */}
          <div className="flex items-center space-x-6">
            {/* Login */}
            <div className="flex flex-col items-center cursor-pointer hover:opacity-70 transition duration-200">
              <div className="w-[35px] h-[40px]  overflow-hidden mb-1">
                <img src={Login} alt="user" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-gray-600">Login</span>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center cursor-pointer hover:opacity-70 transition duration-200">
              <div className="w-[35px] h-[40px]  overflow-hidden  mb-1">
              <img src={whatsapp} alt="icon" className="w-full h-full object-contain" />

              </div>
              <span className="text-sm text-gray-600">WhatsApp</span>
            </div>

            {/* Language Selector */}
            <div className="flex items-center cursor-pointer hover:opacity-70 transition duration-200">
              <div className="w-[28px] h-[21px]  overflow-hidden  mb-1">
               
                <img src={language} alt="language" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:flex lg:hidden items-center justify-between">
          {/* Left Section - Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#D7061F] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <h1 className="text-xl font-bold text-black">Hanami</h1>
          </div>

          {/* Middle Section - Search Bar */}
          <div className="flex-1 max-w-sm mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="absolute right-0 top-0 h-full bg-[#D7061F] hover:bg-red-700 text-white px-3 rounded-r-lg transition duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section - User Actions */}
          <div className="flex items-center space-x-4">
            {/* Login */}
            <div className="flex flex-col items-center cursor-pointer hover:opacity-70 transition duration-200">
              <div className="w-7 h-7 bg-gray-600 rounded-full flex items-center justify-center mb-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <span className="text-xs text-gray-600">Login</span>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center cursor-pointer hover:opacity-70 transition duration-200">
              <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center mb-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <span className="text-xs text-gray-600">WhatsApp</span>
            </div>

            {/* Language Selector */}
            <div className="flex items-center cursor-pointer hover:opacity-70 transition duration-200">
              <div className="flex items-center space-x-1">
                <div className="w-5 h-3 bg-gradient-to-r from-blue-600 via-white to-[#D7061F] border border-gray-300 rounded-sm flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-800">🇬🇧</span>
                </div>
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (sm and below) */}
        <div className="flex md:hidden items-center justify-between">
          {/* Left Section - Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-[#D7061F] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">G</span>
            </div>
            <h1 className="text-lg font-bold text-black">Hanami</h1>
          </div>

          {/* Right Section - User Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Icon */}
            <div className="cursor-pointer hover:opacity-70 transition duration-200">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Login */}
            <div className="cursor-pointer hover:opacity-70 transition duration-200">
              <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="cursor-pointer hover:opacity-70 transition duration-200">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
            </div>

            {/* Language Selector */}
            <div className="cursor-pointer hover:opacity-70 transition duration-200">
              <div className="flex items-center space-x-1">
                <div className="w-4 h-3 bg-gradient-to-r from-blue-600 via-white to-[#D7061F] border border-gray-300 rounded-sm flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-800">🇬🇧</span>
                </div>
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
