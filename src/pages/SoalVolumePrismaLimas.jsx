import Navigasi from "../components/layout/Navigasi"
import NavFooter from "../components/layout/NavFooter"
import { Ha2, Ha3, Par } from "../components/ui/Text"
import Image from "../components/ui/Image"
import InputSubmit from "../components/ui/InputSubmit"

const SoalVolumePrismaLimas = () => {
    return (
        <>
            <div className="min-h-screen bg-white px-6 py-20 pb-24 inter-primary text-slate-800 sm:max-w-xl mx-auto">
                <Navigasi pageNumber="6" />
                <Ha2 text="Latihan Soal" />
                <Ha3 text="Soal 1" />
                <Par text="Sebuah kolam renang memiliki kedalaman maksimal 5 m dan kedalaman minimal 3 m. Lebar kolam renang tersebut 10 m dan panjangnya 30 m. Berapakah volume maksimum air yang dapat ditampung kolam renang tersebut?" />
                <Image src='kolam-renang.png' width="300px" scale={1} />
                <InputSubmit answerKey='1200' satuan="text{m}^3" />


                <Ha3 text="Soal 2" />
                <Par text="Dari gambar berikut menunjukan piramida berbentuk limas dengan alas berbentuk persegi yang panjang sisi-sisinya 230 m dan tingginya 146 m. Hitunglah volume piramida tersebut!" />
                <Image src='piramida.png' width="300px" scale={1} />

                <InputSubmit answerKey='2574466,66' satuan="text{m}^3" />



                <Ha3 text="Soal 3" />
                <Par text="Alas sebuah limas berbentuk belah ketupat dengan panjang diagonal-diagonalnya masing-masing 10 cm dan 15 cm. Tinggi limas adalah 18 cm. Jika kedua diagonal alas dan tinggi limas diperbesar 3 kali, tentukan perbandingan volume limas sebelum dan sesudah diperbesar!" />
                <Image src='limas-tinggi-18-cm.png' width="350px" scale={1.2} />
                <InputSubmit answerKey='1:26,9' placeholder="contoh 1:28" />


            </div>
            <NavFooter prev="/volume-limas" next="/home" />
        </>
    )
}

export default SoalVolumePrismaLimas
