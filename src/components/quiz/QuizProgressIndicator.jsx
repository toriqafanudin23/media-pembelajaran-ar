/**
 * Quiz progress indicator component
 * @param {Object} props
 * @param {Array} props.questions - Array of questions
 * @param {number} props.currentQuestion - Current question index
 * @param {Object} props.userAnswers - User answers object
 */
const QuizProgressIndicator = ({ questions, currentQuestion, userAnswers }) => {
  return (
    <div className="mt-6 flex gap-2 justify-center">
      {questions.map((question, idx) => (
        <div
          key={question.id}
          className={`w-3 h-3 rounded-full transition-all ${
            idx === currentQuestion
              ? 'bg-purple-600 scale-125'
              : userAnswers[question.id]
              ? 'bg-green-500'
              : 'bg-slate-300'
          }`}
        />
      ))}
    </div>
  );
};

export default QuizProgressIndicator;
