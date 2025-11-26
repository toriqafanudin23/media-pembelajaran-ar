import NavFooter from '../components/layout/NavFooter';
import Navigasi from '../components/layout/Navigasi';
import { Ha2,Ha3, Par } from '../components/ui/Text';
import Image from '../components/ui/Image';
import InputSubmit from '../components/ui/InputSubmit';

const VolumeLatihan = () => {
  return (
    <>
      <div className="min-h-screen bg-white px-6 py-20 pb-24 inter-primary text-slate-800 sm:max-w-xl mx-auto">
        <Navigasi />
        <Ha2 text="Latihan Soal dan Pembahasan" />
        <Ha3 text="Soal 1"/>
        <Par text="Diketahui sebuah bak mandi saat diukur dari luar, memiliki ukuran \( 50 \text{ cm} \times 100 \text{ cm} \times 60 \text{ cm}. \) Jika ketebalan dinding bak mandi adalah \( 10 \text{ cm} \), maka berapakah volume air yang dapat di tampung saat bak mandi terisi penuh?" />
        <Image src="bak-mandi-2.png" width='300px' />
        <Par text="Pembahasan:<br />Jika diukur dari luar, bak mandi memiliki ukuran:<br />\( p = 100 \text{ cm} \)<br />\( l = 50 \text{ cm} \)<br />\( t = 60 \text{ cm} \)<br />Karena ketebalan dinding \( 10 \text{ cm} \), maka ukuran bagian dalam bak mandi menjadi:<br />\( p' = 100 - 2 \times 10 = 80 \text{ cm} \)<br />\( l' = 50 - 2 \times 10 = 30 \text{ cm} \)<br />\( t' = 60 \text{ cm} \)<br />Sehingga volume air yang dapat ditampung bisa dihitung dengan:<br />\( V = p' \times l' \times t' \)<br />Jadi volume air yang dapat ditampung adalah" />

        <InputSubmit answerKey='144' satuan='text{liter}' />

        <Ha3 text="Soal 2" />
        <Par text="Andi sedang membangun rumah di pedesaan. Pada proses pembangunan, ia kekurangan batu bata sehingga memutuskan untuk membeli 100 batu bata. Ukuran batu bata \( 20 \text{ cm} \times 10 \text{ cm} \times 5 \text{ cm} \). Jika lahan untuk menyimpan batu bata yang dimiliki Andi adalah \( 1 \text{ m} \times 50 \text{ cm} \), berapa tinggi susunan batu bata agar dapat memenuhi lahan tersebut?" />
        <Image src="menata-batako.png" width='300px' />

        <Par text="Pembahasan:<br />Luas lahan Andi adalah<br /> \( 100 \text{ cm} \times 50 \text{ cm} = 5.000 \text{ cm}^2 \).<br />Luas alas satu batu bata adalah \( 20 \times 10 = 200 \text{ cm}^2 \).<br />Dalam satu lapisan dapat disusun \( \frac{5.000}{200} = 25 \) batu bata.<br />Karena Andi memiliki 100 batu bata, maka diperlukan \( \frac{100}{25} = 4 \) lapisan.<br />Tinggi susunan batu bata adalah \( 4 \times 5 = 20 \text{ cm} \).<br />Jadi, tinggi susunan batu bata agar memenuhi lahan tersebut adalah 4 lapis atau \( 20 \text{ cm} \)." />






        {/* <ParSoal
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
        /> */}
      </div>
      <NavFooter prev="/volume-2" next="/volume-prisma" />
    </>
  );
};

export default VolumeLatihan;
