import { useState } from "react";
import ImageImport from "../../data/ImageImport";
import ButtonAction from "../../components/Button/ButtonSubmit";

export default function ProfilePage() {
  // State untuk mengontrol tampilan modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Fungsi untuk toggle modal
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <section className="bg-white pt-28">
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <h1 className="font-medium text-3xl pb-10">Edit Profile</h1>

        {/* Foto Section */}
        <div className="pb-6">
          <h2 className="text-lg font-semibold">Foto</h2>
          <div className="flex items-end pt-3">
            <img
              className="w-48 rounded-lg"
              src={ImageImport.default}
              alt="Profile"
            />
            <div className="pl-6">
              <ButtonAction text="Ubah Foto" variant="primary" />
            </div>
          </div>
        </div>

        {/* Username Section */}
        <div className="pb-6">
          <h2 className="text-lg font-semibold">Username</h2>
          <input
            type="text"
            className="w-full h-10 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username"
          />
        </div>

        {/* Email Section */}
        <div className="pb-6">
          <h2 className="text-lg font-semibold">Email</h2>
          <input
            type="email"
            className="w-full h-10 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
        </div>

        {/* Password Section */}
        <div className="pb-6">
          <h2 className="text-lg font-semibold">Password</h2>
          <div className="flex items-center">
            <input
              type="password"
              className="flex-grow h-10 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="pl-2">
              <button
                onClick={toggleModal}
                className="bg-gray-200 p-2 px-3 rounded-lg"
              >
                Ubah Kata Sandi
              </button>
              {/* <ButtonAction
                text="Ubah Kata Sandi"
                variant="primary"
                onClick={toggleModal}
              /> */}
            </div>
          </div>
        </div>

        {/* Tombol Reset dan Simpan */}
        <div className="flex justify-end space-x-4 pt-10">
          <ButtonAction
            text="Reset Perubahan"
            variant="secondary"
            // onClick={handleReset}
          />
          <ButtonAction
            text="Simpan Perubahan"
            variant="primary"
            // onClick={handleSave}
          />
        </div>
      </div>

      {/* Modal untuk Ubah Kata Sandi */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Ubah Kata Sandi</h2>
            <form>
              {/* Input Sandi Baru */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="new-password"
                >
                  Kata Sandi Baru
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="w-full h-10 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan kata sandi baru"
                />
              </div>

              {/* Input Konfirmasi Sandi Baru */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="confirm-password"
                >
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full h-10 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan ulang kata sandi baru"
                />
              </div>

              {/* Tombol Aksi */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-gray-800"
                  onClick={toggleModal}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
