import { IoMdSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
function Navbar() {
  return (
    <div className="flex bg-white h-20 w-415 border-3 border-gray-400/20 px-4 items-center justify-between">
      <div className="flex gap-4 ml-4">
        <h3 className="text-2xl font-bold text-black/80">Shipment Track</h3>
        <select name="select" id="abc">
          <option value="status">Status</option>
          <option value="drive">Drive</option>
        </select>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center text-2xl gap-4">
          <IoMdSearch />
          <IoIosNotificationsOutline />
        </div>
        <select className="text-2xl" name="select" id="abc">
          <option value="status">User1</option>
          <option value="drive">Drive</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
