import Navigasi from "../components/layout/Navigasi";
import NavFooter from "../components/layout/NavFooter";
import { Ha2, Ha3, Par } from "../components/ui/Text";
import Image from "../components/ui/Image";
import InputSubmit from "../components/ui/InputSubmit";
import Simulasi from "../components/features/SimulasiAR";

const SoalLuasPrismaLimas = () => {
  const urlAnim = import.meta.env.VITE_URL_ANIM;
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 px-6 pt-20 pb-24 inter-primary text-slate-800 sm:w-xl mx-auto">
        <Navigasi pageNumber="12" />
        <Ha2 text="Latihan Soal" />
        <Ha3 text="Soal 1" />
        <Par text="Sebuah tenda memiliki pintu depan dan belakang berbentuk segitiga dengan ukuran alas 3 m dan tinggi 2 m. Panjang tenda tersebut adalah 4 m. Jika tenda tidak memiliki alas (bagian bawah) karena dipasang menggunakan patok, berapakah luas minimal kain yang diperlukan untuk membuat tenda tersebut?" />
        <Image src="tenda.png" width="300px" />
        <InputSubmit answerKey="26" satuan="text{m}^2" />

        <Ha3 text="Soal 2" />
        <Par text="Gambar di bawah menunjukkan sebuah kubus dengan panjang sisi 6 dm. Kubus tersebut dipotong sehingga salah satu bagiannya membentuk limas segitiga (tetrahedron). Tentukan luas permukaan limas segitiga yang merupakan hasil potongan tersebut!<br /> \( \sqrt{3} = 1{,}732 \)" />
        <Image src="kubus-dipotong.png" width="300px" />
        <Simulasi
          urlAR="https://mywebar.com/p/objek1volumekubus"
          model3D={urlAnim + "kubus-dipotong-2.glb"}
          scale={2.5}
          buttonSwitch={false}
        />
        <InputSubmit answerKey="85,176" satuan="text{dm}^2" />

        <Ha3 text="Soal 3" />
        <Par text="Alas sebuah limas segiempat beraturan berbentuk persegi. Jika tinggi sisi tegak segitiga adalah 20 cm dan tinggi limas 16 cm, tentukanlah luas permukaan limas tersebut!" />
        <Image src="limas-16-20.png" width="300px" />
        <InputSubmit answerKey="1536" satuan="text{cm}^2" />
      </div>
      <NavFooter prev="/luas-permukaan-limas" next="/home" />
    </>
  );
};

export default SoalLuasPrismaLimas;
