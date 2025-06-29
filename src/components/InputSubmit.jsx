import { useState } from 'react';

const InputSubmit = ({ answerKey }) => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState(null);
  const urlSound = import.meta.env.VITE_URL_SOUND;
  const urlIcon = import.meta.env.VITE_URL_ICON;

  const handleSubmit = (e) => {
    e.preventDefault();

    const soundBenar = urlSound + 'benar.mp3';
    const soundSalah = urlSound + 'touch.mp3';

    if (inputValue.trim().toLowerCase() === answerKey.trim().toLowerCase()) {
      new Audio(soundBenar).play();
      setStatus('benar');
    } else {
      new Audio(soundSalah).play();
      setStatus('salah');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-2">
      <div className="flex flex-wrap items-center gap-2 w-60">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 min-w-0 rounded-xl border-2 border-slate-600 bg-white text-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-sm w-32"
          placeholder="Ketik jawabanmu..."
        />
        <button
          type="submit"
          className="p-2 rounded-xl shadow transition bg-slate-400 hover:bg-slate-900"
        >
          <img src={urlIcon + 'cek.png'} alt="Submit" className="w-6 h-6" />
        </button>
      </div>

      {status === 'benar' && (
        <p className="text-sky-500 font-semibold text-sm mt-2">Benar!</p>
      )}
      {status === 'salah' && (
        <p className="text-pink-500 font-semibold text-sm mt-2">Salah!</p>
      )}
    </form>
  );
};

export default InputSubmit;
