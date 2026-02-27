import { IoMdSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import pic from "../../assets/img1.jpg";
function Navbar() {
  return (
    <div className="flex bg-white h-20 w-full border-b-3 border-b-gray-400/20 px-4 items-center justify-between">
      <div className="flex gap-4 ml-4">
        <h3 className="text-2xl font-bold text-black/80">Shipment Track</h3>
        <select className="font-semibold text-gray-600" name="select" id="abc">
          <option value="status">Status</option>
          <option value="drive">Drive</option>
        </select>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center text-xl gap-6 text-gray-500 font-bold">
          <IoMdSearch />
          <IoIosNotificationsOutline />

          <div className="flex gap-2">
            <img className="w-10 h-10 rounded-full" src={pic} alt="photo" />
            <div className="dvi">
              <h2 className="text-base font-semibold text-black">
                Pratik Podar{" "}
              </h2>
              <h2 className="text-xs text-gray-400 font-bold">Manager</h2>
            </div>
          </div>
        </div>
        <select className="text-2xl" name="select" id="abc">
          <option value="status"></option>
          <option value="drive"></option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
