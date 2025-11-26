import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const QuizResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, totalQuestions, timeSpent } = location.state || {};

  useEffect(() => {
    // Redirect if no results data
    if (!score && score !== 0) {
      navigate('/home');
    }
  }, [score, navigate]);

  if (!score && score !== 0) return null;

  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = percentage >= 60;

  // Format time (seconds to mm:ss)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 px-4 sm:px-6 pt-20 pb-24 inter-primary">
      <div className="max-w-2xl mx-auto">
        {/* Result Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
          {/* Header with color based on result */}
          <div className={`p-8 text-center ${passed ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-orange-500 to-red-600'}`}>
            <div className="inline-block mb-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                {passed ? (
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              {passed ? 'Selamat!' : 'Tetap Semangat!'}
            </h1>
            <p className="text-white/90 text-base sm:text-lg">
              {passed ? 'Kamu berhasil menyelesaikan kuis' : 'Terus belajar dan coba lagi'}
            </p>
          </div>

          {/* Score Display */}
          <div className="p-8">
            {/* Main Score */}
            <div className="text-center mb-8">
              <div className="inline-block">
                <div className="relative">
                  <svg className="w-40 h-40 sm:w-48 sm:h-48" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="8"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={passed ? '#10B981' : '#F59E0B'}
                      strokeWidth="8"
                      strokeDasharray={`${(percentage / 100) * 283} 283`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {percentage}%
                    </span>
                    <span className="text-sm text-slate-500 mt-1">Skor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">{score}</div>
                <div className="text-xs text-slate-600">Jawaban Benar</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-1">{totalQuestions - score}</div>
                <div className="text-xs text-slate-600">Jawaban Salah</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-1">{totalQuestions}</div>
                <div className="text-xs text-slate-600">Total Soal</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 text-center border border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-1">{formatTime(timeSpent)}</div>
                <div className="text-xs text-slate-600">Waktu</div>
              </div>
            </div>

            {/* Performance Message */}
            <div className={`p-4 rounded-xl border-2 mb-6 ${
              percentage >= 80 ? 'bg-green-50 border-green-300' :
              percentage >= 60 ? 'bg-blue-50 border-blue-300' :
              'bg-orange-50 border-orange-300'
            }`}>
              <p className={`text-sm text-center font-semibold ${
                percentage >= 80 ? 'text-green-700' :
                percentage >= 60 ? 'text-blue-700' :
                'text-orange-700'
              }`}>
                {percentage >= 80 ? '🎉 Luar biasa! Kamu menguasai materi dengan sangat baik!' :
                 percentage >= 60 ? '👍 Bagus! Kamu sudah memahami sebagian besar materi!' :
                 '💪 Jangan menyerah! Pelajari lagi materinya dan coba sekali lagi!'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate('/home')}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Kembali ke Home
              </button>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-6 bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center text-sm text-slate-600">
          <p>💡 <span className="font-semibold">Tips:</span> Pelajari kembali materi yang belum dikuasai untuk hasil yang lebih baik!</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-20 right-10 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-20 left-10 w-48 h-48 bg-indigo-200/20 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default QuizResult;
