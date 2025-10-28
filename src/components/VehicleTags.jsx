import { useState } from 'react';
import { vehicleTags } from '../data/mockData';

export default function VehicleTags() {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <section className="py-6 ">
      <div className=" mx-auto lg:px-6">
        {/* Header */}
        <div className=" mb-8">
          <h2 className="font-roboto font-bold text-[20.31px] leading-[27.08px]">Vehicle Tags</h2>
        </div>
        
        {/* Tags Grid */}
        <div className="flex flex-wrap  gap-[4px]">
          {vehicleTags.map((tag, index) => (
            <button
              key={index}
              className="px-3 py-[6px] rounded-md font-[400] underline text-[11.85px] leading-[16.54px] transition duration-300 bg-[#6B7280] text-white "
              
            >
              {tag}
            </button>
          ))}
        </div>
        
       
      </div>
    </section>
  );
}
