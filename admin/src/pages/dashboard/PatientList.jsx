import { useState } from "react";
import { Lock, Unlock, Eye, Pencil, Trash2, Plus } from "lucide-react";
import { Table, Input, Button, Select } from "antd";

const { Search } = Input;
const { Option } = Select;

const columns = [
    { title: "SL.NO", dataIndex: "slno", key: "slno" },
    { title: "ID No.", dataIndex: "id", key: "id" },
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone No", dataIndex: "phone", key: "phone" },
    { title: "Mobile No", dataIndex: "mobile", key: "mobile" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Sex", dataIndex: "sex", key: "sex" },
    { title: "Blood Group", dataIndex: "bloodGroup", key: "bloodGroup" },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex space-x-2">
          <Button icon={<Eye className="text-green-500" />} />
          <Button icon={<Pencil className="text-blue-500" />} />
          <Button icon={<Trash2 className="text-red-500" />} />
        </div>
      ),
    },
  ];
  
  const data = [
    { slno: 1, id: "P2702JJH", firstName: "Md. Neyamul", lastName: "Chowdhury", email: "patient@example.com", phone: "78985454", mobile: "01868332991", address: "Halishahar", sex: "Male", bloodGroup: "A+" },
    { slno: 2, id: "P7UCNRY", firstName: "Kamal", lastName: "Uddin", email: "nuhesib@mailinator.com", phone: "77", mobile: "17", address: "Eius quam et officia...", sex: "Male", bloodGroup: "A+" },
    { slno: 3, id: "PPT5Z978", firstName: "patient", lastName: "demo", email: "patient@demo.com", phone: "014578697855", mobile: "210546541063", address: "B-25, 4th Floor, Mannan Plaza Dhaka-1229", sex: "Female", bloodGroup: "B-" },
    { slno: 4, id: "PUPHINQN", firstName: "Jacky", lastName: "Diash", email: "jiash@demo.com", phone: "546347667", mobile: "254657782378", address: "B-25, 4th Floor, Mannan Plaza Dhaka-1229", sex: "Male", bloodGroup: "B+" },
  ];
  
  const PatientList = () => {
    return (
      <div className="p-4 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <Button type="primary" icon={<Plus />}>Add Patient</Button>
          <Search placeholder="Search..." className="w-1/3" />
        </div>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} className="w-full" />
      </div>
    );
  };
  
export default PatientList;