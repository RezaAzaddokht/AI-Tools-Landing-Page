import { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 text-indigo-400">
          <Brain className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight">AI Tools Landing Page</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg shadow-indigo-600/20">
            Get Started
          </button>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute w-full bg-gray-900 shadow-xl transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-lg shadow-indigo-600/20">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

const NavLinks = () => (
  <>
    <a
      href="#products"
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      Products
    </a>
    <a
      href="#dataset-hub"
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      Dataset Hub
    </a>
    <a
      href="#chatbot"
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      ChatBot
    </a>
    <a
      href="#vision"
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      Computer Vision
    </a>
    <a
      href="#contact"
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      Contact
    </a>
  </>
);

const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => (
  <>
    <a
      href="#products"
      className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
      onClick={closeMenu}
    >
      Products
    </a>
    <a
      href="#dataset-hub"
      className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
      onClick={closeMenu}
    >
      Dataset Hub
    </a>
    <a
      href="#chatbot"
      className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
      onClick={closeMenu}
    >
      ChatBot
    </a>
    <a
      href="#vision"
      className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
      onClick={closeMenu}
    >
      Computer Vision
    </a>
    <a
      href="#contact"
      className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
      onClick={closeMenu}
    >
      Contact
    </a>
  </>
);