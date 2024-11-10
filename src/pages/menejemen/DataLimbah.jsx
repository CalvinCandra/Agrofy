import { useState } from "react";
import ButtonHref from "../../components/Button/ButtonHref";
import CardLimbah from "../../components/Card/CardLimbah";
import Pagination from "../../components/Pagination/Pagination";
import ImageImport from "../../data/ImageImport";
import TambahLimbah from "../../components/Modal/TambahLimbah";

export default function DataLimbah() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

          {/* data limbah */}
          <div className="limbah-box pt-16 grid lg:grid-cols-3 sm:grid-cols-1 gap-16 pb-28">
            <CardLimbah
              img={ImageImport.sekam}
              judul="Jerami"
              deskripsi="Limbah tanaman padi yang sudah kering dan itu"
            />
          </div>
          <Pagination />
        </div>
      </div>
      {/* Modal Component */}
      <TambahLimbah isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
