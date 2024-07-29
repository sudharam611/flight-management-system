import React from "react";
import { GoDotFill } from "react-icons/go";

function FlightInfoBlock({ color, name, value }) {
  return (
    <div className="flex items-center ">
      <GoDotFill fontSize={18} className={color} />
      <p className="text-sm">{name}</p>
      <p className="font-bold text-md ml-2">{value}</p>
    </div>
  );
}

export default FlightInfoBlock;
