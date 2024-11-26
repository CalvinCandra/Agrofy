import { useEffect, useState } from "react";
import ButtonHref from "../../components/Button/ButtonHref";
import CardLimbah from "../../components/Card/CardLimbah";
import Pagination from "../../components/Pagination/Pagination";
import TambahLimbah from "../../components/Modal/TambahLimbah";
import config from "../../config/config";
import axios from "axios";

export default function DataLimbah() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [limbahList, setLimbahList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Ambil data limbah dari backend menggunakan Axios
    const fetchData = async () => {
      setLoading(true);

      // Ambil token dari sessionStorage
      const token = sessionStorage.getItem("Token");
      if (!token) {
        console.error("Token tidak ditemukan. Silakan login ulang.");
        return;
      }

      try {
        const response = await axios.get(`${config.apiUrl}/limbah`, {
          headers: {
            Authorization: `${token}`, // Tambahkan token ke header Authorization
          },
        });
        setLimbahList(response.data.data); // Sesuaikan struktur respons
      } catch (error) {
        console.error(
          "Error fetching limbah data:",
          error.response?.data || error.message
        );
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
            <h1 className="font-bold text-3xl py-2">Limbah</h1>
            <div className="py-2">
              <ButtonHref
                href="#"
                text="Tambah"
                variant="primary"
                onClick={handleOpenModal}
              />
            </div>
          </div>

          {/* Data Limbah */}
          <div className="limbah-box pt-16 grid lg:grid-cols-3 sm:grid-cols-1 gap-16 pb-28">
            {loading ? (
              <p>Loading...</p>
            ) : (
              limbahList.map((limbah) => (
                <CardLimbah
                  key={limbah.id}
                  id={limbah.id}
                  img={
                    limbah.gambar
                      ? `${config.apiUrlImage}/uploads/${limbah.gambar}` // Gunakan config.apiUrlImage
                      : "/default-image.jpg"
                  } // Gambar default jika tidak ada
                  judul={limbah.nama_limbah}
                  tanggalmasuk={limbah}
                  deskripsi={limbah.deskripsi}
                />
              ))
            )}
          </div>
          {/* <Pagination /> */}
        </div>
      </div>

      {/* Modal Component */}
      <TambahLimbah isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
