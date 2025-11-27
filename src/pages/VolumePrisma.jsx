import NavFooter from '../components/layout/NavFooter';
import Navigasi from '../components/layout/Navigasi';
import { Ha2, Par, ParLatex } from '../components/ui/Text';
import SimulasiStatis from '../components/features/SimulasiStatis';
import Image from '../components/ui/Image';
import InputSubmit from '../components/ui/InputSubmit';

const VolumePrisma = () => {
  const urlAnim = import.meta.env.VITE_URL_ANIM;
  return (
    <>
      <div className="min-h-screen bg-white px-6 py-20 pb-24 inter-primary text-slate-800 sm:max-w-xl mx-auto">
        <Navigasi pageNumber="4" />
        <Ha2 text="C. Volume Prisma" />
        <Par
          text="Sebelumnya kamu sudah belajar cara menghitung volume kubus dan balok. Volume kubus dan balok dapat diartikan sebagai banyaknya kubus satuan yang menyusunnya, dan bisa dihitung dengan
        $$V= p \times l \times t.$$Nah, sekarang bagaimana jika bentuk bangun yang ingin kamu hitung volumenya seperti berikut ini?"
        />

        <SimulasiStatis
          urlAR="https://mywebar.com/p/objek3jenisjenisprisma"
          model3D={urlAnim + 'prisma-segitiga.glb'}
          models={[
            'prisma-segitiga.glb',
            'prisma-segilima.glb',
            'prisma-segienam.glb',
          ]}
          scale={2.8}
          nama="Objek 3. Jenis-jenis Prisma"
          buttonSwitch={false}
        />
        <Image src="prisma-sikusiku.png" scale={1.5} />
        <Image
          src="prisma-segilima-2.png"
          scale={1.5}
          nama="Gambar 9. Contoh prisma"
        />

        <Par text="Bangun di atas disebut prisma. Prisma memiliki alas yang bentuknya beragam, misalnya segitiga, segiempat, segilima, atau bentuk lainnya. Pada prisma, kita tidak bisa lagi menggunakan definisi volume seperti saat menghitung volume kubus satuan, karena prisma tidak dapat sepenuhnya diisi oleh kubus satuan secara sempurna." />

        <Par text="Oleh karena itu, kita perlu menggunakan definisi volume yang lain. Perhatikan ilustrasi berikut. Volume kubus dapat dihitung dengan:" />

        <ParLatex text={<>$$V = r \times r \times r$$</>} />

        <Par text="Sedangkan volume balok dapat dihitung dengan:" />

        <ParLatex text={<>$$V = p \times l \times t$$</>} />

        <Par text="Kedua rumus di atas sebenarnya memiliki pola yang sama, yaitu volume diperoleh dari luas alas dikalikan dengan tinggi bangun. Dengan kata lain:" />

        <Par text="$$V=\text{luas alas} \times \text{tinggi}$$" />
        <Par text="Dengan begitu, untuk prisma yang memiliki berbagai bentuk alas, volumenya dapat dihitung dengan cara mengalikan luas alas dengan tinggi bangun." />
        <Par text="$$V=\text{luas alas} \times \text{tinggi}$$" />

        <Par text="<b>Sebagai contoh</b>, diketahui sebuah prisma ABC.DEF dengan alas berbentuk segitiga siku-siku dan \( \angle \)ABC \(= 90^\circ \). Panjang sisi-sisi alasnya adalah AB = 4 cm, BC = 3 cm, dan AC = 5 cm. Jika tinggi prisma adalah 6 cm, maka berapakah volume prisma tersebut?" />

        <Image
          src="prisma-segitiga-siku-2.png"
          nama="Gambar 10. Prisma segitiga siku-siku"
          width="350px"
        />

        <Par text="Pembahasan:" />
        <Par text="Karena alas prisma berbentuk segitiga siku-siku, maka luas alas dapat dihitung dengan rumus:" />

        <Par text="$$ L = \frac{1}{2} \times \text{alas} \times \text{tinggi} $$" />
        <Par text="$$ L = \frac{1}{2} \times AB \times BC $$" />

        <Par text="Dalam hal ini, alas segitiga diambil sisi AB = 3 cm dan tinggi segitiga diambil sisi BC = 4 cm." />

        <Par text="$$ L = \frac{1}{2} \times 4 \times 3 = 6 \text{ cm}^2 $$" />

        <Par text="Setelah luas alas segitiga diketahui, hitung volume prisma dengan mengalikan luas alas dengan tinggi prisma:" />

        <Par text="$$ V = \text{luas alas} \times \text{tinggi prisma} $$" />

        <Par text="$$ V = 6 \times 6 = 36 \text{ cm}^3 $$" />

        <Par text="Jadi, volume prisma ABC.DEF adalah 36 \(\text{ cm}^3 \)." />
        <Par text="<b>Sebagai latihan</b>, carilah volume prisma dengan alas berbentuk trapesium berikut! Tinggi trapesium adalah 2 cm." />
        <Image
          src="prisma-trapesium-3.png"
          nama="Gambar 11. Prisma trapesium"
          width="330px"
          scale={1.2}
        />
        <div className="flex mx-auto w-full pl-4">
          <InputSubmit answerKey="42" />
        </div>
      </div>
      <NavFooter prev="/volume-3" next="/volume-limas" />
    </>
  );
};

export default VolumePrisma;
