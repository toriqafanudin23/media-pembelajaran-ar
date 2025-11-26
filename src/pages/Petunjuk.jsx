import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigasi from '../components/layout/Navigasi';

const Petunjuk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 px-4 sm:px-6 pt-20 pb-24 inter-primary sm:max-w-xl mx-auto">
      <Navigasi />
      
      {/* Modern Header */}
      <div className="text-center mb-6 sm:mb-8 animate-fade-in">
        <div className="inline-block mb-3 sm:mb-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
            <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent px-2">
          Petunjuk Penggunaan
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed px-2">
          Ikuti langkah-langkah berikut untuk memaksimalkan pengalaman belajar dengan AR
        </p>
      </div>

      {/* Steps Container */}
      <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
        {/* Step 1: Download - Mobile Optimized */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 border border-blue-100 animate-fade-in">
          {/* Step Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-base sm:text-lg">1</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-800">Download Barcode AR</h3>
          </div>
          
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Media pembelajaran ini menggunakan teknologi <span className="font-semibold text-blue-600">Augmented Reality</span>. 
            Unduh barcode terlebih dahulu untuk pengalaman belajar yang interaktif.
          </p>
          
          {/* Modern Download Card - Mobile Optimized */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">barcode-ar.pdf</p>
                  <p className="text-xs text-slate-500">373 KB • PDF</p>
                </div>
              </div>
              
              <a
                href="https://hmgdlcwzpmbgvfpaiylz.supabase.co/storage/v1/object/public/images/barcode/barcode-3.pdf"
                download
                className="w-full sm:w-auto group flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Unduh</span>
              </a>
            </div>
          </div>
        </div>

        {/* Step 2: AR Demo - Mobile Full Width */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6 border border-indigo-100 animate-fade-in" style={{ animationDelay: '100ms' }}>
          {/* Step Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-base sm:text-lg">2</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-800">Coba AR Sekarang</h3>
          </div>
          
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Sebelum mulai belajar, cobalah fitur AR dengan mengetuk objek 3D di bawah ini untuk melihat animasi.
          </p>
          
          {/* Instruction Banner - Mobile Optimized */}
          <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-teal-50 to-green-50 border border-teal-200 rounded-lg sm:rounded-xl p-2 sm:p-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <p className="text-teal-700 font-semibold text-xs sm:text-sm">
              Sentuh objek untuk menjalankan animasi!
            </p>
          </div>
        </div>
      </div>

      {/* AR Viewer - Full Width on Mobile */}
      <div className="relative w-screen sm:w-full -ml-4 sm:ml-0 rounded-none sm:rounded-2xl overflow-hidden border-y sm:border-2 border-slate-200 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-md">
          <span className="text-xs font-semibold text-slate-700">AR Demo</span>
        </div>
        <iframe
          src="https://mywebar.com/p/objek6jaringjaringkubus"
          className="w-full h-[500px] sm:h-[500px] border-none"
          allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; microphone"
          title="WebAR Viewer"
        ></iframe>
      </div>

      {/* Continue Button */}
      <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
        <Link
          to="/home"
          className="group inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-base sm:text-lg font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span>Mulai Belajar</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

      {/* Decorative Elements - Hidden on Mobile */}
      <div className="hidden sm:block fixed top-32 right-10 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-fade-in"></div>
      <div className="hidden sm:block fixed bottom-32 left-10 w-48 h-48 bg-indigo-200/20 rounded-full blur-3xl -z-10 animate-fade-in"></div>
    </div>
  );
};

export default Petunjuk;
