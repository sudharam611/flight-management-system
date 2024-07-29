import React from "react";
import { LuCircleDollarSign } from "react-icons/lu";
import { LuPlaneTakeoff } from "react-icons/lu";
import { IoTicketOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import Card from "./Card";
function CardBlock() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card name="Sales" value="$40,00,000" gradientClass="bg-gradient-purple">
        {" "}
        <LuCircleDollarSign className="w-6 h-6 text-white" />
      </Card>
      <Card
        name="Scheduled Flights"
        value="50"
        gradientClass="bg-gradient-green"
      >
        {" "}
        <MdAccessTime className="w-6 h-6 text-white" />
      </Card>
      <Card name="Active Flights" value="20" gradientClass="bg-gradient-blue">
        {" "}
        <LuPlaneTakeoff className="w-6 h-6 text-white" />
      </Card>
      <Card
        name="Total Bookings"
        value="450"
        gradientClass="bg-gradient-yellow"
      >
        {" "}
        <IoTicketOutline className="w-6 h-6 text-white" />
      </Card>
    </div>
  );
}

export default CardBlock;
