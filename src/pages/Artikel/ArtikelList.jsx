import CardArtikel from "../../components/Card/CardArtikel";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import Artikel from "../../data/Artikel/Artikel";

export default function ArtikelList() {
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
          {Artikel.map((data) => (
            <CardArtikel
              key={data.id}
              img={data.img}
              judul={data.judul}
              deskripsi={data.deskirpsi}
              href={data.href}
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
