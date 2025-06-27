import { Link } from 'react-router-dom';

const NavFooter = ({ prev, next }) => {
  const urlIcon = import.meta.env.VITE_URL_ICON;
  return (
    <div className="w-full bg-slate-800 border-t border-slate-600 p-3 flex justify-between items-center shadow-lg">
      {/* Button kiri */}
      <Link
        to={prev}
        className="
          p-2
          bg-slate-600
          hover:bg-slate-500
          rounded
          shadow
          transition
          transform
          hover:scale-105
          focus:outline-none
          focus:ring-2
          focus:ring-slate-400
        "
      >
        <img src={urlIcon + 'prev.png'} alt="Prev" className="w-6 invert" />
      </Link>

      {/* Button kanan */}
      <Link
        to={next}
        className="
          p-2
          bg-slate-600
          hover:bg-slate-500
          rounded
          shadow
          transition
          transform
          hover:scale-105
          focus:outline-none
          focus:ring-2
          focus:ring-slate-400
        "
      >
        <img
          src={urlIcon + 'prev.png'}
          alt="Next"
          className="w-6 rotate-180 invert"
        />
      </Link>
    </div>
  );
};

export default NavFooter;
