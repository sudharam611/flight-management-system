import React, { useEffect, useState } from "react";

import BarCharts from "./BarCharts";
import { fetchDataFromJson } from "../data/fetchData";

function Sales() {
  const [selected, setSelected] = useState("today");
  const [salesData, setSalesData] = useState([]);
  const getData = async () => {
    try {
      const data = await fetchDataFromJson("/data/sales.json");
      setSalesData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(salesData);
  const renderBasedOnSelected = () => {
    const selectedCategory = salesData.find((item) => item[selected]);
    // console.log(selectedCategory);
    if (!selectedCategory) return null;
    return <BarCharts data={selectedCategory[selected].sales} />;
    // return selectedCategory[selected].sales.map((data, index) => (
    //   <BarCharts data={data} key={index} />
    // ));
  };
  return (
    <div className="px-2 py-4 md:p-4 bg-white rounded-lg h-full">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-sm lg:text-lg">Sales</h3>
        <div className="border">
          <select
            name="type"
            id="type"
            className="text-sm focus:outline-none focus:border-none"
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="today">Today</option>
            <option value="this_week">This Week</option>
            <option value="this_month">This month</option>
          </select>
        </div>
      </div>
      <div className="mt-6 px-2 md:px-6 py-2">{renderBasedOnSelected()}</div>
    </div>
  );
}

export default Sales;
