import { useEffect, useState } from "react";
import ButtonHref from "../../components/Button/ButtonHref";
import CardLimbah from "../../components/Card/CardLimbah";
import Pagination from "../../components/Pagination/Pagination";
import ImageImport from "../../data/ImageImport";
import TambahLimbah from "../../components/Modal/TambahLimbah";

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
    // Ambil data limbah dari backend
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/limbah"); // Sesuaikan URL dengan backend Anda
        const result = await response.json();
        if (response.ok) {
          setLimbahList(result.data);
        } else {
          console.error(result.msg);
        }
      } catch (error) {
        console.error("Error fetching limbah data:", error);
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
                      ? `http://localhost:3000/uploads/${limbah.gambar}`
                      : "/default-image.jpg"
                  } // Gambar default jika tidak ada
                  judul={limbah.nama_limbah}
                  deskripsi={limbah.deskripsi}
                />
              ))
            )}
          </div>
          <Pagination />
        </div>
      </div>

      {/* Modal Component */}
      <TambahLimbah isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
