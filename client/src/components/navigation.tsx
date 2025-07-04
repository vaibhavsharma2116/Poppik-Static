import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import logo from "@assets/logo.png"; // Adjust the path as necessary
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-pink-100' 
        : 'bg-white/90 backdrop-blur-sm shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="flex items-center">
               <img 
  src={logo} 
  alt="POPPIK Logo" 
  className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
   style={{ width: 'auto', height: '120px' }}
  
/>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <button 
                onClick={() => scrollToSection('home')}
                className="relative px-4 py-2 text-gray-700 hover:text-pink-500 transition-all duration-300 font-semibold text-lg group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="relative px-4 py-2 text-gray-700 hover:text-pink-500 transition-all duration-300 font-semibold text-lg group"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="relative px-4 py-2 text-gray-700 hover:text-pink-500 transition-all duration-300 font-semibold text-lg group"
              >
                <span className="relative z-10">Mission</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="relative px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-pink-500 transition-colors duration-300 rounded-lg hover:bg-pink-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-br from-white to-pink-50 border-t border-pink-100 rounded-b-xl">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-all duration-300 font-semibold rounded-lg"
            >
              🏠 Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-all duration-300 font-semibold rounded-lg"
            >
              👥 About
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-all duration-300 font-semibold rounded-lg"
            >
              🎯 Mission
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg mt-2 hover:shadow-lg transition-all duration-300"
            >
              📞 Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
