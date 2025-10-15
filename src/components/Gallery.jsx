import React, { useState } from 'react';
import JSZip from 'jszip';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sample car images - you can replace these with actual car images
  const carImages = [
    '/src/assets/JapaneseCar.png',
    '/src/assets/1d3bd4b1bed32905633dcd2e48e8efc82687174a.png',
    '/src/assets/3ec58b6bc98bcc5b4aab40ff0a6cbd59dcc5e416.png',
    '/src/assets/7c5db7d463d26de62cf54a198864a7052c2cdd3b.png',
    '/src/assets/9fa836183cf48d199e7f291d84a3fe495b1baeeb.png',
    '/src/assets/42c6d676c4bfd9acf321da71ea86262564962644.png',
    '/src/assets/79a98e6272904293a30c6b7b3f5910ae1446cbcf.png',
    '/src/assets/80e3d023ba69c09e827a3cb455338841ca9b3218.png',
    '/src/assets/80e3d023ba69c09e827a3cb455338841ca9b3218.png',
    '/src/assets/80e3d023ba69c09e827a3cb455338841ca9b3218.png',
    '/src/assets/85de04855f196dbae483d64a009b7643137d7fd1.png',
    '/src/assets/92d5be76cc07abb1c8ec8dd46687c911b4543ffa.png',
    '/src/assets/254ae3f607de305689fde968ae78ac85c478899e.png',
    '/src/assets/254fa6d3921ad67d9f9c579f9fca3423c51e29bb.png',
    '/src/assets/373a6ce437e60353878f488ef6697db9f19eac44.png',
    '/src/assets/930b560a508c4bb06531c5667f7afbe4f6702aec.png',
    '/src/assets/3510b4b66a016d91e9b9e41b22bccd0f426ce172.png',
    '/src/assets/3835d0b5a3e4bb86179dc84e1e39135dddf1d68c.png',
    '/src/assets/5116d28ec858339315dc4cae8791cd7e74382f43.png',
    '/src/assets/6308c5e4f1b45858f8240b9818c867d79d89ab80.png',
    '/src/assets/9146dce0852d9b875ea4700665c81174a831eab9.png',
    '/src/assets/1599000b070b5d5f712efd00ea2774a19f62e8f6.png',
    '/src/assets/010595315c770d4c2205c73fb91a4e5219f10321.png',
    '/src/assets/a8d1826fba39757e7aeffeda6cdf77ed41996a0f.png',
    '/src/assets/a35a06111ae0d286676eb0600c8110a3389c7de9.png',
    '/src/assets/b35ce45b4b64a3ad6f22f86bfe85af5dc2577a8b.png',
    '/src/assets/b191b3c1022bd879b6d1e5446560935da94456f7.png',
    '/src/assets/b8385b95af5b97e0d5b2499b3f57f92c42cc2b74.png',
    '/src/assets/bcfc6fdec7efa4b0db0181df48246bbb19d2bdc8.png',
    '/src/assets/c8bc13497db54f4ff60dc163e60dd4f8140db936.png',
    '/src/assets/d580ea2e3299cc19c5c41e8e677b92f9f908bbc7.png',
    '/src/assets/e4eead4f06e3920f63ad0c9e6b719e340a520088.png',
    '/src/assets/eecf7bccd08a29108b8a500a8981aa3fbbe6dc26.png',
    
    '/src/assets/truck.png',
    '/src/assets/topseler.png',
    '/src/assets/reviews.jpg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const downloadAllImages = async () => {
    try {
      const zip = new JSZip();
      const folder = zip.folder("car-images");
      
      // Add each image to the zip
      for (let i = 0; i < carImages.length; i++) {
        try {
          const response = await fetch(carImages[i]);
          if (response.ok) {
            const blob = await response.blob();
            const fileName = `image_${i + 1}.${blob.type.split('/')[1] || 'jpg'}`;
            folder.file(fileName, blob);
          }
        } catch (error) {
          console.warn(`Failed to fetch image ${i + 1}:`, error);
          // Create a placeholder image for failed downloads
          const canvas = document.createElement('canvas');
          canvas.width = 400;
          canvas.height = 300;
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = '#f3f4f6';
          ctx.fillRect(0, 0, 400, 300);
          ctx.fillStyle = '#6b7280';
          ctx.font = '16px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(`Image ${i + 1} - Not Available`, 200, 150);
          
          canvas.toBlob((blob) => {
            if (blob) {
              folder.file(`image_${i + 1}_placeholder.png`, blob);
            }
          });
        }
      }
      
      // Generate and download the zip file
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'car-images.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error creating zip file:', error);
      alert('Failed to download images. Please try again.');
    }
  };

  return (
    <div className=" overflow-hidden">
      {/* Main Image Display */}
      <div className="relative">
        <div className="aspect-video bg-gray-200 flex items-center justify-center">
          <img 
            src={carImages[currentImageIndex]} 
            alt={`Car view ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden w-full h-full bg-gray-300 items-center justify-center text-gray-500 text-6xl">
            🚗
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1}/{carImages.length}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="px-4 pt-8">

        <div className="grid grid-cols-6 gap-2 pb-8 ">
          {carImages.slice(0, 100).map((image, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`aspect-square rounded-lg  overflow-hidden border transition-all duration-200 ${
                index === currentImageIndex 
                  ? ' ring-2 ring-red-500' 
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full bg-gray-200 items-center justify-center text-gray-400 text-lg">
                🚗
              </div>
            </button>
          ))}
        </div>
        
        {/* Download Link */}
        <div className="text-center bg-white rounded-md mb-4">
          <button 
            onClick={downloadAllImages}
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700
            font-medium transition-colors duration-200 hover:bg-red-50 px-4 py-3 "
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download all images.zip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
