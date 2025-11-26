import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Model = () => {
  const gltf = useGLTF(
    "https://hmgdlcwzpmbgvfpaiylz.supabase.co/storage/v1/object/public/images/animasi/animasi-jaring-kubus-2.glb"
  );

  const mixer = useRef();

  useEffect(() => {
    if (gltf.animations.length && gltf.scene) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.timeScale = 0.5;
        action.play();
      });
    }
  }, [gltf]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive object={gltf.scene} scale={2} position={[0, -1, 0]} />;
};

const Cover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 px-6 py-10 inter-primary sm:max-w-xl mx-auto relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="relative z-10">
        <header className="mb-10 animate-fade-in">
          <div className="flex flex-row justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                Matematika SMP
              </h1>
            </div>
            <img
              src="https://hmgdlcwzpmbgvfpaiylz.supabase.co/storage/v1/object/public/images/images/logouad.png"
              alt="Logo UAD"
              className="w-16 h-16 object-contain"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Bangun Ruang Sisi Datar
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Media Pembelajaran Berbasis{" "}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Augmented Reality</span>
          </p>
        </header>

        {/* Canvas Model 3D with Modern Border */}
        <div className="w-full h-[320px] bg-white border-2 border-slate-200 rounded-2xl shadow-xl overflow-hidden mb-6 animate-scale-in">
          <Canvas camera={{ position: [6, 6, 6] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={2} />
            <OrbitControls />
            <Model />
          </Canvas>
        </div>

        {/* Modern Start Button */}
        <div className="w-full flex justify-center mb-8 animate-fade-in">
          <Link
            to="/petunjuk"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="relative z-10">Mulai Belajar</span>
            <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Footer Info with Better Styling */}
        <footer className="text-center text-sm text-slate-600 space-y-1 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm">
            <p className="font-medium text-slate-700">SMP Kelas VIII</p>
          </div>
          <p className="mt-2">
            Dikembangkan oleh{" "}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Toriq Afanudin</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Cover;
