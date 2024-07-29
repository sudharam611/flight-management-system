import React from "react";
import { PiAirplaneTiltFill } from "react-icons/pi";
function Logo() {
  return (
    <div className="flex items-center gap-2 mb-2 px-3">
      <PiAirplaneTiltFill className="text-primary" size={24} />
      <h1 className="text-primary uppercase font-bold text-xl text-gradient">
        Flightms
      </h1>
    </div>
  );
}

export default Logo;
