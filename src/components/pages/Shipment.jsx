import { CiImport } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setPage } from "../../features/users/userSlice";
import { setSearchText, setFilter } from "../../features/users/userSlice";
import { useNavigate } from "react-router-dom";
const Shipment = () => {
  const dispatch = useDispatch();

  const searchText = useSelector((state) => state.users.searchText);

  const users = useSelector((state) => state.users.data);

  const { page, limit, total } = useSelector((state) => state.users);
  const totalPages = Math.ceil(total / limit);

  const navigate = useNavigate();

  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchText.toLowerCase()),
  );

  useEffect(() => {
    dispatch(fetchUsers({ page, limit }));
  }, [page]);

  return (
    <div className="p-3 sm:p-5">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-3xl font-bold">User Management</h1>
        <span className="text-gray-400 font-semibold text-sm md:text-base">
          Manage platform users and their permissions
        </span>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row mt-8 lg:gap-5 md:gap-3 gap-2">
        <div
          className="border-3 border-gray-400/20 rounded-xl flex flex-col  justify-center
  w-40  sm:w-[30%] lg:w-[24%] h-25"
        >
          <div className="pl-4">
            <h3 className="font-semibold text-gray-500/70">Total Users</h3>
            <span className="text-3xl font-bold">125,847</span>
          </div>
        </div>
        <div
          className="border-3 border-gray-400/20 rounded-xl flex flex-col justify-center
  w-40  sm:w-[30%] lg:w-[24%] h-25"
        >
          <div className="pl-4">
            <h3 className="font-semibold text-gray-500/70">Active Users</h3>
            <span className="text-3xl font-bold text-green-500">118,234</span>
          </div>
        </div>
        <div
          className="border-3 border-gray-400/20 rounded-xl flex flex-col justify-center
  w-40  sm:w-[30%] lg:w-[24%] h-25"
        >
          <div className="pl-4">
            <h3 className="font-semibold text-gray-500/70">Suspended</h3>
            <span className="text-3xl font-bold text-red-500">342</span>
          </div>
        </div>
        <div
          className="border-3 border-gray-400/20 rounded-xl flex flex-col justify-center
  w-40  sm:w-[30%] lg:w-[24%] h-25"
        >
          <div className="pl-4">
            <h3 className="font-semibold text-gray-500/70">Creators</h3>
            <span className="text-3xl font-bold text-red-500">8,456</span>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-8 border-3 border-gray-400/30 rounded-xl p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <h1 className="text-xl md:text-3xl font-semibold  "> All Users</h1>
          <div className="flex flex-col sm:flex-row gap-2">
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
        <div className="flex flex-col md:flex-row mt-5 gap-4 ">
          <input
            className="border-3 md:w-full w-72 h-12 border-gray-400/30 rounded-lg pl-5 font-bold text-gray-400/95 "
            type="text"
            value={searchText}
            onChange={(e) => dispatch(setSearchText(e.target.value))}
            placeholder="Search users...(only enter name)"
          />
          <div className="flex gap-4">
            <select
              onChange={(e) => dispatch(setFilter(e.target.value))}
              className="border-3 border-gray-400/30 rounded-lg md:w-34 w-30  font-semibold px-2 text-gray-800/80 "
              name="abc"
              id="abcd"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
            </select>
            <select
              className="border-3 border-gray-400/30 rounded-lg md:w-34 w-30  font-semibold px-2 text-gray-800/80 "
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
        <div className=" border-t-3 border-x-3 border-gray-400/30 mt-5  rounded-2xl overflow-x-auto md:overflow-x-hidden">
          <div className="min-w-[700px] shrink-0">
            <div className="flex justify-between border-b-3 border-gray-400/30 p-4 font-semibold text-gray-400 ">
              <span className="w-[200px]">User</span>
              <span className="w-[150px]">Phone</span>
              <span className="w-[150px]">username</span>
              <span className="w-[100px]">gender</span>
              <span className="w-[150px]">dob</span>
            </div>
            {filteredUsers.map((user) => (
              <div
                className="flex justify-between p-4 gap-5 border-b-3 border-gray-400/30 h-20 items-center  "
                key={user.id}
                onClick={() => navigate(`/users/${user.id}`)}
              >
                <h3 className="w-[200px] flex items-center gap-2">
                  <div className="h-10 w-10 bg-gray-200  rounded-full pl-10"></div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold">{user.firstName}</h3>
                    <h3 className="text-gray-400 text-sm">{user.email}</h3>
                  </div>
                </h3>

                <span className="w-[160px]">{user.phone}</span>
                <span className="w-[160px]">{user.username}</span>
                <span
                  className={`w-[100px] flex justify-center px-2 py-1 rounded text-white font-semibold ${user.gender === "male" ? "bg-green-500" : "bg-red-500"}`}
                >
                  {user.gender}
                </span>
                <span className="w-[160px]">{user.birthDate}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-end gap-4 mt-5">
          <button
            className="ml-auto border-2 rounded-sm w-10 text-gray-500"
            disabled={page === 1}
            onClick={() => dispatch(setPage(page - 1))}
          >
            Prev
          </button>
          <span>Page-{page}</span>
          <button
            className="border-2 rounded-sm w-10 text-gray-500"
            disabled={page === totalPages}
            onClick={() => dispatch(setPage(page + 1))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
