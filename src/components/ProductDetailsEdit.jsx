import React from "react";
import { useSelector } from "react-redux";
import { getConfig } from "../features/stateSlice";
import { Link } from "react-router-dom";
import { UserInfo } from "./UserInfo";
import { GrHomeRounded } from "react-icons/gr";
import { RiArrowRightSLine } from "react-icons/ri";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { RichEditor } from "./RichEditor";

export const ProductDetailsEdit = ({
  product,
  setConvertedContent,
  convertedContent,
  handleSubmit,
  onSubmit,
  errors,
  register,
}) => {
  const { mainColor } = useSelector(getConfig);
  const hasUserSection = true;

  return (
    <>
      <div className=" flex flex-col gap-5 lg:flex-row justify-between items-start lg:items-center">
        <div className="flex gap-5 items-center text-slate-500">
          <GrHomeRounded />
          <RiArrowRightSLine className="text-xl" />
          <p>Offers</p>
          <RiArrowRightSLine className="text-xl" />
          <h2 className="text-slate-800">{product.name}</h2>
        </div>
        <div className="flex gap-5">
          <Link
            to={"/product"}
            className={`text-[${mainColor}] border-2 border-[${mainColor}] px-4 py-1 rounded-md `}
          >
            Cancel
          </Link>
          <button
            disabled={Boolean(
              Object.keys(errors).length || convertedContent?.length <= 7
            )}
            onClick={handleSubmit(onSubmit)}
            className={`bg-[${mainColor}] px-4 py-1 rounded-md text-white`}
          >
            Save
          </button>
        </div>
      </div>

      <div
        className={` border rounded-md flex flex-col lg:grid ${
          hasUserSection ? "lg:grid-cols-[2fr_1fr]" : ""
        }`}
      >
        <div className="border relative  flex-1 flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-1">
            <label className="text-slate-600" htmlFor="picture">
              Picture
            </label>
            <input
              {...register("picture", {
                required: "Please enter a picture link",
              })}
              defaultValue={product.picture}
              className=" max-w-[300px] lg:w-full lg:max-w-none border px-2 py-1 rounded-md text-sm"
              type="text"
              name="picture"
              id="picture"
              placeholder="Enter picture link"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-slate-600" htmlFor="type">
              Type
            </label>
            <input
              {...register("type", { required: "Please enter a type" })}
              defaultValue={product.type.name}
              className="max-w-[300px] w-full lg:max-w-none border px-2 py-1 rounded-md text-sm"
              type="text"
              name="type"
              id="type"
              placeholder="Enter product type"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-slate-600" htmlFor="title">
              Title
            </label>
            <input
              {...register("name", { required: "Please enter a title" })}
              defaultValue={product.name}
              className="max-w-[300px] w-full lg:max-w-none border px-2 py-1 rounded-md text-sm"
              type="text"
              name="title"
              id="title"
              placeholder="Enter product title"
            />
          </div>

          <div className="flex flex-col gap-1 ">
            <label className="text-slate-600" htmlFor="title">
              Description
            </label>
            <RichEditor
              product={product}
              setConvertedContent={setConvertedContent}
            />
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
