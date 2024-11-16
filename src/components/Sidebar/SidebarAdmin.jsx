import ImageImport from "../../data/ImageImport";

export default function SidebarAdmin() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-full bg-dashboard text-white p-5 pt-28">
        <h2 className="text-base font-bold mb-6 text-black">Dashboard Admin</h2>
        <ul className="space-y-4">
          <li>
            <a
              href="/dashboard-admin"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover"
            >
              <span className="hover:bg-white">
                <img
                  src={ImageImport.dashboard}
                  alt="Dashboard"
                  className="fill-current"
                />
              </span>
              <span className="text-stroke-gray hover:text-white">
                Data Admin
              </span>
            </a>
          </li>
          <li>
            <a
              href="/dashboard-admin/artikel-admin"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover"
            >
              <span>
                <img src={ImageImport.limbah} alt="Data Limbah" />
              </span>
              <span className="text-stroke-gray hover:text-white">
                Data Artikel
              </span>
            </a>
          </li>
          <li>
            <a
              href="/dashboard-admin/video-admin"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-main-green-hover"
            >
              <span>
                <img src={ImageImport.proses} alt="Olah Limbah" />
              </span>
              <span className="text-stroke-gray hover:text-white">
                Data Video
              </span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
