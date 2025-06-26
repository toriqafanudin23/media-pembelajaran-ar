import Image from '../components/Image';
import InputSubmit from '../components/InputSubmit';
import Navigasi from '../components/Navigasi';

const Volume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 px-6 py-16 inter-primary text-slate-800">
      <Navigasi />
      <div className="max-w-xl mx-auto">
        {/* Judul */}
        <h1 className="text-3xl font-bold text-teal-600 mb-4 text-center">
          Volume Bangun Ruang Sisi Datar
        </h1>

        <h2 className="text-2xl font-semibold text-slate-700 mb-2">
          A. Volume Kubus dan Balok
        </h2>

        {/* Gambar Rubik */}
        <Image src="rubik1.png" nama="Gambar 1. Rubik" />

        {/* Deskripsi */}
        <p className="text-base leading-relaxed text-slate-700 text-justify">
          Pernahkah kamu bermain rubik? Rubik merupakan permainan puzzle warna
          berbentuk kubus dengan ukuran tertentu. Jika kubus tersusun dari kubus
          satuan, maka berapakah banyaknya kubus satuan yang menyusun rubik di
          atas?
        </p>
        <InputSubmit />
      </div>
    </div>
  );
};

export default Volume;
