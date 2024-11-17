import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonSubmit from "../../components/Button/ButtonSubmit";
import { showAlert } from "../SweetAlert/SweetAlert";
import axios from "axios";
import config from "../../config/config";
import Loading from "../../components/Loading/Loading.jsx";

export default function TableKategori({ kategoris }) {
  // ============================================================================================= Loading
  // State untuk loading
  const [loading, setLoading] = useState(false);

  // ================================================================================================ navigation
  const navigate = useNavigate();

  // =================================================================================================== Update
  // ================================== Set Modal
  const [showModalUpdate, setShowModalUpdate] = useState(false);

  const handleModalUpdate = () => {
    setShowModalUpdate(true); // Show modal on comment click
  };

  const handleCloseModalUpdate = () => {
    setShowModalUpdate(false); // Close modal when done
  };
  // ================================= fungsi backend
  // set variabel
  const [selectKategori, setSelectKategori] = useState(null);

  // fungsi
  const handelUpdateKategori = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validasi data user
    if (
      !selectKategori ||
      !selectKategori.id ||
      !selectKategori.nama_kategori
    ) {
      return showAlert({
        title: "Oppss",
        text: "Data tidak sesuai",
        iconType: "error",
        didClose: () => {
          // Redirect setelah alert ditutup
          navigate("/dashboard-admin/kategori");
          window.location.reload();
        },
      });
    }

    // fungsi
    try {
      await axios.put(`${config.apiUrl}/updatekategori/${selectKategori.id}`, {
        nama_kategori: selectKategori.nama_kategori,
      });

      showAlert({
        title: "Hore",
        text: "Kategori Berhasil Diupdate",
        iconType: "success",
        didClose: () => {
          // Redirect setelah alert ditutup
          navigate("/dashboard-admin/kategori-admin");
          window.location.reload();
        },
      });
    } catch (error) {
      showAlert({
        title: "Oppss",
        text: `Kategori Gagal Diupdate, ${error}`,
        iconType: "error",
        didClose: () => {
          // Redirect setelah alert ditutup
          navigate("/dashboard-admin/kategori-admin");
          window.location.reload();
        },
      });
    } finally {
      setLoading(false);
    }
  };

  // =================================================================================================== Hapus
  // ================================== Set Modal
  const [showModalHapus, setShowModalHapus] = useState(false);

  const handleModalHapus = () => {
    setShowModalHapus(true); // Show modal on comment click
  };

  const handleCloseModalHapus = () => {
    setShowModalHapus(false); // Close modal when done
  };

  // fungsi
  const handelHapusKategori = async (e) => {
    e.preventDefault();
    setLoading(true);

    // fungsi
    try {
      await axios.delete(
        `${config.apiUrl}/deletekategori/${selectKategori.id}`
      );

      showAlert({
        title: "Hore",
        text: "Kategori Berhasil Dihapus",
        iconType: "success",
        didClose: () => {
          // Redirect setelah alert ditutup
          navigate("/dashboard-admin/kategori-admin");
          window.location.reload();
        },
      });
    } catch (error) {
      showAlert({
        title: "Oppss",
        text: `Kategori Gagal Dihapus, ${error}`,
        iconType: "error",
        didClose: () => {
          // Redirect setelah alert ditutup
          navigate("/dashboard-admin/kategori-admin");
          window.location.reload();
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left text-gray-700 font-medium">
              No
            </th>
            <th className="py-3 px-6 text-left text-gray-700 font-medium">
              Nama Kategori
            </th>
            <th className="py-3 px-6 text-left text-gray-700 font-medium">
              Tanggal Dibuat
            </th>
            <th className="py-3 px-6 text-left text-gray-700 font-medium">
              Tanggal Diupdate
            </th>
            <th className="py-3 px-6 text-left text-gray-700 font-medium">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Perulangan */}
          {kategoris.map((kategori, index) => (
            <tr key={kategori.id} className="border">
              <td className="py-3 px-6 text-gray-600">{index + 1}</td>
              <td className="py-3 px-6 text-gray-600">
                {kategori.nama_kategori}
              </td>
              <td className="py-3 px-6 text-gray-600">
                {/* Format Date */}
                {new Date(kategori.created_at).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </td>
              <td className="py-3 px-6 text-gray-600">
                {/* Format Date */}
                {new Date(kategori.updated_at).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </td>

              <td className="py-3 px-6 text-gray-600">
                <button
                  className="px-3 py-1 text-sm m-1 text-white bg-green-500 rounded hover:bg-green-600 mr-2"
                  onClick={() => {
                    setSelectKategori(kategori);
                    handleModalUpdate();
                  }}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 text-sm m-1 text-white bg-red-500 rounded hover:bg-red-600"
                  onClick={() => {
                    setSelectKategori(kategori);
                    handleModalHapus();
                  }}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Update */}
      {showModalUpdate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg w-full max-w-lg mx-4 lg:mx-0 lg:max-w-xl overflow-y-auto max-h-[80vh]">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Update Kategori</h3>

              <button onClick={handleCloseModalUpdate}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Form */}
            <div className="mt-6">
              <form onSubmit={handelUpdateKategori}>
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-black">
                    Nama Kategori
                  </label>
                  <input
                    type="nama_lengkap"
                    name="nama_lengkap"
                    id="nama_lengkap"
                    className="bg-gray-50 border border-stroke-gray text-black rounded-lg block w-full p-2.5 focus:ring-0 focus:outline-none focus:border-main-green"
                    placeholder="Masukan nama kategori"
                    value={selectKategori?.nama_kategori || ""}
                    onChange={(e) =>
                      setSelectKategori({
                        ...selectKategori,
                        nama_kategori: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="flex justify-end mt-4">
                  <ButtonSubmit text="Edit" variant="primary" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal Hapus */}
      {showModalHapus && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg w-full max-w-lg mx-4 lg:mx-0 lg:max-w-lg overflow-y-auto max-h-[80vh]">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Hapus Kategori</h3>

              <button onClick={handleCloseModalHapus}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Form */}
            <div className="mt-6">
              <h1 className="text-center my-5">
                Apakah anda yakin menghapus{" "}
                <span className="font-semibold">
                  {selectKategori.nama_kategori}
                </span>
              </h1>

              <form onSubmit={handelHapusKategori}>
                <div className="flex justify-center mt-4">
                  <div className="w-40 me-2">
                    <ButtonSubmit text="Batal" variant="secondary" />
                  </div>
                  <div className="w-40">
                    <ButtonSubmit text="Hapus" variant="primary" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Overlay Loading */}
      {loading && <Loading />}
    </>
  );
}