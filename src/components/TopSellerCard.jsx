import carImage from "../assets/topseler.png";
export default function TopSellerCard({ seller }) {
  return (
    <div className=" overflow-hidden transition duration-300 w-[108] h-[128]">
      {/* Car Image */}
      
      <div className=" flex items-center justify-center">
        <img src={carImage} alt="Car" className="w-full h-full object-cover" />
      </div>
   
      
      {/* Seller Details */}
      <div className="mt-1">
        <h3 className="font-[700] text-[11.15px] leading-[16.54px]  mb-1">{seller.carName}</h3>
        <p className="text-[#D7061F]  font-[700] text-[15.15px] leading-[23.54px]">{seller.sellerName}</p>
      </div>
    </div>
  );
}
