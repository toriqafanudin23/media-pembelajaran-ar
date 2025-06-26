import { Link } from 'react-router-dom';

const CardMenu = ({ icon, title, deskripsi, to = '/volume' }) => {
  return (
    <Link
      to={to}
      className="group bg-white dark:bg-slate-700 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center p-4 gap-4 w-full inter-primary"
    >
      {/* Icon / Gambar */}
      <div className="w-16 h-16 flex-shrink-0">
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-cover rounded-xl border border-slate-200 dark:border-slate-600"
        />
      </div>

      {/* Konten */}
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-1 group-hover:underline">
          {title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
          {deskripsi}
        </p>
      </div>
    </Link>
  );
};

export default CardMenu;
