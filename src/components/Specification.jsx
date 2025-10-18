import React from 'react';

const Specification = () => {
  const specifications = {
    leftColumn: [
      { label: 'Ref no', value: 'XZ30B15', bgColor: 'bg-white' },
      { label: 'Registration Year/Month', value: '2018/2', bgColor: '' },
      { label: 'Transmission', value: 'AT', bgColor: 'bg-white' },
      { label: 'Fuel', value: 'Petrol', bgColor: '' },
      { label: 'Engine code', value: 'K7-VE', bgColor: 'bg-white' },
      { label: 'Drivetrain', value: '2WD', bgColor: '' },
      { label: 'Seats', value: '5', bgColor: 'bg-white' },
      { label: 'Dimension (LxWxH)', value: '3.55 x 1.47 x 1.62m', bgColor: '' }
    ],
    rightColumn: [
      { label: 'Model code', value: 'L175S', bgColor: 'bg-white' },
      { label: 'Mileage', value: '124,399 km', bgColor: '' },
      { label: 'Color', value: 'Pink', bgColor: 'bg-white' },
      { label: 'Engine size', value: '650 cc', bgColor: '' },
      { label: 'Steering', value: 'Right', bgColor: 'bg-white' },
      { label: 'Doors', value: '5', bgColor: '' },
      { label: 'Chassis No', value: 'L175S-6206188', bgColor: 'bg-white' },
      { label: 'Grade', value: 'X LIMITED', bgColor: '' }
    ]
  };

  return (
    <div className=" sm:px-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded flex items-center justify-center">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">Specifications</h2>
      </div>

      {/* Specifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0">
        {/* Left Column */}
        <div className="">
          {specifications.leftColumn.map((spec, index) => (
            <div key={index} className="grid grid-cols-2 p-[1px] sm:p-[2px] items-center border border-gray-100">
              <div className={`font-semibold text-gray-700 text-xs sm:text-sm text-center py-2 sm:py-2 border border-gray-100 ${spec.bgColor}`}>
                {spec.label}:
              </div>
              <div className={`text-gray-600 text-center text-xs sm:text-sm font-medium py-2 sm:py-2 border border-gray-100 ${spec.bgColor}`}>
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="">
          {specifications.rightColumn.map((spec, index) => (
            <div key={index} className="grid grid-cols-2 p-[1px] sm:p-[2px] items-center border border-gray-100">
              <div className={`font-semibold text-gray-700 text-xs sm:text-sm text-center py-2 sm:py-2 border border-gray-100 ${spec.bgColor}`}>
                {spec.label}:
              </div>
              <div className={`text-gray-600 text-center text-xs sm:text-sm font-medium py-2 sm:py-2 border border-gray-100 ${spec.bgColor}`}>
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default Specification;
