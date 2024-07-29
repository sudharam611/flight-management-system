import React from "react";

function Button({ value, active }) {
  return (
    <div
      className={`${
        active
          ? " bg-secondary text-white border-2 border-secondary hover:bg-white hover:text-secondary "
          : " bg-white border-2 border-secondary text-secondary hover:bg-secondary hover:text-white "
      } px-2 py-2 md:px-6 md:py-3  text-sm rounded-md transition-all duration-100 text-center md:text-start cursor-pointer`}
    >
      {value}
    </div>
  );
}

export default Button;
