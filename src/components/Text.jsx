import { useEffect } from 'react';
import Image from './Image';

export const Par = ({ text = '' }) => {
  useEffect(() => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, [text]);

  return (
    <p
      className="text-base leading-relaxed text-slate-700 text-justify mt-3 inte"
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
      <p className="mr-2 text-slate-700 w-6">{no}</p>
      <div className="w-full">
        <p
          className="text-base leading-relaxed text-slate-700 text-justify"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {imgAktif && <Image src={src} nama={nama} width={width} />}
        <p>Pembahasan:</p>
        <ParLatex text={latex} />
        <p
          className="text-base leading-relaxed text-slate-700 text-justify"
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
    <p className="leading-relaxed text-slate-700 text-justify mt-4 text-sm">
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
  return <h2 className="text-2xl font-semibold text-slate-700 mt-4">{text}</h2>;
};
