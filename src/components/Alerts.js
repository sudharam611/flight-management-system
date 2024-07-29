import React, { useEffect, useState } from "react";
import iconLookup from "../data/reactIcons";
import { fetchDataFromJson } from "../data/fetchData";
function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const getData = async () => {
    try {
      const data = await fetchDataFromJson("/data/alerts.json");
      setAlerts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="p-4 bg-white rounded-lg h-full">
      <h3 className="font-bold text-sm lg:text-lg">Alerts</h3>

      {alerts.map((data, index) => {
        const IconComponent = iconLookup[data.icon];
        return (
          <div
            className="flex gap-4 mt-6 text-sm w-full shadow-md py-2 px-4"
            key={index}
          >
            {IconComponent && (
              <IconComponent fontSize={28} className="text-red-500 font-bold" />
            )}
            <div className="flex flex-col w-full">
              <p className="font-bold">{data.alert_name}</p>
              <div className="flex justify-between items-center w-full mt-1 text-gray-600">
                <p>{data.flight_number}</p>
                <p className="ml-auto">{data.alert_time}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Alerts;
