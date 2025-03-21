import React from "react";
import Chart from "react-apexcharts";
import { Card } from "antd";
import { BarChart } from "lucide-react";

const AccountInformation = () => {
  const options = {
    chart: { id: "account-chart", toolbar: { show: false } },
    xaxis: {
      categories: [
        "Apr 2024", "May 2024", "Jun 2024", "Jul 2024", "Aug 2024",
        "Sep 2024", "Oct 2024", "Nov 2024", "Dec 2024", "Jan 2025",
        "Feb 2025", "Mar 2025"
      ],
    },
    colors: ["#22c55e", "#e5e7eb"], // Green & Gray
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    fill: { opacity: 0.6 },
    legend: { position: "top" },
  };

  const series = [
    { name: "Debit", data: [2000, 3000, 1500, 2000, 1000, 2500, 3000, 4000, 3500, 5000, 30000, 2000] },
    { name: "Credit", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 100000, 380000, 10000] },
  ];

  return (
    <Card className=" rounded-lg bg-white p-5">
      <div className="flex items-center space-x-2 mb-4">
        <BarChart className="text-green-500" size={24} />
        <h2 className="text-lg font-semibold text-gray-800">Account Information</h2>
      </div>
      <div className="w-full overflow-hidden">
        <Chart options={options} series={series} type="area" height={300} />
      </div>
    </Card>
  );
};

export default AccountInformation;
