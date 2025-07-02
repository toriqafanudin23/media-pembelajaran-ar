import { useEffect, useState } from 'react';
import { Ha1, Ha2, Par } from '../components/Text';
import Navigasi from '../components/Navigasi';
import NavFooter from '../components/NavFooter';
import Image from '../components/Image';
// import SimulasiStatis from '../components/SimulasiStatis';
import Simulasi from '../components/SimulasiAR';

const LuasPermukaan = () => {
  const urlAnim = import.meta.env.VITE_URL_ANIM;
  const urlIcon = import.meta.env.VITE_URL_ICON;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const models = [
    'animasi-jaring-kubus-1.glb',
    'animasi-jaring-kubus-2.glb',
    'animasi-jaring-kubus-3.glb',
    'animasi-jaring-kubus-4.glb',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextModel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length);
  };
  return (
    <>
      <div className="min-h-screen bg-white px-6 pt-18 mb-4 inter-primary text-slate-800 sm:w-xl mx-auto">
        <Navigasi />
        <Ha1 text="Luas Permukaan Bangun Ruang Sisi Datar" />
        <Image src="kardus-img.png" nama="Gambar 12. Kardus" />
        <Ha2 text="A. Luas Permukaan Kubus" />
        <Par text="Pernahkah kamu membongkar kardus atau menggunting kardus di bagian tepinya? Tentu, saat kecil hal ini lumrah dilakukan anak-anak saat bermain. Pernahkah kamu bertanya, bagaimana cara perusahaan menentukan luas minimal bahan untuk membuat kardus? Jika belum tahu, kamu akan mempelajarinya pada materi kali ini." />
        <Par text="Kali ini, kamu akan menggunakan teknologi augmented reality untuk melihat seperti apa bentuk kardus saat dibongkar, serta kemungkinan bentuk potongan yang terjadi. Kamu akan mulai dari kardus berbentuk kubus, yaitu yang memiliki enam sisi dengan luas yang sama." />
        <div className="relative">
          {/* Tombol satu-satunya untuk berganti model */}
          <button
            onClick={handleNextModel}
            className="
    absolute top-4 right-4 z-10
    bg-white/70 backdrop-blur
    border border-teal-300
    p-2 rounded-md shadow-md
    hover:scale-105 hover:bg-white
    hover:border-gray-400 hover:shadow-lg transition
  "
          >
            <img
              src={urlIcon + 'next.png'}
              alt="Next Model"
              className="w-8 h-8"
            />
          </button>

          {/* Komponen Simulasi */}
          <Simulasi
            urlAR="https://mywebar.com/p/Project_1_w7y625xuc5"
            model3D={urlAnim + models[currentIndex]}
            scale={1.4}
            nama={`Objek 6. Jaring-jaring kubus`}
          />
        </div>

        <Par text="Bongkaran kubus tadi disebut sebagai jaring-jaring. Jaring-jaring adalah susunan sisi-sisi bangun ruang yang direntangkan menjadi bangun datar, sehingga dapat dilipat kembali membentuk bangun ruang semula. Berikut beberapa jaring-jaring yang dapat dibentuk menjadi kubus." />
        <Image src="jaring-kubus-1.png" />
        <Image src="jaring-kubus-2.png" />
        <Image src="jaring-kubus-3.png" />
        <Image
          src="jaring-kubus-3.png"
          nama="Gambar 13. Macam jaring-jaring kubus"
        />

        <Par text="Dapat dilihat bahwa jaring-jaring kubus terdiri atas enam buah persegi yang berukuran sama. Dengan demikian, luas jaring-jaring dapat dihitung dengan mencari luas salah satu persegi, kemudian dikalikan enam." />
        <Image
          src="jaring-kubus-L1-6.png"
          nama="Gambar 14. Jaring kubus"
          scale={1.5}
        />
        <Par
          text="Dapat kamu lihat bahwa persegi \( L_1 \) memiliki ukuran \( r \times r \). Diketahui bahwa luas $$ L_1 = L_2 = L_3 = L_4 = L_5 = L_6.$$Dengan demikian, luas jaring-jaring dapat dicari dengan
        $$L=L_1+L_2+L_3+L_4+L_5+L_6$$ $$L=L_1+L_1+L_1+L_1+L_1+L_1$$ $$L=6 \times L_1$$ $$L=6 \times r \times r$$ $$L=6 \times r^2 .$$"
        />
        <Par text="Luas jaring-jaring disebut juga sebagai luas permukaan. Berikut contoh cara menghitung luas permukaan sebuah kubus. Diketahui sebuah kubus dengan panjang rusuk 7 cm. Tentukan luas permukaan bangun tersebut!" />
        <Image src="kubus7cm.png" nama="Gambar 15. Kubus" scale={1} />
        <Par text="Sebelumnya kamu sudah mempelajari rumus untuk menghitung luas permukaan, yaitu $$L=6 \times r^2.$$ Diketahui pada soal \( r = 7 \), sehingga kamu bisa menyubstitusi nilai \( r \) ke dalam rumus $$L=6 \times r^2$$ $$L=6 \times 7^2$$ $$L=6 \times 49 = 294$$ Jadi, luas permukaan kubus tersebut adalah 294 \( \text{cm}^2 \)." />
      </div>
      <NavFooter prev="/home" next="/luas-permukaan-balok" />
    </>
  );
};

export default LuasPermukaan;
