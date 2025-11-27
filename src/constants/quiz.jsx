import Simulasi from '../components/features/SimulasiAR';
import { Par } from '../components/ui/Text';
import Image from '../components/ui/Image';

/**
 * Quiz questions configuration
 * Each question has:
 * - id: unique identifier
 * - component: React component to render the question
 * - answer: correct answer (string)
 * - unit: LaTeX unit notation (optional)
 */
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    component: () => {
      const urlAnim = import.meta.env.VITE_URL_ANIM;
      return (
        <div className="space-y-4">
          <Par text="Sebuah balok memiliki alas berbentuk persegi dengan ukuran \(6 \times 6\) satuan, dan tingginya \(3\) satuan. Di dalam balok itu ada rongga berbentuk limas segiempat beraturan, dengan puncaknya tepat di tengah alas balok. Berapa sisa volume balok setelah dikurangi volume rongga tersebut?" />
          <Simulasi
            urlAR="https://mywebar.com/p/objek6jaringjaringkubus"
            model3D={urlAnim + "dua-per-tiga-balok.glb"}
            buttonActive={false}
            buttonSwitch={false}
            scale={1.5}
          />
        </div>
      );
    },
    answer: "72",
    unit: "text{satuan}^3"
  },
  {
    id: 2,
    component: () => (
      <div className="space-y-4">
        <Par text="Andi memiliki bak mandi berukuran \(1 \text{ m} \times 1{,}5 \text{ m} \times 80 \text{ cm}\). Sebelum mandi, \( \frac{1}{4} \) bagian bak sudah terisi air. Jika Andi menghidupkan kran air dengan debit \(0{,}5\) liter per detik, berapa lama Andi harus menunggu sampai bak mandi penuh?" />
        <Image src="bak-mandi.png" width="300px" />
      </div>
    ),
    answer: "30",
    unit: "text{menit}"
  },
  {
    id: 3,
    component: () => (
      <div className="space-y-4">
        <Par text="Lukman adalah seorang kakak yang baik. Tiga hari lagi, adiknya akan berulang tahun. Lukman berencana membuat topi ulang tahun untuk para tamu undangan dengan bentuk limas segiempat, seperti pada gambar. Jika adik Lukman mengundang 15 orang, dan kertas karton di pasar dijual dengan ukuran \(1 \text{ m} \times 1 \text{ m}\) seharga Rp5.000, berapakah biaya yang dibutuhkan untuk membuat topi untuk semua tamu?" />
        <Image src="soal-quiz-limas.png" width="300px" />
      </div>
    ),
    answer: "10000",
    unit: "text{rupiah}"
  },
  {
    id: 4,
    component: () => (
      <div className="space-y-4">
        <Par text="Diketahui sebuah prisma \(ABCD.EFGH\) dengan alas berbentuk trapesium sama kaki. Panjang \(AB = 4\,\text{cm}\), \(CD = 7\,\text{cm}\), \(BC = 2,5\,\text{cm}\), dan tinggi prisma \(6\,\text{cm}\). Hitunglah luas permukaan prisma tersebut!" />
        <Image src="soal-prisma-trapesium.png" scale={0.65} />
      </div>
    ),
    answer: "99",
    unit: "text{cm}^2"
  }
];

// Quiz configuration
export const QUIZ_CONFIG = {
  DURATION_SECONDS: 1500, // 25 minutes
  TIME_CRITICAL_THRESHOLD: 300, // 5 minutes
};
