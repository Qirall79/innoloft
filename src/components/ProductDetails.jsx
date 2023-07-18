import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
import { SlBadge } from "react-icons/sl";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { getConfig } from "../features/stateSlice";
import { UserInfo } from "./UserInfo";
export const ProductDetails = ({ product }) => {
  const { mainColor } = useSelector(getConfig);

  const hasUserSection = true;

  return (
    <>
      <div className=" w-full flex flex-col gap-5 lg:flex-row justify-between items-start lg:items-center">
        <div className="w-full flex gap-5 items-center text-slate-500">
          <GrHomeRounded />
          <RiArrowRightSLine className="text-xl" />
          <p>Offers</p>
          <RiArrowRightSLine className="text-xl" />
          <h2 className="text-slate-800">{product.name}</h2>
        </div>
        <Link
          to={"/product/edit"}
          className={`bg-[${mainColor}] px-4 py-1 rounded-md text-white`}
        >
          Edit
        </Link>
      </div>

      <div
        className={` border flex flex-col lg:grid ${
          hasUserSection ? "lg:grid-cols-[2fr_1fr]" : ""
        }`}
      >
        <div className="border relative w-full ">
          <img src={product.picture} className="max-w-[90%]" alt="product" />
          <h3 className="pl-5 pt-5 text-xl">{product.name}</h3>
          <div
            className="p-5 text-gray-500 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          <div
            className={`absolute pr-3 top-0 left-0 flex items-center gap-3 rounded-br-md`}
          >
            <div
              className={`bg-[${mainColor}] px-3 py-3 rounded-tl-md rounded-br-md `}
            >
              <SlBadge className={`text-xl text-white`} />
            </div>
            <span>{product.type.name}</span>
          </div>
        </div>
        <div
          className={`${hasUserSection ? "flex" : "hidden"} flex-col p-5 gap-8`}
        >
          <UserInfo product={product} />
        </div>
      </div>
    </>
  );
};
