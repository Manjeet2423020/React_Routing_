import { NavLink } from "react-router-dom";
import { FaTruck } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { TbClover } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { RiLuggageCartFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { MdReportProblem } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="bg-white flex flex-col w-64 h-screen border-r border-gray-200">
      <div className="flex items-center  gap-2 text-2xl  border-3 border-gray-400/20 px-5 h-21">
        <div className="bg-violet-600 text-white w-9 h-9 rounded-full flex items-center justify-center">
          <FaTruck />
        </div>

        <h2 className="font-bold text-black/80"> Drivergo</h2>

        <div className="ml-auto text-gray-400/50">
          <TiThMenuOutline />
        </div>
      </div>

      <nav className="flex flex-col h-screen border-r-3 border-gray-400/20">
        <div className="flex flex-col  border-b-3 border-b-gray-400/20  mx-4 mt-2 text-gray-400/70 font-bold text-xs ">
          <h5>MAIN MENU</h5>
          <div className="flex-col flex ml-3 gap-2 my-4 font-semibold text-lg">
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/"
            >
              <TbClover />
              Overview
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/shipment"
            >
              <FaTruckFast /> Shipment
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/orders"
            >
              <RiLuggageCartFill /> Orders
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/message"
            >
              <MdMessage /> Message
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/activity"
            >
              <RxActivityLog /> Activity
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col   mx-4 mt-2 text-gray-400/70 font-semibold text-xs ">
          <h5>GENERAL</h5>
          <div className="flex-col flex ml-3  mb-4  text-lg gap-2 ">
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/report"
            >
              <MdReportProblem /> Report
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/support"
            >
              <MdOutlineSupportAgent /> Support
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/account"
            >
              <RiAccountCircleFill /> Account
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col mb-4 mx-4  text-gray-400/70 font-semibold mt-auto text-xs">
          <h5>OTHERS</h5>
          <div className="flex-col flex ml-3 gap-2  my-3 text-lg">
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/setting"
            >
              <IoSettings /> Setting
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/logout"
            >
              <RiLogoutBoxLine /> Logout
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
