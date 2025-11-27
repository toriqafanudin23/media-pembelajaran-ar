import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { QUIZ_QUESTIONS, QUIZ_CONFIG } from "../constants/quiz.jsx";
import { useQuizTimer } from "../hooks/useQuizTimer";
import { useQuizAccess } from "../hooks/useQuizAccess";
import QuizTimer from "../components/quiz/QuizTimer";
import QuizQuestion from "../components/quiz/QuizQuestion";
import QuizNavigation from "../components/quiz/QuizNavigation";
import QuizProgressIndicator from "../components/quiz/QuizProgressIndicator";

/**
 * Main Quiz component
 * Manages quiz state, timer, and navigation
 */
const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRefs = useRef({});

  // Check quiz access
  const { revokeAccess } = useQuizAccess();

  // Handle quiz submission
  const handleSubmit = useCallback(() => {
    // Calculate score
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      const userAnswer = userAnswers[q.id]?.trim().toLowerCase();
      const correctAnswer = q.answer.toLowerCase();
      if (userAnswer === correctAnswer) {
        score++;
      }
    });

    const quizStartTime = parseInt(sessionStorage.getItem('quizStartTime') || Date.now());
    const timeSpent = Math.floor((Date.now() - quizStartTime) / 1000);
    
    setIsSubmitted(true);
    revokeAccess();
    
    navigate('/quiz-result', {
      state: {
        score,
        totalQuestions: QUIZ_QUESTIONS.length,
        answers: userAnswers,
        timeSpent: Math.min(timeSpent, QUIZ_CONFIG.DURATION_SECONDS)
      }
    });
  }, [navigate, userAnswers, revokeAccess]);

  // Timer hook
  const { timeLeft } = useQuizTimer(QUIZ_CONFIG.DURATION_SECONDS, handleSubmit);

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

  // Handle answer change
  const handleAnswerChange = (questionId, value) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  // Navigation handlers
  const handlePrevious = () => setCurrentQuestion(prev => prev - 1);
  const handleNext = () => setCurrentQuestion(prev => prev + 1);

  // Computed values
  const isLast = currentQuestion === QUIZ_QUESTIONS.length - 1;
  const isFirst = currentQuestion === 0;
  const isTimeCritical = timeLeft < QUIZ_CONFIG.TIME_CRITICAL_THRESHOLD;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 px-4 sm:px-6 pt-32 pb-24 inter-primary">
      {/* Timer Bar */}
      <QuizTimer
        timeLeft={timeLeft}
        currentQuestion={currentQuestion}
        totalQuestions={QUIZ_QUESTIONS.length}
        isTimeCritical={isTimeCritical}
        onSubmit={handleSubmit}
        showSubmit={isLast}
      />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto">
        {/* Question Card */}
        <QuizQuestion
          question={QUIZ_QUESTIONS[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={QUIZ_QUESTIONS.length}
          answeredCount={Object.keys(userAnswers).length}
          userAnswer={userAnswers[QUIZ_QUESTIONS[currentQuestion].id]}
          onAnswerChange={handleAnswerChange}
          inputRef={(el) => inputRefs.current[QUIZ_QUESTIONS[currentQuestion].id] = el}
        />

        {/* Navigation Buttons */}
        <QuizNavigation
          isFirst={isFirst}
          isLast={isLast}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />

        {/* Progress Indicator */}
        <QuizProgressIndicator
          questions={QUIZ_QUESTIONS}
          currentQuestion={currentQuestion}
          userAnswers={userAnswers}
        />
      </div>
    </div>
  );
};

export default Quiz;
