import ImageImport from "../../data/ImageImport";

export default function Sidebar() {
  return (
    <div>
        {/* Sidebar */}
        <aside className=" w-70 bg-dashboard text-white h-[1448px] p-5 lg:pt-28 ">
        <h2 className="pl-16 pr-14 text-base font-bold mb-6 flex flex-col text-black">
          <span>Dashboard</span>
          <span>Management</span>
        </h2>
          <ul className="pl-16 space-y-4">
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover">
                <span><img src={ImageImport.dashboard} alt="" /></span>
                <span className="text-stroke-gray hover:text-white" >Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover">
                <span><img src={ImageImport.limbah} alt="" /></span>
                <span className="text-stroke-gray hover:text-white" >Data Limbah</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover">
                <span><img src={ImageImport.proses} alt="" /></span>
                <span className="text-stroke-gray hover:text-white" >Olah</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover">
                <span><img src={ImageImport.riwayat} alt="" /></span>
                <span className="text-stroke-gray hover:text-white" >Riwayat</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover">
                <span><img src={ImageImport.olahan} alt="" /></span>
                <span className="text-stroke-gray hover:text-white" >Hasil Olahan</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover">
                <span><img src={ImageImport.laporan} alt="" /></span>
                <span className="text-stroke-gray hover:text-white" >Laporan</span>
              </a>
            </li>
          </ul>
        </aside>
    </div>
    
  );
}
