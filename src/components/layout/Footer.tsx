import { Brain, Facebook, Twitter, Linkedin, Instagram, Github as GitHub, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-indigo-400">
              <Brain className="h-6 w-6" />
              <span className="text-xl font-bold tracking-tight">AI Tools Landing Page</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering the future of AI solutions with cutting-edge technology and innovative approaches to artificial intelligence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <GitHub size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#dataset-hub" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                  Dataset Hub
                </a>
              </li>
              <li>
                <a href="#chatbot" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                  ChatBot Platform
                </a>
              </li>
              <li>
                <a href="#vision" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                  Computer Vision
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                  Blog & Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                  Data Processing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-indigo-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  123 Innovation Street, Tech District, 10001, USA
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-indigo-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-indigo-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">contact@aitoolslandingpage.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI Tools Landing Page. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};