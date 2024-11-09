import ButtonHref from "../../components/Button/ButtonHref";
import ImageImport from "../../data/ImageImport";

const DetailLimbah = ({ isOpen, onClose, title, jumlah, date, deskripsi }) => {
  if (!isOpen) return null;

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
            src={ImageImport.sekam}
            className="w-1/3 object-cover bg-gray-400 rounded-md"
            alt="Limbah"
          />
          <div className="ml-4 w-full">
            <input
              type="text"
              className="h-14 w-full mb-6 rounded-lg border border-gray-300 p-2"
              value={title}
            />
            <input
              type="number"
              className="h-14 w-full mb-6 rounded-lg border border-gray-300 p-2"
              value={jumlah}
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

        <div className="flex">
          <ButtonHref text="Perbaharui" variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default DetailLimbah;
