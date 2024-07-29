import React from "react";
import { Outlet } from "react-router-dom";

function Flights() {
  return (
    <div className="mt-2 px-6 py-2">
      <Outlet />
    </div>
  );
}

export default Flights;
