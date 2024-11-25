import { useState } from "react";
import axios from "axios"; // Import Axios
import ButtonHref from "../../components/Button/ButtonHref";
import config from "../../config/config";
import { showAlert } from "../../components/SweetAlert/SweetAlert.js";
import ImageImport from "../../data/ImageImport";

const TambahLimbah = ({ isOpen, onClose, title }) => {
  const [namaLimbah, setNamaLimbah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState(null); // Pratinjau gambar
  const [file, setFile] = useState(null); // File gambar yang akan diunggah
  const [tanggalMasuk, setTanggalMasuk] = useState("");

  const token = sessionStorage.getItem("Token");
  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setGambar(URL.createObjectURL(selectedFile)); // Pratinjau gambar
      setFile(selectedFile); // Simpan file untuk pengunggahan
    }
  };

  const handleSubmit = async () => {
    const token = sessionStorage.getItem("Token");
    const formData = new FormData();
    formData.append("nama_limbah", namaLimbah);
    formData.append("deskripsi", deskripsi);
    formData.append("gambar", file); // Kirim file
    formData.append("user_id", 1); // Ganti dengan ID pengguna sebenarnya
    formData.append("created_at", tanggalMasuk || new Date().toISOString());

    try {
      const response = await axios.post(`${config.apiUrl}/limbah`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      });

      if (response.status === 200) {
        showAlert({
          title: "Berhasil",
          text: "Limbah berhasil ditambahkan!",
          iconType: "success",
          didClose: onClose, // Tutup modal setelah alert ditutup
        });
        setTimeout(() => {
          window.location.reload(); // Refresh halaman setelah 4 detik
        }, 2500); 
      }
    } catch (error) {
      console.error("Error submitting data:", error.response?.data || error.message);
      showAlert({
        title: "Gagal",
        text: error.response?.data?.msg || "Terjadi kesalahan.",
        iconType: "error",
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-md p-5 w-1/2 shadow-lg relative">
        <button
          className="absolute top-2 right-3 text-gray-600 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="flex mb-4 mt-5">
          <label htmlFor="upload-image" className="cursor-pointer">
            <img
              src={gambar || ImageImport.gambar} // Placeholder jika belum ada gambar
              className="w-[100%] object-cover bg-gray-400 rounded-md"
              alt="Limbah"
            />
          </label>
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="ml-4 w-full">
            <input
              type="text"
              className="h-14 w-full mb-6 rounded-lg border border-gray-300 p-2"
              placeholder="Nama Limbah"
              value={namaLimbah}
              onChange={(e) => setNamaLimbah(e.target.value)}
            />
            <input
              type="date"
              className="h-14 w-full rounded-lg border border-gray-300 p-2 hidden"
              value={tanggalMasuk}
              onChange={(e) => setTanggalMasuk(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <textarea
            className="w-full h-40 border border-gray-300 rounded-lg p-2"
            placeholder="Deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          <ButtonHref text="Tambah" variant="primary" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default TambahLimbah;
