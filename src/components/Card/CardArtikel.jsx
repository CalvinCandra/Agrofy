import ButtonHref from "../Button/ButtonHref";

export default function CardArtikel(props) {
  const { img, judul, deskripsi, kategori, href } = props;
  return (
    <div className="bg-white border border-b-2 border-gray-400 p-1 flex flex-col lg:flex-row rounded-lg my-5">
      {/* Left */}
      <div className="w-full m-auto lg:m-0 lg:w-[500px] lg:h-[300px] overflow-hidden flex-shrink-0 flex justify-center items-center">
        <img
          src={img}
          alt="Artikel Image"
          className="rounded object-cover h-full w-full"
        />
      </div>

      {/* Right */}
      <div className="lg:mx-10 flex flex-col justify-between lg:h-[300px]">
        <h1 className="lg:ml-1 w-full font-semibold text-lg lg:text-2xl text-center lg:text-left mt-3 lg:mt-0 py-3 overflow-hidden">
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
