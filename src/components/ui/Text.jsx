import { useEffect } from 'react';
import { useMathJax } from '../../hooks/useMathJax';
import Image from './Image';

/**
 * Paragraph component with LaTeX support
 * @param {Object} props
 * @param {string} props.text - Text content (can include HTML and LaTeX)
 */
export const Par = ({ text = '' }) => {
  useMathJax([text]);

  return (
    <p
      className="text-sm sm:text-base leading-relaxed text-slate-700 text-justify mt-3 mb-2"
      dangerouslySetInnerHTML={{ __html: text }}
    ></p>
  );
};

/**
 * Paragraph component for questions with solutions
 * @param {Object} props
 * @param {string} props.text - Question text
 * @param {string} props.no - Question number
 * @param {React.ReactNode} props.latex - LaTeX content
 * @param {string} props.text2 - Additional text after solution
 * @param {string} props.src - Image source
 * @param {string} props.nama - Image name/caption
 * @param {string} props.width - Image width
 * @param {boolean} props.imgAktif - Whether to show image
 */
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
  useMathJax([text]);

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

/**
 * Paragraph component specifically for LaTeX content
 * @param {Object} props
 * @param {React.ReactNode} props.text - LaTeX content
 */
export const ParLatex = ({ text }) => {
  useMathJax([text]);

  return (
    <p className="leading-relaxed text-slate-700 text-justify mt-4 text-xs sm:text-sm">
      {text}
    </p>
  );
};

/**
 * Heading 1 component
 * @param {Object} props
 * @param {string} props.text - Heading text
 */
export const Ha1 = ({ text }) => {
  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center leading-tight">
      {text}
    </h1>
  );
};

/**
 * Heading 2 component
 * @param {Object} props
 * @param {string} props.text - Heading text
 */
export const Ha2 = ({ text }) => {
  return <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mt-6 mb-3">{text}</h2>;
};

/**
 * Heading 3 component
 * @param {Object} props
 * @param {string} props.text - Heading text
 */
export const Ha3 = ({ text }) => {
  return <h2 className="text-lg sm:text-xl font-semibold text-slate-600 mt-6 mb-2">{text}</h2>;
};