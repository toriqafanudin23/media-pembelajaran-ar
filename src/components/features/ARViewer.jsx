import { useEffect, useRef, useState } from "react";

/**
 * AR Viewer component using AR.js and A-Frame
 * Provides marker-based AR experience
 * @param {Object} props
 * @param {string} props.modelUrl - URL to GLTF/GLB 3D model
 * @param {Function} props.onClose - Callback when AR is closed
 * @param {boolean} props.isOpen - Whether AR viewer is open
 */
const ARViewer = ({ modelUrl, onClose, isOpen }) => {
  const sceneRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [error, setError] = useState(null);

  // Load A-Frame and AR.js scripts
  useEffect(() => {
    if (!isOpen) return;

    const loadScript = (src, id) => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        if (document.getElementById(id)) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.id = id;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        console.log("Loading A-Frame...");
        // Load A-Frame first
        await loadScript(
          "https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js",
          "aframe-script"
        );

        console.log("Loading AR.js...");
        // Then load AR.js
        await loadScript(
          "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js",
          "arjs-script"
        );

        console.log("Scripts loaded successfully");
        setScriptsLoaded(true);

        // Wait a bit for AR.js to initialize
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error loading AR scripts:", error);
        setError("Failed to load AR scripts. Please refresh and try again.");
        setIsLoading(false);
      }
    };

    loadScripts();
  }, [isOpen]);

  // Cleanup AR session and camera when closing
  useEffect(() => {
    if (!isOpen && sceneRef.current) {
      const scene = sceneRef.current;

      if (scene && scene.parentNode) {
        // Stop all video streams (camera)
        const videoElements = scene.querySelectorAll("video");
        videoElements.forEach((video) => {
          if (video.srcObject) {
            const tracks = video.srcObject.getTracks();
            tracks.forEach((track) => track.stop());
            video.srcObject = null;
          }
        });

        // Pause AR system
        if (scene.systems && scene.systems.arjs) {
          scene.systems.arjs.pause();
        }

        // Remove scene from DOM
        scene.parentNode.removeChild(scene);
      }
    }
  }, [isOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (sceneRef.current) {
        const scene = sceneRef.current;

        // Stop all video streams
        const videoElements = scene.querySelectorAll("video");
        videoElements.forEach((video) => {
          if (video.srcObject) {
            const tracks = video.srcObject.getTracks();
            tracks.forEach((track) => track.stop());
            video.srcObject = null;
          }
        });

        // Remove scene
        if (scene.parentNode) {
          scene.parentNode.removeChild(scene);
        }
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="text-center">
            <div className="inline-block w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-white text-lg font-semibold">
              {scriptsLoaded ? "Initializing AR..." : "Loading AR..."}
            </p>
            <p className="text-white/60 text-sm mt-2">
              Please allow camera access
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-50">
          <div className="text-center max-w-md px-6">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <p className="text-white text-lg font-semibold mb-2">Error</p>
            <p className="text-white/80 text-sm">{error}</p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        title="Close AR"
      >
        <svg
          className="w-6 h-6"
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
      </button>

      {/* Instructions */}
      <div className="absolute top-4 left-4 z-40 bg-black/60 backdrop-blur-sm text-white px-4 py-3 rounded-lg max-w-xs">
        <p className="text-sm font-semibold mb-1">
          📷 Point camera at Hiro marker
        </p>
        <p className="text-xs opacity-80">
          Download marker:{" "}
          <a
            href="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            here
          </a>
        </p>
      </div>

      {/* A-Frame Scene Container */}
      {scriptsLoaded && !error && (
        <div
          ref={containerRef}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
          }}
        >
          <a-scene
            ref={sceneRef}
            vr-mode-ui="enabled: false"
            renderer="logarithmicDepthBuffer: true; precision: medium; antialias: true; alpha: true;"
            embedded
            arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
            }}
          >
            {/* Marker */}
            <a-marker preset="hiro">
              {/* 3D Model */}
              <a-entity
                gltf-model={modelUrl}
                scale="0.5 0.5 0.5"
                position="0 0.5 0"
                rotation="0 0 0"
                animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear"
              ></a-entity>
            </a-marker>

            {/* Camera */}
            <a-entity camera></a-entity>
          </a-scene>
        </div>
      )}
    </div>
  );
};

export default ARViewer;
