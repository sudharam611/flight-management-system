import React from "react";
import { FaRegBell } from "react-icons/fa";
function Notification() {
  return (
    <div className="bg-light-gray rounded-full p-2 shadow-md flex items-center">
      <FaRegBell className="w-5 h-5" />
    </div>
  );
}

export default Notification;
