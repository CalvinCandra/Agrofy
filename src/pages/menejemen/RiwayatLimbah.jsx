import React, { useEffect, useState } from 'react';
import ButtonHref from "../../components/Button/ButtonHref";
import config from "../../config/config";
import axios from 'axios';

export default function RiwayatLimbah() {
  const [riwayatData, setRiwayatData] = useState([]);
  const [error, setError] = useState(null);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("id-ID");
  };

  useEffect(() => {
    const fetchRiwayatData = async () => {
      try {
        const token = sessionStorage.getItem("Token"); // Ambil token dari sessionStorage

        const response = await axios.get(`${config.apiUrl}/riwayat`, {
          headers: {
            Authorization: `${token}`, // Menambahkan token ke header Authorization
          },
        });

        setRiwayatData(response.data); // Menyimpan data yang diterima
      } catch (error) {
        setError('Terjadi kesalahan saat mengambil data riwayat.');
        console.error(error);
      }
    };

    fetchRiwayatData();
  }, []);

  return (
    <div>
      <div className="bg-dashboard w-full h-auto rounded-md py-5 px-5 space-y-5">
        <div className="bg-white w-full h-[100%] rounded-md">
          <div className="lg:p-5">
            <div className="flex justify-between pb-10">
              <h1 className="font-bold text-3xl py-2">Riwayat</h1>
            </div>
            <div className="flex lg:flex-row sm:flex-col  ">
            <div className="flex lg:flex-row sm:flex-col lg: space-x-3 pb-10 lg:w-[70%]">
              <div className="lg:w-[20%]">
              <input
              type="date"
              className="h-14 w-full rounded-lg border border-gray-300 p-2"
              placeholder="Masukkan Tanggal Masuk"
            />
              </div>
              <div className="lg:w-[20%]">
              <input
              type="date"
              className="h-14 w-full rounded-lg border border-gray-300 p-2"
              placeholder="Masukkan Tanggal Masuk"
            />
              </div>
              <p className="py-1">Pilih tanggal periode awal dan akhir lalu klik cetak laporan</p>
            
            
            </div>
          </div>
            <div className="bg-main-green overflow-x-auto rounded-lg">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-center text-gray-700 font-semibold border-b">Tenggat</th>
                    <th className="px-4 py-3 text-center text-gray-700 font-semibold border-b">Limbah</th>
                    <th className="px-4 py-3 text-center text-gray-700 font-semibold border-b">Target</th>
                    <th className="px-4 py-3 text-center text-gray-700 font-semibold border-b">Status</th>
                    <th className="px-4 py-3 text-center text-gray-700 font-semibold border-b">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {riwayatData
                    .filter((item) => item.status !== 'proses') // Filter untuk status selain 'proses'
                    .map((item) => (
                      <tr key={item.riwayat_id}>
                        <td className="px-4 py-3 border-b text-gray-600">{formatDate(item.tgl_selesai_pengelolaan)}</td>
                        <td className="px-4 py-3 border-b text-gray-600">{item.nama_limbah}</td>
                        <td className="px-4 py-3 border-b text-gray-600">{item.target_olahan}</td>
                        <td className="px-4 py-3 border-b">
                          <span
                            className={`px-2 py-1 text-sm font-medium rounded-xl ${
                              item.status === 'selesai'
                                ? 'text-green-800 bg-green-200'
                                : item.status === 'gagal'
                                ? 'text-red-800 bg-red-200'
                                : 'text-yellow-800 bg-yellow-200'
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 border-b flex justify-center space-x-2">
                          <button className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-xl hover:bg-green-600">
                            Lihat
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>

              </table>
              
            </div>
            <div className="py-10 overflow-hidden">
              <ButtonHref href="#" text="Cetak Laporan" variant="primary" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
