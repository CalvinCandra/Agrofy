import NavbarLogin from "./components/Navbar/NavbarLogin";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

function AppShell() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // cek apakah user sudah login atau blm
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(userLoggedIn);
  }, []);

  return (
    <div>
      {/* Navbar yang berubah sesuai status login */}
      {isLoggedIn ? <NavbarLogin /> : <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppShell;
