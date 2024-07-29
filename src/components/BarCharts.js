import React from "react";
import {
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  BarChart,
  Bar,
  YAxis,
  Tooltip,
} from "recharts";

// const salesData = [
//   { date: "Jun 10", amount: 20000 },
//   { date: "Jun 11", amount: 8000 },
//   { date: "Jun 12", amount: 90000 },
//   { date: "Jun 13", amount: 40000 },
//   { date: "Jun 14", amount: 100000 },
//   { date: "Jun 15", amount: 60000 },
//   { date: "Jun 16", amount: 20000 },
// ];
function BarCharts({ data }) {
  // console.log(data);
  return (
    <div className="w-full h-64 z-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            stroke="#F7F7F7"
            strokeWidth={2}
            tick={{ fill: "#888", fontSize: 8, fontWeight: "light" }}
          />
          <YAxis
            stroke="#F7F7F7"
            strokeWidth={2}
            tick={{ fill: "#888", fontSize: 12, fontWeight: "light" }}
          />
          <Tooltip />
          <Bar dataKey="amount" fill="#2F0A55" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarCharts;
