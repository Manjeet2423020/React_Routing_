import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLocalFireDepartment } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
import { MdBlock } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { LuNotepadText } from "react-icons/lu";
import { IoEye } from "react-icons/io5";
import { AiOutlineStock } from "react-icons/ai";

function UserProfile() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${id}`).then((res) => {
      setUser(res.data);
    });
  }, [id]);
  if (!user) return <p>Loading ....</p>;
  return (
    <div className="m-5">
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between h-20 gap-2 ">
        <div className="">
          <h1 className="text-xl md:text-2xl font-bold">User Details</h1>
          <span className="md:text-normal text-sm text-gray-500">
            users/ normaluser
          </span>
        </div>
        <div className="flex gap-4 ">
          <button className="border-2 border-gray-400 rounded-lg h-9 w-35  font-bold">
            <div className="flex justify-center items-center gap-2">
              <MdOutlineEdit />
              Edit Profile
            </div>
          </button>
          <button className="border-2 border-red-300 rounded-lg h-9 w-35 text-red-500 font-bold">
            <div className="flex justify-center items-center gap-2">
              <MdBlock />
              Suspend User
            </div>
          </button>
        </div>
      </nav>
      <div className="md:flex mt-6 md:mt-0 md:justify-between">
        <div className="flex ">
          <div className=" flex flex-col items-center  border-3 border-gray-300/20 rounded-2xl  gap-2">
            <div className="  bg-gradient-to-r from-violet-500 via-violet-300 to-white h-35 w-120 mt-5"></div>
            <div className="bg-gray-200 h-30 w-30 border-2 border-white rounded-full flex items-center justify-center text-6xl -mt-12 ">
              <FaRegUser />
            </div>
            <h2 className="font-bold text-2xl">
              {user.firstName} {user.lastName}
            </h2>
            <h2 className="text-sm font-semibold text-gray-600/70">
              {user.email}
            </h2>
            <div className="flex gap-2 text-sm mb-5">
              <button className="border-blue-300 border rounded-2xl text-xs w-18 h-5 bg-blue-200/40 text-blue-500 font-bold">
                BUSINESS
              </button>
              <button className="border-gray-300 border rounded-2xl text-xs w-12 h-5 bg-gray-200/40  font-bold">
                USER
              </button>
              <button className="border-red-500 border rounded-2xl text-xs w-15 h-5 bg-red-500 text-white font-bold">
                ACTIVE
              </button>
            </div>
            <div className="flex border-y border-gray-300/30 h-25 mb-5">
              <div className="flex flex-col justify-center items-center border-r-3 border-gray-300/30 w-30 h-15 mt-5">
                <h1 className="text-2xl font-bold">2</h1>
                <span className="text-gray-400">Followers</span>
              </div>
              <div className="flex flex-col justify-center items-center border-r-3 border-gray-300/30 w-30 h-15 mt-5">
                <h1 className="text-2xl font-bold">0</h1>
                <span className="text-gray-400">Followers</span>
              </div>
              <div className="flex flex-col justify-center items-center w-30 h-15 mt-5 ">
                <h1 className="text-2xl font-bold">1</h1>
                <span className="text-gray-400">Followers</span>
              </div>
            </div>
            <div className="w-full ml-8 flex flex-col gap-3 mb-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-violet-50 text-violet-600 font-bold rounded-full flex items-center justify-center">
                  <MdOutlineMailOutline />
                </div>
                <div className="flex flex-col ">
                  <h1 className="font-bold">Email Address</h1>
                  <span className="text-gray-500">{user.email}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-violet-50 text-violet-600 font-bold rounded-full flex items-center justify-center">
                  <MdLocalFireDepartment />
                </div>
                <div className="dvi">
                  <h1 className="font-bold">Department</h1>
                  <span className="text-gray-500">
                    {user.company.department}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-violet-50 text-violet-600 font-bold rounded-full flex items-center justify-center">
                  <RiMapPinLine />
                </div>
                <div className="dvi">
                  <h1 className="font-bold">Country</h1>
                  <span className="text-gray-500">
                    {user.company.address.country}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-full w-110 ml-5 mt-5 md:mt-0">
          <div className="flex md:flex-row gap-2  flex-col justify-between border-b-2 border-gray-400/20 pb-5">
            <button className="border-2 border-violet-300 rounded-xl md:w-30 w-full h-10 font-semibold">
              Overview
            </button>
            <button className="border-2 border-violet-300 rounded-xl md:w-30 w-full h-10 font-semibold">
              Platform
            </button>
            <button className="border-2 border-violet-300 rounded-xl md:w-30 w-full h-10 font-semibold">
              Statistics
            </button>
            <button className="border-2 border-violet-300 rounded-xl md:w-30 w-full h-10 font-semibold">
              Activity Log
            </button>
            <button className="border-2 border-violet-300 rounded-xl md:w-30 w-full h-10 font-semibold">
              Settings
            </button>
          </div>
          <div className="flex md:flex-row flex-col w-full gap-3">
            <div className=" flex-1  border-3 border-gray-300/20  mt-5 p-5 rounded-2xl">
              <h1 className="h-15 w-100">POSTS PERFORMANCE</h1>
              <div className="flex justify-between items-center border-b-2 border-gray-300/30 pb-3">
                <div className="flex flex-col">
                  <h1 className="font-bold">0</h1>
                  <span>TOTAL PUBLISHED POSTS</span>
                </div>
                <div className="h-10 w-10 flex justify-center items-center bg-blue-100 text-blue-500 text-2xl font-bold rounded-xl">
                  <LuNotepadText />
                </div>
              </div>
              <div className="flex justify-between pr-20 mt-3 mb-3">
                <div className="dvi">
                  <h1 className="font-bold">0</h1>
                  <span className="font-xs text-gray-400">VIEWS</span>
                </div>
                <div className="dvi">
                  <h1 className="font-bold">0</h1>
                  <span className="font-xs text-gray-400">VIEWS</span>
                </div>
                <div className="dvi">
                  <h1 className="font-bold">0</h1>
                  <span className="font-xs text-gray-400">VIEWS</span>
                </div>
              </div>
            </div>

            <div className=" flex-1 border-3 border-gray-300/20  mt-5 p-5 rounded-2xl">
              <h1 className="h-15 w-100">POSTS PERFORMANCE</h1>
              <div className="flex justify-between items-center border-b-2 border-gray-300/30 pb-3">
                <div className="flex flex-col">
                  <h1 className="font-bold">1</h1>
                  <span>TOTAL PUBLISHED POSTS</span>
                </div>
                <div className="h-10 w-10 flex justify-center items-center bg-orange-100 text-orange-500 text-2xl font-bold rounded-xl">
                  <LuNotepadText />
                </div>
              </div>
              <div className="flex justify-between pr-20 mt-3 mb-3">
                <div className="dvi">
                  <h1 className="font-bold">0</h1>
                  <span className="font-xs text-gray-400">VIEWS</span>
                </div>
                <div className="dvi">
                  <h1 className="font-bold">0</h1>
                  <span className="font-xs text-gray-400">VIEWS</span>
                </div>
                <div className="dvi">
                  <h1 className="font-bold">0</h1>
                  <span className="font-xs text-gray-400">VIEWS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-3 border-gray-300/30 mt-5 rounded-2xl p-5">
            <h1 className="font-bold text-2xl">Recent Engagement</h1>
            <div className="mt-5">
              <div className="border-b-2 border-gray-300/30 pb-3 flex justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-pink-100 text-pink-500 text-2xl flex justify-center items-center rounded-full">
                    <IoEye />
                  </div>
                  <div className="dvi">
                    <h1 className="font-bold text-xl ">Profile Views</h1>
                    <span className="text-sm text-gray-400">
                      Total number of people who visited this profile
                    </span>
                  </div>
                </div>
                <h1 className="font-bold text-2xl">2</h1>
              </div>
              <div className="mt-5 ">
                <div className=" pb-3 flex justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-green-100 text-green-500 text-2xl flex justify-center items-center rounded-full">
                      <AiOutlineStock />
                    </div>
                    <div className="dvi">
                      <h1 className="font-bold text-xl ">Profile Views</h1>
                      <span className="text-sm text-gray-400">
                        Total number of people who visited this profile
                      </span>
                    </div>
                  </div>
                  <h1 className="font-bold text-sm border-2 border-green-200 bg-green-50 text-green-500 h-7 w-20 rounded-2xl pl-2 pt-0.5 ">
                    Excellent
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
