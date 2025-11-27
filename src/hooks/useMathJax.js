import { useEffect } from 'react';

/**
 * Custom hook for triggering MathJax typesetting
 * @param {Array} dependencies - Dependencies to trigger re-typesetting
 */
export const useMathJax = (dependencies = []) => {
  useEffect(() => {
    const timeout = requestAnimationFrame(() => {
      if (window.MathJax?.typesetPromise) {
        window.MathJax.typesetPromise().catch(() => {});
      }
    });
    
    return () => cancelAnimationFrame(timeout);
  }, dependencies);
};
