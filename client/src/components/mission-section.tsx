import { Heart, Award, Users, Target, Globe, Star } from "lucide-react";

export default function MissionSection() {
  return (
    <section id="mission" className="py-24 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-10 left-10 w-24 h-24 border-2 border-white rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full opacity-10 animate-float" style={{ animationDelay: '-1s' }}></div>
      <div className="absolute bottom-20 left-32 w-32 h-32 border border-white rounded-full opacity-15 animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-white rounded-full opacity-10 animate-float" style={{ animationDelay: '-0.5s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in mb-16">
          <div className="flex items-center justify-center mb-6">
            <Target className="text-white w-12 h-12 mr-4" />
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white">Our Mission</h2>
          </div>
          <div className="w-40 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
        </div>
        
        <div className="bg-white bg-opacity-98 backdrop-blur-sm rounded-3xl p-10 md:p-20 shadow-3xl animate-slide-up border border-white border-opacity-20" style={{ animationDelay: '0.3s' }}>
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Globe className="text-pink-500 w-10 h-10 mr-4" />
              <h3 className="text-3xl font-playfair font-bold text-gray-900">Our Vision for Indian Beauty</h3>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
              At Poppik, our mission is to offer a full range of innovative, safe, and high-performance beauty products thoughtfully tailored to the needs of Indian consumers. We aim to bridge the gap between modern beauty trends and traditional Indian values by infusing our formulations with time-tested ingredients and cultural relevance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="group text-center bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 border border-pink-100">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Powered by Passion</h3>
              <p className="text-gray-600 leading-relaxed">Driven by love for beauty and innovation, creating products that inspire confidence</p>
            </div>
            
            <div className="group text-center bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 border border-teal-100">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Driven by Expertise</h3>
              <p className="text-gray-600 leading-relaxed">Backed by decades of industry experience and deep market understanding</p>
            </div>
            
            <div className="group text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:scale-105 border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inspired by You</h3>
              <p className="text-gray-600 leading-relaxed">Created for the modern, conscious consumer who values quality and authenticity</p>
            </div>
          </div>
          
          {/* Additional Mission Content */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-12">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Our products are designed to empower self-expression through color, care, and confidence, helping individuals feel seen, celebrated, and beautiful in their own unique way.
            </p>
            <p className="text-base md:text-lg opacity-90">
              We are committed to sustainability, quality, and creating products that honor both modern innovation and traditional wisdom.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Star className="text-pink-500 w-8 h-8 mr-3" />
              <Star className="text-purple-500 w-8 h-8 mr-3" />
              <Star className="text-blue-500 w-8 h-8" />
            </div>
            <h3 className="text-3xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Poppik – Powered by Passion.<br />
              Driven by Expertise. Inspired by You.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
