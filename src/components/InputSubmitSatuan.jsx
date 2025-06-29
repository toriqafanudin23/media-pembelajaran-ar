import { useState, useEffect } from 'react';

const InputSubmitSatuan = ({ answerKey }) => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState(null);

  const urlSound = import.meta.env.VITE_URL_SOUND;
  const urlIcon = import.meta.env.VITE_URL_ICON;

  const handleSubmit = (e) => {
    e.preventDefault();

    const soundBenar = `${urlSound}benar.mp3`;
    const soundSalah = `${urlSound}touch.mp3`;

    if (inputValue.trim().toLowerCase() === answerKey.trim().toLowerCase()) {
      new Audio(soundBenar).play();
      setStatus('benar');
    } else {
      new Audio(soundSalah).play();
      setStatus('salah');
    }
  };

  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, [answerKey]);

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col mt-2 w-full">
        <div className="flex gap-2 w-full">
          <div className="flex flex-row items-center border-2 border-slate-600 rounded-xl overflow-hidden bg-white">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="px-3 py-2 text-gray-800 focus:outline-none placeholder:text-sm w-32"
              placeholder="Jawab..."
            />
            <span className="px-2 py-2 text-slate-600 border-l border-slate-400">
              {'\\( \\text{cm}^3 \\)'}
            </span>
          </div>
          <button
            type="submit"
            className="p-2 rounded-xl shadow transition bg-slate-400 hover:bg-slate-900"
          >
            <img src={`${urlIcon}cek.png`} alt="Submit" className="w-6 h-6" />
          </button>
        </div>

        {status === 'benar' && (
          <p className="text-sky-500 font-semibold text-sm mt-2">Benar!</p>
        )}
        {status === 'salah' && (
          <p className="text-pink-500 font-semibold text-sm mt-2">Salah!</p>
        )}
      </form>
    </div>
  );
};

export default InputSubmitSatuan;
