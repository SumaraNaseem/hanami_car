import { useState } from 'react';

export default function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: 'Browse Cars', hasDropdown: true },
    { name: 'Car Information', hasDropdown: true },
    { name: 'Carused Local', hasDropdown: true },
    { name: 'Dealer Portal', hasDropdown: true },
    { name: 'Customer Reviews', hasDropdown: true },
    { name: 'FAQS', hasDropdown: true },
    { name: 'Help', hasDropdown: true }
  ];

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-8 py-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition duration-200 py-2">
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
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    {/* Sample dropdown items - you can customize these */}
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      Option 1
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      Option 2
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      Option 3
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      Option 4
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
