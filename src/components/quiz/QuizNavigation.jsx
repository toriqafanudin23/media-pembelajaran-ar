/**
 * Quiz navigation buttons component
 * @param {Object} props
 * @param {boolean} props.isFirst - Whether this is the first question
 * @param {boolean} props.isLast - Whether this is the last question
 * @param {Function} props.onPrevious - Callback for previous button
 * @param {Function} props.onNext - Callback for next button
 */
const QuizNavigation = ({ isFirst, isLast, onPrevious, onNext }) => {
  return (
    <div className="flex gap-2 sm:gap-3 mt-6 pt-4 border-t border-slate-200">
      <button
        onClick={onPrevious}
        disabled={isFirst}
        className="flex-1 px-3 py-2 text-sm sm:text-base bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        ← Sebelumnya
      </button>
      <button
        onClick={onNext}
        disabled={isLast}
        className="flex-1 px-3 py-2 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        Selanjutnya →
      </button>
    </div>
  );
};

export default QuizNavigation;
