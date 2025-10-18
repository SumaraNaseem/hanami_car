import CustomerReviewCard from './CustomerReviewCard';
import svg1 from '../assets/SVG1.png';

const customerReviews = [
  {
    id: 1,
    productName: 'Toyota Ractis',
    rating: 4,
    text: 'Smooth process from start to finish. The car arrived in perfect condition, exactly as described. Highly recommend Hanami Japan for anyone looking for reliable Japanese imports.',
    reviewerName: 'David R.'
  },
  {
    id: 2,
    productName: 'Honda Civic',
    rating: 5,
    text: 'Excellent service and communication throughout the entire process. The vehicle exceeded my expectations and arrived on time. Will definitely use Hanami Japan again.',
    reviewerName: 'Sarah M.'
  },
  {
    id: 3,
    productName: 'Nissan Skyline',
    rating: 4,
    text: 'Great experience buying my dream car. The team was professional and helpful. The car was exactly as advertised and in excellent condition.',
    reviewerName: 'Michael K.'
  }
];

export default function CustomerReviewsSection() {
  const renderOverallStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= 4) {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-[#ff7700]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-4 h-4 text-[#ff7700]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id="partial">
                <stop offset="77%" stopColor="currentColor" />
                <stop offset="77%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path fill="url(#partial)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <section className="mx-auto sm:px-4 lg:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <h2 className="font-roboto font-bold text-[16px] sm:text-[18px] lg:text-[20.31px] leading-[20px] sm:leading-[24px] lg:leading-[27.08px]">Customer Reviews</h2>
        </div>
        <button className="border text-[9px] sm:text-[10px] lg:text-[11px] leading-[12px] sm:leading-[14px] lg:leading-[16px] border-[#D7061F] text-[#D7061F] px-3 sm:px-4 py-1 rounded-[4px] bg-white transition duration-300 font-bold flex items-center gap-1">
          See More 
          <img src={svg1} alt="arrow" className="w-[7px] h-[7px] sm:w-[8px] sm:h-[8px] lg:w-[10px] lg:h-[10px]" />
        </button>
      </div>

      <div className="mx-auto p-3 sm:p-4 lg:p-6 bg-white rounded-lg shadow-sm">
        {/* Overall Rating */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <div className="flex">
              {renderOverallStars()}
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <span className="font-roboto font-[700] text-[20px] sm:text-[24px] lg:text-[28.31px] leading-[16px] sm:leading-[18px] lg:leading-[20.08px]">4.77</span>
              <a href="#" className="text-blue-600 hover:text-blue-800 underline text-[12px] sm:text-[13px] lg:text-sm">
                2,776 Reviews
              </a>
            </div>
          </div>
        </div>
        
        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {customerReviews.map((review) => (
            <CustomerReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
