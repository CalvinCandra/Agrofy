import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigation = useNavigate();

  // Jika belum login, arahkan ke halaman login
  if (!isLoggedIn) {
    return navigation("/login");
  }

  // Jika sudah login, tampilkan komponen anak
  return children;
};

export default ProtectedRoute;
