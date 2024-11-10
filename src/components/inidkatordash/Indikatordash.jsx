import ImageImport from "../../data/ImageImport";

export default function Indikatordash() {
  return (
    <div className="flex flex-row space-x-9">
      <div className="w-66 h-36 bg-main-green rounded-md ">
        <div className="flex flex-row">
          <div className="pl-6 pt-6">
            <img src={ImageImport.limbahi} alt="" />
          </div>
          <div className="pl-8 pt-6 text-white font-bold">
            <h1 className="py-0 text-5xl overflow-hidden">3</h1>
            <p className="text-2xl py-2 pr-4">Limbah</p>
          </div>
        </div>
      </div>
      <div className="w-66 h-36 bg-main-green rounded-md ">
        <div className="flex flex-row">
          <div className="pl-6 pt-6">
            <img src={ImageImport.prosesi} alt="" />
          </div>
          <div className="pl-8 pt-6 text-white font-bold">
            <h1 className="py-0 text-5xl overflow-hidden">3</h1>
            <p className="text-2xl py-2 pr-4">Proses</p>
          </div>
        </div>
      </div>
      <div className="w-66 h-36 bg-main-green rounded-md ">
        <div className="flex flex-row">
          <div className="pl-6 pt-6">
            <img src={ImageImport.olahani} alt="" />
          </div>
          <div className="pl-8 pt-6 text-white font-bold">
            <h1 className="py-0 text-5xl overflow-hidden">1</h1>
            <p className="text-2xl py-2 pr-4">Selesai</p>
          </div>
        </div>
      </div>
      <div className="w-66 h-36 bg-main-green rounded-md ">
        <div className="flex flex-row">
          <div className="pl-6 pt-6">
            <img src={ImageImport.selesais} alt="" />
          </div>
          <div className="pl-8 pt-6 text-white font-bold">
            <h1 className="py-0 text-5xl overflow-hidden">1</h1>
            <p className="text-2xl py-2 pr-4">Olahan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
