import ImageImport from "../../data/ImageImport";

export default function Sidebar() {
  return (
    <div>
      {/* Sidebar */}
      <aside className=" lg:w-70 bg-dashboard text-white h-[100%]  pt-20  ">
        <h2 className="lg:pl-16 hidden lg:block lg:pr-14 text-base font-bold mb-6 lg:flex flex-col text-black">
          <span>Dashboard</span>
          <span>Management</span>
        </h2>
        <ul className="lg:pl-16 space-y-4 pl-5 pr-5">
          <li>
            <a
              href="/dashboard"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover"
            >
              <span className="">
                <img
                  src={ImageImport.dashboard}
                  alt=""
                  className="fill-current"
                />
              </span>
              <span className="text-stroke-gray hover:text-white hidden lg:block">
                Dashboard
              </span>
            </a>
          </li>
          <li>
            <a
              href="/dashboard/data_limbah"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover"
            >
              <span>
                <img src={ImageImport.limbah} alt="" />
              </span>
              <span className="text-stroke-gray hover:text-white hidden lg:block">
                Data Limbah
              </span>
            </a>
          </li>
          <li>
            <a
              href="/dashboard/olah_limbah"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover"
            >
              <span>
                <img src={ImageImport.proses} alt="" />
              </span>
              <span className="text-stroke-gray hover:text-white hidden lg:block">Olah</span>
            </a>
          </li>
          <li>
            <a
              href="/dashboard/riwayat"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover"
            >
              <span>
                <img src={ImageImport.riwayat} alt="" />
              </span>
              <span className="text-stroke-gray hover:text-white hidden lg:block">Riwayat</span>
            </a>
          </li>
          <li>
            <a
              href="/dashboard/hasil_olahan"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover"
            >
              <span>
                <img src={ImageImport.olahan} alt="" />
              </span>
              <span className="text-stroke-gray hover:text-white hidden lg:block">
                Hasil Olahan
              </span>
            </a>
          </li>
          
        </ul>
      </aside>
    </div>
  );
}
  