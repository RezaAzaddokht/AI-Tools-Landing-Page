import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  id: number;
  title: string;
  url: string;
  description: string;
}

interface ImageSliderProps {
  images: Image[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative rounded-xl overflow-hidden bg-gray-800 shadow-2xl h-[400px] md:h-[500px]">
      {/* Slides */}
      <div className="h-full relative">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === activeIndex
                ? 'opacity-100 z-10 transform translate-x-0'
                : index < activeIndex
                ? 'opacity-0 z-0 transform -translate-x-full'
                : 'opacity-0 z-0 transform translate-x-full'
            }`}
          >
            <img 
              src={image.url} 
              alt={image.title} 
              className="w-full h-full object-cover"
            />
            
            {/* Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{image.title}</h3>
              <p className="text-gray-200 max-w-md">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setActiveIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};