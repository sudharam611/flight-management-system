import React from "react";

function PlotCrew({ photo }) {
  return (
    <div className="w-14 h-14 lg:w-10 lg:h-10 overflow-hidden border-2 border-light-gray rounded-full -ml-2">
      <img src={photo} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

export default PlotCrew;
