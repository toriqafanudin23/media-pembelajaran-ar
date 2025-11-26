import { Link } from 'react-router-dom';

const CardMenu = ({ icon, title, deskripsi, to = '/volume' }) => {
  return (
    <Link
      to={to}
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex items-center p-5 gap-4 w-full inter-primary overflow-hidden"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-300 rounded-2xl"></div>
      
      {/* Icon / Gambar */}
      <div className="relative w-16 h-16 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl"></div>
        <img
          src={icon}
          alt={title}
          className="relative w-full h-full object-cover rounded-xl p-2 group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Konten */}
      <div className="relative flex flex-col justify-center flex-1">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1 group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
          {title}
        </h2>
        <p className="text-sm text-slate-600 leading-snug">
          {deskripsi}
        </p>
      </div>
      
      {/* Arrow Icon */}
      <div className="relative text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
};

export default CardMenu;

