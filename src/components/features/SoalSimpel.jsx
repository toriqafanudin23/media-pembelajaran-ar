import Image from '../ui/Image';
import InputSubmit from '../ui/InputSubmit';

const SoalSimpel = ({ no, soal, answerKey }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 max-w-md mx-auto flex items-start gap-4 py-4 pl-4 mt-4">
      {/* Nomor Soal */}
      <div className="flex-shrink-0">
        <p className="text-slate-600">{no}.</p>
      </div>

      {/* Konten Soal (gambar + input) */}
      <div className="flex flex-col gap-4 flex-1 pr-4">
        {/* Gambar Soal */}
        <div className="overflow-hidden border-slate-200 relative">
          <Image src={soal} width="250px" />
        </div>

        {/* Input */}
        <InputSubmit answerKey={answerKey} />
      </div>
    </div>
  );
};

export default SoalSimpel;
