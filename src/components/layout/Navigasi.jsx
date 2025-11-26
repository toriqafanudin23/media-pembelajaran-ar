import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigasi = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Deteksi arah scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const BarMobile = ({ title, to }) => (
    <li>
      <Link
        to={to}
        onClick={() => {
          onNavigate(title);
          setIsOpen(false);
        }}
        className="w-full block text-left px-6 py-3 hover:bg-white/10 transition-all duration-200 rounded-lg mx-2"
      >
        {title}
      </Link>
    </li>
  );

  return (
    <>
      {/* Modern Glassmorphism Header */}
      <div
        className={`fixed top-0 left-0 w-full glass-dark h-16 z-50 flex items-center justify-between px-6 shadow-lg transition-all duration-300 ${
          show ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Logo/Title */}
        <div className="text-white font-bold text-lg flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="hidden sm:inline">Media AR</span>
        </div>

        {/* Menu Button */}
        <button
          aria-label="Open menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown menu mobile with Slide Animation */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Menu */}
          <div className="fixed top-16 right-0 w-64 glass-dark z-40 shadow-2xl rounded-bl-2xl animate-slide-in">
            <ul className="flex flex-col text-white text-base p-2">
              <BarMobile title="Cover" to="/" />
              <BarMobile title="Unduh Barcode" to="/petunjuk" />
              <BarMobile title="Home" to="/home" />
              <BarMobile title="Volume" to="/volume" />
              <BarMobile title="Luas Permukaan" to="/luas-permukaan" />
              <BarMobile title="Quiz" to="/quiz" />
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navigasi;
