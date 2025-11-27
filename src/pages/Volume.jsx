import Image from '../components/ui/Image';
import InputSubmit from '../components/ui/InputSubmit';
import NavFooter from '../components/layout/NavFooter';
import Navigasi from '../components/layout/Navigasi';
import Simulasi from '../components/features/SimulasiAR';
import { Ha1, Ha2, Par } from '../components/ui/Text';
import { Images } from '../assets/assets';

const Volume = () => {
  const urlAnim = import.meta.env.VITE_URL_ANIM;
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 px-4 sm:px-6 pt-20 pb-24 inter-primary text-slate-800 mx-auto max-w-2xl">
        <Navigasi pageNumber="1" />
        
        <Ha1 text="Volume Bangun Ruang Sisi Datar" />

        <Ha2 text="A. Volume Kubus" />

        <Image src={Images[0].src} nama={Images[0].nama} />

        <Par text="Pernahkah kamu bermain rubik? Rubik merupakan permainan puzzle warna berbentuk kubus dengan ukuran tertentu. Jika rubik pada Gambar 1 tersusun dari kubus satuan, maka berapakah banyaknya kubus satuan yang menyusun Rubik di atas?" />

        <Par text="Untuk membantumu menghitung banyaknya kubus satuan penyusun Rubik pada Gambar 1, perhatikan simulasi berikut." />

        <Simulasi
          urlAR="https://mywebar.com/p/objek1volumekubus"
          model3D={urlAnim + 'kubus-warna-2-anim.glb'}
          scale={0.8}
          nama="Objek 1. Volume Kubus"
        />
        
        <Par text="Masukan jumlah kubus satuan:" />
        <InputSubmit answerKey="27" />

        <Par text="Setelah menghitung dengan bantuan Augmented Reality, tentu kamu sudah tahu jumlah kubus satuan yang menyusun rubik. Selanjutnya, tanpa bantuan animasi, hitunglah jumlah kubus satuan pada Objek 2 berikut!" />
        <InputSubmit answerKey="8" />
        
        <Simulasi
          urlAR="https://mywebar.com/p/objek2kubus"
          model3D={urlAnim + 'kubus2x2.glb'}
          scale={1.2}
          nama="Objek 2. Kubus"
          buttonActive={false}
          buttonSwitch={false}
        />

        <Par text="Setelah kamu berhasil menghitung jumlah kubus dengan bantuan animasi, sekarang coba hitung jumlah kubus satuan penyusun kubus pada Gambar 2." />
        <InputSubmit answerKey="64" />
        <Image src={Images[1].src} nama={Images[1].nama} />
        
        <Par text="Dari perhitungan yang telah kamu lakukan, dapat disimpulkan bahwa kubus yang tersusun dari 27 kubus satuan memiliki volume sebesar 27 satuan kubik. Sementara itu, kubus yang tersusun dari 64 kubus satuan memiliki volume sebesar 64 satuan kubik." />
        
        <Par text="Sebelumnya, kamu telah menggunakan satuan kubik untuk menyatakan volume. Sekarang, bagaimana jika kubus satuan penyusun kubus memiliki panjang rusuk 1 cm, seperti yang terlihat pada Gambar 3." />
        <Image src="1cm3.png" nama="Gambar 3. Kubus" scale={0.8} />
        
        <Par text="Pada gambar 3, kubus memiliki volume 1 cm<sup>3</sup>. Sedangkan pada gambar 4, kubus memiliki volume 8 cm<sup>3</sup>." />
        <Image src="2cm.png" nama="Gambar 4. Kubus" scale={0.8} />
        
        <Par text="Ukuran rusuk kubus satuan tidak harus 1 cm; bisa juga 1 dm, 1 m, 1 mm, ataupun ukuran lainnya." />

        <Par text="Terdapat cara yang lebih mudah untuk menghitung volume kubus tanpa harus menghitung satu per satu kubus satuannya, yaitu dengan mengalikan banyaknya kubus satuan penyusun rusuk panjang, rusuk lebar, dan rusuk tinggi." />
        <Image src="4x4plt.png" nama="Gambar 5. Kubus" width="300px" />
        
        <Par text="\(p:\) banyaknya kubus satuan yang menyusun rusuk panjang." />
        <Par text="\(l:\) banyaknya kubus satuan yang menyusun rusuk lebar." />
        <Par text="\(t:\) banyaknya kubus satuan yang menyusun rusuk tinggi." />
        <Par text="$$V= p \times l \times t$$" />
        <Par text="$$V= 4 \times 4 \times 4 = 64$$" />

        <Par text="Jadi, volume kubus pada Gambar 5 adalah 64 satuan<sup>3</sup>." />
        <Par text="Pada kubus, banyaknya kubus satuan yang menyusun rusuk panjang, rusuk lebar, dan rusuk tinggi jumlahnya sama, sehingga untuk mempermudah perhitungan digunakanlah rumus berikut:" />
        
        <Par
          text="\(r:\) jumlah kubus satuan penyusun rusuk kubus (panjang, lebar atau tinggi)
        $$V = r \times r \times r$$
        $$V = r^3$$"
        />
        <Image src="4x4rrr.png" nama="Gambar 6. Kubus" width="300px" />
        
        <Par text="Sebagai latihan, hitunglah volume kubus berikut!" />
        <Image src="kubus-9x9x9x.png" scale={1.} />
        <InputSubmit answerKey="729" />
      </div>
      <NavFooter prev="/home" next="/volume-2" />
    </>
  );
};

export default Volume;
