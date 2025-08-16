import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageSquare, HelpCircle, DollarSign } from 'lucide-react';

export const ContactUs = () => {
  const [activeTab, setActiveTab] = useState('general');
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(100,100,255,0.1),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <MessageSquare className="text-indigo-400 mr-2" size={24} />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Contact Us
          </h2>
        </div>
        
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg">
          Have questions about our AI solutions? Reach out to our team and discover how we can transform your business with intelligent technology.
        </p>

        <div className={`max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {/* Tabs */}
          <div className="flex border-b border-gray-700">
            <button
              onClick={() => setActiveTab('general')}
              className={`flex items-center px-6 py-4 font-medium transition-colors duration-200 ${
                activeTab === 'general'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <MessageSquare size={18} className="mr-2" />
              <span>General Inquiry</span>
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`flex items-center px-6 py-4 font-medium transition-colors duration-200 ${
                activeTab === 'support'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <HelpCircle size={18} className="mr-2" />
              <span>Technical Support</span>
            </button>
            <button
              onClick={() => setActiveTab('sales')}
              className={`flex items-center px-6 py-4 font-medium transition-colors duration-200 ${
                activeTab === 'sales'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <DollarSign size={18} className="mr-2" />
              <span>Sales</span>
            </button>
          </div>

          {/* Form Area */}
          <div className="p-6 md:p-8">
            {activeTab === 'general' && <GeneralForm />}
            {activeTab === 'support' && <SupportForm />}
            {activeTab === 'sales' && <SalesForm />}
          </div>
        </div>
      </div>
    </section>
  );
};

const GeneralForm = () => {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="What is your inquiry about?"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="How can we help you?"
        ></textarea>
      </div>
      
      <div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center font-medium"
        >
          <Send size={18} className="mr-2" />
          Send Message
        </button>
      </div>
    </form>
  );
};

const SupportForm = () => {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="product" className="block text-sm font-medium text-gray-300 mb-1">
          Product
        </label>
        <select
          id="product"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Select a product</option>
          <option value="dataset-hub">Dataset Hub</option>
          <option value="computer-vision">Computer Vision Platform</option>
          <option value="chatbot">Customizable ChatBot</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="issue-type" className="block text-sm font-medium text-gray-300 mb-1">
          Issue Type
        </label>
        <select
          id="issue-type"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Select issue type</option>
          <option value="bug">Bug Report</option>
          <option value="account">Account Access</option>
          <option value="billing">Billing Issue</option>
          <option value="feature">Feature Request</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
          Description
        </label>
        <textarea
          id="description"
          rows={5}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Please describe your issue in detail..."
        ></textarea>
      </div>
      
      <div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center font-medium"
        >
          <Send size={18} className="mr-2" />
          Submit Support Request
        </button>
      </div>
    </form>
  );
};

const SalesForm = () => {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Acme Inc."
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="product-interest" className="block text-sm font-medium text-gray-300 mb-1">
          Product of Interest
        </label>
        <select
          id="product-interest"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Select a product</option>
          <option value="dataset-hub">Dataset Hub</option>
          <option value="computer-vision">Computer Vision Platform</option>
          <option value="chatbot">Customizable ChatBot</option>
          <option value="all">All Products</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
          Estimated Budget
        </label>
        <select
          id="budget"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Select budget range</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="over-50k">Over $50,000</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="requirements" className="block text-sm font-medium text-gray-300 mb-1">
          Project Requirements
        </label>
        <textarea
          id="requirements"
          rows={5}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Please describe your project and requirements..."
        ></textarea>
      </div>
      
      <div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center font-medium"
        >
          <Send size={18} className="mr-2" />
          Request Consultation
        </button>
      </div>
    </form>
  );
};