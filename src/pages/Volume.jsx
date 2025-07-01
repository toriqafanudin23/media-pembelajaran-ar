import Image from '../components/Image';
import InputSubmit from '../components/InputSubmit';
import NavFooter from '../components/NavFooter';
import Navigasi from '../components/Navigasi';
import Simulasi from '../components/SimulasiAR';
import { Ha1, Ha2, Par, ParLatex } from '../components/Text';

const Volume = () => {
  const urlAnim = import.meta.env.VITE_URL_ANIM;
  return (
    <>
      <div className="min-h-screen bg-white px-6 pt-18 mb-4 inter-primary text-slate-800 sm:w-xl mx-auto">
        <Navigasi />
        <div className="max-w-xl mx-auto">
          <Ha1 text="Volume Bangun Ruang Sisi Datar" />

          <Ha2 text="A. Volume Kubus" />

          <Image src="rubik2.png" nama="Gambar 1. Rubik" />

          <Par text="Pernahkah kamu bermain rubik? Rubik merupakan permainan puzzle warna berbentuk kubus dengan ukuran tertentu. Jika kubus tersusun dari kubus satuan, maka berapakah banyaknya kubus satuan yang menyusun Rubik di atas?" />
          <InputSubmit answerKey="9" />

          <Par text="Untuk membantumu menghitung banyaknya kubus satuan penyusun Rubik pada Gambar 1, perhatikan simulasi berikut." />

          <Simulasi
            urlAR="https://mywebar.com/p/objek1volumekubus"
            model3D={urlAnim + 'kubus-warna-2-anim.glb'}
            scale={0.8}
            nama="Objek 1. Volume Kubus"
          />

          <Par text="Setelah menghitung dengan bantuan Augmented Reality, jumlah kubus satuan penyusun Rubik adalah 9. Selanjutnya, tanpa bantuan animasi, hitunglah jumlah kubus satuan pada Objek 2 berikut!" />
          <InputSubmit answerKey="8" />
          <Simulasi
            urlAR="https://mywebar.com/p/Project_1_w7y625xuc5"
            model3D={urlAnim + 'kubus2x2.glb'}
            scale={1.2}
            nama="Objek 2. Kubus"
            buttonActive={false}
          />

          <Par text="Setelah kamu berhasil menghitung jumlah kubus dengan bantuan animasi, sekarang coba hitung jumlah kubus satuan penyusun kubus pada Gambar 2." />
          <InputSubmit answerKey="64" />
          <Image src="4x4x4.png" nama="Gambar 2. Kubus" />
          <Par text="Dari perhitungan yang telah kamu lakukan, dapat disimpulkan bahwa kubus yang tersusun dari 27 kubus satuan memiliki volume sebesar 27 satuan kubik. Sementara itu, kubus yang tersusun dari 64 kubus satuan memiliki volume sebesar 64 satuan kubik." />
          <Par text="Sebelumnya, kamu telah menggunakan satuan kubik untuk menyatakan volume. Sekarang, bagaimana jika kubus satuan penyusun kubus memiliki panjang rusuk 1 cm, seperti yang terlihat pada Gambar 3." />
          <Image src="1cm3.png" nama="Gambar 3. Kubus" />
          <Par text="Pada gambar 3, kubus memiliki volume 1 cm<sup>3</sup>. Sedangkan pada gambar 4, kubus memiliki volume 8 cm<sup>3</sup>." />
          <Image src="2cm.png" nama="Gambar 4. Kubus" />
          <Par text="Ukuran rusuk kubus satuan tidak harus 1 cm; bisa juga 1 dm, 1 m, 1 mm, ataupun ukuran lainnya." />

          <Par text="Terdapat cara yang lebih mudah untuk menghitung volume kubus tanpa harus menghitung satu per satu kubus satuannya, yaitu dengan mengalikan banyaknya kubus satuan penyusun rusuk panjang, rusuk lebar, dan rusuk tinggi." />
          <Image src="4x4plt.png" nama="Gambar 5. Kubus" width="250px" />
          <div className="mt-4">
            <ParLatex
              text={
                <>
                  {'\\( p \\)'}: Banyaknya kubus satuan yang menyusun rusuk
                  panjang.
                </>
              }
            />
            <ParLatex
              text={
                <>
                  {'\\( l \\)'}: Banyaknya kubus satuan yang menyusun rusuk
                  lebar.
                </>
              }
            />
            <ParLatex
              text={
                <>
                  {'\\( t \\)'}: Banyaknya kubus satuan yang menyusun rusuk
                  tinggi.
                </>
              }
            />
          </div>
          <ParLatex text={<>$$V = p \times l \times t$$</>} />
          <ParLatex text={<>$$V = 4 \times 4 \times 4 = 64$$</>} />
          <Par text="Jadi, volume kubus pada Gambar 5 adalah 64 satuan<sup>3</sup>." />
          <Par text="Pada kubus, banyaknya kubus satuan yang menyusun rusuk panjang, rusuk lebar, dan rusuk tinggi jumlahnya sama, sehingga untuk mempermudah perhitungan digunakanlah rumus berikut:" />
        </div>
        <ParLatex
          text={
            <>
              {'\\( r \\)'}: Jumlah kubus satuan penyusun rusuk kubus (panjang,
              lebar atau tinggi).
            </>
          }
        />
        <ParLatex text={<>$$V = r \times r \times r$$</>} />
        <ParLatex text={<>$$V = r^3$$</>} />
        <Image src="4x4rrr.png" nama="Gambar 6. Kubus" width="250px" />
      </div>
      <NavFooter prev="/home" next="/volume-2" />
    </>
  );
};

export default Volume;
