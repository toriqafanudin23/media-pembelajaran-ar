import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ICONS } from "../../constants/urls";

/**
 * 3D Model component with animation support
 * @param {Object} props
 * @param {string} props.model3D - URL to 3D model file
 * @param {boolean} props.isPlaying - Whether animation is playing
 * @param {number} props.playDirection - Animation direction (1 or -1)
 * @param {number} props.scale - Model scale
 */
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

// Common styles
const containerClass = `
  relative w-full h-[450px]
  border-2 border-slate-400
  rounded-xl mt-2
  overflow-hidden shadow
`;

const buttonClass = `
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
`;

/**
 * 3D Simulation component with playback controls
 * @param {Object} props
 * @param {string} props.model3D - URL to 3D model file
 * @param {number} props.scale - Model scale
 * @param {boolean} props.buttonActive - Whether to show playback controls
 */
const Simulasi3D = ({ model3D, scale, buttonActive, onToggleFullscreen }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playDirection, setPlayDirection] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Listen for fullscreen changes so icon updates correctly
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

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

      {/* Fullscreen Toggle Button for 3D Mode */}
      <button
        onClick={onToggleFullscreen}
        className={`${buttonClass} absolute top-3 right-3 z-10`}
        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
      >
        {isFullscreen ? (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        )}
      </button>

      {/* Playback Controls */}
      {buttonActive && (
        <div className="absolute bottom-3 left-3 flex gap-2 z-10">
          {/* Reverse Button */}
          <button onClick={handleReverse} className={buttonClass}>
            <img
              src={ICONS.START}
              alt="Reverse"
              className="w-8 h-8 transform rotate-180"
            />
          </button>

          {/* Stop Button */}
          <button onClick={handleStop} className={buttonClass}>
            <img src={ICONS.STOP} alt="Stop" className="w-8 h-8" />
          </button>

          {/* Play Button */}
          <button onClick={handlePlay} className={buttonClass}>
            <img src={ICONS.START} alt="Play" className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
};

/**
 * AR Mode component with native fullscreen support
 * @param {Object} props
 * @param {string} props.urlAR - URL to AR experience
 * @param {Function} props.onToggleFullscreen - Callback to toggle fullscreen
 * @param {Object} props.containerRef - Ref to container element
 */
const ModeAR = ({ urlAR, onToggleFullscreen, containerRef }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="w-full h-full relative bg-black">
      <iframe
        src={urlAR}
        className="w-full h-full border-none"
        allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; microphone"
        title="WebAR Viewer"
      ></iframe>

      {/* Fullscreen Toggle Button */}
      <button
        onClick={onToggleFullscreen}
        className={`${buttonClass} absolute top-3 right-3 z-10`}
        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
      >
        {isFullscreen ? (
          // Exit Fullscreen Icon
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Fullscreen Icon
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

/**
 * Main Simulasi component with 3D/AR mode switching and native fullscreen support
 * @param {Object} props
 * @param {string} props.urlAR - URL to AR experience
 * @param {string} props.model3D - URL to 3D model file
 * @param {number} props.scale - Model scale
 * @param {string} props.nama - Display name/caption
 * @param {boolean} props.buttonActive - Whether to show playback controls
 * @param {boolean} props.buttonSwitch - Whether to show mode switch button
 */
const Simulasi = ({
  urlAR,
  model3D,
  scale,
  nama,
  buttonActive = true,
  buttonSwitch = true,
}) => {
  const [mode, setMode] = useState("3D");
  const containerRef = useRef(null);

  const handleSwitch = () => {
    setMode((prev) => (prev === "3D" ? "AR" : "3D"));
  };

  /**
   * Toggle native fullscreen mode
   * Works on mobile and desktop browsers
   */
  const handleToggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        // Enter fullscreen
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        } else if (containerRef.current.webkitRequestFullscreen) {
          // Safari
          await containerRef.current.webkitRequestFullscreen();
        } else if (containerRef.current.mozRequestFullScreen) {
          // Firefox
          await containerRef.current.mozRequestFullScreen();
        } else if (containerRef.current.msRequestFullscreen) {
          // IE/Edge
          await containerRef.current.msRequestFullscreen();
        }
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          await document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          await document.msExitFullscreen();
        }
      }
    } catch (error) {
      console.warn("Fullscreen error:", error);
    }
  };

  const buttonIcon = mode === "3D" ? ICONS.BUTTON_AR : ICONS.BUTTON_3D;

  return (
    <>
      <div ref={containerRef} className={containerClass}>
        {mode === "3D" ? (
          <Simulasi3D
            model3D={model3D}
            scale={scale}
            buttonActive={buttonActive}
            onToggleFullscreen={handleToggleFullscreen}
          />
        ) : (
          <ModeAR
            urlAR={urlAR}
            onToggleFullscreen={handleToggleFullscreen}
            containerRef={containerRef}
          />
        )}

        {/* Mode Switch Button */}
        {buttonSwitch && (
          <button
            onClick={handleSwitch}
            className={`${buttonClass} absolute bottom-3 right-3 z-10`}
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
