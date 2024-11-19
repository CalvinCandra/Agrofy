import { useEffect, useState } from "react";
import ImageImport from "../../data/ImageImport";

export default function Indikatordash() {
  const [jumlahLimbah, setJumlahLimbah] = useState(0);
  const [jumlahProses, setJumlahProses] = useState(0);
  const [jumlahSelesai, setJumlahSelesai] = useState(0);
  const [jumlahOlahan, setJumlahOlahan] = useState(0);

  useEffect(() => {
    // Ambil data dari API
    const fetchData = async () => {
      try {
        // Fetch jumlah limbah
        const limbahResponse = await fetch("http://localhost:3000/api/v1/limbah");
        const limbahData = await limbahResponse.json();
        if (limbahResponse.ok) {
          setJumlahLimbah(limbahData.data.length); // Hitung jumlah limbah
        }

        // Fetch jumlah proses dan selesai
        const pengolahanResponse = await fetch("http://localhost:3000/api/v1/pengolahan_limbah");
        const pengolahanData = await pengolahanResponse.json();
        if (pengolahanResponse.ok) {
          const prosesCount = pengolahanData.data.filter(item => item.status === "proses").length;
          const selesaiCount = pengolahanData.data.filter(item => item.status === "selesai").length;
          setJumlahProses(prosesCount);
          setJumlahSelesai(selesaiCount);
        }

        // Fetch jumlah olahan
        const olahanResponse = await fetch("http://localhost:3000/api/v1/hasil_olahan");
        const olahanData = await olahanResponse.json();
        if (olahanResponse.ok) {
          setJumlahOlahan(olahanData.data.length); // Hitung jumlah olahan
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-row space-x-9">
      <div className="w-66 h-36 bg-main-green rounded-md">
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
      <div className="w-66 h-36 bg-main-green rounded-md">
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
      <div className="w-66 h-36 bg-main-green rounded-md">
        <div className="flex flex-row">
          <div className="pl-6 pt-6">
            <img src={ImageImport.selesais} alt="Selesai" />
          </div>
          <div className="pl-8 pt-6 text-white font-bold">
            <h1 className="py-0 text-5xl overflow-hidden">{jumlahSelesai}</h1>
            <p className="text-2xl py-2 pr-4">Selesai</p>
          </div>
        </div>
      </div>
      <div className="w-66 h-36 bg-main-green rounded-md">
        <div className="flex flex-row">
          <div className="pl-6 pt-6">
            <img src={ImageImport.olahani} alt="Olahan" />
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
