import { useState } from "react";
import DetailOlahan from "../../components/Modal/DetailOlahan";

export default function Tabledash() {
  const [isModalOpenolahan, setIsModalOpenolahan] = useState(false);

  const handleOpenModalolahan = () => {
    setIsModalOpenolahan(true);
  };

  const handleCloseModalolahan = () => {
    setIsModalOpenolahan(false);
  };

  return (
    <div>
      <div class="bg-main-green overflow-x-auto rounded-lg">
        <table class="min-w-full bg-white border border-gray-300 ">
          <thead>
            <tr>
              <th class="px-4 py-3 text-center text-gray-700 font-semibold border-b">
                Tenggat
              </th>
              <th class="px-4 py-3 text-center text-gray-700 font-semibold border-b">
                Limbah
              </th>
              <th class="px-4 py-3 text-center text-gray-700 font-semibold border-b">
                Target
              </th>
              <th class="px-4 py-3 text-center text-gray-700 font-semibold border-b">
                Status
              </th>
              <th class="px-4 py-3 text-center text-gray-700 font-semibold border-b">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3 border-b text-gray-600">26.11.2024</td>
              <td class="px-4 py-3 border-b text-gray-600">Jerami</td>
              <td class="px-4 py-3 border-b text-gray-600">Tirai</td>
              <td class="px-4 py-3 border-b">
                <span class="px-2 py-1  flex justify-center text-sm font-medium text-yellow-800 bg-yellow-200 rounded-xl">
                  Proses
                </span>
              </td>
              <td class="px-4 py-3 border-b flex justify-center space-x-2">
                <button
                  class="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-xl hover:bg-green-600"
                  onClick={handleOpenModalolahan}
                >
                  Lihat
                </button>
                <button class="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-xl hover:bg-red-600">
                  Hapus
                </button>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 border-b text-gray-600">27.11.2024</td>
              <td class="px-4 py-3 border-b text-gray-600">Umbi Talas</td>
              <td class="px-4 py-3 border-b text-gray-600">Pakan Sapi</td>
              <td class="px-4 py-3 border-b">
                <span class="px-2 py-1 text-sm font-medium flex justify-center text-red-800 bg-red-200 rounded-xl">
                  Gagal
                </span>
              </td>
              <td class="px-4 py-3 border-b flex justify-center space-x-2">
                <button class="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-xl hover:bg-green-600">
                  Lihat
                </button>
                <button class="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-xl hover:bg-red-600">
                  Hapus
                </button>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-gray-600">29.11.2024</td>
              <td class="px-4 py-3 text-gray-600">daun Cabai</td>
              <td class="px-4 py-3 text-gray-600">Kompos</td>
              <td class="px-4 py-3">
                <span class="px-2 py-1 text-sm font-medium text-green-800 flex justify-center bg-green-200 rounded-xl">
                  Sukses
                </span>
              </td>
              <td class="px-4 py-3 flex justify-center space-x-2">
                <button class="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-xl hover:bg-green-600">
                  Lihat
                </button>
                <button class="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-xl hover:bg-red-600">
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <DetailOlahan
        isOpen={isModalOpenolahan}
        onClose={handleCloseModalolahan}
        title="Sekam"
        jumlah={12}
        deskripsi="Ini limbah padi"
      />
    </div>
  );
}
