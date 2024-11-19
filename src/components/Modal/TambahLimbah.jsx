import { useState } from "react";
import ButtonHref from "../../components/Button/ButtonHref";

const TambahLimbah = ({ isOpen, onClose, title }) => {
  const [namaLimbah, setNamaLimbah] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState(null); // Pratinjau gambar
  const [file, setFile] = useState(null); // File gambar yang akan diunggah
  const [tanggalMasuk, setTanggalMasuk] = useState("");

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setGambar(URL.createObjectURL(selectedFile)); // Pratinjau gambar
      setFile(selectedFile); // Simpan file untuk pengunggahan
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("nama_limbah", namaLimbah);
    formData.append("deskripsi", deskripsi);
    formData.append("gambar", file); // Kirim file
    formData.append("user_id", 1); // Ganti dengan ID pengguna sebenarnya
    formData.append("created_at", tanggalMasuk || new Date().toISOString());

    try {
      const response = await fetch("http://localhost:3000/api/v1/limbah", {
        method: "POST",
        body: formData, // Kirim FormData
      });

      const result = await response.json();

      if (response.ok) {
        alert("Limbah berhasil ditambahkan!");
        onClose();
      } else {
        console.error("Error:", result);
        alert("Gagal menambahkan limbah: " + result.msg);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Terjadi kesalahan saat menambahkan limbah.");
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
              src={gambar || "https://via.placeholder.com/150"} // Placeholder jika belum ada gambar
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
              className="h-14 w-full rounded-lg border border-gray-300 p-2"
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
