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
  const [isLoading, setIsLoading] = useState(true);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

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
        // Load A-Frame first
        await loadScript(
          "https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js",
          "aframe-script"
        );

        // Then load AR.js
        await loadScript(
          "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js",
          "arjs-script"
        );

        setScriptsLoaded(true);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading AR scripts:", error);
        setIsLoading(false);
      }
    };

    loadScripts();
  }, [isOpen]);

  // Cleanup AR session and camera when closing
  useEffect(() => {
    if (!isOpen && sceneRef.current) {
      // Stop AR session
      const scene = sceneRef.current;

      // Remove the scene to fully cleanup
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
            <p className="text-white text-lg font-semibold">Loading AR...</p>
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

      {/* A-Frame Scene */}
      {scriptsLoaded && (
        <a-scene
          ref={sceneRef}
          vr-mode-ui="enabled: false"
          renderer="logarithmicDepthBuffer: true; precision: medium;"
          embedded
          arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
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
      )}
    </div>
  );
};

export default ARViewer;
