import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import ButtonHref from "../../components/Button/ButtonHref";
import config from "../../config/config";
import ImageImport from "../../data/ImageImport";

export default function RiwayatLimbah() {
  const [riwayatData, setRiwayatData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("id-ID");
  };

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
      console.error("Terjadi kesalahan saat mengambil data riwayat.", error);
    }
  };

  const generatePDF = (filteredData) => {
    const doc = new jsPDF();

    // Tambahkan logo
    // Tambahkan logo
    doc.addImage(ImageImport.logo, "PNG", 75, 10, 50, 10);


    // Tambahkan judul laporan
    doc.setFontSize(16);
    doc.text("Laporan Riwayat Limbah", 100, 30, { align: "center" });

    // Tambahkan periode laporan
    doc.setFontSize(12);
    doc.text(`Periode: ${formatDate(startDate)} - ${formatDate(endDate)}`, 100, 40, { align: "center" });

    // Tambahkan tabel
    const tableColumn = ["Tenggat", "Limbah", "Target", "Status"];
    const tableRows = filteredData.map((item) => [
      formatDate(item.tgl_selesai_pengelolaan),
      item.nama_limbah,
      item.target_olahan,
      item.status,
    ]);

    doc.autoTable({
      startY: 50,
      head: [tableColumn],
      body: tableRows,
      styles: { halign: "center" },
    });

    // Simpan file PDF
    doc.save(`Laporan_Riwayat_Limbah_${startDate}_${endDate}.pdf`);
  };

  const handlePrint = () => {
    if (!startDate || !endDate) {
      alert("Masukkan tanggal awal dan akhir terlebih dahulu!");
      return;
    }

    const filteredData = riwayatData.filter((item) => {
      const itemDate = new Date(item.tgl_selesai_pengelolaan);
      return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
    });

    generatePDF(filteredData);
  };

  useEffect(() => {
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
            <div className="flex lg:flex-row sm:flex-col space-x-3 pb-10">
              <div>
                <input
                  type="date"
                  className="h-14 w-full rounded-lg border border-gray-300 p-2"
                  placeholder="Tanggal Awal"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  className="h-14 w-full rounded-lg border border-gray-300 p-2"
                  placeholder="Tanggal Akhir"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
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
                  </tr>
                </thead>
                <tbody>
                  {riwayatData.map((item) => (
                    <tr key={item.riwayat_id}>
                      <td className="px-4 py-3 border-b text-gray-600">{formatDate(item.tgl_selesai_pengelolaan)}</td>
                      <td className="px-4 py-3 border-b text-gray-600 text-center">{item.nama_limbah}</td>
                      <td className="px-4 py-3 border-b text-gray-600 text-center">{item.target_olahan}</td>
                      <td className="px-4 py-3 border-b">
                        <span
                          className={`px-2 py-1 text-sm font-medium flex justify-center  rounded-xl ${
                            item.status === "selesai"
                              ? "text-green-800 bg-green-200"
                              : item.status === "gagal"
                              ? "text-red-800 bg-red-200"
                              : "text-yellow-800 bg-yellow-200"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
            <div className="py-5">
            <ButtonHref
                href="#"
                text="Cetak Laporan"
                variant="primary"
                onClick={handlePrint}
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
