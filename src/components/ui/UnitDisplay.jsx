import { useMathJax } from '../../hooks/useMathJax';

/**
 * Component for rendering LaTeX units in quiz answers
 * @param {Object} props
 * @param {string} props.unit - LaTeX unit notation (e.g., "text{cm}^2")
 */
const UnitDisplay = ({ unit }) => {
  useMathJax([unit]);

  return (
    <div className="w-full sm:w-auto px-4 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-600 text-center sm:min-w-[100px]">
      {`\\(${unit}\\)`}
    </div>
  );
};

export default UnitDisplay;
