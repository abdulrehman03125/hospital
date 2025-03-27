import { useEffect, useState } from "react";
import { Accessibility, List, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardCards = () => {
  const [counts, setCounts] = useState({
    patients: 0,
    appointments: 0,
    doctors: 0,
  });

  const navigate = useNavigate(); // React Router Navigation

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const patientsRes = await fetch("http://localhost:3002/patients/all");
        const patientsData = await patientsRes.json();

        const appointmentsRes = await fetch("http://localhost:3002/appointments/all");
        const appointmentsData = await appointmentsRes.json();

        const doctorsRes = await fetch("http://localhost:3002/doctors/all");
        const doctorsData = await doctorsRes.json();

        setCounts({
          patients: patientsData.length || 0,
          appointments: appointmentsData.length || 0,
          doctors: doctorsData.length || 0,
        });
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchCounts();
  }, []);

  const cards = [
    { id: 1, count: counts.patients, label: "Patients", icon: <Accessibility size={40} />, color: "bg-blue-500", route: "/dashboard/patient/list" },
    { id: 2, count: counts.appointments, label: "Appointments", icon: <List size={40} />, color: "bg-green-500", route: "/dashboard/appointments/list" },
    { id: 3, count: counts.doctors, label: "Doctors", icon: <Stethoscope size={40} />, color: "bg-teal-500", route: "/dashboard/doctor/list" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cards.map((card) => (
        <div key={card.id} className={`p-6 rounded-lg shadow-lg text-white ${card.color} flex flex-col justify-between h-32 min-w-[150px] sm:min-w-[180px] md:min-w-[200px]`}>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold">{card.count}</span>
            {card.icon}
          </div>
          <p className="text-lg font-semibold">{card.label}</p>
          <button 
           onClick={() => navigate(card.route)}
            className="text-sm mt-2 underline flex items-center"
          >
            More Info →
          </button>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
