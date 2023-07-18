import React from "react";

export const VideoEdit = ({ register, product }) => {
  return (
    <div className="flex flex-col justify-center items-start p-5 border min-h-[150px] relative">
      <h2 className="absolute top-5 left-5">Video</h2>
      <input
        defaultValue={product.video}
        {...register("video", { required: "enter a video link" })}
        className="border  max-w-[300px] w-full lg:max-w-none px-2 py-1 rounded-md "
        type="text"
        name="video"
        id="video"
        placeholder="Enter a Youtube or Vimeo link"
      />
    </div>
  );
};
