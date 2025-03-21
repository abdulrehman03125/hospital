import { useState } from "react";
import { ChevronDown, RefreshCcw, Save } from "lucide-react";

const DoctorScheduleForm =()=> {
  const [status, setStatus] = useState("active");

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <form className="space-y-4">
        {/* Doctor Name */}
        <div>
          <label className="block font-medium">Doctor Name</label>
          <div className="relative">
            <select className="w-full border rounded-md p-2 appearance-none">
              <option>Select option</option>
            </select>
            <ChevronDown className="absolute right-2 top-3 text-gray-500" />
          </div>
        </div>

        {/* Available Days */}
        <div>
          <label className="block font-medium">Available Days</label>
          <div className="relative">
            <select className="w-full border rounded-md p-2 appearance-none">
              <option>Select option</option>
            </select>
            <ChevronDown className="absolute right-2 top-3 text-gray-500" />
          </div>
        </div>

        {/* Available Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Start Time</label>
            <input type="time" className="w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="block font-medium">End Time</label>
            <input type="time" className="w-full border rounded-md p-2" />
          </div>
        </div>

        {/* Per Patient Time */}
        <div>
          <label className="block font-medium">Per Patient Time</label>
          <input type="text" className="w-full border rounded-md p-2" placeholder="Per Patient Time" />
        </div>

        {/* Serial Visibility */}
        <div>
          <label className="block font-medium">Serial Visibility</label>
          <div className="relative">
            <select className="w-full border rounded-md p-2 appearance-none">
              <option>Sequential</option>
            </select>
            <ChevronDown className="absolute right-2 top-3 text-gray-500" />
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block font-medium">Status</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="status"
                value="active"
                checked={status === "active"}
                onChange={() => setStatus("active")}
                className="mr-2"
              />
              Active
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={status === "inactive"}
                onChange={() => setStatus("inactive")}
                className="mr-2"
              />
              Inactive
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex items-center gap-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            <RefreshCcw size={16} /> Reset
          </button>
          <span>or</span>
          <button
            type="submit"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            <Save size={16} /> Save
          </button>
        </div>
      </form>
    </div>
  );
}
export default DoctorScheduleForm;