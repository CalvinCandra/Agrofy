import { useState } from "react";
import ButtonHref from "../../components/Button/ButtonHref";
import DetailLimbah from "../../components/Modal/DetailLimbah";

export default function CardLimbah(props) {
  const { img, judul, deskripsi } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="bg-white rounded-md border-black border-2 h-[370px] drop-shadow-sm overflow-hidden ">
        <img className="px-3 py-3 w-full h-[60%]" src={img} alt="" />
        <p className="px-3 font-semibold text-lg">{judul}</p>
        <p className="px-3 text-base">{deskripsi}</p>
        <div className="w-full h-[16%] px-10 pt-2 flex justify-center ">
          <ButtonHref
            href="#"
            text="Lihat"
            variant="primary"
            onClick={handleOpenModal} // Open modal on button click
          />
        </div>
      </div>
      {/* Modal Component */}
      <DetailLimbah
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Sekam"
        jumlah={12}
        deskripsi="Ini limbah padi"
      />
    </div>
  );
}
