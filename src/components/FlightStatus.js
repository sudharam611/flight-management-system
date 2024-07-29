import React, { useEffect, useState } from "react";
import { fetchDataFromJson } from "../data/fetchData";

function FlightStatus() {
  const [flightData, setFlightData] = useState([]);
  const getData = async () => {
    try {
      const data = await fetchDataFromJson("/data/flightDetails.json");
      setFlightData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg h-full">
      <h3 className="font-bold text-sm lg:text-lg">Current Flight Status</h3>
      <div className="mt-2 h-80 overflow-y-auto">
        <table className="w-full table-auto border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left text-sm">
              <th className="p-2">Aircraft</th>
              <th className="p-2">Dep</th>
              <th className="p-2">Status</th>
              <th className="p-2">Arr</th>
            </tr>
          </thead>
          <tbody>
            {flightData.slice(0, 7).map((data, index) => (
              <tr key={index} className="bg-light-gray text-sm rounded-md">
                <td className="p-2">{data.aircraft_type}</td>
                <td className="p-2">{data.origincode}</td>
                <td className="p-2">{data.flight_status}</td>
                <td className="p-2">{data.destination_code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FlightStatus;
