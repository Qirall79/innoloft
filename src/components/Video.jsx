import React from "react";

export const Video = ({ product }) => {
  return (
    <div className="flex flex-col justify-center items-center border min-h-[400px]">
      <h2 className="self-start ml-5 mb-5">Video</h2>
      <iframe
        src={product.video.replace("watch?v=", "embed/")}
        title="video"
        width="600"
        height="315"
        className="w-[300px] lg:w-[600px]"
        frameborder="0"
      ></iframe>
    </div>
  );
};
