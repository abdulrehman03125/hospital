import React from "react";
import {  PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Patient", value: 50, color: "#f7941d" },
  { name: "Appointment", value: 40, color: "#0096A6" },
  { name: "Prescription", value: 10, color: "#28A745" },
];

const PieChartComponent = () => {
  return (
    <div className="flex flex-col bg-white items-center">
      {/* <LoaderPinwheel size={24}/> */}
      <h2 className="text-xl mt-10 font-semibold mb-4">Percentage (2025-03)</h2>
      <PieChart width={350} height={350}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
