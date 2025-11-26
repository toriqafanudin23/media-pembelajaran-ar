import { useEffect } from "react";
import Navigasi from "../components/layout/Navigasi";
import NavFooter from "../components/layout/NavFooter";
import { Ha2, Par, Ha3 } from "../components/ui/Text";
import Simulasi from "../components/features/SimulasiAR"
import Image from "../components/ui/Image";
import InputSubmit from "../components/ui/InputSubmit";

const LatihanSoalLP = () => {
  const urlAnim = import.meta.env.VITE_URL_ANIM;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 px-6 pt-20 pb-24 inter-primary text-slate-800 sm:w-xl mx-auto">
        <Navigasi />
        <Ha2 text="Latihan Soal" />
        <Ha3 text="Soal 1" />
        <Par text="Sebuah karton memiliki ukuran \( 65 \times 65 \text{ cm} \) per lembarnya. Karton tersebut akan digunakan untuk membuat kotak kado berukuran \( 10 \times 12 \times 20 \text{ cm} \). Jika jumlah kotak kado yang akan dibuat adalah 200 buah, berapakah jumlah minimal lembar karton yang dibutuhkan?" />
        <Image src="jaring-64x64.png" scale={0.8} />
        <InputSubmit answerKey="100" satuan="text{lembar}" />

        <Ha3 text="Soal 2" />
        <Par text="Sebuah aula berbentuk balok dengan ukuran panjang 9 meter, lebar 7 meter, dan tinggi 4 meter. Aula tersebut akan dicat warna biru pada bagian dinding dalamnya. Jika biaya cat per meter persegi adalah Rp20.000, berapakah biaya keseluruhan pengecatan?" />
        <InputSubmit answerKey="2560000" satuan="text{rupiah}" />

        <Ha3 text="Soal 3" />
        <Par text="Perhatikan gambar kubus di bawah ini!" />
        <Par text="Jika sisi atas dan sisi bawah kubus tersebut dicat dengan warna merah, sedangkan sisi-sisi lainnya dicat dengan warna biru, kemudian kubus dipotong menjadi 64 kubus satuan, tentukan banyaknya kubus satuan yang tidak memiliki warna merah!" />
        <Simulasi
          urlAR="https://mywebar.com/p/objek1volumekubus"
          model3D={urlAnim + "kubus-64.glb"}
          scale={0.7}
          buttonSwitch={false}
          buttonActive={false}
        />
        <InputSubmit answerKey="32" satuan="text{kubus}" />

        {/* <div className="flex items-start gap-2 flex-row">
          <span className="pt-3">1.</span>
          <div>
            <Par text="Diketahui sebuah balok \( PQRS.TUVW \) dengan panjang diagonal \( PR = 5\,\text{cm} \), panjang rusuk \( PQ = 4\,\text{cm} \), dan panjang rusuk \( QU = 2\,\text{cm} \). Tentukan luas permukaan balok tersebut!" />
            <Image
              src="balok-diagonal-PR-2.png"
              //   nama="Gambar 17. Balok"
              scale={1}
              width="300px"
            />
            <Par
              text="Pembahasan:
            $$\angle PRQ = 90^\circ$$
            $$\text{theorema pythagoras:}$$
            $$PR^2 = PQ^2 + QR^2$$
            $$\text{bisa dilanjutkan sendiri ...}$$"
            />
            <InputSubmit answerKey="52" satuan="text{cm}^2" />
          </div>
        </div>

        <div className="flex items-start gap-2 flex-row">
          <span className="pt-3">2.</span>
          <div>
            <Par text="Diketahui sebuah kubus dengan volume \( 125 \text{ cm}^3 \). Tentukan luas permukaan kubus tersebut!" />
            <Par
              text="Pembahasan:
            $$V=r^3 = 125$$
            $$r=\sqrt[3]{125}$$
            $$r=5$$
            $$L=6 \times r^2$$Jadi luas permukaan kubus tersebut adalah ..."
            />
            <InputSubmit answerKey="150" satuan="text{cm}^2" />
          </div>
        </div>
        <div className="flex items-start gap-2 flex-row">
          <span className="pt-3">3.</span>
          <div>
            <Par text="Diketahui luas permukaan sebuah kubus adalah \( 384 \text{ cm}^2 \). Tentukan panjang rusuk kubus tersebut!" />
            <InputSubmit answerKey="8" satuan="text{cm}" />
          </div>
        </div>
        <div className="flex items-start gap-2 flex-row">
          <span className="pt-3">4.</span>
          <div>
            <Par text="Sebuah balok memiliki panjang \(p\), lebar \(l\), dan tinggi \(t\) dengan \(p = 2l\) dan \(t = \frac{1}{2}p\). Jika luas permukaan balok tersebut adalah \(250 \text{ cm}^2\), tentukan panjang \(p\)!" />
            <InputSubmit answerKey="10" satuan="text{cm}" />
          </div>
        </div> */}
      </div>
      <NavFooter prev="/luas-permukaan-balok" next="/luas-permukaan-prisma" />
    </>
  );
};

export default LatihanSoalLP;
