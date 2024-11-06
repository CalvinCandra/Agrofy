import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ErrorPage from "./pages/errors/ErrorPage";
import AppShell from "./AppShell";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import TentangKamiPage from "./pages/TentangKamiPage";
import ArtikelList from "./pages/Artikel/ArtikelList";
import ArtikelDetail from "./pages/Artikel/ArtikelDetail";
import Dashboard from "./pages/menejemen/Dashboard";
import VideoDetail from "./pages/Video/VideoDetail";
import VideoList from "./pages/Video/VideoList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<IndexPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tentang_kami" element={<TentangKamiPage />} />
        <Route path="/artikel" element={<ArtikelList />} />
        <Route path="/artikel_detail" element={<ArtikelDetail />} />
        <Route path="/video" element={<VideoList />} />
        <Route path="/video_detail" element={<VideoDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
