import NavFooter from "../components/layout/NavFooter";
import Navigasi from "../components/layout/Navigasi";
import { Ha2, Par } from "../components/ui/Text";
import Simulasi from "../components/features/SimulasiAR";
import Image from "../components/ui/Image";
import InputSubmit from "../components/ui/InputSubmit";

const LuasPermukaanLimas = () => {
  const urlAnim = import.meta.env.VITE_URL_ANIM;
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 px-6 pt-20 pb-24 inter-primary text-slate-800 sm:w-xl mx-auto">
        <Navigasi />
        <Ha2 text="D. Luas Permukaan Limas" />
        <Par text="Sebelum memulai materi tentang luas permukaan limas, terlebih dahulu kita akan mengamati jaring-jaring limas dalam bentuk animasi." />
        <Simulasi
          urlAR="https://mywebar.com/p/objek7jaringjaringbalok"
          model3D={urlAnim + "animasi-jaring-limas.glb"}
          scale={1}
          nama="Objek 9. Jaring-jaring limas"
          buttonSwitch={false}
        />
        <Image
          src="jaring-limas-segiempat-label.png"
          scale={1.09}
          nama="Gambar 19. Jaring-jaring limas"
          width="300px"
        />
        <Par
          text="Dari Gambar 19 terlihat bahwa limas memiliki alas berbentuk persegi dan empat buah sisi tegak berbentuk segitiga. Pada limas segi-\(n\) beraturan, luas permukaannya dapat dihitung dengan rumus
$$L = L_a + n \times L_t$$
\(L\) = luas permukaan limas  <br />
\(L_a\) = luas alas  <br />
\(L_t\) = luas satu sisi tegak  <br />
\(n\) = banyaknya sisi tegak"
        />

        <Par text="Sebagai contoh, diketahui limas \( T.ABCD \) memiliki alas berbentuk persegi. Jika panjang \( AD=4 \text{ cm}\) dan panjang \( PT=6 \text{ cm} \), hitunglah luas permukaan limas tersebut!" />
        <Image src="soal-lp-limas.png" scale={1} />
        <Par
          text="Pembahasan:
        $$L=L_a + n \times L_t$$
        $$L=AD \times CD + 4 \times \frac{1}{2} \times CD \times PT$$
        Jadi luas permukaan limas tersebut adalah"
        />
        <InputSubmit answerKey="64" satuan="text{cm}^2" />
      </div>
      <NavFooter prev="/luas-permukaan-prisma" next="/soal-luas-prisma-limas" />
    </>
  );
};

export default LuasPermukaanLimas;
