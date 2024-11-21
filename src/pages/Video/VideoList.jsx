import CardVideo from "../../components/Card/CardVideo";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import Loading from "../../components/Loading/Loading.jsx";
import axios from "axios";
import config from "../../config/config";
import React, { useState, useEffect } from "react";

export default function VideoList() {
  // set variabel
  // State untuk loading
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalData: 0,
  });

  // =================================================================================================== Fungsi GET API Video
  const fetchVideo = async (page = 1) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${config.apiUrl}/getvideo?page=${page}&limit=10`
      );
      const data = response.data;
      console.log(data);
      setVideo(data.data); // Set data dari api untuk tabel
      setPagination(data.pagination); // Set data pagination dari api untuk pagination
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <section className="pt-20 bg-white">
      <div className="w-konten mx-auto p-2 mb-10">
        <h1 className="text-black text-4xl lg:text-5xl font-bold mt-10 mb-5 text-center py-4">
          Video Pemberdayaan
        </h1>

        <p className="w-full lg:w-[50%] m-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
          erat libero. In dictum auctor eros, sed sodales dolor venenatis nec.
        </p>

        {/* Search */}
        <div className="w-full my-10">
          <Search placeholder="Cari Video" />
        </div>

        {/* Card */}
        <div className="flex flex-col lg:flex-row justify-center lg:items-stretch flex-wrap p-2 w-full">
          {loading ? (
            <Loading />
          ) : (
            video.map((data) => (
              <CardVideo
                key={data.id}
                img={`${config.apiUrlImage}/thumb/${data.thumbnail}`}
                judul={data.judul_video}
                kategori={data.nama_kategori}
                deskripsi={data.deskripsi}
                href={`/video_detail/${data.id}`}
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
            fetchData={fetchVideo}
          />
        </div>
      </div>
    </section>
  );
}
