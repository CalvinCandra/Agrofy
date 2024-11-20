import axios from "axios";
import ButtonSubmit from "../../components/Button/ButtonSubmit";
import ImageImport from "../../data/ImageImport";
import React, { useState, useEffect } from "react";
import config from "../../config/config";
import { showAlert } from "../../components/SweetAlert/SweetAlert.js";
import Loading from "../../components/Loading/Loading.jsx";

export default function LoginPage() {
  // ============================================================================================= Loading
  // State untuk loading
  const [loading, setLoading] = useState(false);

  // ============================================================================================= Fungsi Input Password (eye)
  // State untuk menyimpan tipe input (password atau text)
  const [Password, setPassword] = useState(true);

  // Fungsi untuk toggle tipe input
  const togglePasswordVisibility = () => {
    setPassword((prevPassword) => !prevPassword);
  };

  //============================================================================================== fungsi Backend
  // set variabel
  const [email, setEmail] = useState("");
  const [password, setPasswordInput] = useState("");

  // fungsi
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${config.apiUrl}/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        // Set localStorage ke true saat login sukses
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("Nama", response.data.nama);
        sessionStorage.setItem("Email", response.data.email);
        sessionStorage.setItem("Foto", response.data.foto);
        sessionStorage.setItem("Role", response.data.role);

        // Tampilkan alert untuk login sukses
        showAlert({
          title: `Halo ${response.data.role}`,
          text: response.data.msg,
          iconType: "success",
          didClose: () => {
            // Redirect setelah alert ditutup
            window.location.href = "/";
          },
        });
      }
    } catch (error) {
      // Jika terjadi error di request atau jika status bukan 200
      if (error.response) {
        // Server mengembalikan response error (400 atau 404)
        showAlert({
          title: "Oppsss",
          text: error.response.data.msg,
          iconType: "error",
        });
      } else if (error.request) {
        // Tidak mendapatkan respons dari server (500)
        showAlert({
          title: "Oppsss",
          text: "Tidak ada respons dari server.",
          iconType: "error",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-bg-body">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold">
          <img
            className="w-40 lg:w-52 mr-2"
            src={ImageImport.logo}
            alt="logo"
          />
        </div>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-semibold leading-tight tracking-tight overflow-hidden text-black md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
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

              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={`${Password ? "password" : "text"}`} //jika Password true, maka akan menampilkan password, jika false akan menampilkan text
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-stroke-gray text-black rounded-lg block w-full p-2.5 focus:ring-0 focus:outline-none focus:border-main-green"
                    value={password}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    required
                  />
                  <span
                    className="absolute end-2.5 bottom-[8px] cursor-pointer icon"
                    onClick={togglePasswordVisibility}
                  >
                    <i
                      className={`fa-regular ${
                        Password ? "fa-eye" : "fa-eye-slash" //jika Password true, maka akan menampilkan gambar mata, jika false akan menampilkan mata kecoret
                      }`}
                    ></i>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <ButtonSubmit text="Sign In" variant="primary" />
              </div>

              <div className="flex justify-center">
                <p className="text-sm font-light">
                  Belum punya Akun?
                  <a
                    href="/register"
                    className="font-medium text-blue-600 hover:underline ml-1"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Overlay Loading */}
      {loading && <Loading />}
    </section>
  );
}
