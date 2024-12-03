import Sidebar from "../../components/Sidebar/Sidebar";
import Indikatordash from "../../components/inidkatordash/Indikatordash";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="bg-white lg:space-x-2 mx-auto">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-5 pt-20 lg:pt-28 ">
          <Indikatordash />
          <div className="pt-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
