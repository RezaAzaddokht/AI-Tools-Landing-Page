import React, { useState, useEffect, useRef } from 'react';
import { Info } from 'lucide-react';

interface Annotation {
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Stat {
  label: string;
  value: string;
}

interface DatasetProps {
  id: number;
  title: string;
  description: string;
  image: string;
  stats: Stat[];
  annotations: Annotation[];
}

interface DataCardProps {
  dataset: DatasetProps;
  delay: number;
}

export const DataCard: React.FC<DataCardProps> = ({ dataset, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const card = cardRef.current;
    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) {
        observer.unobserve(card);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-900/20 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with annotations */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={dataset.image} 
          alt={dataset.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
        
        {/* Annotations */}
        {dataset.annotations.map((annotation, index) => (
          <div
            key={index}
            className={`absolute border-4 rounded-sm transition-all duration-500 ${
              isHovered ? 'border-red-500 opacity-100' : 'border-transparent opacity-0'
            }`}
            style={{
              left: `${annotation.x}%`,
              top: `${annotation.y}%`,
              width: `${annotation.width}%`,
              height: `${annotation.height}%`,
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div 
              className={`absolute top-0 left-0 transform -translate-y-full -translate-x-1/4 bg-indigo-600 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {annotation.label}
            </div>
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{dataset.title}</h3>
        <p className="text-gray-400 mb-4">{dataset.description}</p>
        
        {/* Stats */}
        <div className="flex justify-between border-t border-gray-700 pt-4">
          {dataset.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-indigo-400 font-bold">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Hover details button */}
      <div className="px-6 pb-6 pt-2">
        <button className="w-full py-2 px-4 bg-gray-700 hover:bg-indigo-600 text-white rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
          <Info size={18} />
          <span>View Details</span>
        </button>
      </div>
    </div>
  );
};