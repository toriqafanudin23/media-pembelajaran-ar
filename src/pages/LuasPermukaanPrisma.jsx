import Image from '../components/Image';
import InputSubmitSatuan from '../components/InputSubmitSatuan';
import NavFooter from '../components/NavFooter';
import Navigasi from '../components/Navigasi';
import { Ha2, Par } from '../components/Text';
import Simulasi from '../components/SimulasiAR';

const LuasPermukaanPrisma = () => {
  const urlAnim = import.meta.env.VITE_URL_ANIM;
  return (
    <>
      <div className="min-h-screen bg-white px-6 pt-18 mb-4 inter-primary text-slate-800 sm:w-xl mx-auto">
        <Navigasi />
        <Ha2 text="C. Luas Permukaan Prisma" />
        <Par text="Sebelum memulai materi tentang luas permukaan prisma, terlebih dahulu kita akan mengamati jaring-jaring prisma dalam bentuk animasi." />

        <Simulasi
          urlAR="https://mywebar.com/p/objek7jaringjaringbalok"
          model3D={urlAnim + 'animasi-jaring-prisma.glb'}
          scale={0.8}
          nama="Objek 8. Jaring-jaring prisma"
          buttonSwitch={false}
        />
        <Par text="Dari jaring-jaring yang ditunjukkan pada Objek 10, akan dipilih satu jaring-jaring prisma sebagai contoh untuk menghitung luas permukaan." />
        {/* <Image src="prisma-segitiga-ABCDEF.png" scale={0.4} /> */}
        <Image
          src="jaring-prisma-segitiga-label.png"
          scale={1}
          nama="Gambar 18. Jaring-jaring prisma"
          width="300px"
        />

        <Par
          text="Akan dianalisis jaring-jaring prisma segitiga pada Gambar 18 untuk mencari luas permukaannya. Prisma tersebut memiliki lima buah sisi, yaitu $$L_1, L_2, L_3, L_4, L_5.$$ Terlihat bahwa \(L_4 = L_5\), kedua sisi tersebut dapat disebut sebagai alas. Sementara itu, \(L_1, L_2, L_3\) jika digabungkan akan membentuk sebuah persegi panjang. Oleh karena itu, luas permukaan prisma dapat dituliskan sebagai $$L = 2 \times L_a + K_a \times t.$$
        \( L= \) luas permukaan prisma<br />
        \( L_a= \) luas alas<br />
        \( K_a= \) keliling alas \( (BC+CA+AB) \)<br />
        \( t= \) tinggi prisma"
        />
        <Par text="Setelah memahami rumus untuk mencari luas permukaan prisma, sekarang cobalah menghitung luas permukaan prisma segitiga berikut sebagai latihan!" />
        <Image src="soal-lp-prisma.png" scale={1} width="300px" />
        <Par text="Diketahui \( \angle BAC=90^\circ .\)" />
        <InputSubmitSatuan answerKey="42" satuan="text{cm}^2" />
      </div>
      <NavFooter
        prev="/latihan-soal-luas-permukaan"
        next="/luas-permukaan-limas"
      />
    </>
  );
};

export default LuasPermukaanPrisma;
