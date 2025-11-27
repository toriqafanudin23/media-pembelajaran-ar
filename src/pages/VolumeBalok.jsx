import { Ha2, Par } from '../components/ui/Text';
import Image from '../components/ui/Image';
import InputSubmit from '../components/ui/InputSubmit';
import Navigasi from '../components/layout/Navigasi';
import { ParLatex } from '../components/ui/Text';
import NavFooter from '../components/layout/NavFooter';

const VolumeBalok = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 px-6 pt-20 pb-24 inter-primary text-slate-800 mx-auto sm:w-xl">
        <Navigasi pageNumber="2" />

        <Ha2 text="B. Volume Balok" />
        <Par text="Menurutmu, apakah perbedaan antara kubus dan balok? Untuk mengetahui perbedaannya, perhatikan Gambar 7 berikut." />
        <Image
          src="kubusbalokAB.png"
          nama="Gambar 7. Kubus dan Balok"
          scale={1.03}
        />

        <Par text="Dapat dilihat bahwa pada bangun A, jumlah kubus satuan yang menyusun rusuk panjang, lebar, dan tinggi sama. Sementara pada bangun B, jumlah kubus satuan penyusun rusuk panjang, lebar, dan tinggi tidak sama. Bangun A disebut kubus, sedangkan bangun B disebut balok. Sekarang, coba kamu hitung volume bangun B!" />
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
        <Image src="balok-6x4x5.png" width="300px" />
        <InputSubmit answerKey="120" satuan='text{cm}^3' />
      </div>
      <NavFooter prev="/volume" next="/volume-3" />
    </>
  );
};

export default VolumeBalok;
