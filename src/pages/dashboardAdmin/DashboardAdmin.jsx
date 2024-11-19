import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import TableUser from "../../components/Tabledash/TableUser";
import Pagination from "../../components/Pagination/Pagination";
import axios from "axios";
import config from "../../config/config";
import Search from "../../components/Search/Search";
import ButtonHref from "../../components/Button/ButtonHref";
import ButtonSubmit from "../../components/Button/ButtonSubmit";
import { showAlert } from "../../components/SweetAlert/SweetAlert";
import Loading from "../../components/Loading/Loading.jsx";

export default function DashboardAdmin() {
  // State untuk loading
  const [loading, setLoading] = useState(false);
  // navigation
  const navigate = useNavigate();
  // menu bar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Set Modal Tambah
  const [showModalTambah, setShowModalTambah] = useState(false);

  // set variabel
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalData: 0,
  });
  const [nama_lengkap, setNamaLengkap] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpasswordInput] = useState("");

  // =================================================================================================== Fungsi GET API
  const fetchUsers = async (page = 1) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${config.apiUrl}/getadmin?page=${page}&limit=10`
      );
      const data = response.data;
      setUsers(data.data); // Set data user dari respon api untuk tabel
      setPagination(data.pagination); // Set data pagination dari respon api untuk pagination
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // =================================================================================================== Tambah
  const handelTambahAdmin = async (e) => {
    e.preventDefault();

    try {
      // get url api register
      await axios.post(`${config.apiUrl}/register`, {
        nama_lengkap,
        email,
        password,
        role: "admin",
      });

      showAlert({
        title: "Hore",
        text: "Admin Berhasil Ditambah",
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
        text: `Admin Gagal Ditambah, ${error}`,
        iconType: "error",
        didClose: () => {
          // Redirect setelah alert ditutup
          navigate("/dashboard-admin");
          window.location.reload();
        },
      });
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-60 flex-shrink-0 h-full hidden lg:block">
        <SidebarAdmin />
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform bg-gray-800 w-60 h-full transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <SidebarAdmin />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 overflow-y-auto h-full pt-24">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <div className="w-full">
            <button
              className="lg:hidden text-gray-800 bg-gray-200 p-2 rounded-md"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-gray-700 py-3">
              Dashboard Admin
            </h1>

            <div className="my-3">
              <Search />
            </div>

            <div className="mt-3 py-5">
              <ButtonHref
                href="#"
                text="Tambah Admin"
                variant="primary"
                onClick={() => setShowModalTambah(true)}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <TableUser users={users} />
        </div>
        <div className="mt-5">
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            totalData={pagination.totalData}
            fetchData={fetchUsers} // fetchUsers untuk dashboard pengguna
          />
        </div>
      </div>

      {/* Modal Tambah */}
      {showModalTambah && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg w-full max-w-lg mx-4 lg:mx-0 lg:max-w-xl overflow-y-auto max-h-[80vh]">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Tambah Admin</h3>

              <button onClick={() => setShowModalTambah(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Form untuk Komentar Baru */}
            <div className="mt-6">
              <form onSubmit={handelTambahAdmin}>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-black">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="nama_lengkap"
                    id="nama_lengkap"
                    className="bg-gray-50 border border-stroke-gray text-black rounded-lg block w-full p-2.5 focus:ring-0 focus:outline-none focus:border-main-green"
                    placeholder="Masukan nama lengkap"
                    value={nama_lengkap}
                    onChange={(e) => setNamaLengkap(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-stroke-gray text-black rounded-lg block w-full p-2.5 focus:ring-0 focus:outline-none focus:border-main-green"
                    placeholder="Masukan password"
                    value={password}
                    onChange={(e) => setpasswordInput(e.target.value)}
                    required
                  />
                </div>

                <div className="flex justify-end mt-4">
                  <ButtonSubmit text="Tambah" variant="primary" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Overlay Loading */}
      {loading && <Loading />}
    </div>
  );
}
