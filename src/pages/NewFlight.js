import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Button from "../components/Button";
import BookingStep from "../components/BookingStep";

function NewFlight() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="flex font-bold items-center gap-x-2">
        <FaArrowLeft onClick={handleBack} className="cursor-pointer" />
        <h2>Add New Flight</h2>
      </div>
      <div className="mt-6">
        <div className="bg-white px-4 py-2 rounded-lg">
          <BookingStep />
        </div>
      </div>
      <Outlet />
      <div className="flex gap-x-4 mt-4">
        <Link to="schedule">
          <Button value="Save & Continue" active />
        </Link>

        <Button value="Save & Exit" />
      </div>
    </div>
  );
}

export default NewFlight;
