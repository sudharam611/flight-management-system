import React, { useState } from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="flex overflow-x-hidden">
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div
        className={`w-full transition-all duration-300 ${
          showSideBar ? " lg:ml-64 " : ""
        }`}
      >
        <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
