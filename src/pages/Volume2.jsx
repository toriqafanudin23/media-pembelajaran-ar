import { Ha2, Par } from '../components/Text';
import Image from '../components/Image';
import InputSubmit from '../components/InputSubmit';
import Navigasi from '../components/Navigasi';
import { ParLatex } from '../components/Text';
import NavFooter from '../components/NavFooter';

const Volume2 = () => {
  return (
    <>
      <div className="min-h-screen bg-white px-6 pt-18 mb-4 inter-primary text-slate-800 mx-auto">
        <Navigasi />

        <Ha2 text="B. Volume Balok" />
        <Par text="Menurutmu, apa perbedaan antara kubus dan balok? Untuk mengetahui perbedaannya, perhatikan Gambar 7 berikut." />
        <Image
          src="kubusbalokAB.png"
          nama="Gambar 7. Kubus dan Balok"
          scale={1.03}
        />

        <Par text="Dapat dilihat bahwa pada bangun A, jumlah kubus satuan yang menyusun rusuk panjang, lebar, dan tinggi sama. Sementara pada bangun B, jumlah kubus satuan penyusun rusuk panjang, lebar, dan tinggi tidak sama. Bangun A disebut kubus, sedangkan bangun B disebut balok. Sekarang, coba hitung volume bangun B!" />
        <InputSubmit answerKey="24" />
        <Par text="Dalam matematika, bangun ruang tidak selalu digambarkan dengan kubus satuan penyusunnya. Namun, untuk mempermudah perhitungan, bangun ruang sering hanya digambarkan sebagai kerangka dan sisi-sisinya saja, seperti terlihat pada Gambar 8 berikut." />
        <Image
          src="balok_pqrs.png"
          nama="Gambar 8. Balok PQRS.TUVW"
          width="300px"
        />
        <Par text="Pada bangun ruang, titik sudut disimbolkan dengan huruf kapital, seperti P, Q, R, S, T, U, V, W. Rusuk disimbolkan dengan huruf kecil, misalnya p, l, t, atau dapat juga dituliskan dengan dua titik sudut, misalnya PQ atau RV. Selain itu, ada juga istilah sisi atau bidang. Contohnya adalah sisi PQRS, sisi PQTU, dan lainnya." />

        <Par text="Sekarang, coba kamu hitung jumlah unsur-unsur yang ada pada balok di atas." />
        <Par text="Jumlah titik sudut:" />
        <InputSubmit answerKey="8" />
        <Par text="Jumlah rusuk:" />
        <InputSubmit answerKey="12" />
        <Par text="Jumlah sisi:" />
        <InputSubmit answerKey="6" />
        <Par text="Kita telah mempelajari bahwa volume kubus dan balok dapat dihitung dengan rumus:" />
        <ParLatex text={<>$$V = p \times l \times t$$</>} />
        <Par text="Sebagai latihan, hitunglah volume balok berikut!" />
        <Image src="latihan-soal-balok-1.png" width="300px" />
        <InputSubmit answerKey="120" />
      </div>
      <NavFooter prev="/volume" next="/volume-3" />
    </>
  );
};

export default Volume2;
