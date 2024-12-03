import { useState } from "react";
import ButtonHref from "../../components/Button/ButtonHref";
import DetailHasilOlahan from "../../components/Modal/DetailHasilOlahan"; // Use DetailHasilOlahan

export default function CardOlahan(props) {
  const { img, judul, deskripsi, id } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="bg-white rounded-md border-2 drop-shadow-md shadow-gray-400 overflow-hidden mx-2 h-[480px]">
        <div className="w-full">
          <img
            className="px-3 py-3 w-full h-[20rem] object-cover"
            src={img}
            alt=""
          />
        </div>
        <p className="px-3 font-semibold text-lg">{judul}</p>
        <p className="px-3 text-base line-clamp-2">{deskripsi}</p>
        <div className="w-full px-10 pt-2 flex justify-center">
          <ButtonHref
            href="#"
            text="Lihat"
            variant="primary"
            onClick={handleOpenModal} // Open modal on button click
          />
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <DetailHasilOlahan
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          idHasil={id}
          title={judul}
          imgs={img}
          deskripsi={deskripsi}
        />
      )}
    </div>
  );
}
