function ErrorPage() {
  return (
    <div className="min-h-screen flex max-md:flex-col items-center justify-center  m-auto bg-gray-600 w-full">
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 flex flex-col justify-center max-md:text-center">
          Halaman tidak ditemukan!
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-md:text-center">
          Ups, halaman yang anda cari tidak ditemukan. Silahkan kembali ke
          halaman Beranda
        </p>
        <div className="flex max-md:justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-secondary text-white border-2 hover:bg-white hover:text-black rounded-lg hover:bg-secondary transition duration-300 ease-in-out"
          >
            ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
