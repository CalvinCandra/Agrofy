import ImageImport from "../../data/ImageImport";

export default function Sidebar() {
  return (
    <div>
        {/* Sidebar */}
        <aside className=" w-70 bg-dashboard text-white h-screen p-5 lg:pt-28 ">
        <h2 className="pl-16 pr-14 text-base font-bold mb-6 flex flex-col text-black">
          <span>Dashboard</span>
          <span>Management</span>
        </h2>
          <ul className="pl-16 space-y-4">
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover">
                <span><img src={ImageImport.dashboard} alt="" /></span>
                <span className="text-stroke-gray" >Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover">
                <span><img src={ImageImport.limbah} alt="" /></span>
                <span className="text-stroke-gray" >Data Limbah</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover">
                <span><img src={ImageImport.proses} alt="" /></span>
                <span className="text-stroke-gray" >Olah</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover">
                <span><img src={ImageImport.riwayat} alt="" /></span>
                <span className="text-stroke-gray" >Riwayat</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover">
                <span><img src={ImageImport.olahan} alt="" /></span>
                <span className="text-stroke-gray" >Hasil Olahan</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover">
                <span><img src={ImageImport.laporan} alt="" /></span>
                <span className="text-stroke-gray" >Laporan</span>
              </a>
            </li>
          </ul>
        </aside>
    </div>
    
  );
}
