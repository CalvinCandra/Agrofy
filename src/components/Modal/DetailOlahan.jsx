import ButtonHref from "../Button/ButtonHref";
import ImageImport from "../../data/ImageImport";

const DetailOlahan = ({ isOpen, onClose, title, jumlah, date, deskripsi }) => {
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
            src={ImageImport.jerami}
            className="w-1/3 object-cover bg-gray-400 rounded-md"
            alt="Limbah"
          />
          <div className="ml-4 w-full">
            {/* Nama Limbah Dropdown */}
            
            <select
              className="h-14 w-full mb-6 rounded-lg border border-gray-300 p-2"disabled
            >
              <option value="jerami">Jerami</option>
              <option value="Pilih Limbah">Pilih Limbah</option>
              <option value="sekam">Sekam</option>
            </select>
            <input
              type="number"
              className="h-14 w-full mb-6 rounded-lg border border-gray-300 p-2"
              placeholder="Masukkan Jumlah"
              value={jumlah}
            />
            <input
              type="date"
              className="h-14 w-full rounded-lg border border-gray-300 p-2"
              placeholder="Masukkan Tanggal Masuk"
              defaultValue="2024-11-12"
              disabled
            />

          </div>
        </div>

        <div className="mb-4">
          <textarea
            name="deskripsi"
            className="w-full h-32 border border-gray-300 rounded-lg p-2"
            placeholder="Deskripsi"
            value={deskripsi}
          />
        </div>

        <div className="flex lg:justify-between lg:space-x-3 lg:w-full ">
        <div className="h-full w-[50%] pt-6">
          <textarea
            name="catatan"
            className="w-full h-[210px] border border-gray-300 rounded-lg p-2"
            placeholder="Masukkan Catatan"
            value="Limbah hasil tanaman padi yang kering"
          />
        </div>
        <div className="pb-4 w-[50%]">
          <label className="block text-gray-700">Periode Mulai</label>
          <input
            type="datetime-local"
            className="h-14 w-full rounded-lg border border-gray-300 p-2 mb-2"
            placeholder="Periode Mulai"
            defaultValue="2024-11-10T10:00"
          />
          <label className="block text-gray-700">Periode Selesai</label>
          <input
            type="datetime-local"
            className="h-14 w-full rounded-lg border border-gray-300 p-2"
            placeholder="Periode Selesai"
            defaultValue="2024-11-12T08:00"
          />
          <div className="flex pt-5">
          <ButtonHref text="+ Tambah" variant="primary" />
        </div>
        </div>
        </div>

        <div className="flex">
          <ButtonHref text="Tambah" variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default DetailOlahan;
