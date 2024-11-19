import { useState } from "react";
import VideoImport from "../../data/VideoImport";

export default function TableVideo() {
  return (
    <table className="min-w-full table-auto border-collapse">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-3 px-6 text-left text-gray-700 font-medium">No</th>
          <th className="py-3 px-6 text-left text-gray-700 font-medium">
            Nama Admin
          </th>
          <th className="py-3 px-6 text-left text-gray-700 font-medium">
            Judul Video
          </th>
          <th className="py-3 px-6 text-left text-gray-700 font-medium">
            Video
          </th>
          <th className="py-3 px-6 text-left text-gray-700 font-medium">
            Tanggal Upload
          </th>
          <th className="py-3 px-6 text-left text-gray-700 font-medium">
            Tanggal Update
          </th>
          <th className="py-3 px-6 text-left text-gray-700 font-medium">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="py-3 px-6 text-gray-600">1</td>
          <td className="py-3 px-6 text-gray-600">Willy Calvin Candra Lay</td>
          <td className="py-3 px-6 text-gray-600">Cuan Dari Limbah Padi</td>
          <td className="py-3 px-6 text-gray-600">
            {/* Link untuk gambar */}
            <a
              href={VideoImport.video}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              lihat Video
            </a>
          </td>
          <td className="py-3 px-6 text-gray-600">16 November 2024</td>
          <td className="py-3 px-6 text-gray-600">16 November 2024</td>
          <td className="py-3 px-6 text-gray-600">
            <button className="px-3 py-1 m-1 text-sm text-white bg-[#FFB82E] rounded hover:bg-green-600 mr-2">
              Lihat Detail
            </button>
            <button className="px-3 py-1 m-1 text-sm text-white bg-green-500 rounded hover:bg-green-600 mr-2">
              Edit
            </button>
            <button className="px-3 py-1 m-1 text-sm text-white bg-red-500 rounded hover:bg-red-600">
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
