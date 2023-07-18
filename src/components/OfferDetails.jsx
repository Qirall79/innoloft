import React from "react";

import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaChessKnight } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { TbReportMoney } from "react-icons/tb";

export const OfferDetails = ({ product }) => {
  return (
    <div className="min-h-[400px] p-5 border">
      <h2 className="mb-8">Offer details</h2>
      <div className="flex flex-col gap-10 text-slate-500">
        <div className="flex flex-col gap-10 lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 flex flex-col gap-3 ">
            <div className="flex items-center gap-3">
              {" "}
              <MdOutlineSettingsSuggest className="text-2xl" /> Categories
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 pl-6">
              {product.categories.map((c) => {
                return (
                  <p
                    key={c.id}
                    className="text-slate-900 px-3 py-1 bg-slate-200 text-sm rounded-2xl"
                  >
                    {" "}
                    {c.name}{" "}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {" "}
              <FaChessKnight className="text-2xl" /> Business Models
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 pl-6">
              {product.businessModels.map((b) => {
                return (
                  <p
                    key={b.id}
                    className="text-slate-900 px-3 py-1 bg-slate-200 text-sm rounded-2xl"
                  >
                    {" "}
                    {b.name}{" "}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {" "}
              <BiTimeFive className="text-2xl" /> TRL
            </div>
            <p
              key={product.trl.id}
              className="text-slate-900 text-center ml-6 max-w-[350px] px-3 py-1 bg-slate-200 text-sm rounded-2xl"
            >
              {" "}
              {product.trl.name}{" "}
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-3 ">
            <div className="flex items-center gap-3">
              {" "}
              <TbReportMoney className="text-2xl" /> Costs
            </div>
            <p className="text-slate-900 ml-6 px-3 py-1 bg-slate-200 text-sm rounded-2xl">
              {product.investmentEffort}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
