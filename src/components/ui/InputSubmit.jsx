import { useState } from 'react';
import { useMathJax } from '../../hooks/useMathJax';
import { playCorrectSound, playWrongSound } from '../../utils/audio';
import { ICONS } from '../../constants/urls';

/**
 * Input component with submit button for quiz answers
 * @param {Object} props
 * @param {string} props.answerKey - Correct answer
 * @param {string} props.placeholder - Input placeholder text
 * @param {string} props.satuan - LaTeX unit notation (optional)
 */
const InputSubmit = ({ answerKey, placeholder = 'Ketik jawabanmu...', satuan = null }) => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState(null);

  useMathJax([satuan, answerKey]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isCorrect = inputValue.trim().toLowerCase() === answerKey.trim().toLowerCase();
    
    if (isCorrect) {
      playCorrectSound();
      setStatus('benar');
    } else {
      playWrongSound();
      setStatus('salah');
    }
  };

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
          <img src={ICONS.CHECK} alt="Submit" className="w-6 h-6" />
        </button>
      </div>

      {/* Feedback Messages */}
      <FeedbackMessage status={status} />
    </form>
  );
};

/**
 * Feedback message component
 * @param {Object} props
 * @param {string} props.status - Status ('benar' or 'salah')
 */
const FeedbackMessage = ({ status }) => {
  if (!status) {
    return <div className="mt-2 min-h-[24px]"></div>;
  }

  const isCorrect = status === 'benar';
  const bgColor = isCorrect ? 'bg-green-500' : 'bg-red-500';
  const textColor = isCorrect ? 'text-green-600' : 'text-red-600';
  const message = isCorrect ? 'Benar! Luar biasa! 🎉' : 'Coba lagi! 💪';
  const icon = isCorrect ? (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  ) : (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
  );

  return (
    <div className="mt-2 min-h-[24px]">
      <div className="flex items-center gap-2 animate-fade-in">
        <div className={`w-5 h-5 rounded-full ${bgColor} flex items-center justify-center`}>
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
        <p className={`${textColor} font-semibold text-sm`}>{message}</p>
      </div>
    </div>
  );
};

export default InputSubmit;
