import { Ha2 } from '../ui/Text';
import UnitDisplay from '../ui/UnitDisplay';

/**
 * Quiz question display component
 * @param {Object} props
 * @param {Object} props.question - Question object
 * @param {number} props.questionNumber - Question number (1-based)
 * @param {number} props.totalQuestions - Total number of questions
 * @param {number} props.answeredCount - Number of answered questions
 * @param {string} props.userAnswer - User's current answer
 * @param {Function} props.onAnswerChange - Callback for answer change
 * @param {Object} props.inputRef - Ref for input element
 */
const QuizQuestion = ({
  question,
  questionNumber,
  totalQuestions,
  answeredCount,
  userAnswer,
  onAnswerChange,
  inputRef
}) => {
  const QuestionComponent = question.component;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-purple-100 animate-fade-in">
      {/* Question Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
        <Ha2 text={`Soal ${questionNumber}`} />
        <div className="text-xs sm:text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
          {answeredCount} / {totalQuestions}
        </div>
      </div>

      {/* Question Content */}
      <div className="mb-6">
        <QuestionComponent />
      </div>

      {/* Answer Input */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-200">
        <label className="block text-sm font-bold text-slate-700 mb-3">Jawaban Kamu:</label>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={userAnswer || ''}
            onChange={(e) => onAnswerChange(question.id, e.target.value)}
            className="w-full sm:flex-1 px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 text-lg font-semibold"
            placeholder="Masukkan jawaban..."
          />
          {question.unit && <UnitDisplay unit={question.unit} />}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
