import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Bot, Zap, Settings, Check } from 'lucide-react';

export const ChatbotPlatform = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [chatMessages, setChatMessages] = useState<{text: string, isBot: boolean}[]>([
    { text: "Hello! How can I assist you today?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
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

  const sendMessage = () => {
    if (inputValue.trim() === "") return;
    
    // Add user message
    setChatMessages([...chatMessages, { text: inputValue, isBot: false }]);
    setInputValue("");
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      let response;
      if (inputValue.toLowerCase().includes("pricing")) {
        response = "Our pricing plans start at $29/month for the Basic package. Would you like to see all our pricing options?";
      } else if (inputValue.toLowerCase().includes("feature") || inputValue.toLowerCase().includes("do")) {
        response = "Our chatbot can be customized for customer support, lead generation, product recommendations, and more. What specific use case are you interested in?";
      } else {
        response = "Thank you for your message. Our customizable chatbot can be tailored to your specific business needs. Would you like to learn more about specific features?";
      }
      setChatMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  const features = [
    {
      icon: <Bot size={20} />,
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for understanding user intent and context with high accuracy."
    },
    {
      icon: <Zap size={20} />,
      title: "Multi-Channel Integration",
      description: "Seamlessly deploy across websites, mobile apps, social media, and messaging platforms."
    },
    {
      icon: <Settings size={20} />,
      title: "Customizable Workflows",
      description: "Design conversation flows that match your brand voice and business processes."
    },
  ];

  return (
    <section
      id="chatbot"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(100,100,255,0.1),transparent)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(100,100,255,0.1),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <MessageCircle className="text-indigo-400 mr-2" size={24} />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            ChatBot Platform
          </h2>
        </div>
        
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg">
          Leverage our powerful conversational AI platform to create chatbots that understand, engage, and convert your audience with natural, human-like interactions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo chat interface */}
          <div className={`bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-1000 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
              <div className="flex items-center">
                <Bot className="text-white mr-2" size={24} />
                <h3 className="text-white font-semibold">AI Assistant</h3>
              </div>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 bg-gray-900">
              {chatMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`mb-4 flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isBot 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-indigo-600 text-white'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={sendMessage}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our ChatBot Platform?</h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-indigo-600/20 p-3 rounded-lg text-indigo-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-white mb-3">Industries We Serve</h4>
              <div className="grid grid-cols-2 gap-2">
                {['E-commerce', 'Healthcare', 'Finance', 'Education', 'Travel', 'Real Estate'].map((industry, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check size={16} className="text-indigo-400" />
                    <span className="text-gray-300">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 font-medium mt-4"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};