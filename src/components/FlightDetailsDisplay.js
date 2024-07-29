import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiAirplaneLandingFill, PiAirplaneTakeoffFill } from "react-icons/pi";
import PlotCrew from "./PlotCrew";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";

function FlightDetailsDisplay({ data }) {
  const [showToggle, setShowToggle] = useState(false);

  let classList = `border px-2 py-1 text-sm rounded-lg font-medium`;
  if (data.flight_status === "Cancelled")
    classList += " border-red-500 text-red-500 bg-light-red ";
  else if (data.flight_status === "Parked")
    classList += " border-gray-500 text-gray-500 bg-light-gray ";
  else if (data.flight_status === "Enroute")
    classList += " border-yellow-500 text-yellow-500 bg-light-yellow ";
  else classList += " border-green-500 text-green-500 bg-light-green ";

  let totalSeatsBooked =
    data.availability.economy.seats_booked +
    data.availability.business.seats_booked;

  let totalSeats =
    data.availability.economy.total_seats +
    data.availability.business.total_seats;

  let totalOccupancy = Math.floor((totalSeatsBooked / totalSeats) * 100);

  return (
    <div className="p-4 bg-white rounded-lg relative">
      <div className="flex justify-between items-center">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-x-4">
          <span className="font-bold ">{data.aircraft_type}</span>
          <span className={classList}>{data.flight_status}</span>
        </div>
        <div
          className="cursor-pointer px-3 py-4 rounded-full hover:bg-light-gray focus:bg-light-gray"
          onClick={() => setShowToggle((prevState) => !prevState)}
        >
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-4 w-full gap-4">
        <div
          className={`${
            data.flight_status === "Cancelled"
              ? " bg-light-red "
              : " bg-light-gray "
          } " rounded-lg px-3 py-4 flex flex-col lg:flex-row justify-between items-center text-center lg:text-start w-full  gap-y-8 lg:gap-y-0"`}
        >
          <div className="flex flex-col ">
            <span className=" text-dark-gray mb-1">{data.dep_date}</span>
            <span className="font-bold text-lg tracking-wide">
              {data.dep_time}
            </span>
            <span className=" text-dark-gray uppercase tracking-wide">
              {data.origincode}
            </span>
          </div>
          <div className="flex items-center gap-x-2 ">
            <PiAirplaneTakeoffFill fontSize={24} />
            <span className="text-dark-gray">-----</span>
            <span className="bg-white px-1 md:px-2 py-1 text-dark-gray uppercase">
              {data.duration}
            </span>
            <span className="text-dark-gray">-----</span>
            <PiAirplaneLandingFill fontSize={24} />
          </div>
          <div className="flex flex-col ">
            <span className="text-dark-gray mb-1">{data.arrival_date}</span>
            <span className="font-bold text-lg tracking-wide">
              {data.arrival_time}
            </span>
            <span className=" text-dark-gray uppercase tracking-wide">
              {data.destination_code}
            </span>
          </div>
        </div>
        <div
          className={`${
            data.flight_status === "Cancelled"
              ? " bg-light-red "
              : " bg-light-gray "
          } " rounded-lg px-3 py-4 "`}
        >
          <div className="flex flex-col gap-y-2">
            <span className="text-dark-gray">Plot & Crew</span>
            <div className="flex items-center justify-center lg:items-start px-4">
              <PlotCrew photo={user1} />
              <PlotCrew photo={user2} />
              <PlotCrew photo={user3} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-xs">
          Occupancy: {totalOccupancy}% ({data.availability.economy.seats_left}/
          {data.availability.economy.total_seats} Economy |{" "}
          {data.availability.business.seats_left}/
          {data.availability.business.total_seats} Business left)
        </span>
      </div>
      {showToggle && (
        <div className="absolute top-12 right-10 py-4 px-6 bg-white shadow-md">
          <ul className="flex flex-col gap-y-3 text-sm">
            <li>Edit Flight</li>
            <li>Assign Staff</li>
            <li>Manage Bookings</li>
            <li>Cancel Flight</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default FlightDetailsDisplay;
