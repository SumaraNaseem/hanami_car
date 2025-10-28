import { useState } from 'react';
import { carBrands, bodyTypes, priceRanges, categories, stockLocations } from '../data/mockData';



export default function Sidebar() {
  const [expandedSections, setExpandedSections] = useState({
    brands: true,
    bodyType: true,
    price: true,
    category: true,
    stock: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const SectionHeader = ({ title, isExpanded, onToggle }) => (
    <div 
      className="bg-[#D7061F] text-white px-4 py-2 rounded-[4px] text-[14px] leading-[20px] font-[700] cursor-pointer flex items-center justify-between"
      onClick={onToggle}
    >
      <span className="font-medium">{title}</span>
      <svg 
        className={`w-4 h-4 transition-transform duration-200 ${
          isExpanded ? 'rotate-180' : ''
        }`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );

  const FilterItem = ({ icon, name, count, onClick }) => (
    <div 
      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        
          <img src={icon} alt={name} className="w-6 h-6 object-contain" />
        
        <span className="text-[14px] leading-[16px] font-[500] text-gray-600">{name}</span>
      </div>
      <span className="text-[14px] leading-[16px] font-[500] text-gray-600">({count})</span>
    </div>
  );

  return (
    <div className="h-full overflow-y-auto bg-white lg:bg-transparent p-4 lg:p-0">
      {/* Mobile Close Button */}
      <div className="lg:hidden flex justify-end mb-4">
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('closeSidebar'))}
          className="text-gray-500 hover:text-gray-700 p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Browse by Car Brands */}
      <div  className="mb-4  ">
        <SectionHeader 
          title="Browse by Car Brands" 
          isExpanded={expandedSections.brands}
          onToggle={() => toggleSection('brands')}
         
         
        />
        {expandedSections.brands && (
          <div className="text-[12px] leading-[16px] font-[400]">
            {carBrands.map((brand, index) => (
              <FilterItem
                key={index}
                icon={brand.logo}
                name={brand.name}
                count={brand.count}
                onClick={() => console.log(`Selected brand: ${brand.name}`)}
                
              />
            ))}
          </div>
        )}
      </div>

      {/* Browse by Body Type */}
      <div className="mb-4 text-[14px] leading-[20px] font-[700]">
        <SectionHeader 
          title="Browse by Body Type" 
          isExpanded={expandedSections.bodyType}
          onToggle={() => toggleSection('bodyType')}
        />
        {expandedSections.bodyType && (
          <div className="text-[12px] leading-[16px] font-[400]">
            {bodyTypes.map((type, index) => (
              <FilterItem
                key={index}
                icon={type.icon}
                name={type.name}
                count={type.count}
                onClick={() => console.log(`Selected body type: ${type.name}`)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Browse by Price */}
      <div className="mb-4 text-[14px] leading-[20px] font-[700]">
        <SectionHeader 
          title="Browse by Price" 
          isExpanded={expandedSections.price}
          onToggle={() => toggleSection('price')}
        />
        {expandedSections.price && (
          <div className="text-[12px] leading-[16px] font-[400]">
            {priceRanges.map((range, index) => (
              <FilterItem
                key={index}
                icon={range.icon}
                name={range.name}
                count={range.count}
                onClick={() => console.log(`Selected price range: ${range.name}`)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Browse by Category */}
      <div className="mb-4 text-[14px] leading-[20px] font-[700]">
        <SectionHeader 
          title="Browse by Category" 
          isExpanded={expandedSections.category}
          onToggle={() => toggleSection('category')}
        />
        {expandedSections.category && (
          <div className="text-[12px] leading-[16px] font-[400]">
            {categories.map((category, index) => (
              <FilterItem
                key={index}
                icon={category.icon}
                name={category.name}
                count={category.count}
                onClick={() => console.log(`Selected category: ${category.name}`)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Vehicles in Stock */}
      <div className="mb-4 text-[14px] leading-[20px] font-[700]  ">
        <SectionHeader 
          title="Vehicles in Stock" 
          isExpanded={expandedSections.stock}
          onToggle={() => toggleSection('stock')}
        />
        {expandedSections.stock && (
          <div className="text-[12px] leading-[16px] font-[400]">
            {stockLocations.map((location, index) => (
              <FilterItem
                key={index}
                icon={location.flag}
                name={location.name}
                count={location.count}
                onClick={() => console.log(`Selected location: ${location.name}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
