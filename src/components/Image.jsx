const Image = ({ src, nama, width = '250px', scale = 1 }) => {
  const urlImage = import.meta.env.VITE_URL_IMAGE;

  // Hitung offset supaya gambar tetap center
  const offset = (scale - 1) * 50;

  return (
    <div className="mx-auto mt-4" style={{ width }}>
      {/* Container fixed-size */}
      <div
        className="overflow-hidden relative"
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: '1 / 1', // misalnya persegi, sesuaikan rasio gambarmu
        }}
      >
        <img
          src={urlImage + src}
          alt={nama || 'Gambar'}
          className="absolute top-1/2 left-1/2 w-full h-auto object-cover transition-transform duration-300"
          style={{
            transform: `translate(-50%, -50%) scale(${scale})`,
          }}
        />
      </div>
      <p className="text-center text-sm text-slate-500 my-2">{nama}</p>
    </div>
  );
};

export default Image;
