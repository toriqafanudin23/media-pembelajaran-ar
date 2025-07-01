import { useState } from 'react';
import Image from './Image';

const BanyakImage = () => {
  const images = [
    'limas_segitiga_samakaki.png',
    'limas_segiempat.png',
    'limas_segienam.png',
    'limas_segitujuh.png',
  ];

  const [index, setIndex] = useState(0);

  const handleSwitch = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative inline-block">
      <Image src={images[index]} width="300px" scale={1.5} />

      {/* Tombol Next */}
      <button
        onClick={handleSwitch}
        className="
          absolute bottom-30 right-3
          bg-white
          border border-slate-300
          p-2
          rounded-full
          shadow
          hover:scale-110
          hover:bg-slate-100
          transition
          z-10
        "
      >
        <img
          src="https://hmgdlcwzpmbgvfpaiylz.supabase.co/storage/v1/object/public/images/icons/next.png"
          alt="Next"
          className="w-4 h-4"
        />
      </button>
    </div>
  );
};

export default BanyakImage;
