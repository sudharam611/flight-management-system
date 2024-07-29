import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import FlightDetails from "./FlightDetails";
import TabContainer from "./TabContainer";
import Button from "./Button";
import { Link } from "react-router-dom";
import DateSwiper from "./DateSwiper";
import { getDaysInMonth } from "../data/daysInMonth";

function Upcoming() {
  const [monthYear, setMonthYear] = useState("");
  const [days, setDays] = useState([]);
  const [defaultDate, setDefaultDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("2024-07-01");
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const handleMonthYearChange = (e) => {
    const selectedMonthYear = e.target.value;
    setMonthYear(selectedMonthYear);
    const [year, month] = selectedMonthYear.split("-");
    setDays(getDaysInMonth(year, month));
    setDefaultDate(selectedMonthYear);
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}`;
    setDefaultDate(formattedDate);
    setDays(getDaysInMonth(year, month));
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:items-center mt-6  gap-2">
        <TabContainer />
        <Link to="add-flights">
          <Button value="+ Add New Flight" active />
        </Link>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <div>
            <input
              type="month"
              id="monthYear"
              name="monthYear"
              value={defaultDate}
              className="px-2 py-1 rounded-md"
              onChange={handleMonthYearChange}
            />
          </div>
          <div className="flex gap-2">
            <div
              className="p-2 bg-white cursor-pointer hover:bg-secondary hover:text-white"
              ref={navigationPrevRef}
            >
              <FaChevronLeft />
            </div>
            <div
              className="p-2 bg-white cursor-pointer hover:bg-secondary hover:text-white"
              ref={navigationNextRef}
            >
              <FaChevronRight />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <DateSwiper
            days={days}
            navigationNextRef={navigationNextRef}
            navigationPrevRef={navigationPrevRef}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>

        <div className="mt-6">
          {}
          <FlightDetails selectedDate={selectedDate} />
          <FlightDetails />
        </div>
      </div>
    </>
  );
}

export default Upcoming;
