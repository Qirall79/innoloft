import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaChessKnight } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { useSelector } from "react-redux";
import { getTrl } from "../features/stateSlice";

export const OfferDetailsEdit = ({ product, register }) => {
  const categoriesDefault = product.categories.map((c) => c.name).join(", ");
  const businessModelsDefault = product.businessModels
    .map((m) => m.name)
    .join(", ");

  const trl = useSelector(getTrl);

  return (
    <div className="min-h-[400px] p-5 border">
      <h2 className="mb-8">Offer details</h2>
      <div className="flex flex-col gap-10 text-slate-500">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {" "}
            <MdOutlineSettingsSuggest className="text-2xl" /> Categories
          </div>
          <div className="flex flex-col gap-1">
            <input
              {...register("categories", { required: "enter categories" })}
              defaultValue={categoriesDefault}
              className="max-w-[300px] w-full lg:max-w-none border px-2 py-1 rounded-md text-slate-900 text-sm"
              type="text"
              name="categories"
              id="categories"
            />
            <span className="text-sm text-sky-700">
              *Please enter values as a comma separated list
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {" "}
            <FaChessKnight className="text-2xl" /> Business Models
          </div>
          <div className="flex flex-col gap-1">
            <input
              {...register("businessModels", {
                required: "enter business models",
              })}
              defaultValue={businessModelsDefault}
              className="max-w-[300px] w-full lg:max-w-none border px-2 py-1 rounded-md text-slate-900 text-sm"
              type="text"
              name="businessModels"
              id="businessModels"
            />
            <span className="text-sm text-sky-700">
              *Please enter values as a comma separated list
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {" "}
            <BiTimeFive className="text-2xl" /> TRL
          </div>
          <div className="flex flex-col gap-1">
            <select
              {...register("trl", { required: "enter a trl" })}
              defaultValue={product.trl.name}
              className="h-10 max-w-[300px] lg:w-full lg:max-w-none"
              name="trl"
              id="trl"
            >
              {trl.map((t) => {
                return <option value={t.name}>{t.name}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {" "}
            <TbReportMoney className="text-2xl" /> Costs
          </div>
          <div className="flex flex-col gap-1">
            <input
              {...register("costs", { required: "enter costs" })}
              defaultValue={product.investmentEffort
                .split(" ")[1]
                .replace("€", "")}
              className="max-w-[300px] w-full lg:max-w-none border px-2 py-1 rounded-md text-slate-900 text-sm"
              type="text"
              name="costs"
              id="costs"
            />
            <span className="text-sm text-sky-700"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
