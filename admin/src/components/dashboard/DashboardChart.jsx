import React from "react";
// import { Line, Pie } from "react-chartjs-2";
// import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import "chart.js/auto";

const DashboardCharts = () => {
  const lineData = {
    labels: [
      "Apr 2024", "May 2024", "Jun 2024", "Jul 2024", "Aug 2024", "Sep 2024", "Oct 2024", "Nov 2024", "Dec 2024", "Jan 2025", "Feb 2025", "Mar 2025"
    ],
    datasets: [
      {
        label: "Debit",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 10000, 400000, 5000],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.5)",
        fill: true,
      },
      {
        label: "Credit",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 380000, 0],
        borderColor: "#ccc",
        backgroundColor: "rgba(200, 200, 200, 0.5)",
        fill: true,
      },
    ],
  };

  const pieData = {
    labels: ["Patient", "Appointment", "Prescription"],
    datasets: [
      {
        data: [50, 40, 10],
        backgroundColor: ["#f59e0b", "#0ea5e9", "#22c55e"],
      },
    ],
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Account Information */}
      <Card className="p-4 shadow-lg rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Account Information</h2>
        <Line data={lineData} />
      </Card>

      {/* Percentage */}
      <Card className="p-4 shadow-lg rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Percentage</h2>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md">
            <Calendar size={16} />
            <span className="text-sm">2025-03</span>
          </div>
        </div>
        <Pie data={pieData} />
      </Card>
    </div>
  );
};

export default DashboardCharts;