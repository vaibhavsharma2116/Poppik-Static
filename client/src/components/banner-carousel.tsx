import { useState, useEffect } from "react";
import banner1 from "@assets/IMG-20250702-WA0025_1751521365551.jpg";
import banner2 from "@assets/IMG-20250702-WA0024_1751521365552.jpg";

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;
  const slideInterval = 6000; // 6 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, slideInterval);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section id="home" className="relative mt-20 overflow-hidden">
      <div className="carousel-container relative h-[500px] md:h-[600px]">
        {/* Banner 1: Coming Soon */}
        <div 
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            currentSlide === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="relative w-full h-full">
            <img 
              src={banner1} 
              alt="Poppik Coming Soon Banner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            
            {/* Enhanced overlay content */}
            
          </div>
        </div>

        {/* Banner 2: Product Showcase */}
        <div 
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            currentSlide === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="relative w-full h-full">
            <img 
              src={banner2} 
              alt="Poppik Colour Collection Banner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            
            {/* Enhanced overlay content */}
            
          </div>
        </div>
      </div>
      
      {/* Enhanced Carousel Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white bg-opacity-70 hover:bg-opacity-90'
            }`}
          />
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-30">
        <div 
          className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        ></div>
      </div>
    </section>
  );
}
