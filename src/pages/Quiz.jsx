import { useState } from 'react';
import Simulasi from '../components/SimulasiAR';
import { Ha2, Par } from '../components/Text';
import Image from '../components/Image';
import InputSubmitSatuan from '../components/InputSubmitSatuan';
import TimerMundur from '../components/Timer';

const Soal1 = () => {
  const urlAnim = import.meta.env.VITE_URL_ANIM;
  return (
    <div className="space-y-4">
      <Par text="Sebuah balok memiliki alas berbentuk persegi dengan ukuran \(6 \times 6\) satuan, dan tingginya \(3\) satuan. Di dalam balok itu ada rongga berbentuk limas segiempat beraturan, dengan puncaknya tepat di tengah alas balok. Berapa sisa volume balok setelah dikurangi volume rongga tersebut?" />
      <Simulasi
        urlAR="https://mywebar.com/p/objek6jaringjaringkubus"
        model3D={urlAnim + 'dua-per-tiga-balok.glb'}
        buttonActive={false}
        buttonSwitch={false}
        scale={1.5}
      />
      {/* <Image src="balok-berongga-limas.png" width="300px" /> */}
      <input type="file" accept="image/*" />
      <InputSubmitSatuan satuan="text{satuan}^3" />
    </div>
  );
};

const Soal2 = () => (
  <div className="space-y-4">
    <Par text="Andi memiliki bak mandi berukuran \(1 \text{ m} \times 1{,}5 \text{ m} \times 80 \text{ cm}\). Sebelum mandi, \( \frac{1}{4} \) bagian bak sudah terisi air. Jika Andi menghidupkan kran air dengan debit \(0{,}5\) liter per detik, berapa lama Andi harus menunggu sampai bak mandi penuh?" />
    <Image src="bak-mandi.png" width="300px" />
    <InputSubmitSatuan satuan="text{menit}" />
  </div>
);

const Soal3 = () => (
  <div className="space-y-4">
    <Par text="Lukman adalah seorang kakak yang baik. Tiga hari lagi, adiknya akan berulang tahun. Lukman berencana membuat topi ulang tahun untuk para tamu undangan dengan bentuk limas segiempat, seperti pada gambar. Jika adik Lukman mengundang 15 orang, dan kertas karton di pasar dijual dengan ukuran \(1 \text{ m} \times 1 \text{ m}\) seharga Rp5.000, berapakah biaya yang dibutuhkan untuk membuat topi untuk semua tamu?" />
    <Image src="soal-quiz-limas.png" width="300px" />
    <InputSubmitSatuan satuan="text{rupiah}" />
  </div>
);

const Soal4 = () => (
  <div className="space-y-4">
    <Par text="Diketahui sebuah prisma \(ABCD.EFGH\) dengan alas berbentuk trapesium sama kaki. Panjang \(AB = 4\,\text{cm}\), \(CD = 7\,\text{cm}\), \(BC = 2,5\,\text{cm}\), dan tinggi prisma \(6\,\text{cm}\). Hitunglah luas permukaan prisma tersebut!" />

    <Image src="soal-prisma-trapesium.png" scale={0.65} />
    <InputSubmitSatuan satuan="text{cm}^2" />
  </div>
);

const Questions = [Soal2, Soal3, Soal1, Soal4];

const Quiz = () => {
  const [number, setNumber] = useState(0);

  const CurrentSoal = Questions[number];
  const isLast = number === Questions.length - 1;
  const isFirst = number === 0;

  const handleNext = () => {
    if (!isLast) {
      setNumber((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      setNumber((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen py-10 text-slate-800 inter-primary">
      <div className="max-w-2xl mx-auto px-6 space-y-6">
        {/* Header */}
        <div className="border-b pb-4 space-y-4">
          {/* Tombol Submit di atas */}
          <div className="flex justify-end">
            {isLast && (
              <button
                type="submit"
                className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition"
              >
                Submit
              </button>
            )}
          </div>

          {/* Timer dan Tombol Prev/Next sejajar */}
          <div className="flex items-center justify-between">
            <span className="bg-sky-100 text-sky-800 text-sm font-medium px-3 py-1 rounded-full">
              <TimerMundur durasiAwal={1500} />
            </span>
            <div className="space-x-3">
              <button
                onClick={handlePrev}
                className="bg-slate-800 text-white px-4 py-1.5 rounded-xl hover:bg-slate-700 transition disabled:opacity-50"
                disabled={isFirst}
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="bg-slate-800 text-white px-4 py-1.5 rounded-xl hover:bg-slate-700 transition disabled:opacity-50"
                disabled={isLast}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Card Soal */}
        <div>
          <Ha2 text={'Soal ' + (number + 1)} />
          <CurrentSoal />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
