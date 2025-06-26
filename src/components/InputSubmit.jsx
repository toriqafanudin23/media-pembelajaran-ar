const InputSubmit = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      <input
        type="text"
        className="flex-1 min-w-0 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
        placeholder="Jawab..."
      />
      <button
        type="submit"
        className="p-1 rounded shadow transition bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
      >
        <img
          src="https://hmgdlcwzpmbgvfpaiylz.supabase.co/storage/v1/object/public/images/icons/cek.png"
          alt="Submit"
          className="w-10 h-10"
        />
      </button>
    </div>
  );
};

export default InputSubmit;
