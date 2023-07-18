import React from "react";
import { MdOutlinePlace } from "react-icons/md";
import { Map } from "./Map";

export const UserInfo = ({ product }) => {
  return (
    <>
      <h2>Offered by</h2>

      <div className="flex justify-start items-start flex-col gap-3">
        <img
          className="max-w-3/5 w-[200px]"
          src={product.company.logo}
          alt="logo"
        />

        <div className="w-full flex gap-3 items-center">
          <img
            className="w-20 h-20 rounded-full"
            src={product.user.profilePicture}
            alt="profile"
          />
          <div>
            <p className="text-slate-700 mb-1">
              {product.user.firstName + " " + product.user.lastName}
            </p>
            <p className="text-sm text-slate-500">{product.company.name}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="flex gap-3 text-slate-500">
          <MdOutlinePlace className="text-xl" />
          <p>
            {product.company.address.street +
              " " +
              product.company.address.house +
              ","}
            <br />
            {product.company.address.zipCode +
              " " +
              product.company.address.city.name +
              ", " +
              product.company.address.country.name}
          </p>
        </div>
        <Map
          lat={product.company.address.latitude}
          lng={product.company.address.longitude}
        />
      </div>
    </>
  );
};
