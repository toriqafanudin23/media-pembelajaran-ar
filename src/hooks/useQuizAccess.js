import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Custom hook for managing quiz access control
 * Redirects to access page if user doesn't have valid access
 */
export const useQuizAccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hasAccess = sessionStorage.getItem('quizAccess');
    if (!hasAccess || hasAccess !== 'granted') {
      navigate('/quiz-access');
    }
  }, [navigate]);

  const revokeAccess = () => {
    sessionStorage.removeItem('quizAccess');
  };

  const grantAccess = () => {
    sessionStorage.setItem('quizAccess', 'granted');
  };

  return { revokeAccess, grantAccess };
};
