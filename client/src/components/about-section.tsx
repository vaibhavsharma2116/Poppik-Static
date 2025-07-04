import { User, TrendingUp, Palette, Leaf, Waves } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-pink-50">
      <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Welcome to <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Poppik</span> – Beauty That Empowers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-8">
              At Poppik, we believe beauty is more than skin deep. We're a modern cosmetics and personal care brand offering high-performance color cosmetics, skincare essentials, and premium bath products designed for the bold, confident, and conscious consumer.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-3 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">💄</span>
                </div>
                <h4 className="font-semibold text-gray-900">Color Cosmetics</h4>
                {/* <p className="text-sm text-gray-600 mt-2">Lipsticks & Color Products</p> */}
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-3 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🧴</span>
                </div>
                <h4 className="font-semibold text-gray-900">Skincare Essentials</h4>
                {/* <p className="text-sm text-gray-600 mt-2">Face Wash & Skincare</p> */}
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🧼</span>
                </div>
                <h4 className="font-semibold text-gray-900">Bath Products</h4>
                {/* <p className="text-sm text-gray-600 mt-2">Soaps & Bath Care</p> */}
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded by industry experts with a deep passion for beauty and innovation: <strong>Jay Gupta</strong> brings over 14 years of experience in sales strategy, marketing, and brand development, and is also a proud Mentor of Change at NITI Aayog, supporting entrepreneurship and innovation across India. <strong>Ravinder Singh</strong> has 27 years of rich experience in sales leadership, having worked with top brands like MyGlamm, Himalaya, and Britannia, and also serves as a Senior Consultant to Khadi India, promoting indigenous and sustainable beauty solutions.
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-800 mb-6">
                Together, they bring vision, experience, and excellence to create a brand that truly understands Indian beauty.
              </p>

              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl p-6 text-white">
                <p className="text-xl font-playfair font-bold">
                  Poppik – Powered by Passion. Driven by Expertise. Inspired by You.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}