import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Model = () => {
  const gltf = useGLTF(
    'https://hmgdlcwzpmbgvfpaiylz.supabase.co/storage/v1/object/public/images/animasi/animasi-jaring-kubus-2.glb'
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
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-slate-800 px-6 md:px-20 py-10 inter-primary sm:max-w-xl mx-auto">
      <header className="mb-10">
        <h1 className="text-sm text-teal-500 font-semibold tracking-widest uppercase">
          Matematika SMP
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mt-2 leading-tight">
          Bangun Ruang Sisi Datar
        </h2>
        <p className="text-lg text-slate-600 mt-2">
          Media Pembelajaran Berbasis{' '}
          <span className="text-teal-500 font-medium">Augmented Reality</span>
        </p>
      </header>

      {/* Canvas Model 3D */}
      <div className="w-full h-[300px] border-2 border-slate-500 rounded-xl">
        <Canvas camera={{ position: [6, 6, 6] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={2} />
          <OrbitControls />
          <Model />
        </Canvas>
      </div>

      {/* Tombol Start */}
      <div className="w-full flex justify-center mt-4">
        <Link
          to="/petunjuk"
          className="bg-teal-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-teal-700 transition duration-300 uppercase"
        >
          Start
        </Link>
      </div>

      {/* Footer Info */}
      <footer className="mt-6 text-sm text-slate-500">
        <p>SMP Kelas VIII</p>
        <p>
          Dikembangkan oleh{' '}
          <span className="text-slate-700 font-semibold">Toriq Afanudin</span>
        </p>
      </footer>
    </div>
  );
};

export default Cover;
