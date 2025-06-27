import { useEffect } from 'react';

export const Par = ({ text = '' }) => {
  useEffect(() => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, [text]);

  return (
    <p
      className="text-base leading-relaxed text-slate-700 text-justify mt-4 inte"
      dangerouslySetInnerHTML={{ __html: text }}
    ></p>
  );
};

export const ParLatex = ({ text }) => {
  useEffect(() => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, [text]);

  return (
    <p className="text-base leading-relaxed text-slate-700 text-justify">
      {text}
    </p>
  );
};

export const Ha1 = ({ text }) => {
  return (
    <h1 className="text-3xl font-bold text-teal-600 mb-4 text-center">
      {text}
    </h1>
  );
};

export const Ha2 = ({ text }) => {
  return <h2 className="text-2xl font-semibold text-slate-700 mb-2">{text}</h2>;
};
