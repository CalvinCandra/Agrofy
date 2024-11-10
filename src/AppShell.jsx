import NavbarLogin from "./components/Navbar/NavbarLogin";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function AppShell() {
  return (
    <div>
      <NavbarLogin />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppShell;
