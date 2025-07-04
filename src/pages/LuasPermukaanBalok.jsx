import { useEffect, useState } from 'react';
import InputSubmitSatuan from '../components/InputSubmitSatuan';
import NavFooter from '../components/NavFooter';
import Navigasi from '../components/Navigasi';
import { Ha2, Par } from '../components/Text';
import Image from '../components/Image';
import Simulasi from '../components/SimulasiAR';

const LuasPermukaanBalok = () => {
  const urlAnim = import.meta.env.VITE_URL_ANIM;
  const urlIcon = import.meta.env.VITE_URL_ICON;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const models = ['animasi-jaring-balok-1.glb', 'animasi-jaring-balok-2.glb'];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextModel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length);
  };
  return (
    <>
      <div className="min-h-screen bg-white px-6 pt-18 mb-4 inter-primary text-slate-800 sm:w-xl mx-auto">
        <Navigasi />
        <Ha2 text="B. Luas Permukaan Balok" />
        <Par text="Sebelumnya, menghitung luas permukaan kubus cukup mudah karena semua sisi kubus berbentuk persegi dengan ukuran yang sama. Oleh karena itu, luas permukaannya dapat dihitung dengan rumus $$L = 6 \times r^2.$$ Sementara itu, pada balok, keenam sisinya tidak memiliki ukuran yang sama, sehingga diperlukan pendekatan lain untuk menghitung luas permukaannya. Sebelum itu, akan ditunjukkan jaring-jaring balok." />
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
            urlAR="https://mywebar.com/p/objek7jaringjaringbalok"
            model3D={urlAnim + models[currentIndex]}
            scale={1}
            nama={`Objek 7. Jaring-jaring balok`}
          />
        </div>
        <Par text="Setelah kamu melihat contoh jaring-jaring balok, kita akan menganalisis salah satu jaring-jaring balok untuk mempelajari cara menghitung luas jaring-jaring atau luas permukaan balok." />
        <Image
          src="jaring-balok-L1-6-ukuran.png"
          nama="Gambar 17. Jaring-jaring balok"
          scale={1.2}
          width="300px"
        />

        <Par
          text="Dari gambar di atas, dapat disimpulkan bahwa luas permukaan balok dapat dihitung dengan cara menjumlahkan luas keenam sisinya:
  $$L = L_1 + L_2 + L_3 + L_4 + L_5 + L_6.$$
  Sementara itu, luas masing-masing sisi dapat dicari dengan
  $$L_1 = p \times l$$
  $$L_2 = t \times l$$
  $$L_3 = p \times l$$
  $$L_4 = t \times l$$
  $$L_5 = p \times t$$
  $$L_6 = p \times t$$
  Perhatikan bahwa terdapat tiga pasang sisi yang memiliki luas yang sama, yaitu
  $$L_1 = L_3 = p \times l$$
  $$L_2 = L_4 = t \times l$$
  $$L_5 = L_6 = p \times t.$$
  Sehingga, rumus mencari luas permukaan balok dapat disederhanakan menjadi
  $$L = 2 \times L_1 + 2 \times L_2 + 2 \times L_5$$
  $$L = 2 (L_1 + L_2 + L_5)$$
  $$L = 2 (p \times l + t \times l + p \times t).$$"
        />
        <Par text="Sekarang coba kamu gunakan rumus yang telah didapat, untuk menghitung luas permukaan balok berikut!" />
        <Image src="balok-8x5x4.png" scale={1} width="300px" />
        <InputSubmitSatuan answerKey="184" satuan="text{cm}^2" />
      </div>
      <NavFooter prev="/luas-permukaan" next="/latihan-soal-luas-permukaan" />
    </>
  );
};

export default LuasPermukaanBalok;
