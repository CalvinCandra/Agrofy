import ButtonHref from "../Button/ButtonHref";

export default function CardArtikel(props) {
  const { img, judul, deskripsi, href } = props;
  return (
    <div className="bg-white border border-b-2 border-gray-400 p-2 flex flex-col lg:flex-row rounded-lg my-5">
      {/* Left */}
      <div className="w-full m-auto lg:m-0 lg:w-[400px] lg:h-[250px] overflow-hidden flex-shrink-0">
        <img
          src={img}
          alt="Artikel Image"
          className="rounded w-full h-full object-cover"
        />
      </div>
      {/* Right */}
      <div className="lg:mx-10 flex flex-col justify-between lg:h-[250px]">
        <h1 className="w-full font-semibold text-lg lg:text-2xl py-2 text-center lg:text-left mt-3 lg:mt-0">
          {judul}
        </h1>

        <p className="lg:ml-1 w-full font-medium text-sm lg:text-base text-center lg:text-justify mt-3 lg:mt-2 line-clamp-3">
          {deskripsi.replace(/<\/?[^>]+(>|$)/g, "")}
        </p>

        <div className="flex max-w-max m-auto lg:m-0 lg:ml-1 mt-3 lg:mt-2 border-2 border-main-green py-1 px-2 items-center">
          <i className="fa-regular fa-bookmark me-3"></i>
          {kategori}
        </div>

        <div className="mt-2 lg:mt-0 py-6 lg:w-[30%] overflow-hidden m-auto lg:m-0">
          <ButtonHref href={href} text="Baca Sekarang" variant="primary" />
        </div>
      </div>
    </div>
  );
}
