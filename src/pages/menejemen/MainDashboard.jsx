import { useState } from "react";
import ButtonHref from "../../components/Button/ButtonHref";
import CardLimbah from "../../components/Card/CardLimbah";
import Pagination from "../../components/Pagination/Pagination";
import ImageImport from "../../data/ImageImport";
import TambahLimbah from "../../components/Modal/TambahLimbah";
import Tabledash from "../../components/Tabledash/Tabledash";

export default function MainDashboard() {
  return (
    <div>
      <div className="bg-dashboard w-full h-[1120px] rounded-md p-5 space-y-5">
        <div className="bg-white  w-full h-[50%] rounded-md ">
          <p className="flex justify-center text-3xl p-5 font-bold">Limbah</p>

          <div className="flex lg:flex-row lg:justify-center  lg:space-x-14  lg:px-5 overflow-hidden  sm:flex-col sm:px-2 sm:py-2 sm:gap-y-3  ">
          <CardLimbah
              img={ImageImport.sekam}
              judul="Jerami"
              deskripsi="Limbah tanaman padi yang sudah kering dan itu"
            />
            <CardLimbah
              img={ImageImport.sekam}
              judul="Jerami"
              deskripsi="Limbah tanaman padi yang sudah kering dan itu"
            />
            <CardLimbah
              img={ImageImport.sekam}
              judul="Jerami"
              deskripsi="Limbah tanaman padi yang sudah kering dan itu"
            />
            
          </div>

          <div className="w-full h-[12%] lg:px-[30%] sm:px-10 py-1 flex justify-center ">
              <ButtonHref href="/dashboard/data_limbah" text="Lihat Selengkapnya " variant="primary" />
              </div>
        </div>
        
        <div className="bg-white  w-full h-[48%] rounded-md px-5  ">
          <div class=" lg:py-0">
          <p className="flex justify-center text-3xl py-4 font-bold">Proses</p>
            <Tabledash/>
          </div>


        </div>
      </div>
    </div>
  );
}
