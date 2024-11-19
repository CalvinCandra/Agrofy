import CardArtikel from "../../components/Card/CardArtikel";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import Artikel from "../../data/Artikel/Artikel";
import Loading from "../../components/Loading/Loading.jsx";
import axios from "axios";
import config from "../../config/config";
import React, { useState, useEffect } from "react";

export default function ArtikelList() {
  // set variabel
  // State untuk loading
  const [loading, setLoading] = useState(false);
  const [artikel, setArtikel] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalData: 0,
  });

  // =================================================================================================== Fungsi GET API Artikel
  const fetchArtikel = async (page = 1) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${config.apiUrl}/getartikel?page=${page}&limit=10`
      );
      const data = response.data;
      setArtikel(data.data); // Set data dari respon api untuk tabel
      setPagination(data.pagination); // Set data pagination dari respon api untuk pagination
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtikel();
  }, []);

  return (
    <section className="bg-white pt-20">
      <div className="w-konten m-auto">
        <h1 className="text-black text-4xl lg:text-5xl font-bold mt-10 mb-5 text-center py-4">
          Artikel Pemberdayaan
        </h1>

        <p className="w-full lg:w-[50%] m-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
          erat libero. In dictum auctor eros, sed sodales dolor venenatis nec.
        </p>

        {/* Search */}
        <div className="w-full my-10">
          <Search placeholder="Cari Artikel" />
        </div>

        {/* Card */}
        <div className="w-full">
          {loading ? (
            <p>Loading...</p> // Tampilkan loading saat data sedang dimuat
          ) : (
            artikel.map((data) => (
              <CardArtikel
                key={data.id}
                img={`${config.apiUrlImage}/artikel/${data.thumbnail}`}
                judul={data.judul_artikel}
                kategori={data.nama_kategori}
                deskripsi={data.deskripsi}
                href={`/artikel_detail/${data.id}`}
              />
            ))
          )}
        </div>

        {/* Pagination */}
        <div className=" w-full flex justify-center my-10">
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            totalData={pagination.totalData}
            fetchData={fetchArtikel}
          />
        </div>
      </div>
    </section>
  );
}
