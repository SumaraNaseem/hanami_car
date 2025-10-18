import carImage from "../assets/topseler.png";
export default function TopSellerCard({ seller }) {
  return (
    <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-sm hover:shadow-md p-2 sm:p-3">
      {/* Car Image */}
      <div className="flex items-center justify-center h-[149px] sm:h-[90px] lg:h-[100px] mb-2 sm:mb-3">
        <img src={carImage} alt="Car" className="w-full h-full object-cover rounded" />
      </div>
      
      {/* Seller Details */}
      <div className="text-center">
        <h3 className="font-inter font-[700] text-[10px] sm:text-[11px] lg:text-[11.15px] leading-[14px] sm:leading-[15px] lg:leading-[16.54px] mb-1 text-gray-800 line-clamp-2">{seller.carName}</h3>
        <p className="text-[#D7061F] font-inter font-[700] text-[12px] sm:text-[13px] lg:text-[15.15px] leading-[16px] sm:leading-[18px] lg:leading-[23.54px]">{seller.sellerName}</p>
      </div>
    </div>
  );
}
