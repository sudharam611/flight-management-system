import React from "react";

function Recurrence() {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div>
      <h3 className="font-bold text-sm">Recurrence</h3>
      <div className="flex flex-col gap-y-4">
        <div className="mt-6">
          <label className="text-xs">Repeat Every</label>
          <div className="flex gap-2">
            <div className="flex gap-3 text-sm">
              <select
                name="count"
                className="px-4 py-2 border border-medium-gray rounded-md mt-2"
              >
                <option value="1 ">1</option>
                <option value="2 "> 2 </option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="flex gap-3 text-sm">
              <select
                name="count"
                className="px-4 py-2 border border-medium-gray rounded-md mt-2"
              >
                <option value="week ">Week</option>
                <option value="month">Month </option>
                <option value="year">Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-xs">Repeat On</label>
        <div className="w-full overflow-x-auto">
          <div className="flex flex-nowrap gap-x-4 w-full text-sm py-4">
            {days.map((day, index) => (
              <div
                className={`${
                  index === 0
                    ? " bg-primary text-white "
                    : " bg-white text-light-black "
                } px-4 py-2 border border-medium-gray rounded-lg hover:bg-primary hover:text-white`}
              >
                <span>{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label className="text-xs">Ends on</label>
        <div>
          <select
            name="endsOn"
            className="px-4 py-2 border border-medium-gray rounded-md mt-2"
          >
            <option value="never ">Never</option>
            <option value="nextmonth">Next month </option>
            <option value="next Year">Next Year</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Recurrence;
