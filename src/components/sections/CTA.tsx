import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Business with Advanced AI Tools?
          </h2>
          
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how our AI platforms can solve your specific challenges and drive innovation in your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white text-indigo-900 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2 font-medium shadow-lg"
            >
              <span>Book a Demo</span>
              <ArrowRight size={18} />
            </a>
            
            <a 
              href="#products" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors duration-300 font-medium"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};