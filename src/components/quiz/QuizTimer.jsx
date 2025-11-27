import { formatTime } from '../../utils/formatters';

/**
 * Quiz timer display component
 * @param {Object} props
 * @param {number} props.timeLeft - Time remaining in seconds
 * @param {number} props.currentQuestion - Current question index (0-based)
 * @param {number} props.totalQuestions - Total number of questions
 * @param {boolean} props.isTimeCritical - Whether time is running low
 * @param {Function} props.onSubmit - Callback for submit button
 * @param {boolean} props.showSubmit - Whether to show submit button
 */
const QuizTimer = ({
  timeLeft,
  currentQuestion,
  totalQuestions,
  isTimeCritical,
  onSubmit,
  showSubmit
}) => {
  return (
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
              Soal <span className="font-bold">{currentQuestion + 1}</span>/{totalQuestions}
            </div>
          </div>
          
          {showSubmit && (
            <button
              onClick={onSubmit}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
            >
              ✓ Selesai
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizTimer;
