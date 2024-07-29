import React, { useState } from "react";

import flightMap from "../images/flightMap.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import FlightInfoBlock from "./FlightInfoBlock";
function FlightInfo() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="p-4 bg-white rounded-lg h-full">
      <div className="flex justify-between items-center relative">
        <h3 className="font-bold text-sm lg:text-lg">Flights Information</h3>
        <div
          className="flex lg:hidden cursor-pointer bg-light-gray rounded-full p-2 hover:bg-white"
          onClick={() => setShowInfo((prevState) => !prevState)}
        >
          <IoMdArrowDropdown fontSize={24} />
        </div>
        {showInfo && (
          <div className="bg-white px-6 py-3 rounded-xl absolute top-5 right-2 transition-all duration-100">
            <div className="flex flex-col justify-start gap-2">
              {" "}
              <FlightInfoBlock color="text-blue-400" name="Enroute" value="3" />
              <FlightInfoBlock color="text-green-400" name="Taxi" value="1" />
              <FlightInfoBlock color="text-gray-400" name="Parked" value="12" />
            </div>
          </div>
        )}
        <div className="hidden lg:flex items-center gap-3">
          <FlightInfoBlock color="text-blue-400" name="Enroute" value="3" />
          <FlightInfoBlock color="text-green-400" name="Taxi" value="1" />
          <FlightInfoBlock color="text-gray-400" name="Parked" value="12" />
        </div>
      </div>
      <div className="mt-4 rounded-xl overflow-hidden max-h-80">
        <img src={flightMap} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default FlightInfo;
