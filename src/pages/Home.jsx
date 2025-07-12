import { useEffect } from 'react';
import CardMenu from '../components/CardMenu';
import Navigasi from '../components/Navigasi';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const urlImage = import.meta.env.VITE_URL_ICON;
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-6 inter-primary flex items-center justify-center flex-col text-white sm:max-w-xl mx-auto">
      <Navigasi />
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold mb-2 text-teal-400">
          Materi Bangun Ruang
        </h1>
      </header>

      {/* Menu Cards */}
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <CardMenu
          title="Volume"
          icon={urlImage + 'icon-volume.png'}
          deskripsi="Pelajari cara menghitung volume bangun ruang secara interaktif."
          to="/volume"
          dark
        />
        <CardMenu
          title="Luas Permukaan"
          icon={urlImage + 'icon-jaring.png'}
          deskripsi="Pahami konsep luas permukaan dengan bantuan visualisasi."
          to="/luas-permukaan"
          dark
        />
        <CardMenu
          title="Quiz"
          icon={urlImage + 'icon-tanya.png'}
          deskripsi="Uji pemahamanmu melalui kuis seru dan edukatif."
          to="/quiz"
          dark
        />
      </div>
    </div>
  );
};

export default Home;
