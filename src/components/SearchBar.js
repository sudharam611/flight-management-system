import React from "react";

import { FaSearch } from "react-icons/fa";
function SearchBar() {
  return (
    <div className="relative md:w-64">
      <span className=" md:absolute inset-y-0 left-0 flex items-center pl-2">
        <button className=" focus:outline-none rounded-full p-2 md:p-1  bg-light-gray ">
          <FaSearch className="h-4 w-4 text-gray-700" />
        </button>
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-1 pl-12 rounded-xl shadow outline-none hidden md:block placeholder:text-gray-400 bg-light-gray"
      />
    </div>
    // <div className="relative">
    //   <input
    //     type="text"
    //     placeholder="Search..."
    //     className="py-1 md:py-2 bg-light-gray pl-8 md:pl-10 pr-2 w-full rounded-3xl placeholder:text-sm focus:outline-none focus:border-none"
    //   />
    //   <div className="absolute top-[28%] left-2 md:left-4">
    //     <img src={searchIcon} alt="" width={18} />
    //   </div>
    // </div>
  );
}

export default SearchBar;
