import React, { useState } from 'react';

function PriceCalculator() {
  const [formData, setFormData] = useState({
    country: 'Japan',
    port: 'Tanzania',
    fobPrice: '12,500',
    inspection: '150',
    localCharges: '200',
    shippingCharges: '1,800',
    traTaxes: '3,200',
    portCharges: '450',
    clearingCharges: '300',
    certificate: 'YES'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCalculate = () => {
    // Calculate logic here
    console.log('Calculating with data:', formData);
  };

  const handleReset = () => {
    setFormData({
      country: 'Japan',
      port: 'Tanzania',
      fobPrice: '12,500',
      inspection: '150',
      localCharges: '200',
      shippingCharges: '1,800',
      traTaxes: '3,200',
      portCharges: '450',
      clearingCharges: '300',
      certificate: 'YES'
    });
  };

  return (
    <section className="bg-white  sm:mx-4 lg:mx-6 pb-3 sm:pb-4 lg:pb-5 px-3 sm:px-4 lg:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-3 sm:mb-2">
        <div className="flex items-center">
          <h2 className="font-roboto font-bold text-[16px] sm:text-[18px] lg:text-[20.31px] leading-[20px] sm:leading-[24px] lg:leading-[27.08px] tracking-[0%] align-middle">Price Calculator</h2>
        </div>
        <p className="text-[11px] sm:text-[12px] lg:text-[14px] font-[400] leading-[16px] sm:leading-[18px] lg:leading-[20px] text-gray-600">Please select country and port</p>
      </div>

      {/* Country and Port Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div>
          <select 
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            className="w-full px-3 py-3 sm:py-[10px] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-[10px] sm:text-[11px] lg:text-[11px] font-[400] leading-[14px] sm:leading-[16px] lg:leading-[16px] text-[#2E343B] focus:border-transparent"
          >
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <div>
          <select 
            value={formData.port}
            onChange={(e) => handleInputChange('port', e.target.value)}
            className="w-full px-3 py-2 sm:py-[10px] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-[10px] sm:text-[11px] lg:text-[11px] font-[400] leading-[14px] sm:leading-[16px] lg:leading-[16px] text-[#2E343B] focus:border-transparent"
          >
            <option value="Tanzania">Tanzania</option>
            <option value="Kenya">Kenya</option>
            <option value="Uganda">Uganda</option>
            <option value="Rwanda">Rwanda</option>
          </select>
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="space-y-3 sm:space-y-1">
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0'>
            <label className="text-[10px] sm:text-[11px] lg:text-[11px] font-[400] leading-[14px] sm:leading-[16px] lg:leading-[16px] text-[#2E343B]">FOB (Car Price in Japan)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-[10px] sm:text-[11px]">$</span>
              <input
                type="text"
                value={formData.fobPrice}
                onChange={(e) => handleInputChange('fobPrice', e.target.value)}
                className="w-full sm:w-20 pl-6 py-2 sm:py-[4px] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-[10px] sm:text-[11px] font-[400] leading-[14px] sm:leading-[16px] text-[#2E343B] focus:border-transparent"
              />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0'>
            <label className="text-[10px] sm:text-[11px] lg:text-[11px] font-[400] leading-[14px] sm:leading-[16px] lg:leading-[16px] text-[#2E343B]">Inspection (Paid before shipping)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-[10px] sm:text-[11px]">$</span>
              <input
                type="text"
                value={formData.inspection}
                onChange={(e) => handleInputChange('inspection', e.target.value)}
                className="w-full sm:w-20 pl-6 py-2 sm:py-[4px] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-[10px] sm:text-[11px] font-[400] leading-[14px] sm:leading-[16px] text-[#2E343B] focus:border-transparent"
              />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0'>
            <label className="text-[10px] sm:text-[11px] lg:text-[11px] font-[400] leading-[14px] sm:leading-[16px] lg:leading-[16px] text-[#2E343B]">Local Charges</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-[10px] sm:text-[11px]">$</span>
              <input
                type="text"
                value={formData.localCharges}
                onChange={(e) => handleInputChange('localCharges', e.target.value)}
                className="w-full sm:w-20 pl-6 py-2 sm:py-[4px] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-[10px] sm:text-[11px] font-[400] leading-[14px] sm:leading-[16px] text-[#2E343B] focus:border-transparent"
              />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0'>
            <label className="text-[10px] sm:text-[11px] lg:text-[11px] font-[400] leading-[14px] sm:leading-[16px] lg:leading-[16px] text-[#2E343B]">Shipping Charges</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-[10px] sm:text-[11px]">$</span>
              <input
                type="text"
                value={formData.shippingCharges}
                onChange={(e) => handleInputChange('shippingCharges', e.target.value)}
                className="w-full sm:w-20 pl-6 py-2 sm:py-[4px] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-[10px] sm:text-[11px] font-[400] leading-[14px] sm:leading-[16px] text-[#2E343B] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-3 sm:space-y-1">
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0'>
            <label className="text-[10px] sm:text-[11px] lg:text-[11px] font-[400] leading-[14px] sm:leading-[16px] lg:leading-[16px] text-[#2E343B]">TRA Taxes (Import taxes)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-[10px] sm:text-[11px]">$</span>
              <input
                type="text"
                value={formData.traTaxes}
                onChange={(e) => handleInputChange('traTaxes', e.target.value)}
                className="w-full sm:w-20 pl-6 py-2 sm:py-[4px] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-[10px] sm:text-[11px] font-[400] leading-[14px] sm:leading-[16px] text-[#2E343B] focus:border-transparent"
              />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0'>
            <label className="text-[10px] sm:text-[11px] lg:text-[11px] font-[400] leading-[14px] sm:leading-[16px] lg:leading-[16px] text-[#2E343B]">Port Charges</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-[10px] sm:text-[11px]">$</span>
              <input
                type="text"
                value={formData.portCharges}
                onChange={(e) => handleInputChange('portCharges', e.target.value)}
                className="w-full sm:w-20 pl-6 py-2 sm:py-[4px] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-[10px] sm:text-[11px] font-[400] leading-[14px] sm:leading-[16px] text-[#2E343B] focus:border-transparent"
              />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0'>
            <label className="text-[10px] sm:text-[11px] lg:text-[11px] font-[400] leading-[14px] sm:leading-[16px] lg:leading-[16px] text-[#2E343B]">Clearing Charges</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-[10px] sm:text-[11px]">$</span>
              <input
                type="text"
                value={formData.clearingCharges}
                onChange={(e) => handleInputChange('clearingCharges', e.target.value)}
                className="w-full sm:w-20 pl-6 py-2 sm:py-[4px] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-[10px] sm:text-[11px] font-[400] leading-[14px] sm:leading-[16px] text-[#2E343B] focus:border-transparent"
              />
            </div>
          </div>
          {/* Certificate Option */}
          <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <label className="text-[10px] sm:text-[11px] lg:text-[11px] font-[400] leading-[14px] sm:leading-[16px] lg:leading-[16px] text-[#2E343B]">Certificate</label>
            <div className="flex gap-4 sm:gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="certificate"
                  value="YES"
                  checked={formData.certificate === 'YES'}
                  onChange={(e) => handleInputChange('certificate', e.target.value)}
                  className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 focus:ring-red-500"
                />
                <span className="text-[10px] sm:text-[11px] lg:text-sm text-gray-700">YES</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="certificate"
                  value="NO"
                  checked={formData.certificate === 'NO'}
                  onChange={(e) => handleInputChange('certificate', e.target.value)}
                  className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 focus:ring-red-500"
                />
                <span className="text-[10px] sm:text-[11px] lg:text-sm text-gray-700">NO</span>
              </label>
            </div>
          </div>
        </div>


        {/* Action Buttons */}
        <div className='flex justify-center sm:justify-start'>
            <div className="flex flex-col sm:flex-col space-y-3 sm:space-y-2 justify-end w-full sm:w-auto">
            <button
            onClick={handleCalculate}
            className="bg-red-600 hover:bg-red-700 text-white px-8 sm:px-12 py-2 sm:py-[4px] text-[12px] sm:text-[13px] lg:text-[14px] leading-[16px] sm:leading-[18px] lg:leading-[20px] font-[400] rounded-md transition-colors duration-200"
            >
            Calculate
            </button>

            <button
            onClick={handleReset}
            className="bg-white hover:bg-gray-50 text-red-600 border border-red-600 px-8 sm:px-12 py-2 sm:py-[4px] text-[12px] sm:text-[13px] lg:text-[14px] leading-[16px] sm:leading-[18px] lg:leading-[20px] font-[400] rounded-md transition-colors duration-200"
            >
            Reset
            </button>

            </div>
        </div>
      
      </div>

     

      
    </section>
  );
}

export default PriceCalculator;
