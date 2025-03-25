import { useEffect, useState } from "react";
import { Table, Button, Space, Modal } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchPatients = () => {
    fetch("http://localhost:3002/patients/all")
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((error) => {
        console.error("Error fetching patients:", error);
        toast.error("Failed to fetch patients");
      });
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleDelete = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this patient permanently?",
      content: "This action cannot be undone.",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => {
        fetch(`http://localhost:3002/patients/delete/${id}`, { method: "DELETE" })
          .then((res) => {
            if (res.ok) {
              toast.success("Patient deleted successfully");
              fetchPatients(); // Refresh the list after deletion
            } else {
              return res.json().then((data) => {
                throw new Error(data.message || "Failed to delete patient");
              });
            }
          })
          .catch((error) => toast.error(error.message));
      },
    });
  };

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: "SL.NO",
      dataIndex: "slNo",
      key: "slNo",
      render: (_, __, index) => index + 1,
    },
    {
      title: "ID No.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Mobile No",
      dataIndex: "mobileNo",
      key: "mobileNo",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "Blood Group",
      dataIndex: "bloodGroup",
      key: "bloodGroup",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button type="default" icon={<EyeOutlined />} onClick={() => handleViewDetails(record)} />
          <Button type="primary" icon={<EditOutlined />} />
          <Button type="danger" icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} />
        </Space>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Patient Details</h2>
      <Table dataSource={patients} columns={columns} rowKey="id" />

      <Modal
        title="Patient Details"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        {selectedPatient && (
          <div>
            <p><strong>ID No.:</strong> {selectedPatient.id}</p>
            <p><strong>First Name:</strong> {selectedPatient.firstName}</p>
            <p><strong>Mobile No:</strong> {selectedPatient.mobileNo}</p>
            <p><strong>Address:</strong> {selectedPatient.address}</p>
            <p><strong>Sex:</strong> {selectedPatient.sex}</p>
            <p><strong>Blood Group:</strong> {selectedPatient.bloodGroup}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PatientList;
