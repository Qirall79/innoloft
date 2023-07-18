import React from "react";
import { useSelector } from "react-redux";
import { getConfig } from "../features/stateSlice";
import { AiOutlineSearch, AiOutlineDown, AiOutlineBell } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";

export const Navbar = () => {
  const { mainColor, logo, id } = useSelector(getConfig);

  return (
    <nav
      className={`bg-[${mainColor}]  flex justify-center items-center w-screen h-20 py-5 text-white`}
    >
      <div className=" h-full max-w-[1450px] px-5 2xl:px-0 flex flex-1 items-center justify-between">
        <img
          className={`w-[80px] text-white fill-white`}
          src={id === 1 ? "/assets/nav-logo.png" : logo}
          alt="logo"
        />
        <div className=" hidden lg:inline-block w-1/3 max-w-[550px] text-black relative">
          <input
            type="search"
            name="search"
            id="search"
            className="w-full h-7 text-sm rounded-md outline-none pl-2 pr-4"
            placeholder="Enter interests, keywords, company name, etc."
          />
          <AiOutlineSearch className="absolute top-1/2 -translate-y-1/2 right-2 text-lg" />
        </div>
        <ul className="hidden lg:flex gap-6 items-center">
          <li className="flex gap-2 cursor-pointer items-center">
            <BsChatDots className="text-2xl" />
          </li>
          <li className="flex gap-2 cursor-pointer items-center">
            EN
            <AiOutlineDown />
          </li>
          <li className="flex gap-2 cursor-pointer items-center">
            <AiOutlineBell className="text-2xl" />
          </li>
          <li className="flex gap-2 cursor-pointer items-center">
            <img
              src="/assets/placeholder.jpg"
              className="w-10 h-10 rounded-full"
              alt="profile"
            />
            <AiOutlineDown />
          </li>
        </ul>
      </div>
    </nav>
  );
};
