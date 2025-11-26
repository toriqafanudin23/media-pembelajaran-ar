const Image = ({ src, nama, width = '100%', scale = 1 }) => {
  const urlImage = import.meta.env.VITE_URL_IMAGE;

  return (
    <div className="w-full max-w-sm mx-auto mt-4 mb-4">
      {/* Container responsive */}
      <div
        className="overflow-hidden relative rounded-lg"
        style={{
          width: '100%',
          maxWidth: width,
          margin: '0 auto',
        }}
      >
        <img
          src={urlImage + src}
          alt={nama || 'Gambar'}
          className="w-full h-auto object-contain transition-transform duration-300"
          style={{
            transform: `scale(${scale})`,
          }}
        />
      </div>
      {nama && (
        <p className="text-center text-xs sm:text-sm text-slate-500 mt-2 italic">
          {nama}
        </p>
      )}
    </div>
  );
};

export default Image;
