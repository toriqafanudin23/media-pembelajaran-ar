import { useEffect } from 'react';
import CardMenu from '../components/ui/CardMenu';
import Navigasi from '../components/layout/Navigasi';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const urlImage = import.meta.env.VITE_URL_ICON;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-6 py-20 inter-primary flex items-center justify-center flex-col sm:max-w-xl mx-auto">
      <Navigasi />
      
      {/* Header with Gradient Text */}
      <header className="mb-12 text-center animate-fade-in">
        <div className="inline-block mb-3">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Materi Bangun Ruang
        </h1>
        <p className="text-slate-600 text-lg">
          Pilih topik untuk memulai pembelajaran
        </p>
      </header>

      {/* Menu Cards with Staggered Animation */}
      <div className="flex flex-col items-center justify-center gap-4 w-full max-w-lg">
        <div className="w-full animate-fade-in" style={{ animationDelay: '100ms' }}>
          <CardMenu
            title="Volume"
            icon={urlImage + 'icon-volume.png'}
            deskripsi="Pelajari cara menghitung volume bangun ruang secara interaktif."
            to="/volume"
          />
        </div>
        <div className="w-full animate-fade-in" style={{ animationDelay: '200ms' }}>
          <CardMenu
            title="Luas Permukaan"
            icon={urlImage + 'icon-jaring.png'}
            deskripsi="Pahami konsep luas permukaan dengan bantuan visualisasi."
            to="/luas-permukaan"
          />
        </div>
        <div className="w-full animate-fade-in" style={{ animationDelay: '300ms' }}>
          <CardMenu
            title="Quiz"
            icon={urlImage + 'icon-tanya.png'}
            deskripsi="Uji pemahamanmu melalui kuis seru dan edukatif."
            to="/quiz-access"
          />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="fixed top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-20 left-10 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default Home;
