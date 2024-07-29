import React, { useEffect, useState } from "react";
import Progress from "./Progress";
import { fetchDataFromJson } from "../data/fetchData";

function Performance() {
  const [selected, setSelected] = useState("today");
  const [performanceData, setPerformanceData] = useState([]);
  const getData = async () => {
    try {
      const data = await fetchDataFromJson("/data/performance.json");
      setPerformanceData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const renderBasedOnSelected = () => {
    const selectedCategory = performanceData.find((item) => item[selected]);
    if (!selectedCategory) return null;

    return (
      <>
        <Progress
          data={selectedCategory[selected]}
          color="#8168E2"
          name="Fleet Occupancy"
          id={1}
        />
        <Progress
          data={selectedCategory[selected]}
          color="#69C895"
          name="Delays"
          id={2}
        />
        <Progress
          data={selectedCategory[selected]}
          color="#3783F5"
          name="Cancellations"
          id={3}
        />
      </>
    );
  };

  return (
    <div className="pt-4 px-4 pb-6 bg-white rounded-lg h-full w-full">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-sm lg:text-lg">Performance</h3>
        <div className="border">
          <select
            name="type"
            id="type"
            className="text-sm focus:outline-none focus:border-none"
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="today">Today</option>
            <option value="this_week">This Week</option>
            <option value="this_month">This Month</option>
          </select>
        </div>
      </div>
      <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3">
        {renderBasedOnSelected()}
      </div>
    </div>
  );
}

export default Performance;
