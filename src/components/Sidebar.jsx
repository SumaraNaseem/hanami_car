import { useState } from 'react';
import toyota from '../assets/toyota.png';
import nishan from '../assets/nishan.png';
import honda from '../assets/honda.png';
import mitsubishi from '../assets/mitsubishi.png';
import mazda from '../assets/mazda.png';
import subaru from '../assets/subaru.png';
import suzuki from '../assets/suzuki.png';
import daishat from '../assets/dihatsu.png';
import isuzu from '../assets/isuzu.png';
import hino from '../assets/hino.png';
import lexus from '../assets/lexus.png';
import mercedes from '../assets/mercidas.png';
import bmw from '../assets/bmw.png';
import audi from '../assets/audi.png';
import volvo from '../assets/volwo.png';
import ford from '../assets/ford.png';
import dongfeng from '../assets/dongfeng.png';
import sedan from '../assets/Vector1.png';
import coupe from"../assets/Vector2.png";
import wagon from"../assets/Vector3.png";
import hatchback from"../assets/Vector4.png";
import suv from"../assets/Vector5.png";
import convertible from"../assets/Vector6.png";
import pickup from"../assets/Vector7.png";
import trucks from"../assets/Vector8.png";
import bus from"../assets/Vector9.png";
import doller from"../assets/Vector10.png";
import jdm from"../assets/vector15.png";
import certified from"../assets/vector16.png";
import leftHandDrive from"../assets/Vector11.png";
import Manual from"../assets/Vector12.png";
import Diesel from"../assets/Vector13.png";
import fourWheelDrive from"../assets/vector14.png";
import Japan from"../assets/vector17.png";
import singapore from"../assets/vector18.png";
import thailand from"../assets/vector19.png";
import china from"../assets/vector20.png";



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

  const carBrands = [
    { name: 'Toyota', count: 30042, logo: toyota },
    { name: 'Nissan', count: 2505, logo: nishan },
    { name: 'Honda', count: 2016, logo: honda },
    { name: 'Mitsubishi', count: 877, logo: mitsubishi },
    { name: 'Mitsubishi Fuso', count: 190, logo: mitsubishi },
    { name: 'Mazda', count: 996, logo: mazda },
    { name: 'Subaru', count: 400, logo: subaru },
    { name: 'Suzuki', count: 198, logo: suzuki },
    { name: 'Daihatsu', count: 190, logo: daishat },
    { name: 'Isuzu', count: 190, logo: isuzu },
    { name: 'Hino', count: 141, logo: hino },
    { name: 'Lexus', count: 100, logo: lexus },
    { name: 'Mercedes-Benz', count: 68, logo: mercedes },
    { name: 'BMW', count: 34, logo: bmw },
    { name: 'Audi', count: 10, logo: audi },
    { name: 'Volvo', count: 6, logo: volvo },
    { name: 'Ford', count: 2, logo: ford },
    { name: 'Dong Feng', count: 1, logo:dongfeng }
  ];

  const bodyTypes = [
    { name: 'Sedan', count: 2505, icon: sedan },
    { name: 'Coupe', count: 240, icon: coupe },
    { name: 'Wagon', count: 400, icon: wagon },
    { name: 'Hatchback', count: 260, icon: hatchback },
    { name: 'SUV', count: 190, icon: suv },
    { name: 'Convertible', count: 14, icon: convertible },
    { name: 'Pickup (MiniBus)', count: 20, icon: pickup },
    { name: 'Trucks', count: 10, icon: trucks },
    { name: 'Bus', count: 10, icon: bus }
  ];

  const priceRanges = [
    { name: 'Used Cars under $1000', count: 0, icon: doller },
    { name: 'Used Cars under $2000', count: 0, icon: doller },
    { name: 'Used Cars under $3000', count: 0, icon: doller },
    { name: 'Used Cars under $4000', count: 0, icon: doller },
    { name: 'Used Cars under $5000', count: 0, icon: doller }
  ];

  const categories = [
    { name: 'Left Hand Drive', count: 0, icon: leftHandDrive },
    { name: 'Manual', count: 0, icon: Manual },
    { name: 'Diesel', count: 0, icon: Diesel },
    { name: '4WD', count: 0, icon: fourWheelDrive },
    { name: 'JDM', count: 0, icon: jdm },
    { name: 'Certified Dealer', count: 0, icon: certified }
  ];

  const stockLocations = [
    { name: 'Japan', count: 348, flag: Japan },
    { name: 'Singapore', count: 84, flag: singapore },
    { name: 'Thailand', count: 16, flag: thailand },
    { name: 'China', count: 4, flag: china }
  ];

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
    <div className=" overflow-y-auto">
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
