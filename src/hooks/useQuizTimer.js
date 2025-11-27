import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for managing quiz timer
 * @param {number} initialTime - Initial time in seconds
 * @param {Function} onTimeUp - Callback when time runs out
 * @returns {Object} Timer state and controls
 */
export const useQuizTimer = (initialTime, onTimeUp) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) {
      if (timeLeft <= 0 && onTimeUp) {
        onTimeUp();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isActive, onTimeUp]);

  const pause = useCallback(() => setIsActive(false), []);
  const resume = useCallback(() => setIsActive(true), []);
  const reset = useCallback(() => {
    setTimeLeft(initialTime);
    setIsActive(true);
  }, [initialTime]);

  return {
    timeLeft,
    isActive,
    pause,
    resume,
    reset,
  };
};
