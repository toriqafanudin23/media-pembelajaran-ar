import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const urlIcon = import.meta.env.VITE_URL_ICON;

// ---------- Model Component ----------
const Model = ({ model3D, isPlaying, playDirection, scale }) => {
  const gltf = useGLTF(model3D);
  const mixer = useRef();
  const actions = useRef([]);

  useEffect(() => {
    if (gltf.animations.length && gltf.scene) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);
      actions.current = gltf.animations.map((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play();
        return action;
      });
    }
  }, [gltf]);

  useEffect(() => {
    if (actions.current.length > 0) {
      actions.current.forEach((action) => {
        action.timeScale = playDirection * 0.5;
      });
    }
  }, [playDirection]);

  useFrame((_, delta) => {
    if (isPlaying) {
      mixer.current?.update(delta);
    }
  });

  return <primitive object={gltf.scene} scale={scale} position={[0, -2, 0]} />;
};

// ---------- Common Styles ----------
const containerClass = `
  relative w-full h-[450px]
  border-2 border-slate-400
  rounded-xl mt-2
  overflow-hidden shadow
`;

// ---------- Simulasi3D Component ----------
const Simulasi3D = ({ model3D, scale, buttonActive }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playDirection, setPlayDirection] = useState(1);

  const handlePlay = () => {
    setPlayDirection(1);
    setIsPlaying(true);
  };

  const handleReverse = () => {
    setPlayDirection(-1);
    setIsPlaying(true);
  };

  const handleStop = () => {
    setIsPlaying(false);
  };

  const iconStart = urlIcon + 'start.png';
  const iconStop = urlIcon + 'stop.png';

  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [6, 6, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={3} />
        <OrbitControls />
        <Model
          model3D={model3D}
          isPlaying={isPlaying}
          playDirection={playDirection}
          scale={scale}
        />
      </Canvas>

      {/* Group Tombol */}
      {buttonActive && (
        <div className="absolute bottom-3 left-3 flex gap-2 z-10">
          {/* Reverse Button */}
          <button
            onClick={handleReverse}
            className="
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
            "
          >
            <img
              src={iconStart}
              alt="Reverse"
              className="w-8 h-8 transform rotate-180"
            />
          </button>

          {/* Stop Button */}
          <button
            onClick={handleStop}
            className="
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
            "
          >
            <img src={iconStop} alt="Stop" className="w-8 h-8" />
          </button>

          {/* Play Button */}
          <button
            onClick={handlePlay}
            className="
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
            "
          >
            <img src={iconStart} alt="Play" className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
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

// ---------- ViewerSwitcher Component ----------
const Simulasi = ({
  urlAR,
  model3D,
  scale,
  nama,
  buttonActive = true,
  buttonSwitch = true,
}) => {
  const [mode, setMode] = useState('3D');

  const handleSwitch = () => {
    setMode((prev) => (prev === '3D' ? 'AR' : '3D'));
  };

  const buttonIcon =
    mode === '3D' ? urlIcon + 'buttonAR.png' : urlIcon + 'button3D.png';

  return (
    <>
      <div className={containerClass}>
        {mode === '3D' ? (
          <Simulasi3D
            model3D={model3D}
            scale={scale}
            buttonActive={buttonActive}
          />
        ) : (
          <ModeAR urlAR={urlAR} />
        )}

        {/* Button Switch Mode */}
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
      </div>
      <p className="text-center text-sm text-slate-600 font-bold mt-2">
        {nama}
      </p>
    </>
  );
};

export default Simulasi;
