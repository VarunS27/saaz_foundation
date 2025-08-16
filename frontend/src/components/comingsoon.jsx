import React, { useState, useEffect, useMemo } from 'react';
import { Heart, Users, Home, Phone, Mail, MapPin, Star, Sparkles } from 'lucide-react';

export default function SaazComingSoon() {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [logoEntering, setLogoEntering] = useState(false);
  const [circleVisible, setCircleVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Optimized particle generation - memoized to prevent recreation on every render
  const stars = useMemo(() => 
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    })), []
  );

  const particles = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: 15 + Math.random() * 25,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 15 + Math.random() * 10,
      colorIndex: i % 3
    })), []
  );

  const cosmicDust = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 20 + Math.random() * 15
    })), []
  );

  useEffect(() => {
    // Start logo entering from right after initial delay
    const timer1 = setTimeout(() => {
      setLogoEntering(true);
    }, 1000);

    // Hide the circle and show final logo position
    const timer2 = setTimeout(() => {
      setCircleVisible(false);
      setLogoLoaded(true);
    }, 2500);

    // Show content after logo animation completes
    const timer3 = setTimeout(() => {
      setShowContent(true);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getParticleColor = (colorIndex) => {
    const colors = ['#ff6b35', '#ffa366', '#ffcc99'];
    return colors[colorIndex];
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      {/* Fullscreen Logo Animation */}
      <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-all duration-1000 ${logoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="relative flex items-center justify-center">
          
          {/* Rotating Glowing Circle */}
          <div className={`absolute transition-all duration-500 ${circleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="w-48 h-48 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-transparent bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 animate-spin-glow" 
                 style={{
                   background: 'conic-gradient(from 0deg, #ff6b35, #ff8c42, #ffa366, #ff6b35)',
                   padding: '4px'
                 }}>
              <div className="w-full h-full rounded-full bg-black"></div>
            </div>
          </div>

          {/* Logo sliding in from right */}
          <img 
            src="/logo.png" 
            alt="Saaz Foundation Logo" 
            className={`relative z-10 w-24 md:w-32 lg:w-40 h-auto transition-all duration-1500 ease-out ${
              logoEntering 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-96 opacity-0 scale-75'
            }`}
            style={{
              filter: 'drop-shadow(0 0 30px rgba(255, 107, 53, 0.8))'
            }}
          />
        </div>
      </div>

      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden font-inter">
      
      {/* Interactive Mouse Follower */}
      <div 
        className="fixed pointer-events-none z-30 w-96 h-96 rounded-full opacity-10 bg-orange-400 blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Enhanced Galaxy Background */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {/* Optimized Moving Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`
            }}
          />
        ))}
        
        {/* Enhanced Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-float-continuous opacity-50 hover:opacity-70 transition-opacity duration-500"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, ${getParticleColor(particle.colorIndex)} 0%, transparent 70%)`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
        
        {/* Enhanced Nebula Effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-15 bg-gradient-to-r from-orange-500 to-red-500 blur-3xl animate-drift-slow"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 rounded-full opacity-20 bg-gradient-to-r from-orange-400 to-yellow-500 blur-3xl animate-drift-medium" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-60 h-60 rounded-full opacity-25 bg-gradient-to-r from-orange-600 to-red-600 blur-2xl animate-drift-fast" style={{animationDelay: '6s'}}></div>
          <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full opacity-12 bg-gradient-to-r from-orange-300 to-yellow-400 blur-3xl animate-drift-slow" style={{animationDelay: '9s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full opacity-18 bg-gradient-to-r from-red-400 to-orange-500 blur-2xl animate-drift-medium" style={{animationDelay: '12s'}}></div>
        </div>
        
        {/* Optimized Cosmic Dust */}
        {cosmicDust.map((dust) => (
          <div
            key={dust.id}
            className="absolute w-px h-px bg-orange-200 rounded-full animate-cosmic-dust opacity-60"
            style={{
              left: `${dust.left}%`,
              top: `${dust.top}%`,
              animationDelay: `${dust.delay}s`,
              animationDuration: `${dust.duration}s`
            }}
          />
        ))}

        {/* Additional shooting stars */}
        <div className="absolute top-10 left-20 w-px h-20 bg-gradient-to-b from-orange-300 to-transparent animate-shooting-star opacity-70"></div>
        <div className="absolute top-40 right-32 w-px h-16 bg-gradient-to-b from-yellow-300 to-transparent animate-shooting-star opacity-60" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-px h-12 bg-gradient-to-b from-orange-400 to-transparent animate-shooting-star opacity-50" style={{animationDelay: '8s'}}></div>
      </div>

      {/* Logo Section - with enhanced glow effect */}
      <div className={`text-center mb-12 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative group">
          <img 
            src="/logo.png" 
            alt="Saaz Foundation Logo" 
            className="w-48 md:w-64 lg:w-80 h-auto mx-auto mb-4 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(255, 107, 53, 0.8))'
            }}
          />
          {/* Subtle animation ring around logo */}
          <div className="absolute inset-0 border-2 border-orange-400 rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

      {/* Enhanced Main Content */}
      <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-wide drop-shadow-2xl relative" 
              style={{
                textShadow: '0 0 20px rgba(255, 107, 53, 0.6)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '700'
              }}>
            Coming Soon
            <Sparkles className="inline-block ml-4 w-8 h-8 text-orange-400 animate-pulse" />
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg font-light">
          We're preparing something special to bring hope, care, and joy to those who need it most. 
          Join us in our mission to make a <span className="text-orange-400 font-medium">meaningful difference</span> in the lives of orphan children and elderly people.
        </p>

        {/* Enhanced Mission Cards with better hover effects */}
        <div className={`grid md:grid-cols-3 gap-8 my-16 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-orange-500 border-opacity-30 hover:shadow-orange-500/30 hover:-translate-y-3 hover:scale-105 transition-all duration-500 hover:border-orange-400 group cursor-pointer hover:bg-opacity-80">
            <div className="relative">
              <Heart className="w-16 h-16 text-orange-400 mx-auto mb-6 drop-shadow-lg group-hover:animate-pulse transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-orange-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg group-hover:text-orange-100 transition-colors duration-300">For Children</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              Organizing events, educational programs, and providing care for orphan children to give them hope and happiness.
            </p>
          </div>

          <div className="bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-orange-500 border-opacity-30 hover:shadow-orange-500/30 hover:-translate-y-3 hover:scale-105 transition-all duration-500 hover:border-orange-400 group cursor-pointer hover:bg-opacity-80">
            <div className="relative">
              <Users className="w-16 h-16 text-orange-400 mx-auto mb-6 drop-shadow-lg group-hover:animate-pulse transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-orange-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg group-hover:text-orange-100 transition-colors duration-300">For Elderly</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              Supporting old age homes with activities, care programs, and bringing joy to our respected elders.
            </p>
          </div>

          <div className="bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-orange-500 border-opacity-30 hover:shadow-orange-500/30 hover:-translate-y-3 hover:scale-105 transition-all duration-500 hover:border-orange-400 group cursor-pointer hover:bg-opacity-80">
            <div className="relative">
              <Home className="w-16 h-16 text-orange-400 mx-auto mb-6 drop-shadow-lg group-hover:animate-pulse transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-orange-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg group-hover:text-orange-100 transition-colors duration-300">Community Events</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              Creating memorable experiences through festivals, celebrations, and community building activities.
            </p>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className={`bg-gradient-to-br from-black via-gray-900 to-black bg-opacity-70 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-orange-500 border-opacity-40 mb-12 transition-all duration-1000 delay-700 hover:border-opacity-60 hover:shadow-orange-500/20 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <Star className="w-8 h-8 text-orange-400 mx-auto mb-4 animate-spin-slow" />
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Be Part of Something Beautiful</h3>
            <p className="text-lg text-gray-300 mb-8 drop-shadow-lg font-light">
              Our website is launching soon. Stay connected with us to be the first to know about our events and how you can contribute to this noble cause.
            </p>
            
            {/* Contact Information with enhanced styling */}
            <div className="flex flex-wrap justify-center gap-8 text-orange-400 mb-6">
              <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-orange-300 transition-all duration-300 drop-shadow-lg hover:scale-110 group">
                <Phone className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-lg font-semibold">+91 XXXXX XXXXX</span>
              </a>
              <a href="mailto:info@saazwelfare.org" className="flex items-center gap-3 hover:text-orange-300 transition-all duration-300 drop-shadow-lg hover:scale-110 group">
                <Mail className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-lg font-semibold">info@saazwelfare.org</span>
              </a>
              <div className="flex items-center gap-3 drop-shadow-lg hover:scale-110 transition-transform duration-300 group cursor-default">
                <MapPin className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-lg font-semibold">Mumbai, Maharashtra</span>
              </div>
            </div>

            {/* Newsletter signup hint */}
            <div className="bg-black bg-opacity-40 rounded-xl p-6 border border-orange-500 border-opacity-20">
              <p className="text-sm text-gray-400 mb-2">🔔 Get notified when we launch!</p>
              <p className="text-xs text-gray-500">Email us to join our early supporters list</p>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-400 mb-4 drop-shadow-lg italic font-light">
            "Service to humanity is the best work of life"
          </p>
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="w-4 h-4 text-orange-400 animate-pulse" />
            <span className="text-sm text-gray-500 drop-shadow-lg">Made with love for a better tomorrow</span>
            <Heart className="w-4 h-4 text-orange-400 animate-pulse" />
          </div>
          <p className="text-sm text-gray-600 drop-shadow-lg">
            © 2025 Saaz Welfare Foundation. Coming Soon.
          </p>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }

        .animate-float {
          animation: float 12s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }

        @keyframes float-continuous {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -20px) rotate(90deg); }
          50% { transform: translate(-20px, -40px) rotate(180deg); }
          75% { transform: translate(-40px, 20px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        .animate-float-continuous {
          animation: float-continuous 25s linear infinite;
        }

        @keyframes drift-slow {
          0% { transform: translate(0, 0); }
          25% { transform: translate(20px, -30px); }
          50% { transform: translate(-30px, -20px); }
          75% { transform: translate(-20px, 30px); }
          100% { transform: translate(0, 0); }
        }

        .animate-drift-slow {
          animation: drift-slow 40s ease-in-out infinite;
        }

        @keyframes drift-medium {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, 20px) rotate(120deg); }
          66% { transform: translate(25px, -25px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        .animate-drift-medium {
          animation: drift-medium 30s ease-in-out infinite;
        }

        @keyframes drift-fast {
          0% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(15px, -25px) scale(1.1); }
          40% { transform: translate(-20px, -15px) scale(0.9); }
          60% { transform: translate(-25px, 20px) scale(1.05); }
          80% { transform: translate(20px, 25px) scale(0.95); }
          100% { transform: translate(0, 0) scale(1); }
        }

        .animate-drift-fast {
          animation: drift-fast 20s ease-in-out infinite;
        }

        @keyframes cosmic-dust {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          10% { opacity: 0.6; }
          50% { transform: translateX(100px) translateY(-50px); opacity: 0.8; }
          90% { opacity: 0.4; }
          100% { transform: translateX(200px) translateY(-100px); opacity: 0; }
        }

        .animate-cosmic-dust {
          animation: cosmic-dust 35s linear infinite;
        }

        @keyframes shooting-star {
          0% { transform: translateY(-100px) translateX(-100px) rotate(45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.8; }
          100% { transform: translateY(100px) translateX(100px) rotate(45deg); opacity: 0; }
        }

        .animate-shooting-star {
          animation: shooting-star 3s linear infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        @keyframes spin-glow {
          0% { 
            transform: rotate(0deg);
            filter: drop-shadow(0 0 20px rgba(255, 107, 53, 0.8));
          }
          25% { 
            filter: drop-shadow(0 0 30px rgba(255, 140, 66, 0.9));
          }
          50% { 
            transform: rotate(180deg);
            filter: drop-shadow(0 0 40px rgba(255, 163, 102, 1));
          }
          75% { 
            filter: drop-shadow(0 0 30px rgba(255, 140, 66, 0.9));
          }
          100% { 
            transform: rotate(360deg);
            filter: drop-shadow(0 0 20px rgba(255, 107, 53, 0.8));
          }
        }

        .animate-spin-glow {
          animation: spin-glow 2s linear infinite;
        }
      `}</style>
    </div>
    </>
  );
}