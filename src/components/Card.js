import React from "react";

function Card({ children, name, value, gradientClass }) {
  return (
    <div className={`p-4 rounded-2xl ${gradientClass}`}>
      <div className="flex justify-between">
        <div className="bg-light-white p-1.5 rounded-md ">{children}</div>
        <div className="bg-light-white text-light-black p-1.5 font-medium rounded-md">
          +20.00%
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <p className="text-light-gray ">{name}</p>
        <p className="font-bold text-light-gray mt-1 text-lg">{value}</p>
      </div>
    </div>
  );
}

export default Card;
