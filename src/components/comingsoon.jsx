import React, { useState, useEffect } from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import gif from "./assets/oldlady.gif";
import grp from "./assets/grp.jpg";

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
      
      <div className="h-screen flex items-center justify-center p-4 relative overflow-hidden"
           style={{
             backgroundImage: `url(${grp})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat',
             backgroundAttachment: 'fixed'
           }}>
        
        {/* Overlay from previous design */}
        <div className="absolute inset-0 z-0"
             style={{
               background: `
                 radial-gradient(ellipse at top left, rgba(255, 107, 53, 0.4) 0%, transparent 50%),
                 radial-gradient(ellipse at top right, rgba(249, 147, 30, 0.4) 0%, transparent 50%),
                 radial-gradient(ellipse at bottom left, rgba(6, 255, 165, 0.4) 0%, transparent 50%),
                 radial-gradient(ellipse at bottom right, rgba(93, 76, 219, 0.4) 0%, transparent 50%),
                 radial-gradient(ellipse at center, rgba(196, 76, 219, 0.3) 0%, transparent 70%),
                 linear-gradient(135deg, 
                   rgba(255, 107, 53, 0.6) 0%, 
                   rgba(249, 147, 30, 0.6) 12%, 
                   rgba(255, 210, 63, 0.6) 24%, 
                   rgba(6, 255, 165, 0.6) 36%, 
                   rgba(31, 179, 211, 0.6) 48%, 
                   rgba(93, 76, 219, 0.6) 60%, 
                   rgba(196, 76, 219, 0.6) 72%, 
                   rgba(255, 107, 157, 0.6) 84%, 
                   rgba(255, 107, 53, 0.6) 100%)
               `,
               backgroundSize: '400% 400%',
               animation: 'gradientFlow 15s ease-in-out infinite'
             }}>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden z-10">
          {[...Array(12)].map((_, i) => (
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
              <Heart className="w-3 h-3 text-white" />
            </div>
          ))}
        </div>

        {/* Main card - Compact version */}
        <div className={`relative max-w-6xl w-full transition-all duration-1000 z-20 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/50 h-[85vh] flex flex-col">
            
            {/* Compact Header */}
            <div className="relative p-6 pb-3 flex-shrink-0">
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center">
                  <div className="w-6 h-6 bg-yellow-200 rounded-full relative">
                    {/* Sun rays */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-0.5 h-3 bg-yellow-300 -top-4 left-1/2 transform -translate-x-1/2 origin-bottom"
                        style={{ transform: `translateX(-50%) rotate(${i * 45}deg)` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Logo and location */}
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src="/logo.png" 
                  alt="Saaz Foundation Logo" 
                  className="w-10 h-10"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-800 font-playfair">Saaz Welfare</h1>
                  <p className="text-xs text-gray-600">FOUNDATION</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-orange-500" />
                <span className="text-xs text-gray-600 bg-orange-100 px-2 py-1 rounded-full">Mumbai, Maharashtra</span>
              </div>
            </div>

            {/* Main content area - Flexible */}
            <div className="px-6 pb-6 flex-1 flex flex-col">
              <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
                
                {/* Left content */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-playfair leading-tight">
                    We Are Almost Ready to Launch!
                  </h2>
                  
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">
                    Subscribe to be the first to know about all our events and initiatives. 
                    Join us in bringing hope, care, and joy to those who need it most.
                  </p>
                  
                  {/* Contact button */}
                  <div className="mb-6">
                    <a href="mailto:saazwelfarefoundation@gmail.com" 
                       className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-5 py-2.5 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm">
                      <Mail className="w-4 h-4" />
                      Contact Us: saazwelfarefoundation@gmail.com
                    </a>
                  </div>
                  
                  {/* Compact Features */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Heart className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">Care for elderly and children</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <Heart className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700">Community events and celebrations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <Heart className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="text-sm text-gray-700">Educational support and development</span>
                    </div>
                  </div>
                </div>

                {/* Right side illustration - Compact */}
                <div className="relative h-full max-h-80">
                  {/* Decorative trees */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 400 120" className="w-full h-20">
                      {/* Trees */}
                      {[...Array(6)].map((_, i) => (
                        <g key={i}>
                          <rect 
                            x={60 + i * 50} 
                            y={110} 
                            width="4" 
                            height="15" 
                            fill="#8B4513"
                          />
                          <polygon 
                            points={`${60 + i * 50 + 2},110 ${60 + i * 50 - 6},95 ${60 + i * 50 + 10},95`}
                            fill="#228B22"
                          />
                          <polygon 
                            points={`${60 + i * 50 + 2},105 ${60 + i * 50 - 4},92 ${60 + i * 50 + 8},92`}
                            fill="#32CD32"
                          />
                        </g>
                      ))}
                    </svg>
                  </div>
                  
                  {/* Water/ground */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-blue-200 to-transparent rounded-lg"></div>
                  
                  {/* Old lady gif */}
                  <div className="relative z-10 flex justify-center items-end h-full">
                    <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-3 border-white shadow-lg bg-white mb-8">
                      <img 
                        src={gif} 
                        alt="Elderly person walking" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Compact decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute top-8 left-4 w-6 h-6 bg-orange-200 rounded-full opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-16 right-2 w-4 h-4 bg-green-200 rounded-full opacity-50 animate-pulse"></div>
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

        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </>
  );
}