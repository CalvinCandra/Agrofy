import ButtonHref from "../../components/Button/ButtonHref";
import ImageImport from "../../data/ImageImport";
import { useState } from "react";

const DetailLimbah = ({ isOpen, onClose, title, imgs, date, deskripsi, idLimbah }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/v1/limbah/${idLimbah}`, {
        method: "DELETE",
      });
      const data = await response.json();
  
      if (response.ok) {
        alert("Limbah berhasil dihapus!");
        onClose(); // Close the modal after deletion
      } else {
        setError(data.msg);
      }
    } catch (err) {
      setError("Terjadi kesalahan saat menghapus limbah.");
    } finally {
      setLoading(false);
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
            src={imgs}
            className="w-1/3 object-cover bg-gray-400 rounded-md"
            alt=""
          />
          <div className="ml-4 w-full">
            <input
              type="text"
              className="h-14 w-full mb-6 rounded-lg border border-gray-300 p-2"
              value={title}
            />
            <input
              type="date"
              className="h-14 w-full rounded-lg border border-gray-300 p-2"
              value={date}
            />
          </div>
        </div>

        <div className="mb-4">
          <textarea
            name="deskripsi"
            className="w-full h-40 border border-gray-300 rounded-lg p-2"
            value={deskripsi}
          />
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <div className="flex">
          <ButtonHref text="Perbaharui" variant="primary" />
          <ButtonHref text="Hapus" variant="primary" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default DetailLimbah;
