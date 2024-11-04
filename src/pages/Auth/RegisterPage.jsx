import ImageImport from "../../data/ImageImport";
import ButtonSubmit from "../../components/Button/ButtonSubmit";
import React, { useState } from "react";

export default function RegisterPage() {
  // State untuk menyimpan tipe input (password atau text)
  const [Password, setPassword] = useState(true);
  const [KonfirmasiPassword, setKonfirmasiPassword] = useState(true);

  // Fungsi untuk toggle tipe input
  const togglePasswordVisibility = () => {
    setPassword((prevPassword) => !prevPassword);
  };

  // Fungsi untuk toggle tipe input
  const toggleKonfirmasiPasswordVisibility = () => {
    setKonfirmasiPassword((prevKonfirmasiPassword) => !prevKonfirmasiPassword);
  };

  return (
    <div className="bg-bg-body h-screen flex justify-center items-center">
      <div className="p-2 flex justify-between items-stretch w-full lg:w-[70%]">
        {/* Kanan */}
        <div className="p-5 w-full lg:w-[60%] rounded-lg bg-white">
          <h1 className="text-xl font-semibold leading-tight tracking-tight overflow-hidden text-black md:text-2xl uppercase text-center mb-10 mt-4">
            Sign up
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            {/* Input untuk Nama Lengkap */}
            <div>
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-black"
              >
                Nama Lengkap
              </label>
              <input
                type="text" // Mengganti tipe input untuk nama lengkap
                name="fullName"
                id="fullName" // Mengubah id menjadi 'fullName' agar unik
                className="bg-gray-50 border border-stroke-gray text-black rounded-lg block w-full p-2.5 focus:ring-0 focus:outline-none focus:border-main-green"
                placeholder="Masukan nama lengkap"
                required
              />
            </div>

            {/* Input untuk Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-black"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email" // Pastikan ID ini unik di halaman
                className="bg-gray-50 border border-stroke-gray text-black rounded-lg block w-full p-2.5 focus:ring-0 focus:outline-none focus:border-main-green"
                placeholder="Masukan email"
                required
              />
            </div>

            {/* Input untuk Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-black"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={Password ? "password" : "text"} // Menggunakan kondisi Password untuk menentukan tipe input
                  name="password"
                  id="password" // ID unik untuk password
                  placeholder="••••••••"
                  className="bg-gray-50 border border-stroke-gray text-black rounded-lg block w-full p-2.5 focus:ring-0 focus:outline-none focus:border-main-green"
                  required
                />
                <span
                  className="absolute end-2.5 bottom-[8px] cursor-pointer icon"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`fa-regular ${
                      Password ? "fa-eye" : "fa-eye-slash"
                    }`}
                  ></i>
                </span>
              </div>
            </div>

            {/* Input untuk Konfirmasi Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-black"
              >
                Konfirmasi Password
              </label>
              <div className="relative">
                <input
                  type={KonfirmasiPassword ? "password" : "text"} // Menyesuaikan tipe input berdasarkan kondisi Password
                  name="confirmPassword"
                  id="confirmPassword" // Mengubah id menjadi 'confirmPassword' agar unik
                  placeholder="••••••••"
                  className="bg-gray-50 border border-stroke-gray text-black rounded-lg block w-full p-2.5 focus:ring-0 focus:outline-none focus:border-main-green"
                  required
                />
                <span
                  className="absolute end-2.5 bottom-[8px] cursor-pointer icon"
                  onClick={toggleKonfirmasiPasswordVisibility}
                >
                  <i
                    className={`fa-regular ${
                      KonfirmasiPassword ? "fa-eye" : "fa-eye-slash"
                    }`}
                  ></i>
                </span>
              </div>
            </div>

            {/* Checkbox untuk Persetujuan */}
            <div className="flex items-center mb-5">
              <div className="flex items-center pe-2">
                <input
                  id="agreeTerms" // Menggunakan ID unik untuk checkbox
                  type="checkbox"
                  className="w-5 h-5 rounded border border-main-green"
                  required
                />
              </div>
              <label
                htmlFor="agreeTerms"
                className="ms-3 text-sm font-medium text-black"
              >
                Aku setuju dengan{" "}
                <span className="font-bold">Persyaratan Layanan</span> dan{" "}
                <span className="font-bold">Kebijakan Privasi</span>
              </label>
            </div>

            {/* Tombol Submit */}
            <div className="w-full">
              <ButtonSubmit text="Sign Up" />
            </div>

            {/* Tautan ke Halaman Login */}
            <div className="flex justify-center">
              <p className="text-sm font-light">
                Sudah punya Akun?
                <a
                  href="/login"
                  className="font-medium text-blue-600 hover:underline ml-1"
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Kiri */}
        <div className="hidden lg:block w-auto ml-2">
          <img
            className="rounded-lg"
            src={ImageImport.register}
            alt="Register Image"
          />
        </div>
      </div>
    </div>
  );
}
