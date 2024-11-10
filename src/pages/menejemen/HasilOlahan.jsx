import Pagination from "../../components/Pagination/Pagination";
import CardLimbah from "../../components/Card/CardLimbah";
import ImageImport from "../../data/ImageImport";

export default function HasilOlahan() {
  return (
    <div>
      <div className="bg-dashboard w-full h-full rounded-md p-5">
        <div className="bg-white w-full rounded-md p-5">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl py-2">Hasil Olahan</h1>
          </div>

          {/* data limbah */}
          <div className="limbah-box pt-16 grid lg:grid-cols-3 sm:grid-cols-1 gap-16 pb-28">
            <CardLimbah
              img={ImageImport.sekam}
              judul="Jerami"
              deskripsi="Limbah tanaman padi yang sudah kering dan itu"
            />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
