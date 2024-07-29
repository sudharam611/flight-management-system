import React from "react";

function DateCard({ date, day, active, selectedDate, setSelectedDate }) {
  const displayDate = date.split("-")[2];

  return (
    <div
      className={`${
        active ? "bg-secondary text-white" : "bg-white text-light-black"
      } px-10 py-4 rounded-md hover:bg-secondary hover:text-white transition-colors duration-100 cursor-pointer`}
      onClick={() => setSelectedDate(date)}
    >
      <div className="flex flex-col items-center">
        <span className="text-md">{displayDate}</span>
        <span className="uppercase text-sm">{day}</span>
      </div>
    </div>
  );
}

export default DateCard;
