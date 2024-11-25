import ButtonHref from "../../components/Button/ButtonHref";
import { useState } from "react";
import axios from "axios"; // Import Axios
import config from "../../config/config"; 
import ImageImport from "../../data/ImageImport";
import { showAlert } from "../../components/SweetAlert/SweetAlert.js";

const DetailLimbah = ({ isOpen, onClose, title, imgs, date, deskripsi, idLimbah }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newTitle, setNewTitle] = useState(title);
  const [newDeskripsi, setNewDeskripsi] = useState(deskripsi);
  const [newImage, setNewImage] = useState(null);
  const [newImagePreview, setNewImagePreview] = useState(imgs);

  if (!isOpen) return null;

  const handleDelete = async () => {
    setLoading(true);
    const token = sessionStorage.getItem("Token"); // Get the token from sessionStorage

    try {
      const response = await axios.delete(`${config.apiUrl}/limbah/${idLimbah}`, {
        headers: {
          Authorization: `${token}`, // Add token to the Authorization header
        },
      });

      if (response.status === 200) {
        showAlert({
          title: "Berhasil",
          text: "Limbah berhasil dihapus!",
          iconType: "success",
          didClose: onClose, // Tutup modal setelah alert ditutup
        });
        setTimeout(() => {
          window.location.reload(); // Refresh halaman setelah 4 detik
        }, 2500); // Close the modal after deletion
      } else {
        setError(response.data.msg || "Gagal menghapus limbah.");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat menghapus limbah.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async () => {
    setLoading(true);
    const token = sessionStorage.getItem("Token");
  
    const formData = new FormData();
    formData.append("nama_limbah", newTitle || ""); // Set to empty string if empty
    formData.append("deskripsi", newDeskripsi || ""); // Set to empty string if empty
    if (newImage) {
      formData.append("gambar", newImage); // Only append new image if present
    }
  
    try {
      const response = await axios.put(`${config.apiUrl}/limbah/${idLimbah}`, formData, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "multipart/form-data", // Ensure multipart for file upload
        },
      });
  
      if (response.status === 200) {
        showAlert({
          title: "Berhasil",
          text: "Limbah berhasil diperbarui!",
          iconType: "success",
          didClose: onClose,  // Tutup modal setelah alert ditutup
        });
        setTimeout(() => {
          window.location.reload(); // Refresh halaman setelah 4 detik
        }, 2500);// Close the modal after updating
      } else {
        setError(response.data.msg || "Gagal memperbaharui limbah.");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat memperbaharui limbah.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewImage(file);
      setNewImagePreview(URL.createObjectURL(file));
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
          &times; {/* Cross icon */}
        </button>

        <div className="flex mb-4 mt-5">
          <img
            src={newImagePreview || ImageImport.gambar}
            className="w-[60%] object-cover bg-gray-400 rounded-md"
            alt="Preview"
            onClick={() => document.getElementById("imageInput").click()} // Trigger file input
          />
          <div className="ml-4 w-full">
            <input
              type="text"
              className="h-14 w-full mb-6 rounded-lg border border-gray-300 p-2"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
              type="date"
              className="h-14 w-full rounded-lg border border-gray-300 p-2 hidden"
              value={date}
            />
          </div>
        </div>

        <div className="mb-4">
          <textarea
            name="deskripsi"
            className="w-full h-40 border border-gray-300 rounded-lg p-2"
            value={newDeskripsi}
            onChange={(e) => setNewDeskripsi(e.target.value)}
          />
        </div>

        <input
          id="imageInput"
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          className="hidden"
          onChange={handleImageChange}
        />

        {error && <p className="text-red-600">{error}</p>}

        <div className="flex">
          <ButtonHref text="Perbaharui" variant="primary" onClick={handleEdit} />
          <ButtonHref text="Hapus" variant="primary" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default DetailLimbah;
