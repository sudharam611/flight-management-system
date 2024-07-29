import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Progress({ data, name, color, id }) {
  let value;
  let text;
  if (id === 1) {
    value = data.fleet_occupancy;
    text = `${data.fleet_occupancy}%`;
  } else if (id === 2) {
    value = Math.round((data.delays / data.total_flights_count) * 100);
    text = data.delays;
  } else if (id === 3) {
    value = Math.round((data.cancelled / data.total_flights_count) * 100);
    text = data.cancelled;
  }

  // console.log(value);
  return (
    <div className="mt-6 flex flex-1 flex-col justify-center items-center">
      <div className="w-44 h-44">
        <CircularProgressbar
          value={value}
          text={text}
          strokeWidth={15}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: color,
            textColor: "#222",

            trailColor: "#f5f5f5",
          })}
          className="font-bold"
        />
      </div>
      <p className="mt-4 text-center">{name}</p>
    </div>
  );
}

export default Progress;
