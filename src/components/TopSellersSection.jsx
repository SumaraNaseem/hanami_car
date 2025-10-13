import TopSellerCard from './TopSellerCard';
import usa from "../assets/usa.png";
import svg1 from '../assets/SVG1.png';


const topSellers = [
  { id: 1, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' },
  { id: 2, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' },
  { id: 3, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' },
  { id: 4, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' },
  { id: 5, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' },
  { id: 6, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' },
  { id: 7, carName: 'TOYOTA NOAH', sellerName: 'Seller Name' }
];

export default function TopSellersSection() {
  return (
    <section className="py-6 mt-5 ml-6 bg-[#dfe7eb]">
      <div className=" mx-auto px-6">
        {/* Header */}
       
          <div className="flex items-center gap-3 mb-5">
            <div className="overflow-hidden w-[33px] h-[27px]">
              <img src={usa} alt="usa" className="w-full h-full object-contain" />
            </div>
            <h2 className="font-roboto font-bold text-[20.31px] leading-[27.08px] ">Top Sellers in USA</h2>
          </div>
          
      
        
        {/* Seller Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {topSellers.map((seller) => (
            <TopSellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
          <button className="border text-[11px] leading-[16px] border-[#D7061F] text-[#D7061F] px-4 py-1 rounded-[4px] bg-white  transition duration-300 font-bold flex items-center gap-1">
            See More 
            <img src={svg1} alt="arrow" className="w-[10px] h-[10px]" />
          </button>
      </div>
    </section>
  );
}
