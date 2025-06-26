const Image = ({ src, nama }) => {
  const urlImage = import.meta.env.VITE_URL_IMAGE;

  return (
    <div className="w-60 mx-auto mb-4 rounded-xl overflow-hidden shadow">
      <img
        src={urlImage + src}
        alt="Rubik"
        className="w-full h-auto object-cover"
      />
      <p className="text-center text-sm text-gray-600 my-2 font-bold">{nama}</p>
    </div>
  );
};

export default Image;
