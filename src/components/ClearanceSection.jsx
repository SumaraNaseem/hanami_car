import ClearanceCarCard from './ClearanceCarCard';
import svg1 from '../assets/SVG1.png';

const clearanceCars = [
  { id: 1, name: 'Mitsubishi Fuso ', price: 12750, discount: 36, ref: '3040111' },
  { id: 2, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040112' },
  { id: 3, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040113' },
  { id: 4, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040114' },
  { id: 5, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040115' },
  { id: 6, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040116' },
  { id: 7, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040117' },
  { id: 8, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040118' },
  { id: 9, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040119' },
  { id: 10, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040120' },
  { id: 11, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040121' },
  { id: 12, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040122' },
  { id: 13, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040123' },
  { id: 14, name: 'Mitsubishi Fuso Fighter', price: 12750, discount: 36, ref: '3040124' }
];

export default function ClearanceSection() {
  return (
    <section className="py-4 ">
      <div className=" mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <div className="bg-[#D7061F]  text-[10.15px] leading-[13.54px] text-white px-3 py-1  rounded-sm">
              SALE
            </div>
            <h2 className="font-roboto font-bold text-[20.31px] leading-[27.08px] align-middle text-gray-800">Clearance</h2>
          </div>
          <button className="border text-[11px] leading-[16px] border-[#D7061F] text-[#D7061F] px-4 py-1 rounded-[4px] bg-white  transition duration-300 font-bold flex items-center gap-1">
            See More 
            <img src={svg1} alt="arrow" className="w-[10px] h-[10px]" />
          </button>
        </div>
        
        {/* Car Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {clearanceCars.map((car) => (
            <ClearanceCarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
