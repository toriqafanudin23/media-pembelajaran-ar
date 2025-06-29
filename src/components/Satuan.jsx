import { useEffect } from 'react';

export const Satuan = ({ text, positionClass }) => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, [text]);

  return (
    <span className={`text-slate-600 text-sm ${positionClass}`}>
      {`\\( \\text{${text}} \\)`}
    </span>
  );
};
