import { Accessibility, List, Stethoscope, User } from "lucide-react";

const DashboardCards = () => {
  const cards = [
    { id: 1, count: 15, label: "Patient", icon: <Accessibility size={40} />, color: "bg-blue-500" },
    { id: 2, count: 13, label: "Appointment", icon: <List size={40} />, color: "bg-green-500" },
    { id: 3, count: 10, label: "Doctor", icon: <Stethoscope size={40} />, color: "bg-teal-500" },
    { id: 4, count: 1, label: "Representative", icon: <User size={40} />, color: "bg-yellow-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {cards.map((card) => (
        <div key={card.id} className={`p-6 rounded-lg shadow-lg text-white ${card.color} flex flex-col justify-between h-32 min-w-[150px] sm:min-w-[180px] md:min-w-[200px]`}>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold">{card.count}</span>
            {card.icon}
          </div>
          <p className="text-lg font-semibold">{card.label}</p>
          <button className="text-sm mt-2 underline flex items-center">More Info →</button>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
