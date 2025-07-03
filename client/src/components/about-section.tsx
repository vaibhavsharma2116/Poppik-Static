import { User, TrendingUp, Palette, Leaf, Waves, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-100 rounded-full opacity-50 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-100 rounded-full opacity-50 translate-x-20 translate-y-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
            Welcome to <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Poppik</span>
          </h2>
          <p className="text-2xl text-gray-600 font-medium mb-6">Beauty That Empowers</p>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Founders Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
            Meet Our <span className="text-pink-500">Visionary</span> Founders
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-slide-up border border-pink-100">
              <div className="text-center mb-8">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-pink-200 transition-all duration-500">
                    <User className="text-white w-12 h-12" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Award className="text-white w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Jay Gupta</h3>
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold inline-block shadow-lg">
                  14+ Years Experience
                </div>
                <p className="text-pink-600 font-medium mt-3">NITI Aayog Mentor of Change</p>
              </div>
              <p className="text-gray-600 leading-relaxed text-center text-lg">
                Brings over 14 years of experience in sales strategy, marketing, and brand development. He is also a proud Mentor of Change at NITI Aayog, supporting entrepreneurship and innovation across India.
              </p>
            </div>
            
            <div className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-slide-up border border-teal-100" style={{ animationDelay: '0.2s' }}>
              <div className="text-center mb-8">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-teal-200 transition-all duration-500">
                    <TrendingUp className="text-white w-12 h-12" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <Award className="text-white w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Ravinder Singh</h3>
                <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold inline-block shadow-lg">
                  27+ Years Experience
                </div>
                <p className="text-teal-600 font-medium mt-3">Senior Consultant - Khadi India</p>
              </div>
              <p className="text-gray-600 leading-relaxed text-center text-lg">
                Has 27 years of rich experience in sales leadership, having worked with top brands like MyGlamm, Himalaya, and Britannia. He also serves as a Senior Consultant to Khadi India, promoting indigenous and sustainable beauty solutions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Brand Story */}
        <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl p-10 md:p-16 shadow-2xl animate-slide-up border border-pink-100" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
            At Poppik, we believe beauty is more than skin deep. We're a modern cosmetics and personal care brand offering high-performance color cosmetics, skincare essentials, and premium bath products designed for the bold, confident, and conscious consumer.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Palette className="text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Color Cosmetics</h4>
              <p className="text-gray-600">High-performance makeup for bold expression and creativity</p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Leaf className="text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Skincare Essentials</h4>
              <p className="text-gray-600">Natural care for healthy, glowing and radiant skin</p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Waves className="text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Bath Products</h4>
              <p className="text-gray-600">Premium bath essentials for ultimate relaxation</p>
            </div>
          </div>
        </div>
        
        {/* Tagline */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-2xl font-playfair font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Together, they bring vision, experience, and excellence to create a brand that truly understands Indian beauty.
          </p>
        </div>
      </div>
    </section>
  );
}
