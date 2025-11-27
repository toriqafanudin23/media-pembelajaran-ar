import { useMathJax } from '../../hooks/useMathJax';

/**
 * Unit display component for LaTeX units
 * @param {Object} props
 * @param {string} props.text - Unit text
 * @param {string} props.positionClass - Additional CSS classes for positioning
 */
export const Satuan = ({ text, positionClass }) => {
  useMathJax([text]);

  return (
    <span className={`text-slate-600 text-sm ${positionClass}`}>
      {`\\( \\text{${text}} \\)`}
    </span>
  );
};
