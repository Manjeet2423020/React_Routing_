import { CiImport } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../features/users/userSlice";
import { setSearchText, setFilter } from "../../features/users/userSlice";
const Shipment = () => {
  const dispatch = useDispatch();

  const searchText = useSelector((state) => state.users.searchText);
  // const filter = useSelector((state) => state.users.filter);
  const users = useSelector((state) => state.users.data);

  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchText.toLowerCase()),
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="m-5">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">User Management</h1>
        <span className="text-gray-400 font-semibold">
          Manage platform users and their permissions
        </span>
      </div>
      <div className="flex justify-between mt-8 gap-4">
        <div className="border-3 border-gray-400/20 rounded-xl  w-90 h-25 flex flex-col justify-center">
          <div className="pl-4">
            <h3 className="font-semibold text-gray-500/70">Total Users</h3>
            <span className="text-3xl font-bold">125,847</span>
          </div>
        </div>
        <div className="border-3 border-gray-400/20 rounded-xl  w-90 h-25 flex flex-col justify-center">
          <div className="pl-4">
            <h3 className="font-semibold text-gray-500/70">Active Users</h3>
            <span className="text-3xl font-bold text-green-500">118,234</span>
          </div>
        </div>
        <div className="border-3 border-gray-400/20 rounded-xl  w-90 h-25 flex flex-col justify-center">
          <div className="pl-4">
            <h3 className="font-semibold text-gray-500/70">Suspended</h3>
            <span className="text-3xl font-bold text-red-500">342</span>
          </div>
        </div>
        <div className="border-3 border-gray-400/20 rounded-xl  w-90 h-25 flex flex-col justify-center">
          <div className="pl-4">
            <h3 className="font-semibold text-gray-500/70">Creators</h3>
            <span className="text-3xl font-bold text-red-500">8,456</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-3 border-gray-400/30 rounded-xl p-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold  "> All Users</h1>
          <div className="flex gap-2">
            <button className="border rounded-lg border-gray-400/50  h-12 w-35 font-bold text-lg flex justify-center items-center gap-4">
              <CiImport />
              Export
            </button>
            <button className="border rounded-lg border-gray-400/50 h-12 w-35 bg-red-500 text-white font-bold flex justify-center items-center gap-4">
              <IoPersonAddOutline />
              Add User
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-5 gap-4 ">
          <input
            className="border-3 w-full h-12 border-gray-400/30 rounded-lg pl-5 font-bold text-gray-400/95 "
            type="text"
            value={searchText}
            onChange={(e) => dispatch(setSearchText(e.target.value))}
            placeholder="Search users...(only enter name)"
          />
          <div className="flex gap-4">
            <select
              onChange={(e) => dispatch(setFilter(e.target.value))}
              className="border-3 border-gray-400/30 rounded-lg w-45 font-semibold px-2 text-gray-800/80 "
              name="abc"
              id="abcd"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
            </select>
            <select
              className="border-3 border-gray-400/30 rounded-lg w-45 font-semibold px-2 text-gray-800/80 "
              name="abc"
              id="abcd"
            >
              <option value="All Status">All Roles</option>
              <option value="Active">Creator</option>
              <option value="pending">User</option>
              <option value="pending">Moderator</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col flex-wrap  gap-4  border-3 border-gray-400/30 mt-5  rounded-2xl">
          <div className="flex justify-between border-b-3 border-gray-400/30 p-4 font-semibold text-gray-400">
            <span className="w-50">User</span>

            <span className="w-35">Phone</span>
            <span className="w-35">username</span>
            <span className="w-20">gender</span>
            <span className="w-35">dob</span>
          </div>
          {filteredUsers.map((user) => (
            <div
              className="flex justify-between p-4 w-full gap-5 border-b-3 border-gray-400/30 h-20 items-center  "
              key={user.id}
            >
              <h3 className="w-50 flex gap-2">
                <div className="h-10 w-10 bg-gray-200  rounded-full pl-10"></div>
                <div className="flex flex-col">
                  <h3 className="font-semibold">{user.firstName}</h3>
                  <h3 className="text-gray-400 text-sm">{user.email}</h3>
                </div>
              </h3>

              <span className="w-35">{user.phone}</span>
              <span className="w-35">{user.username}</span>
              <span
                className={`w-20 flex justify-center px-2 py-1 rounded text-white font-semibold ${user.gender === "male" ? "bg-green-500" : "bg-red-500"}`}
              >
                {user.gender}
              </span>
              <span className="w-35">{user.birthDate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shipment;
