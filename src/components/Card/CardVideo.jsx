import ButtonHref from "../../components/Button/ButtonHref";

export default function CardVideo(props) {
  const { img, judul, deskirpsi, href } = props;
  return (
    <div className="shadow-sm-light shadow-gray-500 w-full lg:w-[30%] my-2 lg:m-4 flex flex-col justify-between">
      <div>
        <div className="w-full h-[220px] overflow-hidden">
          <img src={img} className="w-full h-full object-cover" />
        </div>

        <p className="text-black font-bold text-sm mt-2 mx-2">{judul}</p>
        <p className="text-black font-normal text-xs mt-2 mx-2">{deskirpsi}</p>
      </div>

      <div className="w-[80%] py-5 mt-2">
        <ButtonHref href={href} text="Tonton Sekarang" variant="primary" />
      </div>
    </div>
  );
}
