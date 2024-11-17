import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonSubmit from "../../components/Button/ButtonSubmit";
import { showAlert } from "../SweetAlert/SweetAlert";
import axios from "axios";
import config from "../../config/config";
import Loading from "../../components/Loading/Loading.jsx";

export default function TableUser({ users }) {
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
  const [selectedUser, setSelectedUser] = useState(null);

  // fungsi
  const handelUpdateAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validasi data user
    if (
      !selectedUser ||
      !selectedUser.id ||
      !selectedUser.email ||
      !selectedUser.nama_lengkap
    ) {
      return showAlert({
        title: "Oppss",
        text: "Data tidak sesuai",
        iconType: "error",
        didClose: () => {
          // Redirect setelah alert ditutup
          navigate("/dashboard-admin");
          window.location.reload();
        },
      });
    }
    // fungsi
    try {
      await axios.put(`${config.apiUrl}/updateadmin/${selectedUser.id}`, {
        email: selectedUser.email,
        nama_lengkap: selectedUser.nama_lengkap,
      });

      showAlert({
        title: "Hore",
        text: "Admin Berhasil Diupdate",
        iconType: "success",
        didClose: () => {
          // Redirect setelah alert ditutup
          navigate("/dashboard-admin");
          window.location.reload();
        },
      });
    } catch (error) {
      showAlert({
        title: "Oppss",
        text: `Admin Gagal Diupdate, ${error}`,
        iconType: "error",
        didClose: () => {
          // Redirect setelah alert ditutup
          navigate("/dashboard-admin");
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
  const handelHapusAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // fungsi
    try {
      await axios.delete(`${config.apiUrl}/deleteadmin/${selectedUser.id}`);

      showAlert({
        title: "Hore",
        text: "Admin Berhasil Dihapus",
        iconType: "success",
        didClose: () => {
          // Redirect setelah alert ditutup
          navigate("/dashboard-admin");
          window.location.reload();
        },
      });
    } catch (error) {
      showAlert({
        title: "Oppss",
        text: `Admin Gagal Dihapus, ${error}`,
        iconType: "error",
        didClose: () => {
          // Redirect setelah alert ditutup
          navigate("/dashboard-admin");
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
              Email
            </th>
            <th className="py-3 px-6 text-left text-gray-700 font-medium">
              Nama Lengkap
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
          {users.map((user, index) => (
            <tr key={user.id} className="border">
              <td className="py-3 px-6 text-gray-600">{index + 1}</td>
              <td className="py-3 px-6 text-gray-600">{user.email}</td>
              <td className="py-3 px-6 text-gray-600">{user.nama_lengkap}</td>
              <td className="py-3 px-6 text-gray-600">
                {/* Format Date */}
                {new Date(user.created_at).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </td>
              <td className="py-3 px-6 text-gray-600">
                {/* Format Date */}
                {new Date(user.updated_at).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </td>

              <td className="py-3 px-6 text-gray-600">
                <button
                  className="px-3 py-1 text-sm m-1 text-white bg-green-500 rounded hover:bg-green-600 mr-2"
                  onClick={() => {
                    setSelectedUser(user);
                    handleModalUpdate();
                  }}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 text-sm m-1 text-white bg-red-500 rounded hover:bg-red-600"
                  onClick={() => {
                    setSelectedUser(user);
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
              <h3 className="text-lg font-bold">Update Admin</h3>

              <button onClick={handleCloseModalUpdate}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Form */}
            <div className="mt-6">
              <form onSubmit={handelUpdateAdmin}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-stroke-gray text-black rounded-lg block w-full p-2.5 focus:ring-0 focus:outline-none focus:border-main-green"
                    placeholder="Masukan email"
                    value={selectedUser?.email || ""}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-black">
                    Nama Lengkap
                  </label>
                  <input
                    type="nama_lengkap"
                    name="nama_lengkap"
                    id="nama_lengkap"
                    className="bg-gray-50 border border-stroke-gray text-black rounded-lg block w-full p-2.5 focus:ring-0 focus:outline-none focus:border-main-green"
                    placeholder="Masukan nama lengkap"
                    value={selectedUser?.nama_lengkap || ""}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        nama_lengkap: e.target.value,
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
              <h3 className="text-lg font-bold">Hapus Admin</h3>

              <button onClick={handleCloseModalHapus}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Form */}
            <div className="mt-6">
              <h1 className="text-center my-5">
                Apakah anda yakin menghapus{" "}
                <span className="font-semibold">
                  {selectedUser.nama_lengkap}
                </span>
              </h1>

              <form onSubmit={handelHapusAdmin}>
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