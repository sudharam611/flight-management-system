import React from "react";
import ScheduleForm from "./ScheduleForm";
import Recurrence from "./Recurrence";

function Schedule() {
  return (
    <>
      <div className="mt-6 bg-white rounded-lg p-6 shadow-sm">
        <ScheduleForm />
      </div>
      <div className="mt-6 bg-white rounded-lg p-6 shadow-sm">
        <Recurrence />
      </div>
    </>
  );
}

export default Schedule;
