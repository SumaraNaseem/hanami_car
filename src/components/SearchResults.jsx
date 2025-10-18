import React, { useState } from "react";
import searchCarImage from "../assets/Searchcar.jpg";
import vector26 from "../assets/Vector26.png";



function SearchResults() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [sortBy, setSortBy] = useState("New Arrivals");

  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const handleCalculatePrice = (carId) => {
    const car = allCars.find((c) => c.id === carId);
    if (car) {
      alert(
        `Price calculation for ${car.year} ${car.make} ${car.model}: US$ ${car.price}`
      );
    }
  };

  const handleInquiry = (carId) => {
    const car = allCars.find((c) => c.id === carId);
    if (car) {
      alert(
        `Inquiry sent for ${car.year} ${car.make} ${car.model}. We'll contact you soon!`
      );
    }
  };

  // Sample car data with different makes, models, and years
  const allCars = [
    // New Arrivals (2023-2024)
    {
      id: 1,
      year: "2024",
      make: "Toyota",
      model: "PRIUS HYBRID",
      capacity: "1.8L",
      image: searchCarImage,
      mileage: "15,200 km",
      engine: "1,800 cc (98)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "18,500",
      originalPrice: "22,000",
      discount: "3,500",
      discountPercent: "16%",
    },
    {
      id: 2,
      year: "2023",
      make: "Honda",
      model: "CIVIC TYPE R",
      capacity: "2.0L",
      image: searchCarImage,
      mileage: "8,500 km",
      engine: "2,000 cc (306)",
      transmission: "MT",
      drive: "FWD",
      steering: "Right",
      price: "35,200",
      originalPrice: "38,000",
      discount: "2,800",
      discountPercent: "7%",
    },
    {
      id: 3,
      year: "2023",
      make: "Nissan",
      model: "LEAF EV",
      capacity: "Electric",
      image: searchCarImage,
      mileage: "12,300 km",
      engine: "Electric (150)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "25,800",
      originalPrice: "28,500",
      discount: "2,700",
      discountPercent: "9%",
    },
    {
      id: 4,
      year: "2024",
      make: "Mazda",
      model: "CX-5 SUV",
      capacity: "2.5L",
      image: searchCarImage,
      mileage: "5,200 km",
      engine: "2,500 cc (187)",
      transmission: "AT",
      drive: "AWD",
      steering: "Right",
      price: "28,900",
      originalPrice: "32,000",
      discount: "3,100",
      discountPercent: "10%",
    },
    {
      id: 5,
      year: "2023",
      make: "Subaru",
      model: "WRX STI",
      capacity: "2.0L",
      image: searchCarImage,
      mileage: "18,500 km",
      engine: "2,000 cc (268)",
      transmission: "MT",
      drive: "AWD",
      steering: "Right",
      price: "32,500",
      originalPrice: "36,000",
      discount: "3,500",
      discountPercent: "10%",
    },
    // Price Low to High (older, cheaper cars)
    {
      id: 6,
      year: "2018",
      make: "Toyota",
      model: "AQUA HYBRID",
      capacity: "1.5L",
      image: searchCarImage,
      mileage: "85,200 km",
      engine: "1,500 cc (74)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "8,200",
      originalPrice: "10,500",
      discount: "2,300",
      discountPercent: "22%",
    },
    {
      id: 7,
      year: "2017",
      make: "Honda",
      model: "FIT HYBRID",
      capacity: "1.3L",
      image: searchCarImage,
      mileage: "95,800 km",
      engine: "1,300 cc (100)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "7,800",
      originalPrice: "9,800",
      discount: "2,000",
      discountPercent: "20%",
    },
    {
      id: 8,
      year: "2016",
      make: "Nissan",
      model: "NOTE HYBRID",
      capacity: "1.2L",
      image: searchCarImage,
      mileage: "125,500 km",
      engine: "1,200 cc (79)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "6,500",
      originalPrice: "8,200",
      discount: "1,700",
      discountPercent: "21%",
    },
    {
      id: 9,
      year: "2015",
      make: "Toyota",
      model: "VITZ",
      capacity: "1.0L",
      image: searchCarImage,
      mileage: "145,200 km",
      engine: "1,000 cc (69)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "5,200",
      originalPrice: "6,800",
      discount: "1,600",
      discountPercent: "24%",
    },
    {
      id: 10,
      year: "2014",
      make: "Daihatsu",
      model: "MIRA",
      capacity: "0.66L",
      image: searchCarImage,
      mileage: "165,800 km",
      engine: "660 cc (52)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "4,800",
      originalPrice: "6,200",
      discount: "1,400",
      discountPercent: "23%",
    },
    // Price High to Low (luxury cars)
    {
      id: 11,
      year: "2022",
      make: "Lexus",
      model: "LC 500",
      capacity: "5.0L",
      image: searchCarImage,
      mileage: "12,500 km",
      engine: "5,000 cc (471)",
      transmission: "AT",
      drive: "RWD",
      steering: "Right",
      price: "85,500",
      originalPrice: "95,000",
      discount: "9,500",
      discountPercent: "10%",
    },
    {
      id: 12,
      year: "2021",
      make: "BMW",
      model: "M3 COMPETITION",
      capacity: "3.0L",
      image: searchCarImage,
      mileage: "18,200 km",
      engine: "3,000 cc (510)",
      transmission: "AT",
      drive: "RWD",
      steering: "Right",
      price: "72,800",
      originalPrice: "82,000",
      discount: "9,200",
      discountPercent: "11%",
    },
    {
      id: 13,
      year: "2020",
      make: "Mercedes",
      model: "AMG GT 63S",
      capacity: "4.0L",
      image: searchCarImage,
      mileage: "25,800 km",
      engine: "4,000 cc (630)",
      transmission: "AT",
      drive: "AWD",
      steering: "Right",
      price: "95,200",
      originalPrice: "105,000",
      discount: "9,800",
      discountPercent: "9%",
    },
    {
      id: 14,
      year: "2019",
      make: "Audi",
      model: "R8 V10 PLUS",
      capacity: "5.2L",
      image: searchCarImage,
      mileage: "22,500 km",
      engine: "5,200 cc (610)",
      transmission: "AT",
      drive: "AWD",
      steering: "Right",
      price: "88,500",
      originalPrice: "98,000",
      discount: "9,500",
      discountPercent: "10%",
    },
    {
      id: 15,
      year: "2018",
      make: "Porsche",
      model: "911 TURBO S",
      capacity: "3.8L",
      image: searchCarImage,
      mileage: "28,200 km",
      engine: "3,800 cc (580)",
      transmission: "AT",
      drive: "AWD",
      steering: "Right",
      price: "92,800",
      originalPrice: "102,000",
      discount: "9,200",
      discountPercent: "9%",
    },
    // Year-based sorting (various years)
    {
      id: 16,
      year: "2022",
      make: "Toyota",
      model: "CAMRY HYBRID",
      capacity: "2.5L",
      image: searchCarImage,
      mileage: "35,200 km",
      engine: "2,500 cc (215)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "22,800",
      originalPrice: "26,500",
      discount: "3,700",
      discountPercent: "14%",
    },
    {
      id: 17,
      year: "2021",
      make: "Honda",
      model: "ACCORD HYBRID",
      capacity: "2.0L",
      image: searchCarImage,
      mileage: "42,500 km",
      engine: "2,000 cc (212)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "19,500",
      originalPrice: "23,000",
      discount: "3,500",
      discountPercent: "15%",
    },
    {
      id: 18,
      year: "2020",
      make: "Nissan",
      model: "SKYLINE GT-R",
      capacity: "3.8L",
      image: searchCarImage,
      mileage: "15,800 km",
      engine: "3,800 cc (570)",
      transmission: "AT",
      drive: "AWD",
      steering: "Right",
      price: "65,200",
      originalPrice: "72,000",
      discount: "6,800",
      discountPercent: "9%",
    },
    {
      id: 19,
      year: "2019",
      make: "Mazda",
      model: "RX-7 SPIRIT R",
      capacity: "1.3L",
      image: searchCarImage,
      mileage: "45,200 km",
      engine: "1,300 cc (280)",
      transmission: "MT",
      drive: "RWD",
      steering: "Right",
      price: "42,800",
      originalPrice: "48,000",
      discount: "5,200",
      discountPercent: "11%",
    },
    {
      id: 20,
      year: "2018",
      make: "Subaru",
      model: "IMPREZA WRX",
      capacity: "2.0L",
      image: searchCarImage,
      mileage: "55,800 km",
      engine: "2,000 cc (268)",
      transmission: "MT",
      drive: "AWD",
      steering: "Right",
      price: "28,500",
      originalPrice: "32,000",
      discount: "3,500",
      discountPercent: "11%",
    },
    {
      id: 16,
      year: "2022",
      make: "Toyota",
      model: "CAMRY HYBRID",
      capacity: "2.5L",
      image: searchCarImage,
      mileage: "35,200 km",
      engine: "2,500 cc (215)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "22,800",
      originalPrice: "26,500",
      discount: "3,700",
      discountPercent: "14%",
    },
    {
      id: 17,
      year: "2021",
      make: "Honda",
      model: "ACCORD HYBRID",
      capacity: "2.0L",
      image: searchCarImage,
      mileage: "42,500 km",
      engine: "2,000 cc (212)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "19,500",
      originalPrice: "23,000",
      discount: "3,500",
      discountPercent: "15%",
    },
    {
      id: 18,
      year: "2020",
      make: "Nissan",
      model: "SKYLINE GT-R",
      capacity: "3.8L",
      image: searchCarImage,
      mileage: "15,800 km",
      engine: "3,800 cc (570)",
      transmission: "AT",
      drive: "AWD",
      steering: "Right",
      price: "65,200",
      originalPrice: "72,000",
      discount: "6,800",
      discountPercent: "9%",
    },
    {
      id: 15,
      year: "2018",
      make: "Porsche",
      model: "911 TURBO S",
      capacity: "3.8L",
      image: searchCarImage,
      mileage: "28,200 km",
      engine: "3,800 cc (580)",
      transmission: "AT",
      drive: "AWD",
      steering: "Right",
      price: "92,800",
      originalPrice: "102,000",
      discount: "9,200",
      discountPercent: "9%",
    },
    // Year-based sorting (various years)
    {
      id: 16,
      year: "2022",
      make: "Toyota",
      model: "CAMRY HYBRID",
      capacity: "2.5L",
      image: searchCarImage,
      mileage: "35,200 km",
      engine: "2,500 cc (215)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "22,800",
      originalPrice: "26,500",
      discount: "3,700",
      discountPercent: "14%",
    },
    {
      id: 17,
      year: "2021",
      make: "Honda",
      model: "ACCORD HYBRID",
      capacity: "2.0L",
      image: searchCarImage,
      mileage: "42,500 km",
      engine: "2,000 cc (212)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "19,500",
      originalPrice: "23,000",
      discount: "3,500",
      discountPercent: "15%",
    },
    {
      id: 18,
      year: "2020",
      make: "Nissan",
      model: "SKYLINE GT-R",
      capacity: "3.8L",
      image: searchCarImage,
      mileage: "15,800 km",
      engine: "3,800 cc (570)",
      transmission: "AT",
      drive: "AWD",
      steering: "Right",
      price: "65,200",
      originalPrice: "72,000",
      discount: "6,800",
      discountPercent: "9%",
    },
    {
      id: 19,
      year: "2019",
      make: "Mazda",
      model: "RX-7 SPIRIT R",
      capacity: "1.3L",
      image: searchCarImage,
      mileage: "45,200 km",
      engine: "1,300 cc (280)",
      transmission: "MT",
      drive: "RWD",
      steering: "Right",
      price: "42,800",
      originalPrice: "48,000",
      discount: "5,200",
      discountPercent: "11%",
    },
    {
      id: 20,
      year: "2018",
      make: "Subaru",
      model: "IMPREZA WRX",
      capacity: "2.0L",
      image: searchCarImage,
      mileage: "55,800 km",
      engine: "2,000 cc (268)",
      transmission: "MT",
      drive: "AWD",
      steering: "Right",
      price: "28,500",
      originalPrice: "32,000",
      discount: "3,500",
      discountPercent: "11%",
    },
    {
      id: 16,
      year: "2022",
      make: "Toyota",
      model: "CAMRY HYBRID",
      capacity: "2.5L",
      image: searchCarImage,
      mileage: "35,200 km",
      engine: "2,500 cc (215)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "22,800",
      originalPrice: "26,500",
      discount: "3,700",
      discountPercent: "14%",
    },
    {
      id: 17,
      year: "2021",
      make: "Honda",
      model: "ACCORD HYBRID",
      capacity: "2.0L",
      image: searchCarImage,
      mileage: "42,500 km",
      engine: "2,000 cc (212)",
      transmission: "CVT",
      drive: "FWD",
      steering: "Right",
      price: "19,500",
      originalPrice: "23,000",
      discount: "3,500",
      discountPercent: "15%",
    },
    {
      id: 18,
      year: "2020",
      make: "Nissan",
      model: "SKYLINE GT-R",
      capacity: "3.8L",
      image: searchCarImage,
      mileage: "15,800 km",
      engine: "3,800 cc (570)",
      transmission: "AT",
      drive: "AWD",
      steering: "Right",
      price: "65,200",
      originalPrice: "72,000",
      discount: "6,800",
      discountPercent: "9%",
    },
    {
      id: 19,
      year: "2019",
      make: "Mazda",
      model: "RX-7 SPIRIT R",
      capacity: "1.3L",
      image: searchCarImage,
      mileage: "45,200 km",
      engine: "1,300 cc (280)",
      transmission: "MT",
      drive: "RWD",
      steering: "Right",
      price: "42,800",
      originalPrice: "48,000",
      discount: "5,200",
      discountPercent: "11%",
    },
    {
      id: 20,
      year: "2018",
      make: "Subaru",
      model: "IMPREZA WRX",
      capacity: "2.0L",
      image: searchCarImage,
      mileage: "55,800 km",
      engine: "2,000 cc (268)",
      transmission: "MT",
      drive: "AWD",
      steering: "Right",
      price: "28,500",
      originalPrice: "32,000",
      discount: "3,500",
      discountPercent: "11%",
    },
  ];

  // Filter and sort cars based on selected option
  const getFilteredCars = () => {
    let filtered = [...allCars];

    switch (sortBy) {
      case "New Arrivals":
        filtered = allCars.filter((car) => parseInt(car.year) >= 2023);
        break;
      case "Price Low to High":
        filtered = allCars.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        break;
      case "Price High to Low":
        filtered = allCars.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        break;
      case "Year":
        filtered = allCars.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        break;
      default:
        filtered = allCars;
    }

    return filtered;
  };

  const filteredCars = getFilteredCars();
  const totalResults = filteredCars.length;
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  // Get cars for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const cars = filteredCars.slice(startIndex, endIndex);

  return (
    <section className="pt-4 sm:pt-6 sm:px-4 lg:px-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 sm:mb-6">
        <div>
          <h2 className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[16px] sm:leading-[18px] lg:leading-[20px] font-[400] mb-2">
            Search Results:
            <span className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[18px] sm:leading-[22px] lg:leading-[24px] font-[600]">
              {totalResults.toLocaleString()}
            </span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    i <= 5.17 ? "text-orange-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 font-semibold text-[12px] sm:text-[13px] lg:text-[14px]">4.77</span>
            </div>
            <span className="text-[#D7061F] underline text-[9px] sm:text-[10px] lg:text-[11px] leading-[12px] sm:leading-[14px] lg:leading-[16px] font-[400]">
              2776 Reviews
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <label className="text-[11px] sm:text-[12px] lg:text-[14px] leading-[14px] sm:leading-[16px] lg:leading-[20px] font-[400] text-gray-700">
              Items per page:
            </label>
            <select
              value={itemsPerPage}
              onChange={(e) => handleItemsPerPageChange(e.target.value)}
              className="px-2 py-1 border border-gray-300 rounded text-[11px] sm:text-[12px] lg:text-[14px] leading-[14px] sm:leading-[16px] lg:leading-[20px] font-[400]"
            >
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={12}>12</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-[11px] sm:text-[12px] lg:text-[14px] leading-[14px] sm:leading-[16px] lg:leading-[20px] font-[400] text-gray-700">
              Sort by:
            </label>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="px-2 py-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black rounded text-[11px] sm:text-[12px] lg:text-[14px] leading-[14px] sm:leading-[16px] lg:leading-[20px] font-[400]"
            >
              <option value="New Arrivals">New Arrivals</option>
              <option value="Price Low to High">Price Low to High</option>
              <option value="Price High to Low">Price High to Low</option>
              <option value="Year">Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className="bg-[#d2d3d4] px-2 sm:px-4 py-3 sm:py-4 mb-3">
        <div className="grid grid-cols-12 gap-2 sm:gap-4 text-[10px] sm:text-[11px] lg:text-[12px] leading-[12px] sm:leading-[14px] lg:leading-[16px] font-[500] text-gray-700">
          <div className="col-span-3"></div>
          <div className="col-span-2 text-center">Mileage</div>
          <div className="col-span-2 text-center">Engine</div>
          <div className="col-span-1 text-center">Trans</div>
          <div className="col-span-1 text-center">Drive</div>
          <div className="col-span-1 text-center">Steering</div>
          <div className="col-span-2 text-center">Car Price</div>
        </div>
      </div>

      {/* Car Listings */}
      <div className="border bg-white border-gray-200">
        {cars.map((car, index) => (
          <div
            key={car.id}
            className={`p-3 sm:p-4 ${
              index !== cars.length - 1 ? " border-b-4 sm:border-b-8 border-gray-200" : ""
            }`}
          >
            <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center">
              {/* Car Image and Details */}
              <div className="col-span-12 sm:col-span-3 mb-3 sm:mb-0">
                <div className="flex gap-3 sm:gap-4">
                  <img
                    src={car.image}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    className="w-[100px] sm:w-[120px] lg:w-[133px] h-[75px] sm:h-[90px] lg:h-[100px] object-cover"
                  />
                  <div className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[16px] sm:leading-[18px] lg:leading-[20px] font-[500]">
                    <div className="text-gray-900">
                      {car.year} {car.make}
                    </div>
                    <div className="text-gray-900">
                      {car.model}
                    </div>
                    <div className="text-gray-600">{car.capacity}</div>
                  </div>
                </div>
              </div>

              {/* Specifications - Mobile: Stack vertically, Desktop: Grid */}
              <div className="col-span-12 sm:col-span-9 grid grid-cols-2 sm:grid-cols-9 gap-2 sm:gap-4">
                <div className="col-span-1 sm:col-span-2 text-center text-[11px] sm:text-[12px] lg:text-[14px] leading-[14px] sm:leading-[16px] lg:leading-[20px] font-[400] text-gray-700">
                  <div className="sm:hidden text-[10px] font-[500] mb-1">Mileage</div>
                  {car.mileage}
                </div>
                <div className="col-span-1 sm:col-span-2 text-center text-[10px] sm:text-[11px] lg:text-[12px] leading-[12px] sm:leading-[14px] lg:leading-[16px] font-[400] text-gray-700">
                  <div className="sm:hidden text-[10px] font-[500] mb-1">Engine</div>
                  {car.engine}
                </div>
                <div className="col-span-1 sm:col-span-1 text-center text-[11px] sm:text-[12px] lg:text-[14px] leading-[14px] sm:leading-[16px] lg:leading-[20px] font-[400] text-gray-700">
                  <div className="sm:hidden text-[10px] font-[500] mb-1">Trans</div>
                  {car.transmission}
                </div>
                <div className="col-span-1 sm:col-span-1 text-center text-[11px] sm:text-[12px] lg:text-[14px] leading-[14px] sm:leading-[16px] lg:leading-[20px] font-[400] text-gray-700">
                  <div className="sm:hidden text-[10px] font-[500] mb-1">Drive</div>
                  {car.drive}
                </div>
                <div className="col-span-1 sm:col-span-1 text-center text-[11px] sm:text-[12px] lg:text-[14px] leading-[14px] sm:leading-[16px] lg:leading-[20px] font-[400] text-gray-700">
                  <div className="sm:hidden text-[10px] font-[500] mb-1">Steering</div>
                  {car.steering}
                </div>

                {/* Price */}
                <div className="col-span-2 sm:col-span-2 text-center">
                  <div className="text-[11px] sm:text-[12px] lg:text-[14px] leading-[14px] sm:leading-[16px] lg:leading-[20px] font-[400] text-gray-600 mb-1">Car Price:</div>
                  <div className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[16px] sm:leading-[18px] lg:leading-[20px] font-[600] text-gray-800">
                    US$ {car.price}
                  </div>
                  <div className="text-[10px] sm:text-[11px] lg:text-[12px] leading-[12px] sm:leading-[14px] lg:leading-[16px] font-[400] text-gray-600">
                    Save: US$ {car.discount} ({car.discountPercent})
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-3 sm:gap-4 mt-3 sm:mt-1">
              <button
                onClick={() => handleCalculatePrice(car.id)}
                className="text-[#D7061F] text-[12px] sm:text-[13px] lg:text-[14px] leading-[16px] sm:leading-[18px] lg:leading-[20px] font-[500] hover:underline cursor-pointer"
              >
                Click to Calculate
              </button>

              <button
                onClick={() => handleInquiry(car.id)}
                className="flex items-center justify-center gap-2 bg-[#D7061F] px-8 sm:px-10 lg:px-12 py-2 rounded-md transition-colors cursor-pointer w-full sm:w-auto"
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 overflow-hidden inline-block">
                  <img src={vector26} alt="icon" className="w-full h-full object-cover" />   
                </span>
                <h1 className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[16px] sm:leading-[18px] lg:leading-[20px] font-[400] text-white">
                  Inquiry
                </h1>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col items-center mt-4 sm:mt-6 border-gray-700">
        <div className="text-[11px] sm:text-[12px] lg:text-[14px] leading-[14px] sm:leading-[16px] lg:leading-[20px] font-[400] text-gray-600 mb-3 sm:mb-4">
          Showing{" "}
          <span className="font-[600]">
            {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, totalResults)}{" "}
          </span>{" "}
          of{" "}
          <span className="font-[600]"> {totalResults.toLocaleString()} </span>{" "}
          results
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-2 sm:px-3 py-1 border border-gray-300 rounded text-[10px] sm:text-[11px] lg:text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &lt;
          </button>

          {(() => {
            const pages = [];
            const maxVisiblePages = 5;
            let startPage = Math.max(
              1,
              currentPage - Math.floor(maxVisiblePages / 2)
            );
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

            if (endPage - startPage + 1 < maxVisiblePages) {
              startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }

            for (let i = startPage; i <= endPage; i++) {
              pages.push(
                <button
                  key={i}
                  onClick={() => handlePageChange(i)}
                  className={`px-2 sm:px-3 py-1 border rounded text-[10px] sm:text-[11px] lg:text-sm ${
                    currentPage === i
                      ? "bg-red-600 text-white border-red-600"
                      : "border-gray-300 bg-white hover:bg-gray-50"
                  }`}
                >
                  {i}
                </button>
              );
            }

            return pages;
          })()}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <span className="px-2 sm:px-3 py-1 border border-gray-300 rounded bg-white text-[10px] sm:text-[11px] lg:text-sm">
              ...
            </span>
          )}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-2 sm:px-3 py-1 border border-gray-300 rounded text-[10px] sm:text-[11px] lg:text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchResults;
