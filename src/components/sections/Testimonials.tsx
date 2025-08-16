import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, TechVision Inc.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Implementing AI Tools' Computer Vision Platform transformed our manufacturing quality control process. We've seen a 35% reduction in defects and significantly improved production efficiency.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Head of Innovation, RetailMax",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "The Customizable ChatBot solution has revolutionized our customer service. Our response times decreased by 80%, and customer satisfaction scores have increased by 40% since implementation.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Research Director, HealthTech Solutions",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "The Dataset Hub provided us with high-quality, diverse medical imaging data that accelerated our diagnostic AI development by months. The annotation quality is exceptional.",
      rating: 4
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(100,100,255,0.1),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Discover how our AI solutions are transforming businesses across various industries.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="relative bg-gray-800 rounded-xl p-8 shadow-2xl overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 text-indigo-500/20">
              <Quote size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name} 
                    className="w-20 h-20 rounded-full object-cover border-2 border-indigo-400"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < testimonials[activeIndex].rating ? "text-yellow-400" : "text-gray-600"} 
                        fill={i < testimonials[activeIndex].rating ? "#FACC15" : "none"} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 text-lg italic mb-4">
                    "{testimonials[activeIndex].content}"
                  </blockquote>
                  
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-indigo-400">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-indigo-600 transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-indigo-500 w-6' : 'bg-gray-600'
                  }`}
                ></button>
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-indigo-600 transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};