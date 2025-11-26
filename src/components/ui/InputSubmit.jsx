import { useState, useEffect } from 'react';

const InputSubmit = ({ answerKey, placeholder = 'Ketik jawabanmu...', satuan = null }) => {
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

  useEffect(() => {
    if (satuan && window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, [satuan, answerKey]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mt-2 w-full max-w-md">
      <div className="flex items-center gap-2 w-full">
        {satuan ? (
          <div className="flex flex-row items-center border-2 border-slate-300 rounded-xl overflow-hidden bg-white shadow-sm hover:border-blue-400 focus-within:border-blue-500 focus-within:shadow-md transition-all duration-200 flex-1">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="px-4 py-3 text-gray-800 focus:outline-none placeholder:text-sm placeholder:text-slate-400 flex-1 min-w-0"
              placeholder="Jawab..."
            />
            <span className="px-3 py-3 text-slate-600 border-l border-slate-300 bg-slate-50 text-sm">
              {`\\( \\${satuan} \\)`}
            </span>
          </div>
        ) : (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 min-w-0 rounded-xl border-2 border-slate-300 bg-white text-gray-800 px-4 py-3 focus:outline-none focus:border-blue-500 focus:shadow-md hover:border-blue-400 transition-all duration-200 placeholder:text-sm placeholder:text-slate-400 shadow-sm"
            placeholder={placeholder}
          />
        )}
        
        <button
          type="submit"
          className="p-3 rounded-xl shadow-md transition-all duration-200 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:scale-105 active:scale-95 flex-shrink-0"
        >
          <img src={urlIcon + 'cek.png'} alt="Submit" className="w-6 h-6" />
        </button>
      </div>

      {/* Feedback Messages with Animation */}
      <div className="mt-2 min-h-[24px]">
        {status === 'benar' && (
          <div className="flex items-center gap-2 animate-fade-in">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-green-600 font-semibold text-sm">Benar! Luar biasa! 🎉</p>
          </div>
        )}
        {status === 'salah' && (
          <div className="flex items-center gap-2 animate-fade-in">
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p className="text-red-600 font-semibold text-sm">Coba lagi! 💪</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default InputSubmit;

