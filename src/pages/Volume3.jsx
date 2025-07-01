import NavFooter from '../components/NavFooter';
import Navigasi from '../components/Navigasi';
import { Ha2, ParSoal } from '../components/Text';

const Volume3 = () => {
  return (
    <>
      <div className="min-h-screen bg-white px-6 py-16 mb-4 inter-primary text-slate-800 sm:max-w-xl mx-auto">
        <Navigasi />
        <Ha2 text="Latihan Soal dan Pembahasan" />

        <ParSoal
          no="1."
          text="Diketahui volume sebuah kubus adalah 216 cm<sup>3</sup>. Panjang rusuk kubus tersebut adalah ... cm."
          latex={
            <>
              {`$$V = r \\times r \\times r = r^3 = 216$$`}
              {`$$r^3 = 216$$`}
              {`$$r = \\sqrt[3]{216}$$`}
              {`$$r = 6$$`}
            </>
          }
          text2="Jadi, panjang rusuk kubus tersebut adalah 6 cm."
        />

        <ParSoal
          no="2."
          text="Diketahui sebuah balok memiliki volume 180 cm<sup>3</sup>. Jika panjang balok 9 cm, dan lebar balok 5 cm, maka tinggi balok tersebut adalah ... cm."
          latex={
            <>
              {`$$V = p \\times l \\times t$$`}
              {`$$V = 9 \\times 5 \\times t$$`}
              {`$$45 \\times t = 180$$`}
              {`$$t = \\frac{180}{45} = 4$$`}
            </>
          }
          text2="Jadi, tinggi balok tersebut adalah 4 cm."
        />
        <ParSoal
          imgAktif={true}
          width="330px"
          src="balok-xxx-3.png"
          no="3."
          text="Diketahui perbandingan panjang, lebar, dan tinggi sebuah balok adalah $$p:l:t=2:3:5$$Jika Volume balok adalah 810 cm<sup>3</sup>, maka panjang balok tersebut adalah ... cm."
          latex={
            <>
              {`$$p = 2x$$`}
              {`$$l = 3x$$`}
              {`$$t = 5x$$`}
              {`$$V = p \\times l \\times t$$`}
              {`$$V = (2x) \\times (3x) \\times (5x)$$`}
              {`$$V = 30x^3$$`}
              {`$$30x^3 = 810$$`}
              {`$$x^3 = \\frac{810}{30}$$`}
              {`$$x^3 = 27$$`}
              {`$$x = \\sqrt[3]{27}$$`}
              {`$$x = 3$$`}
              {`$$p = 2 \\times 3 = 6$$`}
            </>
          }
          text2="Jadi, panjang balok tersebut adalah 6 cm."
        />
        <ParSoal
          no="4."
          text="Dua buah kubus memiliki perbandingan panjang rusuk $$2:3$$Jika volume kubus kecil adalah 216 cm<sup>3</sup>, hitunglah selisih volume kedua kubus tersebut!"
          latex={
            <>
              {`$$(2x)^3 = 216$$`}
              {`$$8x^3 = 216$$`}
              {`$$x^3 = \\frac{216}{8} = 27$$`}
              {`$$x = \\sqrt[3]{27} = 3$$`}
              {`$$\\text{Rusuk kubus besar} = 3x = 3 \\times 3 = 9$$`}
              {`$$V_{\\text{besar}} = 9^3 = 729$$`}
              {`$$\\text{Selisih volume} = 729 - 216 = 513$$`}
            </>
          }
          text2="Jadi, selisih volume kedua kubus tersebut adalah 513 cm³."
        />
      </div>
      <NavFooter prev="/volume-2" next="/volume-prisma" />
    </>
  );
};

export default Volume3;
