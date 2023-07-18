import React from "react";

export const Map = ({ lat, lng }) => {
  return (
    <iframe
      src={`https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`}
      title="map"
      frameborder="0"
      className="h-[200px] w-full max-w-[300px]"
    ></iframe>
  );
};
