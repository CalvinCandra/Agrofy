import { useEffect, useState } from "react";
import CardOlahan from "../../components/Card/CardOlahan"; // Update the import to CardOlahan
import Pagination from "../../components/Pagination/Pagination";
import config from "../../config/config";
import axios from "axios";

export default function HasilOlahan() {
  const [limbahListolah, setLimbahListolah] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalData: 0,
  });

  const fetchData = async (page = 1) => {
    setLoading(true);

    const token = sessionStorage.getItem("Token");
    if (!token) {
      console.error("Token tidak ditemukan. Silakan login ulang.");
      return;
    }

    try {
      const response = await axios.get(
        `${config.apiUrl}/olah?page=${page}&limit=10`,
        {
          headers: {
            Authorization: `${token}`, // Add token to the header
          },
        }
      );
      console.log(response.data);
      setLimbahListolah(response.data.data); // Set the data received from the backend
      setPagination(response.data.pagination); // Set data pagination dari api untuk pagination
    } catch (error) {
      console.error(
        "Error fetching limbah data:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-full h-full rounded-md">
        <div className="bg-white w-full rounded-md border-2 border-black">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl p-5">Hasil Olahan</h1>
          </div>

          {/* Data Limbah */}
          <div className="limbah-box grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
            {loading ? (
              <p>Loading...</p>
            ) : (
              limbahListolah.map((olahan) => (
                <CardOlahan
                  key={olahan.id}
                  id={olahan.riwayat_id}
                  img={
                    olahan.gambar
                      ? `${config.apiUrlImage}/uploads/${olahan.gambar}`
                      : "/default-image.jpg"
                  } // Use default image if not present
                  judul={olahan.target_olahan}
                  deskripsi={olahan.deskripsi}
                />
              ))
            )}
          </div>
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            totalData={pagination.totalData}
            fetchData={fetchData}
          />
        </div>
      </div>
    </div>
  );
}
