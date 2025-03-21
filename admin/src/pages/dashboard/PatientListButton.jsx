import { List } from "lucide-react";

const PatientListButton = () => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
      <List size={20} />
      Patient List
    </button>
  );
};

export default PatientListButton;
