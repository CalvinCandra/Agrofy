import { useState } from "react";
import ImageImport from "../../data/ImageImport";

export default function Komunitas() {
  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked); // Toggle liked state
  };

  const handleCommentClick = () => {
    setShowModal(true); // Show modal on comment click
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal when done
  };

  return (
    <section className="bg-white pt-20">
      <div className="w-konten mx-auto p-2">
        <h1 className="text-3xl lg:text-5xl font-bold py-5 text-center my-10">
          Komunitas Agrofy
        </h1>

        {/* Card */}
        <div className="flex flex-col justify-center items-center w-full">
          {/* Kolom Input */}
          <div className="w-full bg-brown-light p-2 px-5 lg:px-10 rounded-es-lg rounded-ee-lg shadow-lg mb-20">
            <div className="flex items-center justify-start">
              <div className="pe-5 lg:px-2">
                <div className="h-8 w-8 lg:h-12 lg:w-12 bg-black rounded-full"></div>
              </div>
              <div className="lg:ml-5 lg:w-full">
                <input
                  className="pt-1 lg:pt-3 pb-1 w-full bg-transparent focus:border-b-2 focus:border-black focus:outline-none focus:ring-0"
                  placeholder="Apa yang anda Pikirkan? "
                />
              </div>
            </div>

            <div className="mt-5 flex justify-between items-center w-[20%] lg:w-[6.5%] lg:p-2 lg:mx-2">
              <i className="fa-regular fa-image text-xl lg:text-2xl"></i>
              <i className="fa-regular fa-paper-plane text-xl lg:text-2xl"></i>
            </div>
          </div>

          {/* Card Komunitas 1*/}
          <div className="w-full p-2 px-5 lg:px-10 rounded-es-lg rounded-ee-lg shadow-lg mb-10">
            {/* Bagian atas */}
            <div className="flex items-center justify-between">
              <div className="px-2">
                <div className="flex justify-between items-center">
                  <div className="h-8 w-8 lg:h-12 lg:w-12 bg-black rounded-full"></div>
                  <div className="ml-4">
                    <h5 className="lg:text-lg">Surya</h5>
                    <h5 className="text-xs">9 Jam yang lalu</h5>
                  </div>
                </div>
              </div>

              <div className="">
                <i className="fa-solid fa-ellipsis lg:text-2xl"></i>
              </div>
            </div>
            {/* Bagian tengah */}
            <div className="w-full lg:text-justify mt-5 lg:mt-10 px-2">
              <p>
                Halo semuanya ada yang tau bagaimana caranya mengolah kompos
                yang benar? dikarenakan kemarin saya membuat saat di aplikasikan
                malah membuat tumbuhan mati.
              </p>

              <p className="mt-5 text-gray-400">2 Balasan</p>
            </div>

            {/* Bagian bawah */}
            <div className="mt-5 flex justify-between items-center w-[30%] lg:w-[9%] mx-2">
              <i
                className={`${
                  liked
                    ? "fa-solid fa-heart text-red-500"
                    : "fa-regular fa-heart"
                } text-xl lg:text-2xl cursor-pointer`}
                onClick={handleLikeClick}
              ></i>
              {/* Icon Comment */}
              <i
                className="fa-regular fa-comment-dots text-xl lg:text-2xl cursor-pointer"
                onClick={handleCommentClick}
              ></i>
              <i className="fa-solid fa-share-nodes text-xl lg:text-2xl"></i>
            </div>
          </div>

          {/* Card Komunitas 2*/}
          <div className="w-full p-2 px-5 lg:px-10 rounded-es-lg rounded-ee-lg shadow-lg mb-10">
            {/* Bagian atas */}
            <div className="flex items-center justify-between">
              <div className="px-2">
                <div className="flex justify-between items-center">
                  <div className="h-8 w-8 lg:h-12 lg:w-12 bg-black rounded-full"></div>
                  <div className="ml-4">
                    <h5 className="lg:text-lg">Grassella</h5>
                    <h5 className="text-xs">3 Menit yang lalu</h5>
                  </div>
                </div>
              </div>

              <div className="">
                <i className="fa-solid fa-ellipsis lg:text-2xl"></i>
              </div>
            </div>
            {/* Bagian tengah */}
            <div className="w-full lg:text-justify mt-5 lg:mt-10 px-2">
              <div className="w-full flex flex-col lg:flex-row flex-wrap justify-between items-center my-5">
                <img
                  src={ImageImport.contoh1}
                  className="lg:w-[48%] py-2 lg:py-0"
                  alt="Gambar Komunitas "
                ></img>
                <img
                  src={ImageImport.contoh2}
                  className="lg:w-[48%]"
                  alt="Gambar Komunitas py-2 lg:py-0"
                ></img>
              </div>
              <p>
                Sekedar tips bagaimana menjemur kulit jagung supaya tidak mudah
                robek saat digunakan, dijemur hanya 2 jam sembari siram air
                supaya kandungan air tidak berkurang drastis.
              </p>

              <p className="mt-5 text-gray-400">5 Balasan</p>
            </div>

            {/* Bagian bawah */}
            <div className="mt-5 flex justify-between items-center w-[30%] lg:w-[9%] mx-2">
              <i
                className={`${
                  liked
                    ? "fa-solid fa-heart text-red-500"
                    : "fa-regular fa-heart"
                } text-xl lg:text-2xl cursor-pointer`}
                onClick={handleLikeClick}
              ></i>
              {/* Icon Comment */}
              <i
                className="fa-regular fa-comment-dots text-xl lg:text-2xl cursor-pointer"
                onClick={handleCommentClick}
              ></i>
              <i className="fa-solid fa-share-nodes text-xl lg:text-2xl"></i>
            </div>
          </div>

          {/* Card Komunitas 3*/}
          <div className="w-full p-2 px-5 lg:px-10 rounded-es-lg rounded-ee-lg shadow-lg mb-10">
            {/* Bagian atas */}
            <div className="flex items-center justify-between">
              <div className="px-2">
                <div className="flex justify-between items-center">
                  <div className="h-8 w-8 lg:h-12 lg:w-12 bg-black rounded-full"></div>
                  <div className="ml-4">
                    <h5 className="lg:text-lg">Angga P</h5>
                    <h5 className="text-xs">12 Menit yang lalu</h5>
                  </div>
                </div>
              </div>

              <div className="">
                <i className="fa-solid fa-ellipsis lg:text-2xl"></i>
              </div>
            </div>
            {/* Bagian tengah */}
            <div className="w-full lg:text-justify mt-5 lg:mt-10 px-2">
              <p>
                Halo jerami yang sudah kering apakah bisa digunakan untuk
                menutupi tanah di sekitar tanaman cabai supya todak adanya
                rumput tumbuh, takutnya jerami mempengaruhi pertumbuhan cabai
                😊.
              </p>

              <p className="mt-5 text-gray-400">10 Balasan</p>
            </div>

            {/* Bagian bawah */}
            <div className="mt-5 flex justify-between items-center w-[30%] lg:w-[9%] mx-2">
              <i
                className={`${
                  liked
                    ? "fa-solid fa-heart text-red-500"
                    : "fa-regular fa-heart"
                } text-xl lg:text-2xl cursor-pointer`}
                onClick={handleLikeClick}
              ></i>
              {/* Icon Comment */}
              <i
                className="fa-regular fa-comment-dots text-xl lg:text-2xl cursor-pointer"
                onClick={handleCommentClick}
              ></i>
              <i className="fa-solid fa-share-nodes text-xl lg:text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded-lg w-full max-w-lg mx-4 lg:mx-0 lg:max-w-2xl overflow-y-auto max-h-[80vh]">
              <h3 className="text-lg mb-4">Balasan Komentar</h3>

              {/* Daftar Balasan Statis */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 bg-black rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={ImageImport.willy}
                      alt="User profile"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold">Willy</h5>
                    <p className="text-sm text-gray-600">
                      Mungkin terlalu banyak komposnya, coba kurangi sedikit.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 bg-black rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={ImageImport.oka}
                      alt="User profile"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold">Oka</h5>
                    <p className="text-sm text-gray-600">
                      Pastikan komposnya sudah benar-benar matang, biasanya
                      butuh waktu beberapa bulan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form untuk Komentar Baru */}
              <div className="mt-6">
                <textarea
                  className="w-full p-2 border rounded-lg"
                  placeholder="Tulis komentar Anda..."
                ></textarea>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
                  >
                    Batal
                  </button>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}