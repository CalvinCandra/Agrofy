import ButtonHref from "../Button/ButtonHref";

export default function CardArtikel(props) {
  const { img, judul, deskripsi, kategori, href } = props;
  return (
    <div className="bg-white border border-b-2 border-gray-400 p-1 flex flex-col lg:flex-row rounded-lg my-5">
      {/* Left */}
      <div className="w-full m-auto lg:m-0 lg:w-[300px] lg:h-[220px] overflow-hidden flex-shrink-0 flex justify-center items-center">
        <img
          src={img}
          alt="Artikel Image"
          className="rounded object-cover h-full w-full"
        />
      </div>

      {/* Right */}
      <div className="lg:ml-10 flex flex-col justify-between lg:h-[220px] pt-1">
        <h1 className="ml-1 w-full font-semibold text-lg line-clamp-2 text-center lg:text-left lg:mt-0 overflow-hidden">
          {judul}
        </h1>

        <p className="ml-1 w-full font-normal text-sm text-center lg:text-justify line-clamp-2 pr-2">
          {deskripsi.replace(/<\/?[^>]+(>|$)/g, "")}
        </p>

        <div className="flex items-center justify-start ml-1 gap-2 text-sm text-main-green font-medium mt-2">
          <i className="fa-regular fa-bookmark"></i>
          <span>{kategori}</span>
        </div>

        <div className="py-4 lg:w-[30%] overflow-hidden">
          <ButtonHref href={href} text="Baca Sekarang" variant="primary" />
        </div>
      </div>
    </div>
  );
}
