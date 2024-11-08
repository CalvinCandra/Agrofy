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
        <h5 className="w-full font-medium text-sm lg:text-lg py-2 text-center lg:text-left lg:mt-0">
          {deskripsi}
        </h5>
        <div className="mt-7 lg:mt-10 lg:w-[30%] py-5 m-auto lg:m-0">
          <ButtonHref href={href} text="Baca Sekarang" variant="primary" />
        </div>
      </div>
    </div>
  );
}
