import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import Indikatordash from "../../components/inidkatordash/Indikatordash";
import ImageImport from "../../data/ImageImport";

export default function Dashboard() {
  return (
    <div className="bg-white space-x-2">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-5 lg:pt-28 max-w-[1190px] ">
          <Indikatordash />
          <div className="pt-9">
            <div className="bg-dashboard w-full h-[1120px] rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
