import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageSlider } from '../ui/ImageSlider';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sliderImages = [
    {
      id: 1,
      title: 'Dataset Hub',
      url: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Advanced datasets for training robust AI models'
    },
    {
      id: 2,
      title: 'Computer Vision Platform',
      url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'State-of-the-art visual recognition technology'
    },
    {
      id: 3,
      title: 'Customizable ChatBot',
      url: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Intelligent conversational AI for businesses'
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
      
      {/* Particle effect container */}
      <div className="absolute inset-0 overflow-hidden">
        <div id="particles" className="absolute inset-0 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div>
              <h4 className="text-indigo-400 font-semibold mb-3">Next-Generation AI Solutions</h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transforming Industries Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Intelligent Technology</span>
              </h1>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Ai Tools delivers cutting-edge artificial intelligence solutions that empower businesses to harness the full potential of computer vision, conversational AI, and data intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center space-x-2 font-medium">
                <span>Get Started</span>
                <ArrowRight size={18} />
              </a>
              <a href="#products" className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 font-medium">
                Explore Products
              </a>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-white">250+</p>
                <p className="text-gray-400 text-sm">Global Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">15M+</p>
                <p className="text-gray-400 text-sm">Data Points</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">99.9%</p>
                <p className="text-gray-400 text-sm">Accuracy Rate</p>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div className={`transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <ImageSlider images={sliderImages} />
          </div>
        </div>
      </div>
    </section>
  );
};