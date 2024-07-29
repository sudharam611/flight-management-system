import React, { useEffect, useState } from "react";
import { fetchDataFromJson } from "../data/fetchData";
function PopularRoutes() {
  const [routesData, setRoutesData] = useState([]);
  const [selected, setSelected] = useState("this_month");
  const getData = async () => {
    try {
      const data = await fetchDataFromJson("/data/popularRoutes.json");
      setRoutesData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(routesData);
  // console.log(selected);
  const renderBasedOnSelected = () => {
    const selectedCategory = routesData.find((item) => item[selected]);
    // console.log(selectedCategory);
    if (!selectedCategory) return null;

    return selectedCategory[selected].map((route, index) => (
      <div
        className="flex justify-between items-center py-3 px-2 shadow-sm mb-2"
        key={index}
      >
        <p className="font-medium">
          {route.origin}({route.origincode}) to {route.destination}(
          {route.destinationcode})
        </p>
        <p className="font-bold">{route.number_of_bookings}</p>
      </div>
    ));
  };
  return (
    <div className="p-4 bg-white rounded-lg h-full">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-sm lg:text-lg">Popular Routes</h3>
        <div className="border">
          <select
            name="type"
            id="type"
            className="text-sm focus:outline-none focus:border-none"
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="this_month">This Month</option>
            <option value="last_month">Last Month</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <div className="mt-4 text-sm">{renderBasedOnSelected()}</div>
    </div>
  );
}

export default PopularRoutes;
