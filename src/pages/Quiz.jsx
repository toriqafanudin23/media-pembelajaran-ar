import Simulasi from '../components/SimulasiAR';
import { Ha2, Par } from '../components/Text';
import Image from '../components/Image';
import InputSubmitSatuan from '../components/InputSubmitSatuan';

const Quiz = () => {
  const urlAnim = import.meta.env.VITE_URL_ANIM;

  return (
    <>
      <div className="min-h-screen bg-white px-6 pt-18 mb-4 inter-primary text-slate-800 sm:w-xl mx-auto">
        <Ha2 text="Quiz" />
        <Par text="Sebuah balok memiliki alas berbentuk persegi dengan ukuran \(6 \times 6\) satuan, dan tingginya \(3\) satuan. Di dalam balok itu ada rongga berbentuk limas segiempat beraturan, dengan puncaknya tepat di tengah alas balok. Berapa sisa volume balok setelah dikurangi volume rongga tersebut?" />

        <Simulasi
          urlAR="https://mywebar.com/p/objek6jaringjaringkubus"
          model3D={urlAnim + 'dua-per-tiga-balok.glb'}
          buttonActive={false}
          buttonSwitch={false}
          scale={1.5}
        />
        <Image src="dua-per-tiga-balok.png" width="300px" />
        <InputSubmitSatuan satuan="text{satuan}^3" />
      </div>
    </>
  );
};

export default Quiz;
