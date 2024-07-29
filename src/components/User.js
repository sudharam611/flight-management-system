import React, { useState } from "react";
import user from "../images/user.jpg";
import downArrow from "../images/downIcon.png";
import UserDetails from "./UserDetails";

function User() {
  const [showUser, setShowUser] = useState(false);
  return (
    <div className="flex items-center gap-2.5">
      <div
        title="Fernando | Admin"
        className="w-10 h-10 rounded-full overflow-hidden cursor-pointer"
        onClick={() => setShowUser((prevState) => !prevState)}
      >
        <img src={user} alt="User" />
      </div>
      <div className="flex-col hidden md:flex text-sm">
        <UserDetails />
      </div>
      <div className="hidden md:block">
        <img src={downArrow} alt="down arrow" width={16} />
      </div>
      {showUser && (
        <div className="absolute top-8 right-0 rounded-sm flex md:hidden">
          <div className="bg-light-gray p-2 flex flex-col shadow-md text-xs">
            <UserDetails />
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
