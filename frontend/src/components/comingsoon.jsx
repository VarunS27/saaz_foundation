import React, { useState, useEffect } from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import gif from "./assets/oldlady.gif";

export default function SaazComingSoon() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden"
           style={{
             background: 'linear-gradient(135deg, #e8f5e8 0%, #b8e6b8 25%, #87ceeb 50%, #ffd4a3 75%, #ffe4b5 100%)',
             backgroundSize: '400% 400%',
             animation: 'gradientShift 15s ease infinite'
           }}>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              <Heart className="w-4 h-4 text-green-600" />
            </div>
          ))}
        </div>

        {/* Main card */}
        <div className={`relative max-w-5xl w-full transition-all duration-1000 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/50"
               style={{ minHeight: '600px' }}>
            
            {/* Header with logo */}
            <div className="relative p-8 pb-4">
              <div className="absolute top-6 right-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-200 rounded-full relative">
                    {/* Sun rays */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-0.5 h-4 bg-yellow-300 -top-6 left-1/2 transform -translate-x-1/2 origin-bottom"
                        style={{ transform: `translateX(-50%) rotate(${i * 30}deg)` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Logo and location */}
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/logo.png" 
                  alt="Saaz Foundation Logo" 
                  className="w-12 h-12"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 font-playfair">Saaz Welfare</h1>
                  <p className="text-sm text-gray-600">FOUNDATION</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-8">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-600 bg-orange-100 px-3 py-1 rounded-full">Mumbai, Maharashtra</span>
              </div>
            </div>

            {/* Main content area */}
            <div className="px-8 pb-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left content */}
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-playfair leading-tight">
                    We Are Almost Ready to Launch!
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Subscribe to be the first to know about all our events and initiatives. 
                    Join us in bringing hope, care, and joy to those who need it most.
                  </p>
                  
                  {/* Contact button */}
                  <div className="mb-8">
                    <a href="mailto:info@saazwelfare.org" 
                       className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <Mail className="w-5 h-5" />
                      Contact Us: info@saazwelfare.org
                    </a>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">Care for elderly and children</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Community events and celebrations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700">Educational support and development</span>
                    </div>
                  </div>
                </div>

                {/* Right side illustration */}
                <div className="relative">
                  {/* Decorative trees */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 400 200" className="w-full h-32">
                      {/* Trees */}
                      {[...Array(8)].map((_, i) => (
                        <g key={i}>
                          <rect 
                            x={50 + i * 40} 
                            y={180} 
                            width="6" 
                            height="20" 
                            fill="#8B4513"
                          />
                          <polygon 
                            points={`${50 + i * 40 + 3},180 ${50 + i * 40 - 8},160 ${50 + i * 40 + 14},160`}
                            fill="#228B22"
                          />
                          <polygon 
                            points={`${50 + i * 40 + 3},170 ${50 + i * 40 - 6},155 ${50 + i * 40 + 12},155`}
                            fill="#32CD32"
                          />
                        </g>
                      ))}
                    </svg>
                  </div>
                  
                  {/* Water/ground */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-200 to-transparent rounded-lg"></div>
                  
                  {/* Old lady gif */}
                  <div className="relative z-10 flex justify-center items-end h-64">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                      <img 
                        src={gif} 
                        alt="Elderly person walking" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-8 w-12 h-12 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute top-12 left-8 w-8 h-8 bg-orange-200 rounded-full opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-20 right-4 w-6 h-6 bg-green-200 rounded-full opacity-50 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-playfair {
          font-family: "Playfair Display", serif;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </>
  );
}