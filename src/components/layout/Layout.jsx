import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div className=" flex">
      <Sidebar />
      <div className="dvi">
        <Navbar />
        <div className="dvi">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
