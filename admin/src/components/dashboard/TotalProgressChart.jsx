import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart } from 'recharts';

const data = [
  { name: 'Apr 2024', Patient: 0, Appointment: 0, Prescription: 0 },
  { name: 'May 2024', Patient: 0, Appointment: 0, Prescription: 0 },
  { name: 'Jun 2024', Patient: 0, Appointment: 0, Prescription: 0 },
  { name: 'Jul 2024', Patient: 0, Appointment: 0, Prescription: 0 },
  { name: 'Aug 2024', Patient: 0, Appointment: 0, Prescription: 0 },
  { name: 'Sep 2024', Patient: 0, Appointment: 0, Prescription: 0 },
  { name: 'Oct 2024', Patient: 0, Appointment: 0, Prescription: 0 },
  { name: 'Nov 2024', Patient: 0, Appointment: 0, Prescription: 0 },
  { name: 'Dec 2024', Patient: 0, Appointment: 0, Prescription: 0 },
  { name: 'Jan 2025', Patient: 5, Appointment: 4, Prescription: 2 },
  { name: 'Feb 2025', Patient: 11, Appointment: 10, Prescription: 6 },
  { name: 'Mar 2025', Patient: 5, Appointment: 4, Prescription: 3 },
];

const TotalProgressChart = () => {
  return (
    <div className="bg-white p-4 mt-5 shadow-lg rounded-lg w-full">
      <h2 className="text-lg font-semibold">Total Progress</h2>
      <p className="text-sm text-gray-500">Showing status from the last year</p>
      <AreaChart
        width={670}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Patient" stroke="#f4a261" fill="#f4a261" fillOpacity={0.3} />
        <Area type="monotone" dataKey="Appointment" stroke="#4bc0c0" fill="#4bc0c0" fillOpacity={0.3} />
        <Area type="monotone" dataKey="Prescription" stroke="#6ab04c" fill="#6ab04c" fillOpacity={0.3} />
      </AreaChart>
    </div>
  );
};

export default TotalProgressChart;
