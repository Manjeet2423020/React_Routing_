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
    <div className=" flex flex-col w-16 sm:w-20 md:w-56 lg:w-64 h-screen border-r border-b-3 border-gray-400/20 rounded-xl">
      <div className="flex items-center  gap-2 text-lg sm:text-xl md:text-2xl  border-3 border-gray-400/20 px-2 sm:px-3 md:px-5 h-16 md:h-21">
        <div className="bg-violet-600 text-white w-8 h-8  md:w-9 md:h-9 rounded-full flex items-center justify-center">
          <FaTruck />
        </div>

        <h2 className="font-bold hidden md:block "> Drivergo</h2>

        <div className="ml-auto text-gray-400/50 text-lg md:text-xl">
          <TiThMenuOutline />
        </div>
      </div>

      <nav className="flex flex-col h-screen border-r-3 border-gray-400/20">
        <div className="flex flex-col  border-b-3 border-b-gray-400/20 mx-2  md:mx-4 mt-2 text-gray-400/70 font-bold text-[10px] md:text-xs ">
          <h5 className="hidden md:block">MAIN MENU</h5>
          <div className="flex-col flex md:ml-3 gap-2 md:my-4 font-semibold text-sm  md:text-lg">
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 md:px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/"
            >
              <TbClover />
              <span className="hidden md:block">Overview</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 md:px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/shipment"
            >
              <FaTruckFast />
              <span className="hidden md:block">User Management</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 md:px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/orders"
            >
              <RiLuggageCartFill />
              <span className="hidden md:block">Orders</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 md:px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/message"
            >
              <MdMessage />
              <span className="hidden md:block">Message</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 md:px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/activity"
            >
              <RxActivityLog />
              <span className="hidden md:block">Activity</span>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col mx-2  md:mx-4 mt-2 text-gray-400/70 font-semibold text-[10px] md:text-xs ">
          <h5 className="hidden md:block">GENERAL</h5>
          <div className="flex-col flex md:ml-3  mb-4 text-sm md:text-lg gap-2 ">
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 md:px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/report"
            >
              <MdReportProblem />
              <span className="hidden md:block">Report</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 md:px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/support"
            >
              <MdOutlineSupportAgent />
              <span className="hidden md:block">Support</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 md:px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/account"
            >
              <RiAccountCircleFill />
              <span className="hidden md:block">Account</span>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col mb-4 mx-2 md:mx-4  text-gray-400/70 font-semibold mt-auto text-xs">
          <h5 className="hidden md:block">OTHERS</h5>
          <div className="flex-col flex md:ml-3 gap-2  my-3 text-sm md:text-lg">
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3 px-2 md:px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/setting"
            >
              <IoSettings />
              <span className="hidden md:block">Setting</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3 px-2 md:px-3 py-2  transition-all rounded-xl duration-300 ${isActive ? " bg-violet-50 text-violet-600 " : "hover:text-violet-600 hover:bg-violet-50"} `
              }
              to="/logout"
            >
              <RiLogoutBoxLine />
              <span className="hidden md:block">Logout</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
