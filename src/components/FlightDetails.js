import React, { useEffect, useState } from "react";
import { fetchDataFromJson } from "../data/fetchData";
import FlightDetailsDisplay from "./FlightDetailsDisplay";
function FlightDetails({ selectedDate }) {
  const [flightDetailsData, setFlightDetailsData] = useState([]);

  const getData = async () => {
    try {
      const data = await fetchDataFromJson("/data/flightDetails.json");
      setFlightDetailsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const renderBasedOnDate = () => {
    const flightList = flightDetailsData.filter(
      (item) => item.dep_date === selectedDate
    );
    if (!flightList)
      return (
        <div className="flex mt-10 ">
          Please select date between July 01 to July 07
        </div>
      );
    console.log(flightList);
    return flightList.map((flight, index) => (
      <FlightDetailsDisplay data={flight} key={index} />
    ));
  };

  // console.log(flightList);
  renderBasedOnDate();
  return <div className="flex flex-col gap-4">{renderBasedOnDate()}</div>;
}

export default FlightDetails;
