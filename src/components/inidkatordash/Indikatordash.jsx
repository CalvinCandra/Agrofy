import { useEffect, useState } from "react";
import axios from "axios";
import ImageImport from "../../data/ImageImport";
import config from "../../config/config";


export default function Indikatordash() {
  const [jumlahLimbah, setJumlahLimbah] = useState(0);
  const [jumlahProses, setJumlahProses] = useState(0);
  const [jumlahSelesai, setJumlahSelesai] = useState(0);
  const [jumlahOlahan, setJumlahOlahan] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // Ambil token dari sessionStorage
      const token = sessionStorage.getItem("Token");
      if (!token) {
        console.error("Token tidak ditemukan. Silakan login ulang.");
        return;
      }

      try {
        // Fetch jumlah limbah
        const limbahResponse = await axios.get(`${config.apiUrl}/limbah`, {
          headers: {
            Authorization: `${token}`, // Tambahkan token ke header Authorization
          },
        });
        setJumlahLimbah(limbahResponse.data.data.length); // Hitung jumlah limbah

        // Fetch jumlah proses, selesai, dan olahan
        const olahResponse = await axios.get(`${config.apiUrl}/olah`, {
          headers: {
            Authorization: `${token}`, // Tambahkan token ke header Authorization
          },
        });

        // Fetch jumlah olahan
      const jumlahOlahanResponse = await axios.get(`${config.apiUrl}/jumlaholahan`, {
        headers: { Authorization: `${token}` },
      });
      setJumlahOlahan(jumlahOlahanResponse.data.jumlahOlahan);


        const olahData = olahResponse.data.data;
        const prosesCount = olahData.filter((item) => item.status === "proses").length;
        const selesaiCount = olahData.filter((item) => item.status === "selesai").length;

        setJumlahProses(prosesCount);
        setJumlahSelesai(selesaiCount);
      } catch (error) {
        console.error("Error fetching data:", error.response?.data || error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-between">
      <div className="w-[24%] h-36 bg-main-green rounded-md">
        <div className="flex flex-row">
          <div className="pl-6 pt-6">
            <img src={ImageImport.limbahi} alt="Limbah" />
          </div>
          <div className="pl-8 pt-6 text-white font-bold">
            <h1 className="py-0 text-5xl overflow-hidden">{jumlahLimbah}</h1>
            <p className="text-2xl py-2 pr-4">Limbah</p>
          </div>
        </div>
      </div>
      <div className="w-[24%] h-36 bg-main-green rounded-md">
        <div className="flex flex-row">
          <div className="pl-6 pt-6">
            <img src={ImageImport.prosesi} alt="Proses" />
          </div>
          <div className="pl-8 pt-6 text-white font-bold">
            <h1 className="py-0 text-5xl overflow-hidden">{jumlahProses}</h1>
            <p className="text-2xl py-2 pr-4">Proses</p>
          </div>
        </div>
      </div>
      <div className="w-[24%] h-36 bg-main-green rounded-md">
        <div className="flex flex-row">
          <div className="pl-6 pt-6">
            <img src={ImageImport.olahani} alt="Selesai" />
          </div>
          <div className="pl-8 pt-6 text-white font-bold">
            <h1 className="py-0 text-5xl overflow-hidden">{jumlahSelesai}</h1>
            <p className="text-2xl py-2 pr-4">Selesai</p>
          </div>
        </div>
      </div>
      <div className="w-[24%] h-36 bg-main-green rounded-md">
        <div className="flex flex-row">
          <div className="pl-6 pt-6">
            <img src={ImageImport.selesais} alt="Olahan" />
          </div>
          <div className="pl-8 pt-6 text-white font-bold">
            <h1 className="py-0 text-5xl overflow-hidden">{jumlahOlahan}</h1>
            <p className="text-2xl py-2 pr-4">Olahan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
