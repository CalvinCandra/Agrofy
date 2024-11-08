import CardVideo from "../../components/Card/CardVideo";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import Video from "../../data/Video/Video";

export default function VideoList() {
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
          {Video.map((Data) => (
            <CardVideo
              key={Data.id}
              img={Data.img}
              judul={Data.judul}
              deskirpsi={Data.deskirpsi}
              href={Data.href}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className=" w-full flex justify-center my-10">
          <Pagination />
        </div>
      </div>
    </section>
  );
}
