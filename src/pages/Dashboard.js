import React from "react";
import Card from "../components/Card";

import CardBlock from "../components/CardBlock";
import FlightInfo from "../components/FlightInfo";
import Sales from "../components/Sales";
import FlightStatus from "../components/FlightStatus";
import Performance from "../components/Performance";
import Alerts from "../components/Alerts";
import PopularRoutes from "../components/PopularRoutes";
function Dashboard() {
  return (
    <div className="mt-2 px-3 py-2">
      <CardBlock />
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="order-1 md:order-1 md:col-span-2 mt-6">
            <FlightInfo />
          </div>
          <div className="order-4 md:order-2 mt-6">
            <FlightStatus />
          </div>
          <div className="order-2 md:order-3  md:col-span-2 mt-6">
            <Performance />
          </div>
          <div className="order-5 md:order-4  mt-6">
            <Alerts />
          </div>
          <div className="order-3 md:order-5  md:col-span-2  mt-6">
            <Sales />
          </div>
          <div className="order-6 md:order-6 mt-6">
            <PopularRoutes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
