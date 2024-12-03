import { useState } from "react";
import ButtonHref from "../../components/Button/ButtonHref";
import axios from "axios"; 
import config from "../../config/config"; 
import { showAlert } from "../../components/SweetAlert/SweetAlert.js";

const DetailHasilOlahan = ({ isOpen, onClose, title, imgs, deskripsi, idHasil }) => {
  const [newDeskripsi, setNewDeskripsi] = useState(deskripsi);
  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(imgs); // Store the image preview

  // Handle image file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewImage(file);
      setImagePreview(URL.createObjectURL(file)); // Set the new image preview
    }
  };

  // Handle save button (upload the new image and description)
  const handleSave = async () => {
    const formData = new FormData();
    formData.append("deskripsi_olahan", newDeskripsi || "");
    if (newImage) {
      formData.append("gambar_olahan", newImage); // Attach the new image file
    }

    try {
      const token = sessionStorage.getItem("Token");
      if (!token) {
        console.error("Token tidak ditemukan. Silakan login ulang.");
        return;
      }

      await axios.put(`${config.apiUrl}/hasilolahan/${idHasil}`, formData, {
        headers: {
          Authorization: `${token}`, // Attach token in the request header
          "Content-Type": "multipart/form-data",
        },
      });
        showAlert({
          title: "Berhasil",
          text: "Hasil Olahan berhasil diperbarui!",
          iconType: "success",
          didClose: onClose, // Tutup modal setelah alert ditutup
        });
        setTimeout(() => {
          window.location.reload(); // Refresh halaman setelah 4 detik
        }, 2500); 
    } catch (error) {
      console.error("Error updating hasil olahan:", error.response?.data || error.message);
      showAlert({
        title: "Gagal",
        text: "tidak ada data yang diubah",
        iconType: "error",
        didClose: onClose, // Tutup modal setelah alert ditutup
      });
    }
  };

  if (!isOpen) return null;

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
          <div className="w-[60%]">
            <img
              src={imagePreview} 
              className="w-full h-[250px] object-cover bg-gray-400 rounded-md cursor-pointer"
              alt="Preview"
              onClick={() => document.getElementById("fileInput").click()} // Trigger file input when clicking image
            />
            <input
              id="fileInput"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="ml-4 w-full">
            <input
              type="text"
              className="h-14 w-full mb-6 rounded-lg border border-gray-300 p-2"
              value={title}
              disabled // Disable input field for title
            />
            <textarea
              name="deskripsi"
              className="w-full h-40 border border-gray-300 rounded-lg p-2"
              value={newDeskripsi}
              onChange={(e) => setNewDeskripsi(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <ButtonHref text="Simpan" variant="primary" onClick={handleSave} /> 
          <ButtonHref text="Tutup" variant="secondary" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default DetailHasilOlahan;
