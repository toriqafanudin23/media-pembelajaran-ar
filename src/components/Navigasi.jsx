import { useState, useEffect } from 'react';

const Navigasi = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Deteksi arah scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 50) {
        setShow(false); // scroll ke bawah
      } else {
        setShow(true); // scroll ke atas
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const BarMobile = ({ title }) => (
    <li>
      <button
        onClick={() => {
          onNavigate(title);
          setIsOpen(false);
        }}
        className="w-full text-left px-6 py-3 hover:bg-slate-700 transition"
      >
        {title}
      </button>
    </li>
  );

  return (
    <>
      {/* Header */}
      <div
        className={`fixed top-0 left-0 w-full bg-slate-800 h-14 z-50 flex items-center justify-end px-4 sm:px-8 shadow-md transition-transform duration-300 ${
          show ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Kanan: Toggle Menu Mobile */}
        <div className="flex sm:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu mobile */}
      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-slate-800 sm:hidden z-40 shadow-md">
          <ul className="flex flex-col text-white text-base">
            <BarMobile title="Home" />
            <BarMobile title="Volume" />
            <BarMobile title="Luas Permukaan" />
            <BarMobile title="Quiz" />
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigasi;
