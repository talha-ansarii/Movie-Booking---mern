import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ad1 from '../Advertisement/Ads 1.png';
import ad2 from '../Advertisement/Ads 2.png';
import ad3 from '../Advertisement/Ads 3.png';
const MovieAd = () => {
    const adImages = [ad1, ad2, ad3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % adImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + adImages.length) % adImages.length);
  };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval); }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10 rounded-lg overflow-hidden shadow-lg">
      <button 
        onClick={prevSlide} 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50 rounded-full"
      >
        <ChevronLeft className="text-gray-800 h-6 w-6" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50 rounded-full"
      >
        <ChevronRight className="text-gray-800 h-6 w-6" />
      </button>
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={adImages[currentIndex]} 
          alt={`Advertisement ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {adImages.map((_, index) => (
          <div 
            key={index} 
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MovieAd;