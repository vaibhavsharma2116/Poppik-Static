import { Heart, Award, Users, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-5xl font-playfair font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            POPPIK
          </span>
          <p className="text-2xl text-gray-700 mt-3 font-medium">Beauty That Empowers</p>
        </div>

        {/* Main Content - Box Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Our Values Box */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl border-2 border-pink-100 shadow-lg">
            <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-8 text-center">Our Values</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-pink-200">
                <div className="flex items-center mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Heart className="text-white w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-pink-600">Powered by Passion</h4>
                </div>
                <p className="text-gray-600 ml-18">Driven by love for beauty and innovation</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-teal-200">
                <div className="flex items-center mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Award className="text-white w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-teal-600">Driven by Expertise</h4>
                </div>
                <p className="text-gray-600 ml-18">Backed by decades of industry experience</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-200">
                <div className="flex items-center mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Users className="text-white w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-purple-600">Inspired by You</h4>
                </div>
                <p className="text-gray-600 ml-18">Created for the modern, conscious consumer</p>
              </div>
            </div>
          </div>

          {/* Connect With Us Box */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-3xl border-2 border-blue-100 shadow-lg">
            <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-8 text-center">Connect With Us</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-pink-200">
                <div className="flex items-center mb-3">
                  <Phone className="text-pink-500 w-8 h-8 mr-3" />
                  <span className="text-lg font-bold text-gray-700">Phone</span>
                </div>
                <a href="tel:9867577565" className="text-2xl font-bold text-gray-900 hover:text-pink-500 transition-colors ml-11">
                  9867577565
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-teal-200">
                <div className="flex items-center mb-3">
                  <MapPin className="text-teal-500 w-8 h-8 mr-3" />
                  <span className="text-lg font-bold text-gray-700">Location</span>
                </div>
                <div className="ml-11">
                  <p className="text-lg text-gray-900 leading-relaxed">
                    123, Kailash Business Park<br />
                    Belapur, Maharashtra
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-200">
                <div className="flex items-center mb-3">
                  <Globe className="text-purple-500 w-8 h-8 mr-3" />
                  <span className="text-lg font-bold text-gray-700">Website</span>
                </div>
                <a 
                  href="http://www.poppik.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-gray-900 hover:text-purple-500 transition-colors ml-11"
                >
                  www.poppik.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement Box */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-10 rounded-3xl border-2 border-gray-200 shadow-lg text-center">
            <p className="text-2xl md:text-3xl font-playfair font-bold text-gray-700 leading-relaxed italic">
              "Together, they bring vision, experience, and excellence to create a brand that truly understands Indian beauty."
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t-2 border-gray-200 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-lg mb-3 md:mb-0">
              © 2024 Poppik. All rights reserved.
            </p>
            <p className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Powered by Passion. Driven by Expertise. Inspired by You.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
