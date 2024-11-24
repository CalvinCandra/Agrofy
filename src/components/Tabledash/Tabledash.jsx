import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import DetailOlahan from "../../components/Modal/DetailOlahan";
import config from "../../config/config"; // Import konfigurasi

export default function Tabledash() {
  const [dataLimbah, setDataLimbah] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpenolahan, setIsModalOpenolahan] = useState(false);
  const [selectedLimbah, setSelectedLimbah] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    const token = sessionStorage.getItem("Token");

    try {
      const response = await axios.get(`${config.apiUrl}/olah`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.status === 200 && Array.isArray(response.data.data)) {
        setDataLimbah(response.data.data);
      } else {
        setDataLimbah([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error.response?.data || error.message);
      setDataLimbah([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModalolahan = async (limbah) => {
    const token = sessionStorage.getItem("Token");
    setIsLoading(true);

    try {
      const response = await axios.get(`${config.apiUrl}/olah/${limbah.id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.status === 200 && response.data.msg === "Berhasil mendapatkan detail pengolahan limbah") {
        setSelectedLimbah(response.data.data);
        setIsModalOpenolahan(true);
      } else {
        console.error("Gagal mendapatkan detail:", response.data.msg);
        setSelectedLimbah(null);
      }
    } catch (error) {
      console.error("Error fetching detail:", error.response?.data || error.message);
      setSelectedLimbah(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModalolahan = () => {
    setIsModalOpenolahan(false);
    setSelectedLimbah(null);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus pengolahan limbah ini?");
    if (!confirmDelete) return;

    const token = sessionStorage.getItem("Token");

    try {
      const response = await axios.delete(`${config.apiUrl}/olah/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.status === 200) {
        setDataLimbah((prevData) => prevData.filter((limbah) => limbah.id !== id));
        alert("Pengolahan limbah berhasil dihapus.");
      } else {
        alert("Gagal menghapus pengolahan limbah.");
      }
    } catch (error) {
      console.error("Error deleting data:", error.response?.data || error.message);
      alert("Terjadi kesalahan saat menghapus data.");
    }
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("id-ID");
  };

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (dataLimbah.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <div className="bg-main-green overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-3 text-center text-gray-700 font-semibold border-b">Tenggat</th>
              <th className="px-4 py-3 text-center text-gray-700 font-semibold border-b">Limbah</th>
              <th className="px-4 py-3 text-center text-gray-700 font-semibold border-b">Target</th>
              <th className="px-4 py-3 text-center text-gray-700 font-semibold border-b">Status</th>
              <th className="px-4 py-3 text-center text-gray-700 font-semibold border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataLimbah.map((limbah) => (
              <tr key={limbah.id}>
                <td className="px-4 py-3 border-b text-gray-600">{formatDate(limbah.tgl_selesai)}</td>
                <td className="px-4 py-3 border-b text-gray-600">{limbah.nama_limbah}</td>
                <td className="px-4 py-3 border-b text-gray-600">{limbah.target_olahan}</td>
                <td className="px-4 py-3 border-b">
                  <span
                    className={`px-2 py-1 flex justify-center text-sm font-medium rounded-xl ${
                      limbah.status === "Proses"
                        ? "text-yellow-800 bg-yellow-200"
                        : limbah.status === "Gagal"
                        ? "text-red-800 bg-red-200"
                        : "text-green-800 bg-green-200"
                    }`}
                  >
                    {limbah.status}
                  </span>
                </td>
                <td className="px-4 py-3 border-b flex justify-center space-x-2">
                  <button
                    className="px-3 py-1 text-sm font-medium text-white bg-main-green rounded-xl hover:bg-main-green-hover"
                    onClick={() => handleOpenModalolahan(limbah)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-xl hover:bg-red-600"
                    onClick={() => handleDelete(limbah.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal untuk edit limbah */}
      {selectedLimbah && (
        <DetailOlahan
          isOpen={isModalOpenolahan}
          onClose={handleCloseModalolahan}
          title="Edit Limbah"
          limbah={selectedLimbah}
          onSubmitSuccess={fetchData}
        />
      )}
    </div>
  );
}
