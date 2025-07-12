import NavFooter from '../components/NavFooter';
import Navigasi from '../components/Navigasi';
import { Ha2, Par } from '../components/Text';
import Simulasi from '../components/SimulasiAR';
import Image from '../components/Image';
import SimulasiStatis from '../components/SimulasiStatis';

const VolumeLimas = () => {
  const urlAnim = import.meta.env.VITE_URL_ANIM;
  return (
    <>
      <div className="min-h-screen bg-white px-6 py-16 mb-4 inter-primary text-slate-800 sm:max-w-xl mx-auto">
        <Navigasi />
        <Ha2 text="D. Volume Limas" />
        <Par text="Sebelumnya, kita telah mempelajari cara mencari volume bangun ruang yang memiliki bentuk alas dan tutup yang sama, seperti kubus, balok, dan prisma. Sekarang, bagaimana jika bentuk bangun ruangnya seperti berikut?" />
        <SimulasiStatis
          model3D={urlAnim + 'limas-segitiga.glb'}
          models={[
            'limas-segitiga.glb',
            'limas-segiempat.glb',
            'limas-segilima.glb',
            'limas-segienam.glb',
          ]}
          scale={0.8}
          nama="Objek 4. Jenis-jenis Limas"
          buttonSwitch={false}
        />

        <Par text="Bangun di atas disebut limas. Limas adalah bangun ruang yang memiliki alas berbentuk segi banyak dan satu titik puncak yang tidak terletak pada bidang alas." />
        <Par text="Untuk memahami cara menghitung volume limas, perhatikan simulasi berikut" />
        <Simulasi
          urlAR="https://mywebar.com/p/objek5volumelimas"
          model3D={urlAnim + 'volume-limas-scene.glb'}
          scale={1.5}
          nama="Objek 5. Volume limas"
        />
        <Image
          src="bukti-v-limas.png"
          nama="Gambar 12. Limas bagian kubus"
          width="330px"
          scale={1.2}
        />
        <Par text="Dari simulasi di atas terlihat bahwa sebuah kubus dapat dibagi menjadi tiga limas yang berukuran sama. Meskipun titik puncak T tidak berada di tengah, bangun pada Gambar 11 tetap disebut sebagai limas. Simulasi ini menunjukkan bahwa volume limas dapat dihitung dengan" />
        <Par text="$$V=\frac{1}{3} \times \text{volume kubus}$$" />
        <Par text="$$V=\frac{1}{3} \times \text{luas alas} \times \text{tinggi}$$" />
        <Par text="Sebagai contoh, diketahui sebuah limas T.ABCD dengan alas berbentuk persegi. Jika panjang rusuk AB dan BC adalah 7 cm, dan tinggi limas OT adalah 9 cm, maka volume limas tersebut adalah ..." />
        <Image src="soal-limas-1.png" width="300px" scale={1.3} />
        <Par text="Pembahasan:" />
        <Par text="$$V= \frac{1}{3} \times \text{luas alas} \times \text{tinggi}$$" />
        <Par text="$$V= \frac{1}{3} \times AB \times BC \times OT$$" />
        <Par text="$$V= \frac{1}{3} \times 7 \times 7 \times 9 = 147$$" />
        <Par text="Jadi, volume limas tersebut adalah 147 \( \text{cm}^3\)." />
      </div>
      <NavFooter prev="/volume-prisma" next="/soal-volume-prisma-limas" />
    </>
  );
};

export default VolumeLimas;
