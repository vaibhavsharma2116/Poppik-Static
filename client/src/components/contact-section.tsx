import { Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Mail, Clock, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100 rounded-full opacity-50 translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full opacity-50 -translate-x-16 translate-y-16"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="text-pink-500 w-12 h-12 mr-4" />
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900">Get In Touch</h2>
          </div>
          <p className="text-2xl text-gray-600 mb-6">Ready to explore the world of Poppik? We'd love to hear from you.</p>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Phone Contact */}
          <div className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-slide-up border border-pink-100">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-6">Ready to answer your questions</p>
              <a href="tel:9867577565" className="text-2xl font-bold text-pink-500 hover:text-purple-600 transition-colors block mb-4">
                📞 9867577565
              </a>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>Mon - Sat, 9 AM - 6 PM</span>
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-slide-up border border-teal-100" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h3>
              <p className="text-gray-600 mb-6">Come see us at our office</p>
              <address className="text-lg text-gray-800 not-italic leading-relaxed">
                📍 123, Kailash Business Park<br />
                Belapur, Maharashtra
              </address>
            </div>
          </div>
          
          {/* Email */}
          <div className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-slide-up border border-purple-100" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6">Send us your queries</p>
              <a href="mailto:info@poppik.in" className="text-lg font-semibold text-purple-500 hover:text-pink-600 transition-colors">
                ✉️ info@poppik.in
              </a>
            </div>
          </div>
        </div>
        
        {/* Website Info */}
        <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl p-10 md:p-16 shadow-2xl animate-slide-up border border-pink-100 mb-16" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-6">Visit Our Website</h3>
            <p className="text-xl text-gray-600 mb-8">Discover our complete range of beauty products online</p>
            <a 
              href="http://www.poppik.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              🌐 www.poppik.in
            </a>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 rounded-3xl p-10 md:p-16 text-white shadow-3xl animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-4xl font-playfair font-bold mb-6">Stay Connected</h3>
            <p className="text-xl mb-10 opacity-95">Follow our journey as we revolutionize beauty in India</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="group w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white border-opacity-20">
                <Instagram className="text-white w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white border-opacity-20">
                <Facebook className="text-white w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white border-opacity-20">
                <Twitter className="text-white w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white border-opacity-20">
                <Linkedin className="text-white w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="mt-10 text-center">
              <p className="text-lg opacity-90">📧 For partnerships: partnerships@poppik.in</p>
              <p className="text-lg opacity-90">📢 For media inquiries: media@poppik.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
