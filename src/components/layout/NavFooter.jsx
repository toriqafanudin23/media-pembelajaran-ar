import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavFooter = ({ prev, next }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position and page height
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show footer when user is near bottom (within 300px of bottom)
      // or if the page is too short to scroll
      const nearBottom = scrollTop + windowHeight >= documentHeight - 300;
      const pageIsTooShort = documentHeight <= windowHeight + 100;
      
      setShow(nearBottom || pageIsTooShort);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Recalculate on resize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 safe-area-bottom z-40 transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="glass-dark border-t border-white/10 p-4 flex justify-between items-center shadow-2xl max-w-xl mx-auto">
        {/* Button kiri */}
        <Link
          to={prev}
          className="group flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-blue-600 hover:to-blue-700 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none"
        >
          <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-white text-sm font-medium hidden sm:inline">Sebelumnya</span>
        </Link>

        {/* Indicator */}
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
        </div>

        {/* Button kanan */}
        <Link
          to={next}
          className="group flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none"
        >
          <span className="text-white text-sm font-medium hidden sm:inline">Selanjutnya</span>
          <svg className="w-5 h-5 text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NavFooter;
