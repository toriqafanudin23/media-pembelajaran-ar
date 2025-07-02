import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useState } from 'react';

const urlIcon = import.meta.env.VITE_URL_ICON;

// ---------- Model Component ----------
const Model = ({ model3D, scale }) => {
  const gltf = useGLTF(model3D);
  return <primitive object={gltf.scene} scale={scale} position={[0, -2, 0]} />;
};

// ---------- ModeAR Component ----------
const ModeAR = ({ urlAR }) => {
  return (
    <iframe
      src={urlAR}
      className="w-full h-full border-none"
      allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; microphone"
      title="WebAR Viewer"
    ></iframe>
  );
};

// ---------- Common Styles ----------
const containerClass = `
  relative w-full h-[450px]
  border-2 border-slate-400
  rounded-xl mt-2
  overflow-hidden shadow
`;

// ---------- SimulasiStatis Component ----------
const SimulasiStatis = ({
  urlAR,
  model3D,
  scale,
  nama,
  models,
  buttonSwitch = true,
}) => {
  const baseUrl = import.meta.env.VITE_URL_ANIM;
  const [currentIndex, setCurrentIndex] = useState(
    models.findIndex((m) => model3D?.includes(m)) || 0
  );

  const [mode, setMode] = useState('3D');

  const handleSwitch = () => {
    setMode((prev) => (prev === '3D' ? 'AR' : '3D'));
  };

  const handleNextModel = () => {
    setCurrentIndex((prev) => (prev + 1) % models.length);
  };

  const currentModelUrl = baseUrl + models[currentIndex];

  const buttonIcon =
    mode === '3D' ? urlIcon + 'buttonAR.png' : urlIcon + 'button3D.png';

  const iconNext = urlIcon + 'next.png';

  return (
    <>
      <div className={containerClass}>
        {mode === '3D' ? (
          <Canvas camera={{ position: [6, 6, 6] }}>
            <ambientLight intensity={3} />
            <hemisphereLight
              intensity={3}
              skyColor={0xffffff}
              groundColor={0xffffff}
            />
            <OrbitControls />
            <Model model3D={currentModelUrl} scale={scale} />
          </Canvas>
        ) : (
          <ModeAR urlAR={urlAR} />
        )}
        (
        {buttonSwitch && (
          <button
            onClick={handleSwitch}
            className="
            absolute bottom-3 right-3
            bg-slate-800/60 backdrop-blur
            border border-teal-400/50
            p-2
            rounded-md
            shadow-md
            hover:scale-105
            hover:bg-slate-700/60
            hover:border-teal-300
            hover:shadow-lg
            transition
            z-10
          "
          >
            <img src={buttonIcon} alt="Switch Mode" className="w-8 h-8" />
          </button>
        )}
        )
        <button
          onClick={handleNextModel}
          className="
            absolute bottom-3 left-3
            bg-slate-800/60 backdrop-blur
            border border-teal-400/50
            p-2
            rounded-md
            shadow-md
            hover:scale-105
            hover:bg-slate-700/60
            hover:border-teal-300
            hover:shadow-lg
            transition
            z-10
          "
        >
          <img src={iconNext} alt="Next Model" className="w-8 h-8" />
        </button>
      </div>
      <p className="text-center text-sm text-slate-600 font-bold mt-2">
        {nama}
      </p>
    </>
  );
};

export default SimulasiStatis;
