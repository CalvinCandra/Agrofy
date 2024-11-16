import { useState } from "react";

export default function TableUser() {
  return (
    <table className="min-w-full table-auto border-collapse">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-3 px-6 text-left text-gray-700 font-medium">No</th>
          <th className="py-3 px-6 text-left text-gray-700 font-medium">
            Email
          </th>
          <th className="py-3 px-6 text-left text-gray-700 font-medium">
            Nama Lengkap
          </th>
          <th className="py-3 px-6 text-left text-gray-700 font-medium">
            Tanggal Dibuat
          </th>
          <th className="py-3 px-6 text-left text-gray-700 font-medium">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="py-3 px-6 text-gray-600">1</td>
          <td className="py-3 px-6 text-gray-600">wwwww@gmail.com</td>
          <td className="py-3 px-6 text-gray-600">Willy Calvin Candra Lay</td>
          <td className="py-3 px-6 text-gray-600">16 November 2024</td>
          <td className="py-3 px-6 text-gray-600">
            <button className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600 mr-2">
              Edit
            </button>
            <button className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600">
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
