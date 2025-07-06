import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigasi from '../components/Navigasi';

const Petunjuk = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white px-6 py-18 text-slate-800 inter-primary">
      <Navigasi />
      <h1 className="text-2xl font-bold text-teal-500 tracking-wide pb-2">
        Petunjuk Penggunaan
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        Media pembelajaran ini dilengkapi dengan teknologi{' '}
        <i>Augmented Reality</i>. Sebelum menggunakan media ini, pengguna
        diharuskan untuk mengunduh dan mencetak barcode terlebih dahulu.
      </p>

      {/* File download section */}
      <div className="flex items-center justify-between bg-slate-100 border border-slate-300 rounded-lg p-4 shadow-sm max-w-xl mb-6">
        <div className="flex items-center space-x-4">
          <svg
            className="w-6 h-6 text-slate-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="font-medium text-slate-800">barcode-ar.pdf</p>
            <p className="text-sm text-slate-500">Ukuran file: 373 KB</p>
          </div>
        </div>

        <a
          href="https://hmgdlcwzpmbgvfpaiylz.supabase.co/storage/v1/object/public/images/barcode/barcode-3.pdf"
          download
          className="text-sm font-medium text-teal-600 hover:text-teal-700 transition"
        >
          Download
        </a>
      </div>

      <p className="text-lg leading-relaxed mb-2">Coba AR sebelum belajar:</p>

      {/* AR View langsung tampil */}
      <div className="flex items-center mb-4 space-x-3 max-w-xl mx-auto">
        <img
          src="https://hmgdlcwzpmbgvfpaiylz.supabase.co/storage/v1/object/public/images/icons/touch.png"
          alt="Icon sentuh"
          className="w-14 h-14"
        />
        <p className="text-teal-600 font-semibold text-base">
          Sentuh objek untuk menjalankan animasi!
        </p>
      </div>
      <div className="w-full rounded-lg overflow-hidden border border-slate-300 shadow">
        <iframe
          src="https://mywebar.com/p/objek6jaringjaringkubus"
          className="w-full h-[600px] border-none"
          allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; microphone"
          title="WebAR Viewer"
        ></iframe>
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/home" // Ganti sesuai tujuan rute selanjutnya
          className="inline-block bg-slate-500 hover:bg-slate-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition duration-300"
        >
          Lanjutkan ➜
        </Link>
      </div>
    </div>
  );
};

export default Petunjuk;
