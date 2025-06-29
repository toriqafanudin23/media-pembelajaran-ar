const Image = ({ src, nama, width = '250px' }) => {
  const urlImage = import.meta.env.VITE_URL_IMAGE;

  return (
    <div
      className="mx-auto mt-4 rounded-xl overflow-hidden shadow"
      style={{ width: width }}
    >
      <img
        src={urlImage + src}
        alt={nama || 'Gambar'}
        className="w-full h-auto object-cover"
      />
      <p className="text-center text-sm text-slate-500 my-2">{nama}</p>
    </div>
  );
};

export default Image;
