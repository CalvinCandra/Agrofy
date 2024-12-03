import ImageImport from "../../data/ImageImport";

export default function Sidebar() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-full bg-dashboard text-white p-5 lg:pt-28">
        <h2 className="text-base font-bold mb-6 text-black">
          Dashboard Management
        </h2>
        <ul className="space-y-4">
          <li>
            <a
              href="/dashboard"
              className="flex items-center p-2 rounded-md hover:bg-main-green-hover"
            >
              <span className="">
                <img
                  src={ImageImport.dashboard}
                  alt=""
                  className="fill-current"
                />
              </span>
              <span className="text-black hover:text-white ml-4">
                Dashboard
              </span>
            </a>
          </li>

          <li>
            <a
              href="/dashboard/data_limbah"
              className="flex items-center p-2 rounded-md hover:bg-main-green-hover"
            >
              <span>
                <img src={ImageImport.limbah} alt="" />
              </span>
              <span className="text-black hover:text-white ml-4">
                Data Limbah
              </span>
            </a>
          </li>

          <li>
            <a
              href="/dashboard/olah_limbah"
              className="flex items-center p-2 rounded-md hover:bg-main-green-hover"
            >
              <span>
                <img src={ImageImport.proses} alt="" />
              </span>
              <span className="text-black hover:text-white ml-4">Olah</span>
            </a>
          </li>

          <li>
            <a
              href="/dashboard/riwayat"
              className="flex items-center p-2 rounded-md hover:bg-main-green-hover"
            >
              <span>
                <img src={ImageImport.riwayat} alt="" />
              </span>
              <span className="text-black hover:text-white ml-4">Riwayat</span>
            </a>
          </li>

          <li>
            <a
              href="/dashboard/hasil_olahan"
              className="flex items-center p-2 rounded-md hover:bg-main-green-hover"
            >
              <span>
                <img src={ImageImport.olahan} alt="" />
              </span>
              <span className="text-black hover:text-white ml-4">
                Hasil Olahan
              </span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
