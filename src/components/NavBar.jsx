import { useState } from 'react';

export default function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { 
      name: 'Browse Cars', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Cars', href: '/cars' },
        { name: 'Cars Detail', href: '/cars/car-detail' },
        { name: 'Used Cars', href: '/cars/used' },
        { name: 'Car Detail', href: '/cars/car-detail' }
      ]
    },
    { 
      name: 'Car Information', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Car Specs', href: '/car-info/specs' },
        { name: 'Reviews', href: '/car-info/reviews' },
        { name: 'Compare Cars', href: '/car-info/compare' },
        { name: 'Car History', href: '/car-info/history' }
      ]
    },
    { 
      name: 'Carused Local', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Local Dealers', href: '/local/dealers' },
        { name: 'Local Inventory', href: '/local/inventory' },
        { name: 'Local Services', href: '/local/services' },
        { name: 'Local Reviews', href: '/local/reviews' }
      ]
    },
    { 
      name: 'Dealer Portal', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Dealer Login', href: '/dealer/login' },
        { name: 'Dealer Registration', href: '/dealer/register' },
        { name: 'Dealer Dashboard', href: '/dealer/dashboard' },
        { name: 'Dealer Support', href: '/dealer/support' }
      ]
    },
    { 
      name: 'Customer Reviews', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Reviews', href: '/reviews' },
        { name: 'Write Review', href: '/reviews/write' },
        { name: 'Review Guidelines', href: '/reviews/guidelines' },
        { name: 'Review Statistics', href: '/reviews/stats' }
      ]
    },
    { 
      name: 'FAQS', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'General FAQ', href: '/faq/general' },
        { name: 'Buying FAQ', href: '/faq/buying' },
        { name: 'Selling FAQ', href: '/faq/selling' },
        { name: 'Technical FAQ', href: '/faq/technical' }
      ]
    },
    { 
      name: 'Help', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Contact Us', href: '/help/contact' },
        { name: 'Support Center', href: '/help/support' },
        { name: 'User Guide', href: '/help/guide' },
        { name: 'Report Issue', href: '/help/report' }
      ]
    }
  ];

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
    <nav className="bg-white border-b hidden md:block border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-8 py-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 font-[400] text-[16px] leading-[24px] transition duration-200 py-2">
                <span>{item.name}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === index ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === index && (
                <div className="absolute top-full top-7 left-0 mt-1 w-48 bg-white rounded-md shadow-lg  z-50">
                  <div className="py-1">
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <a 
                        key={dropdownIndex}
                        href={dropdownItem.href} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
     <div className="relative md:hidden block">
     <nav className="bg-white border-b border-gray-200">
       <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
         {/* Mobile: Horizontal scroll, Desktop: Centered */}
         <div className="flex items-center justify-center lg:justify-center overflow-x-auto scrollbar-hide py-3">
           <div className="flex items-center space-x-4 lg:space-x-8 min-w-max lg:min-w-0">
             {menuItems.map((item, index) => (
               <div
                 key={index}
                 className="relative flex-shrink-0"
                 onMouseEnter={() => handleMouseEnter(index)}
                 onMouseLeave={handleMouseLeave}
               >
                 <button className="flex items-center space-x-1 text-gray-700 font-[400] text-[16px] leading-[24px] transition duration-200 py-2 whitespace-nowrap">
                   <span>{item.name}</span>
                   <svg 
                     className={`w-4 h-4 transition-transform duration-200 ${
                       activeDropdown === index ? 'rotate-180' : ''
                     }`} 
                     fill="none" 
                     stroke="currentColor" 
                     viewBox="0 0 24 24"
                   >
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
                 </button>
               </div>
             ))}
           </div>
         </div>
       </div>
     </nav>

     {/* Dropdown Menu - Outside nav to avoid clipping */}
     {activeDropdown !== null && (
       <div className="absolute top-[229px] right-[8rem] lg:right-[327px] w-full z-[9999] pointer-events-none">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-center lg:justify-center">
             <div className="flex items-center space-x-4 lg:space-x-8 min-w-max lg:min-w-0">
               {menuItems.map((item, index) => (
                 <div key={index} className="relative flex-shrink-0">
                   {activeDropdown === index && (
                     <div className="absolute bottom-full left-0 mb-2 w-48 bg-white rounded-md shadow-lg border-2 border-red-500 pointer-events-auto">
                       <div className="py-1">
                         {menuItems[index].dropdownItems.map((dropdownItem, dropdownIndex) => (
                           <a 
                             key={dropdownIndex}
                             href={dropdownItem.href} 
                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                           >
                             {dropdownItem.name}
                           </a>
                         ))}
                       </div>
                     </div>
                   )}
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
     )}
   </div>
   </>
  );
}
