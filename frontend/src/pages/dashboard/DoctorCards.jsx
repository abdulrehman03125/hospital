import React from "react";
import { Card, Button } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const doctors = [
  { id: 1, name: "Dr. John", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Dr. Amelia", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Dr. Zack", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Dr. Charlie", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Dr. Joseph", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Dr. Beatrice", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Dr. William", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Dr. Jessica", image: "https://via.placeholder.com/150" },
];

const DoctorCards = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <Card
            key={doctor.id}
            hoverable
            className="shadow-md rounded-lg p-4 text-center"
            cover={
              <img
                alt={doctor.name}
                src={doctor.image}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            }
          >
            <h3 className="text-lg font-semibold">{doctor.name}</h3>
            <div className="flex justify-center gap-4 my-3 text-gray-500 text-lg">
              <UserOutlined />
              <MailOutlined />
              <PhoneOutlined />
            </div>
            <Button type="primary" danger className="w-35 rounded-xl">
              View Profile
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DoctorCards;
