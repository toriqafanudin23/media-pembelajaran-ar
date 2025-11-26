import { useEffect, useLayoutEffect } from 'react';
import Image from './Image';

export const Par = ({ text = '' }) => {
  useLayoutEffect(() => {
    // Use requestAnimationFrame untuk ensure DOM updated
    const timeout = requestAnimationFrame(() => {
      if (window.MathJax?.typesetPromise) {
        window.MathJax.typesetPromise().catch(() => {});
      }
    });
    return () => cancelAnimationFrame(timeout);
  }, [text]);

  return (
    <p
      className="text-sm sm:text-base leading-relaxed text-slate-700 text-justify mt-3 mb-2"
      dangerouslySetInnerHTML={{ __html: text }}
    ></p>
  );
};

export const ParSoal = ({
  text = '',
  no = '',
  latex,
  text2 = '',
  src,
  nama,
  width,
  imgAktif = false,
}) => {
  useEffect(() => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, [text]);

  return (
    <div className="flex flex-row mt-4">
      <p className="mr-2 text-slate-700 w-6 text-sm sm:text-base">{no}</p>
      <div className="w-full">
        <p
          className="text-sm sm:text-base leading-relaxed text-slate-700 text-justify"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {imgAktif && <Image src={src} nama={nama} width={width} />}
        <p className="font-semibold mt-2 text-sm sm:text-base">Pembahasan:</p>
        <ParLatex text={latex} />
        <p
          className="text-sm sm:text-base leading-relaxed text-slate-700 text-justify"
          dangerouslySetInnerHTML={{ __html: text2 }}
        />
      </div>
    </div>
  );
};

export const ParLatex = ({ text }) => {
  useEffect(() => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, [text]);

  return (
    <p className="leading-relaxed text-slate-700 text-justify mt-4 text-xs sm:text-sm">
      {text}
    </p>
  );
};

export const Ha1 = ({ text }) => {
  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center leading-tight">
      {text}
    </h1>
  );
};

export const Ha2 = ({ text }) => {
  return <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mt-6 mb-3">{text}</h2>;
};

export const Ha3 = ({ text }) => {
  return <h2 className="text-lg sm:text-xl font-semibold text-slate-600 mt-6 mb-2">{text}</h2>;
};