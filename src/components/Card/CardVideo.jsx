import ButtonHref from "../../components/Button/ButtonHref";

export default function CardVideo(props) {
  const { img, judul, deskripsi, href, kategori } = props;
  return (
    <div className="shadow-sm-light shadow-gray-500 w-full lg:w-[30%] my-2 lg:m-4 flex flex-col justify-between">
      <div>
        <div className="w-full h-[220px] overflow-hidden">
          <img src={img} className="w-full h-full object-cover" />
        </div>

        <p className="text-black font-bold text-sm mt-2 mx-2 text-center lg:text-left">
          {judul}
        </p>

        <p className="text-black font-normal text-xs mt-2 mx-2 line-clamp-3 text-center lg:text-left">
          {deskripsi.replace(/<\/?[^>]+(>|$)/g, "")}
        </p>

        <div className="m-auto lg:m-0 lg:ml-1 mt-3 lg:mt-2 border-2 border-main-green py-1 overflow-hidden flex justify-center items-center w-32">
          <i className="fa-regular fa-bookmark me-3"></i>
          {kategori}
        </div>
      </div>

      <div className="lg:w-[80%] py-5 mt-2 lg:m-0 m-auto">
        <ButtonHref href={href} text="Tonton Sekarang" variant="primary" />
      </div>
    </div>
  );
}
