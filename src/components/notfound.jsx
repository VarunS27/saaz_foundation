import { useEffect } from 'react';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  useEffect(() => {
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <AlertCircle className="w-24 h-24 text-orange-500 animate-pulse" />
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
        
        {/* Message */}
        <h2 className="text-3xl font-semibold text-gray-700 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </a>
      </div>
    </div>
  );
}