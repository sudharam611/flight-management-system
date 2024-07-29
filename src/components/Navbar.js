import React from "react";
import { FaBars } from "react-icons/fa";
import SearchBar from "./SearchBar";
import Notification from "./Notification";
import User from "./User";

function Navbar({ setShowSideBar }) {
  return (
    <nav
      className={`bg-white px-4 py-3 flex justify-between items-center  w-full 
        z-20`}
    >
      <div className="flex items-center text-md">
        <FaBars
          className="text-primary cursor-pointer me-4"
          onClick={() => setShowSideBar((prevState) => !prevState)}
        />
        <h3 className="font-bold">Dashboard</h3>
      </div>

      <div className="flex gap-4 items-center">
        <SearchBar />
        <Notification />
        <User />
      </div>
    </nav>
  );
}

export default Navbar;
