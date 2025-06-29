import InputSubmitSatuan from './InputSubmitSatuan';

const SoalSimpel = ({ no, soal, answerKey, satuan }) => {
  const url = import.meta.env.VITE_URL + 'soal/';
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
          {satuan}
          <img
            src={url + soal}
            alt={`Soal ${no}`}
            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Input */}
        <InputSubmitSatuan answerKey={answerKey} />
      </div>
    </div>
  );
};

export default SoalSimpel;
