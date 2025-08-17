import { useEffect, useRef } from 'react';
import { Database } from 'lucide-react';
import { DataCard } from '../ui/DataCard';

import medicalImg from "../../assets/images/medical.png";
import productImg from "../../assets/images/Product.jpeg";
import streetImg from "../../assets/images/street.webp";

export const DatasetHub = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const datasets = [
    {
      id: 1,
      title: 'Urban Object Detection',
      description: 'Comprehensive dataset for identifying objects in urban environments with high accuracy.',
      image: streetImg,
      stats: [
        { label: 'Images', value: '120K+' },
        { label: 'Classes', value: '80' },
        { label: 'Annotations', value: '1.2M' }
      ],
      annotations: [
        { label: 'Bus', x: 5, y: 10, width: 35, height: 70 },
        { label: 'Car', x: 43, y: 50, width: 37, height: 45 },
        // { label: 'Traffic Light', x: 70, y: 20, width: 10, height: 15 }
      ]
    },
    {
      id: 2,
      title: 'Medical Imaging Analysis',
      description: 'Specialized healthcare dataset for identifying anomalies in medical scans with precision.',
      image: medicalImg,
      stats: [
        { label: 'Scans', value: '50K+' },
        { label: 'Categories', value: '15' },
        { label: 'Annotations', value: '680K' }
      ],
      annotations: [
        // { label: 'Tumor', x: 45, y: 35, width: 15, height: 15 },
        { label: 'Tumor', x: 15, y: 40, width: 28, height: 48 }
        // { label: 'Tissue', x: 65, y: 45, width: 25, height: 25 }
      ]
    },
    {
      id: 3,
      title: 'Retail Product Recognition',
      description: 'Extensive collection of retail products for inventory management and checkout systems.',
      image: productImg,
      stats: [
        { label: 'Products', value: '85K+' },
        { label: 'Brands', value: '300+' },
        { label: 'Annotations', value: '950K' }
      ],
      annotations: [
        // { label: 'Cereal Box', x: 15, y: 25, width: 20, height: 35 },
        { label: 'Soda Bottle', x: 42, y: 18, width: 30, height: 30 },
        { label: 'juice Bottle', x: 75, y: 58, width: 25, height: 30 }
      ]
    }
  ];

  return (
    <section
      id="dataset-hub"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center mb-4">
          <Database className="text-indigo-400 mr-2" size={24} />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Data Hub
          </h2>
        </div>
        
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg">
          Access our specialized datasets designed for training cutting-edge AI models with superior accuracy and performance across various domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datasets.map((dataset, index) => (
            <DataCard 
              key={dataset.id} 
              dataset={dataset} 
              delay={index * 200} 
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 font-medium"
          >
            Explore All Datasets
          </a>
        </div>
      </div>
    </section>
  );
};