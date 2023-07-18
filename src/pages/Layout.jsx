import React from "react";
import { Navbar } from "../components/Navbar";
import { GrHomeRounded } from "react-icons/gr";
import { BiNetworkChart } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

export const Layout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="w-full py-8 px-2 2xl:px-0  flex flex-1 justify-center border ">
        <div className=" max-w-[1450px] h-full grid lg:grid-cols-[1fr_4fr] gap-10 ">
          <div className=" hidden lg:flex flex-col gap-8">
            <div className="flex gap-4 items-center">
              <img
                src="/assets/placeholder.jpg"
                className="w-24 h-24 rounded-full"
                alt="profile"
              />
              <div className="flex flex-col ">
                <p className="text-lg font-medium text-slate-900">John Doe</p>
                <p className="text-sm text-slate-700">Company</p>
              </div>
            </div>

            <div className="flex gap-5 items-center font-light">
              <GrHomeRounded className="text-lg" />
              <p>Home</p>
            </div>

            <div className="flex gap-5 items-center font-light">
              <BsFillPeopleFill className="text-lg" />
              <p>Members</p>
            </div>

            <div className="flex justify-between items-center font-light pr-10">
              <div className="flex gap-5 items-center">
                <BiNetworkChart className="text-lg" />
                <p>Organizations</p>
              </div>
              <AiOutlineDown className="cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col gap-6 ">{children}</div>
        </div>
      </main>
    </div>
  );
};
