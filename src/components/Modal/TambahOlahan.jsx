import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import ButtonHref from "../../components/Button/ButtonHref";
import config from "../../config/config";
import { showAlert } from "../../components/SweetAlert/SweetAlert.js";

const PengolahanLimbah = ({ isOpen, onClose }) => {
  const token = sessionStorage.getItem("Token");
  const [limbahList, setLimbahList] = useState([]);
  const [selectedLimbah, setSelectedLimbah] = useState(null);
  const [fields, setFields] = useState([
    { id: 1, catatan: "", periodeMulai: "", periodeSelesai: "" },
  ]);
  const [formData, setFormData] = useState({
    limbah_id: "",
    target_olahan: "",
    tgl_mulai: new Date().toISOString().slice(0, 10), // Automatically set to current date (without time)
    tgl_selesai: "",
    status: "proses",
  });

  // Fetch data limbah saat component mount
  useEffect(() => {
    const fetchLimbah = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/limbah`, {
          headers: {
            Authorization: `${token}`, // Include token in headers
          },
        });

        setLimbahList(response.data.data);
      } catch (error) {
        console.error("Error fetching limbah data:", error);
      }
    };

    fetchLimbah();
  }, [token]);

  // Update tgl_mulai setiap kali modal dibuka
  useEffect(() => {
    if (isOpen) {
      setFormData((prevData) => ({
        ...prevData,
        tgl_mulai: new Date().toISOString().slice(0, 10), // Update tgl_mulai saat modal dibuka tanpa jam
      }));
    }
  }, [isOpen]);

  const handleAddField = () => {
    setFields([
      ...fields,
      {
        id: fields.length + 1,
        catatan: "",
        periodeMulai: "",
        periodeSelesai: "",
      },
    ]);
  };

  const handleFieldChange = (index, fieldName, value) => {
    const updatedFields = fields.map((field, i) =>
      i === index ? { ...field, [fieldName]: value } : field
    );
    setFields(updatedFields);
  };

  const handleRemoveField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!formData.target_olahan || !formData.tgl_selesai) {
      showAlert({
        title: "Gagal",
        text: "Target olahan dan tanggal selesai wajib diisi",
        iconType: "error",
        didClose: onClose, // Tutup modal setelah alert ditutup
      });
      return; // Jangan lanjutkan eksekusi jika validasi gagal
    }

    const payload = {
      ...formData,
      catatanPeriode: fields.map((field) => ({
        tgl_mulai: field.periodeMulai,
        tgl_selesai: field.periodeSelesai,
        catatan: field.catatan,
      })),
    };

    try {
      const response = await axios.post(`${config.apiUrl}/olah`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`, // Include token in headers
        },
      });

      if (response.status === 200) {
        showAlert({
          title: "Berhasil",
          text: "Olahan berhasil ditambahkan!",
          iconType: "success",
          didClose: onClose, // Tutup modal setelah alert ditutup
        });
        setTimeout(() => {
          window.location.reload(); // Refresh halaman setelah 4 detik
        }, 2500);
      } else {
        showAlert({
          title: "Gagal",
          text: "Gagal menambahkan pengolahan limbah",
          iconType: "error",
          didClose: onClose, // Tutup modal setelah alert ditutup
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showAlert({
        title: "Gagal",
        text: "Isi form terlebih dahulu",
        iconType: "error",
        didClose: onClose, // Tutup modal setelah alert ditutup
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-md p-5 w-full mx-1 lg:w-[60%] shadow-lg relative overflow-y-auto h-[40rem]">
        <button
          className="absolute top-2 right-3 text-gray-600 hover:text-gray-800"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold mb-4">Tambah Pengolahan Limbah</h2>
        <div className="lg:flex justify-between">
          {/* Image Preview */}
          {selectedLimbah && (
            <div className="mb-4 w-full">
              <img
                src={`${config.apiUrlImage}/uploads/${selectedLimbah.gambar}`}
                alt="Preview Limbah"
                className="w-[60%] object-cover rounded-md"
              />
            </div>
          )}
          {/* Dropdown Limbah */}
          <div className="mb-4 w-full">
            <select
              className="h-14 w-full rounded-lg border border-gray-300 p-2"
              onChange={(e) => {
                const selected = limbahList.find(
                  (item) => item.id === parseInt(e.target.value)
                );
                setSelectedLimbah(selected);
                setFormData({ ...formData, limbah_id: e.target.value });
              }}
            >
              <option value="" hidden>
                Pilih Limbah
              </option>
              {limbahList.map((limbah) => (
                <option key={limbah.id} value={limbah.id}>
                  {limbah.nama_limbah}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Form Fields */}
        <div className="mb-4">
          <input
            type="text"
            className="h-14 w-full rounded-lg border border-gray-300 p-2"
            placeholder="Masukkan Target Olahan"
            onChange={(e) =>
              setFormData({ ...formData, target_olahan: e.target.value })
            }
          />
        </div>

        <p className="pb-2">Masukan Tanggal selesai Pengolahan</p>

        <div className="flex gap-4 mb-4">
          <input
            type="date" // Changed to date input to remove time
            className="h-14 w-full rounded-lg border border-gray-300 p-2 hidden"
            placeholder="Tanggal Mulai"
            value={formData.tgl_mulai}
            onChange={(e) =>
              setFormData({ ...formData, tgl_mulai: e.target.value })
            }
          />
          <input
            type="date"
            className="h-14 w-full rounded-lg border border-gray-300 p-2"
            placeholder="Tanggal Selesai"
            onChange={(e) =>
              setFormData({ ...formData, tgl_selesai: e.target.value })
            }
          />
        </div>

        <p className="pb-2">Masukan cacatan atau tahapan pengolahan</p>

        {/* Dynamic Fields for Periode */}
        {fields.map((field, index) => (
          <div key={field.id} className="lg:flex mb-4 lg:gap-2 flex-col">
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Catatan"
              value={field.catatan}
              onChange={(e) =>
                handleFieldChange(index, "catatan", e.target.value)
              }
            />
            <div>
              <input
                type="date"
                className="w-1/3 rounded-lg border border-gray-300 p-2 me-2"
                value={field.periodeMulai}
                onChange={(e) =>
                  handleFieldChange(index, "periodeMulai", e.target.value)
                }
              />
              <input
                type="date"
                className="w-1/3 rounded-lg border border-gray-300 p-2 me-2"
                value={field.periodeSelesai}
                onChange={(e) =>
                  handleFieldChange(index, "periodeSelesai", e.target.value)
                }
              />
              {fields.length > 1 && (
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleRemoveField(index)}
                >
                  Hapus
                </button>
              )}
            </div>
          </div>
        ))}

        <div className="mb-4">
          <button
            className="bg-main-green text-white px-4 py-2 rounded-lg hover:bg-main-green-hover"
            onClick={handleAddField}
          >
            + Tambah Catatan
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            className="bg-main-green text-white px-4 py-2 rounded-lg hover:bg-green-600"
            onClick={handleSubmit}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PengolahanLimbah;
