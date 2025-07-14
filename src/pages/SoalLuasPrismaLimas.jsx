import Navigasi from "../components/Navigasi";
import NavFooter from "../components/NavFooter";

const SoalLuasPrismaLimas = () => {
  return (
    <>
      <div className="min-h-screen bg-white px-6 pt-18 mb-4 inter-primary text-slate-800 sm:w-xl mx-auto">
        <Navigasi />
        <p>Soal Luas Prisma Limas</p>
      </div>
      <NavFooter prev="/luas-permukaan-limas" next="/home" />
    </>
  );
};

export default SoalLuasPrismaLimas;
