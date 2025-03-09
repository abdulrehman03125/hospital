import React from "react";
import { Table, Tag, Button } from "antd";
import { Stethoscope, Phone, Trash2, Pencil } from "lucide-react";

const Doctor = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "Specialization",
      dataIndex: "specialization",
      key: "specialization",
      render: (specialization) => (
        <Tag color="blue">
          <Stethoscope size={14} className="inline-block mr-1" />
          {specialization}
        </Tag>
      ),
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
      render: (contact) => (
        <span>
          <Phone size={14} className="inline-block mr-1" />
          {contact}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button type="link" icon={<Pencil size={16} />} />
          <Button type="link" danger icon={<Trash2 size={16} />} />
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      contact: "+123 456 7890",
    },
    {
      key: "2",
      name: "Dr. Sarah Smith",
      specialization: "Neurologist",
      contact: "+987 654 3210",
    },
    {
      key: "3",
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      contact: "+123 456 7890",
    },
    {
      key: "4",
      name: "Dr. Sarah Smith",
      specialization: "Neurologist",
      contact: "+987 654 3210",
    },
  ];

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-4">Doctor List</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Doctor;
