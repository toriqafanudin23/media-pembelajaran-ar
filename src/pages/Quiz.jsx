import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Simulasi from "../components/features/SimulasiAR";
import { Ha2, Par } from "../components/ui/Text";
import Image from "../components/ui/Image";

// Quiz questions with correct answers
const QUESTIONS = [
  {
    id: 1,
    component: () => {
      const urlAnim = import.meta.env.VITE_URL_ANIM;
      return (
        <div className="space-y-4">
          <Par text="Sebuah balok memiliki alas berbentuk persegi dengan ukuran \(6 \times 6\) satuan, dan tingginya \(3\) satuan. Di dalam balok itu ada rongga berbentuk limas segiempat beraturan, dengan puncaknya tepat di tengah alas balok. Berapa sisa volume balok setelah dikurangi volume rongga tersebut?" />
          <Simulasi
            urlAR="https://mywebar.com/p/objek6jaringjaringkubus"
            model3D={urlAnim + "dua-per-tiga-balok.glb"}
            buttonActive={false}
            buttonSwitch={false}
            scale={1.5}
          />
        </div>
      );
    },
    answer: "72",
    unit: "text{satuan}^3"
  },
  {
    id: 2,
    component: () => (
      <div className="space-y-4">
        <Par text="Andi memiliki bak mandi berukuran \(1 \text{ m} \times 1{,}5 \text{ m} \times 80 \text{ cm}\). Sebelum mandi, \( \frac{1}{4} \) bagian bak sudah terisi air. Jika Andi menghidupkan kran air dengan debit \(0{,}5\) liter per detik, berapa lama Andi harus menunggu sampai bak mandi penuh?" />
        <Image src="bak-mandi.png" width="300px" />
      </div>
    ),
    answer: "30",
    unit: "text{menit}"
  },
  {
    id: 3,
    component: () => (
      <div className="space-y-4">
        <Par text="Lukman adalah seorang kakak yang baik. Tiga hari lagi, adiknya akan berulang tahun. Lukman berencana membuat topi ulang tahun untuk para tamu undangan dengan bentuk limas segiempat, seperti pada gambar. Jika adik Lukman mengundang 15 orang, dan kertas karton di pasar dijual dengan ukuran \(1 \text{ m} \times 1 \text{ m}\) seharga Rp5.000, berapakah biaya yang dibutuhkan untuk membuat topi untuk semua tamu?" />
        <Image src="soal-quiz-limas.png" width="300px" />
      </div>
    ),
    answer: "10000",
    unit: "text{rupiah}"
  },
  {
    id: 4,
    component: () => (
      <div className="space-y-4">
        <Par text="Diketahui sebuah prisma \(ABCD.EFGH\) dengan alas berbentuk trapesium sama kaki. Panjang \(AB = 4\,\text{cm}\), \(CD = 7\,\text{cm}\), \(BC = 2,5\,\text{cm}\), dan tinggi prisma \(6\,\text{cm}\). Hitunglah luas permukaan prisma tersebut!" />
        <Image src="soal-prisma-trapesium.png" scale={0.65} />
      </div>
    ),
    answer: "99",
    unit: "text{cm}^2"
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRefs = useRef({});

  // Check quiz access on mount
  useEffect(() => {
    const hasAccess = sessionStorage.getItem('quizAccess');
    if (!hasAccess || hasAccess !== 'granted') {
      navigate('/quiz-access');
    }
  }, [navigate]);

  // Prevent navigation away
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isSubmitted) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isSubmitted]);

  // Trigger MathJax for LaTeX rendering - removed, Par component now handles it
  // The Par component in unit display will trigger MathJax when text changes

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle submit - define BEFORE timer useEffect
  const handleSubmit = useCallback(() => {
    // Calculate score inline
    let score = 0;
    QUESTIONS.forEach((q) => {
      const userAnswer = userAnswers[q.id]?.trim().toLowerCase();
      const correctAnswer = q.answer.toLowerCase();
      if (userAnswer === correctAnswer) {
        score++;
      }
    });

    const quizStartTime = parseInt(sessionStorage.getItem('quizStartTime') || Date.now());
    const timeSpent = Math.floor((Date.now() - quizStartTime) / 1000);
    
    setIsSubmitted(true);
    sessionStorage.removeItem('quizAccess');
    
    navigate('/quiz-result', {
      state: {
        score,
        totalQuestions: QUESTIONS.length,
        answers: userAnswers,
        timeSpent: Math.min(timeSpent, 1500)
      }
    });
  }, [navigate, userAnswers]);

  // Timer countdown - AFTER handleSubmit definition
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) {
      if (timeLeft <= 0 && !isSubmitted) {
        handleSubmit();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted, handleSubmit]);

  // Handle answer change
  const handleAnswerChange = (questionId, value) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const CurrentQuestionComponent = QUESTIONS[currentQuestion].component;
  const isLast = currentQuestion === QUESTIONS.length - 1;
  const isFirst = currentQuestion === 0;
  const isTimeCritical = timeLeft < 300; // Less than 5 minutes

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 px-4 sm:px-6 pt-32 pb-24 inter-primary">
      {/* Fixed Timer Bar - Always stays at top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-slate-200">
        {/* Navigasi placeholder untuk spacing */}
        <div className="h-16"></div>
        
        {/* Timer content */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b-2 border-purple-200">
          <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className={`px-3 py-1.5 rounded-lg font-bold text-xs sm:text-sm ${
                isTimeCritical ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-blue-100 text-blue-700'
              }`}>
                ⏱️ {formatTime(timeLeft)}
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                Soal <span className="font-bold">{currentQuestion + 1}</span>/{QUESTIONS.length}
              </div>
            </div>
            
            {isLast && (
              <button
                onClick={handleSubmit}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
              >
                ✓ Selesai
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto">
        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-purple-100 animate-fade-in">
          {/* Question Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
            <Ha2 text={`Soal ${currentQuestion + 1}`} />
            <div className="text-xs sm:text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
              {Object.keys(userAnswers).length} / {QUESTIONS.length}
            </div>
          </div>

          {/* Question Content */}
          <div className="mb-6">
            <CurrentQuestionComponent />
          </div>

          {/* Answer Input */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-200">
            <label className="block text-sm font-bold text-slate-700 mb-3">Jawaban Kamu:</label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <input
                ref={(el) => inputRefs.current[QUESTIONS[currentQuestion].id] = el}
                type="text"
                value={userAnswers[QUESTIONS[currentQuestion].id] || ''}
                onChange={(e) => handleAnswerChange(QUESTIONS[currentQuestion].id, e.target.value)}
                className="w-full sm:flex-1 px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 text-lg font-semibold"
                placeholder="Masukkan jawaban..."
              />
              {QUESTIONS[currentQuestion].unit && (
                <div className="w-full sm:w-auto px-4 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-600 text-center sm:min-w-[100px]">
                  <Par text={`$$${QUESTIONS[currentQuestion].unit.replace(/text/g, '\\text')}$$`} />
                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons - Smaller size */}
          <div className="flex gap-2 sm:gap-3 mt-6 pt-4 border-t border-slate-200">
            <button
              onClick={() => setCurrentQuestion(prev => prev - 1)}
              disabled={isFirst}
              className="flex-1 px-3 py-2 text-sm sm:text-base bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              ← Sebelumnya
            </button>
            <button
              onClick={() => setCurrentQuestion(prev => prev + 1)}
              disabled={isLast}
              className="flex-1 px-3 py-2 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Selanjutnya →
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex gap-2 justify-center">
          {QUESTIONS.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentQuestion
                  ? 'bg-purple-600 scale-125'
                  : userAnswers[QUESTIONS[idx].id]
                  ? 'bg-green-500'
                  : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
