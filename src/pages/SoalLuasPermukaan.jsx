import { useEffect } from 'react';
import Navigasi from '../components/Navigasi';
import NavFooter from '../components/NavFooter';
import { Ha2, Par } from '../components/Text';
import Image from '../components/Image';
import InputSubmitSatuan from '../components/InputSubmitSatuan';

const LatihanSoalLP = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-white px-6 pt-18 mb-4 inter-primary text-slate-800 sm:w-xl mx-auto">
        <Navigasi />
        <Ha2 text="Latihan Soal" />
        <div className="flex items-start gap-2 flex-row">
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
            <InputSubmitSatuan answerKey="52" satuan="text{cm}^2" />
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
            <InputSubmitSatuan answerKey="150" satuan="text{cm}^2" />
          </div>
        </div>
        <div className="flex items-start gap-2 flex-row">
          <span className="pt-3">3.</span>
          <div>
            <Par text="Diketahui luas permukaan sebuah kubus adalah \( 384 \text{ cm}^2 \). Tentukan panjang rusuk kubus tersebut!" />
            <InputSubmitSatuan answerKey="8" satuan="text{cm}" />
          </div>
        </div>
        <div className="flex items-start gap-2 flex-row">
          <span className="pt-3">4.</span>
          <div>
            <Par text="Sebuah balok memiliki panjang \(p\), lebar \(l\), dan tinggi \(t\) dengan \(p = 2l\) dan \(t = \frac{1}{2}p\). Jika luas permukaan balok tersebut adalah \(250 \text{ cm}^2\), tentukan panjang \(p\)!" />
            <InputSubmitSatuan answerKey="10" satuan="text{cm}" />
          </div>
        </div>
      </div>
      <NavFooter prev="/luas-permukaan-balok" next="/luas-permukaan-prisma" />
    </>
  );
};

export default LatihanSoalLP;
