import ImageImport from "../../data/ImageImport";
import ButtonHref from "../Button/ButtonHref";
import React, { useState } from "react";

export default function Navbar() {
  // State untuk mengontrol tampilan modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Fungsi untuk toggle modal
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div>
      <nav className="fixed w-full z-20 top-0 start-0 shadow-md bg-white">
        <div className="w-[90%] m-auto flex items-center justify-between p-3">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={ImageImport.logo}
              className="h-5 md:h-8"
              alt="Flowbite Logo"
            />
          </a>

          <div className="w-[31rem] ml-24 hidden md:flex justify-between text-black">
            <a
              href=""
              className="px-3 py-2 hover:bg-main-green-hover hover:text-white rounded-lg transition-all duration-300 ease-linear"
            >
              Home
            </a>
            <a
              href=""
              className="px-3 py-2 hover:bg-main-green-hover hover:text-white rounded-lg transition-all duration-300 ease-linear"
            >
              Tentang Kami
            </a>
            <a
              href=""
              className="px-3 py-2 hover:bg-main-green-hover hover:text-white rounded-lg transition-all duration-300 ease-linear"
            >
              Pemberdayaan
            </a>
            <a
              href=""
              className="px-3 py-2 hover:bg-main-green-hover hover:text-white rounded-lg transition-all duration-300 ease-linear"
            >
              Komunitas
            </a>
          </div>

          <div className="hidden md:flex justify-between items-center w-[14.5rem]">
            <ButtonHref text="Sign Up" href="/register" variant="secondary" />

            <ButtonHref text="Sign In" href="/login" variant="primary" />
          </div>

          {/* Menu Bar */}
          <div className="block md:hidden text-black mt-1">
            <button className="text-lg" onClick={toggleModal}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* modal */}
      {isModalVisible && (
        <div className="fixed top-[3.3rem] left-0 bg-white w-full flex flex-col px-3 border-2 shadow-lg pt-2 pb-2 text-white transition-all duration-300 z-50">
          <a
            href=""
            className="px-3 py-2 text-black hover:bg-main-green-hover hover:text-white rounded-lg transition-all duration-300 ease-linear"
          >
            Home
          </a>
          <a
            href=""
            className="px-3 py-2 text-black hover:bg-main-green-hover hover:text-white rounded-lg transition-all duration-300 ease-linear"
          >
            Tentang Kami
          </a>
          <a
            href=""
            className="px-3 py-2 text-black hover:bg-main-green-hover hover:text-white rounded-lg transition-all duration-300 ease-linear"
          >
            Pemberdayaan
          </a>
          <a
            href=""
            className="px-3 py-2 text-black hover:bg-main-green-hover hover:text-white rounded-lg transition-all duration-300 ease-linear"
          >
            Komunitas
          </a>

          <ButtonHref text="Sign Up" href="/register" variant="secondary" />

          <ButtonHref text="Sign In" href="/login" variant="primary" />
        </div>
      )}
    </div>
  );
}
