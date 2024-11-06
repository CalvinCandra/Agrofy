import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="bg-white space-x-2 ">
      <div className="flex">
        <Sidebar />
      </div>
    </div>
    
  );
}
