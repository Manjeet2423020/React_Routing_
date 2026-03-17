import { IoMdSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import pic from "../../assets/img1.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex h-15 md:h-19 w-full flex-wrap border-b-3 border-b-gray-400/20 px-4 items-center md:justify-between gap-30">
      <div className="flex items-center gap-2 md:gap-4 md:ml-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold ">
          Shipment Track
        </h3>
        <select
          className="hidden sm:block font-semibold text-gray-600"
          name="select"
          id="abc"
        >
          <option value="status">Status</option>
          <option value="drive">Drive</option>
        </select>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center text-lg md:text-xl gap-3 md:gap-6 text-gray-500 font-bold">
          <button
            className="text-lg sm:text-xl md:text-2xl flex-shrink-0"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <IoMdSearch className="text-lg sm:text-xl md:text-2xl flex-shrink-0" />
          <IoIosNotificationsOutline className="text-lg sm:text-xl md:text-2xl flex-shrink-0" />

          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              src={pic}
              alt="photo"
            />
            <div className="hidden md:block">
              <h2 className="text-base font-semibold text-black">Manjeet</h2>
              <h2 className="text-xs text-gray-400 font-bold">Manager</h2>
            </div>
          </div>
        </div>
        <select className="text-lg md:text-2xl" name="select" id="abc">
          <option value="status"></option>
          <option value="drive"></option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
