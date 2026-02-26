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
    <div className="bg-white flex flex-col w-70">
      <div className="flex items-center  gap-2 text-2xl  border-3 border-gray-400/20 px-5 h-20">
        <div className="bg-violet-600 text-white w-9 h-9 rounded-full flex items-center justify-center">
          <FaTruck />
        </div>

        <h2 className="font-semibold"> Drivergo</h2>

        <div className="ml-15 text-gray-400/50">
          <TiThMenuOutline />
        </div>
      </div>

      <nav className="flex flex-col border-r-3 border-gray-400/20">
        <div className="flex flex-col  border-b-3 border-b-gray-400/20  mx-4 mt-2 text-gray-400 font-semibold  ">
          <h5>MAIN MENU</h5>
          <div className="flex-col flex ml-5 gap-4 my-4 text-xl">
            <NavLink className="flex items-center gap-2" to="/">
              {" "}
              <TbClover />
              Overview
            </NavLink>
            <NavLink className="flex items-center gap-2" to="/shipment">
              {" "}
              <FaTruckFast /> Shipment
            </NavLink>
            <NavLink className="flex items-center gap-2" to="/orders">
              {" "}
              <RiLuggageCartFill /> Orders
            </NavLink>
            <NavLink className="flex items-center gap-2" to="/message">
              <MdMessage /> Message
            </NavLink>
            <NavLink className="flex items-center gap-2" to="/activity">
              <RxActivityLog /> Activity
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col  border-b-3 border-b-gray-400/20 mx-4 mt-2 text-gray-400 font-semibold ">
          <h5>GENERAL</h5>
          <div className="flex-col flex ml-5 gap-4 my-4 text-xl">
            <NavLink className="flex items-center gap-2" to="/report">
              {" "}
              <MdReportProblem /> Report
            </NavLink>
            <NavLink className="flex items-center gap-2" to="/support">
              {" "}
              <MdOutlineSupportAgent /> Support
            </NavLink>
            <NavLink className="flex items-center gap-2" to="/account">
              {" "}
              <RiAccountCircleFill /> Account
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col   mx-4  text-gray-400 font-semibold mt-75">
          <h5>OTHERS</h5>
          <div className="flex-col flex ml-5 gap-4 my-4 text-xl">
            <NavLink className="flex items-center gap-2" to="/setting">
              {" "}
              <IoSettings /> Setting
            </NavLink>
            <NavLink className="flex items-center gap-2" to="/logout">
              {" "}
              <RiLogoutBoxLine /> Logout
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
