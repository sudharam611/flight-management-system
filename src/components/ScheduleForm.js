import React from "react";

function ScheduleForm() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-sm">
      <div className="flex flex-col">
        <label className="font-medium">Departure Date*</label>
        <input
          type="date"
          className="px-4 py-2 border border-medium-gray rounded-md mt-2"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium">Departure Time*</label>
        <input
          type="time"
          className="px-4 py-2 border border-medium-gray rounded-md mt-2"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium">Timezone*</label>
        <select
          name="timezone"
          className="px-2 py-2 border border-medium-gray rounded-md mt-2"
        >
          <option value="" disabled selected>
            Select
          </option>
          <option value="UTC+03:30 ">UTC+03:30 </option>
          <option value="UTC+04:00 "> UTC+04:00 </option>
          <option value="UTC+05:00">UTC+05:00</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="font-medium">Arrival Date*</label>
        <input
          type="date"
          className="px-4 py-2 border border-medium-gray rounded-md mt-2"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium">Arrival Time*</label>
        <input
          type="time"
          className="px-4 py-2 border border-medium-gray rounded-md mt-2"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium">Timezone*</label>
        <select
          name="timezone"
          className="px-2 py-2 border border-medium-gray rounded-md mt-2"
        >
          <option value="" disabled selected>
            Select
          </option>
          <option value="UTC+03:30 ">UTC+03:30 </option>
          <option value="UTC+04:00 "> UTC+04:00 </option>
          <option value="UTC+05:00">UTC+05:00</option>
        </select>
      </div>
    </form>
  );
}

export default ScheduleForm;
