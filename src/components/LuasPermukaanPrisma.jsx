import NavFooter from './NavFooter';
import Navigasi from './Navigasi';
import { Ha2, Par } from './Text';

const LuasPermukaanPrisma = () => {
  return (
    <>
      <div className="min-h-screen bg-white px-6 pt-18 mb-4 inter-primary text-slate-800 sm:w-xl mx-auto">
        <Navigasi />
        <Ha2 text="C. Luas Permukaan Prisma" />
        <Par text="Sebelum memulai materi tentang luas permukaan prisma, terlebih dahulu kita akan mengamati beberapa jaring-jaring prisma dalam bentuk augmented reality." />
        <Par text="Dari jaring-jaring yang ditunjukkan pada Objek 10, akan dipilih satu jaring-jaring prisma sebagai contoh untuk menghitung luas permukaan." />
        <Par
          text="Luas permukaan prisma merupakan jumlah seluruh luas pada jaring-jaringnya, yang dapat dinyatakan dengan rumus:$$L_{\text{prisma}} = L_{\text{alas}} + L_{\text{tutup}} + L_{\text{sisi tegak}}$$
        Dikarenakan bentuk alas dan tutupnya sama, maka bisa dituliskan menjadi
        $$L_{\text{prisma}}=2 \times L_{\text{alas}}+L_{\text{sisi tegak}}.$$"
        />
      </div>
      <NavFooter
        prev="/latihan-soal-luas-permukaan"
        next="/luas-permukaan-limas"
      />
    </>
  );
};

export default LuasPermukaanPrisma;
