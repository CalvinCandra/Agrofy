// src/components/ModalNotif.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config/config"; // Import config untuk API

const ModalNotif = ({ isModalVisibleNotif, toggleModalNotif }) => {
  const [notifications, setNotifications] = useState([]);

  // Fungsi untuk memformat tanggal menjadi DD-MM-YYYY
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0'); // Menambahkan leading zero jika kurang dari 10
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Menambahkan leading zero pada bulan
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Mengambil data notifikasi dari API
  useEffect(() => {
    if (isModalVisibleNotif) {
      // Ambil token dari sessionStorage
      const token = sessionStorage.getItem("Token");
      if (!token) {
        console.error("Token tidak ditemukan. Silakan login ulang.");
        return;
      }

      // Menggunakan axios untuk mengambil data dengan header Authorization
      axios
        .get(`${config.apiUrl}/notifikasi`, {
          headers: {
            Authorization: `${token}`, // Menambahkan token ke header Authorization
          },
        })
        .then((response) => {
          if (response.data.notifications) {
            setNotifications(response.data.notifications);
          }
        })
        .catch((error) => {
          console.error("Error fetching notifications:", error);
        });
    }
  }, [isModalVisibleNotif]);

  return (
    isModalVisibleNotif && (
      <div className="bg-white shadow-lg rounded-lg fixed z-50 p-2 top-[17.5rem] md:top-[4rem] md:right-10 w-full md:w-[35%] h-[45%]">
        <h1 className="border-b-2 py-3 text-lg font-semibold">Notifikasi</h1>
        <div className="w-full flex flex-col justify-between text-black mt-2">
          {notifications.length > 0 ? (
            notifications.map((notif, index) => (
              <div key={index} className="border-b border-t flex justify-between items-center py-2">
                <div className="w-1/2">
                  <p className="text-sm">
                    <span className="font-bold">Limbah: </span>{notif.nama_limbah}
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">Olahan: </span>{notif.target_olahan}
                  </p>
                  <p className="my-2 text-sm">
                    Olahan anda anda selesai hari ini, besok tambah catatan, tenggat atau selesaikan.
                  </p>
                  <p className="text-gray-400 text-sm">{formatDate(notif.tgl_selesai)}</p> {/* Format tanggal */}
                </div>
                <div className="w-[30%] overflow-hidden">
                  <img src={`${config.apiUrlImage}/uploads/${notif.gambar}`} alt="Gambar Limbah" />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No notifications found for today.</p>
          )}
        </div>
      </div>
    )
  );
};

export default ModalNotif;
