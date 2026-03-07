import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex min-h-screen overflow-hidden ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
