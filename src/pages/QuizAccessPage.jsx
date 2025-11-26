import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigasi from '../components/layout/Navigasi';

// Valid access codes
const VALID_CODES = {
  'QUIZ2024': 'Kuis Bangun Ruang',
  'MATH123': 'Matematika Dasar',
  'BELAJAR': 'Latihan Soal',
};

const QuizAccessPage = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsValidating(true);

    // Simulate validation delay for better UX
    setTimeout(() => {
      const upperCode = code.trim().toUpperCase();
      
      if (VALID_CODES[upperCode]) {
        // Store quiz session
        sessionStorage.setItem('quizAccess', 'granted');
        sessionStorage.setItem('quizCode', upperCode);
        sessionStorage.setItem('quizName', VALID_CODES[upperCode]);
        sessionStorage.setItem('quizStartTime', Date.now().toString());
        
        // Navigate to quiz
        navigate('/quiz');
      } else {
        setError('Kode tidak valid! Silakan coba lagi.');
        setIsValidating(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 px-4 sm:px-6 pt-20 pb-24 inter-primary">
      <Navigasi />
      
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            Akses Kuis
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Masukkan kode akses untuk memulai kuis
          </p>
        </div>

        {/* Access Code Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-purple-100 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Code Input */}
            <div>
              <label htmlFor="code" className="block text-sm font-bold text-slate-700 mb-2">
                Kode Akses
              </label>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value.toUpperCase());
                  setError('');
                }}
                className="w-full px-4 py-3 text-center text-2xl font-bold tracking-widest border-2 border-slate-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all uppercase placeholder:text-sm placeholder:tracking-normal"
                placeholder="Masukkan kode"
                required
                disabled={isValidating}
                maxLength={20}
              />
              
              {/* Error Message */}
              {error && (
                <div className="mt-3 flex items-center gap-2 text-red-600 text-sm animate-fade-in">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-xs sm:text-sm text-blue-800">
                  <p className="font-semibold mb-1">Petunjuk:</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Dapatkan kode dari guru/pengajar</li>
                    <li>Kuis dibatasi waktu 25 menit</li>
                    <li>Jawaban akan otomatis tersimpan</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isValidating || code.length < 3}
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isValidating ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Memvalidasi...
                </span>
              ) : (
                'Mulai Kuis'
              )}
            </button>
          </form>
        </div>

        {/* Demo Codes (for testing - remove in production) */}
        <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
          <details className="text-xs text-slate-500">
            <summary className="cursor-pointer hover:text-slate-700 transition">Kode Demo (untuk testing)</summary>
            <div className="mt-2 space-y-1 bg-slate-100 rounded-lg p-3">
              {Object.entries(VALID_CODES).map(([code, name]) => (
                <div key={code} className="font-mono">
                  <span className="font-bold">{code}</span> - {name}
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-20 right-10 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl -z-10 animate-fade-in"></div>
      <div className="fixed bottom-20 left-10 w-48 h-48 bg-pink-200/20 rounded-full blur-3xl -z-10 animate-fade-in"></div>
    </div>
  );
};

export default QuizAccessPage;
