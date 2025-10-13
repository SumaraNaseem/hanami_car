import carImage from "../assets/reviews.jpg";
export default function CustomerReviewCard({ review }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-orange-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className=" transition duration-300">
      {/* Reviewer Image */}
      
      <div className="w-full h-[265px] overflow-hidden mb-3 ">
        <img src={carImage} alt="Car" className="w-full h-full object-cover" />
      </div>
      
      <div className="flex flex-col h-[230px] ">
      {/* Product/Service Reviewed */}
      <div className=" flex items-center gap-1 mb-3 ">
        <p className="text-sm text-gray-600">Review on</p>
        <a href="#" className="text-blue-600 hover:text-blue-800 underline text-sm font-medium">
          {review.productName}
        </a>
      </div>
      
      {/* Individual Rating */}
      <div className="flex  mb-3">
        {renderStars(review.rating)}
      </div>
      
      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed  ">
        {review.text}
      </p>
      
      {/* Reviewer Name */}
      <div className="">
        <a href="#" className="text-blue-600 hover:text-blue-800 underline text-sm font-medium">
          {review.reviewerName}
        </a>
      </div>
      </div>

    </div>
  );
}
