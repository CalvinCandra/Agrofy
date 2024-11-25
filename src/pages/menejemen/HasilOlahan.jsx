import { useEffect, useState } from "react";
import ButtonHref from "../../components/Button/ButtonHref";
import CardOlahan from "../../components/Card/CardOlahan"; // Update the import to CardOlahan
import Pagination from "../../components/Pagination/Pagination";
import TambahLimbah from "../../components/Modal/TambahLimbah";
import config from "../../config/config";
import axios from "axios";

export default function HasilOlahan() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [limbahListolah, setLimbahListolah] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
  
      const token = sessionStorage.getItem("Token");
      if (!token) {
        console.error("Token tidak ditemukan. Silakan login ulang.");
        return;
      }
  
      try {
        const response = await axios.get(`${config.apiUrl}/olahan`, {
          headers: {
            Authorization: `${token}`, // Add token to the header
          },
        });
        console.log(response.data);
        setLimbahListolah(response.data); // Set the data received from the backend
      } catch (error) {
        console.error("Error fetching limbah data:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-dashboard w-full h-full rounded-md p-5">
        <div className="bg-white w-full rounded-md p-5">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl py-2">Hasil Olahan</h1>
          </div>

          {/* Data Limbah */}
          <div className="limbah-box pt-16 grid lg:grid-cols-3 sm:grid-cols-1 gap-16 pb-28">
            {loading ? (
              <p>Loading...</p>
            ) : (
              limbahListolah.map((olahan) => (
                <CardOlahan
                  key={olahan.id}
                  id={olahan.riwayat_id}
                  img={olahan.gambar_olahan ? `${config.apiUrlImage}/uploads/${olahan.gambar_olahan}` : "/default-image.jpg"} // Use default image if not present
                  judul={olahan.target_olahan}
                  deskripsi={olahan.deskripsi_olahan}
                />
              ))
            )}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
