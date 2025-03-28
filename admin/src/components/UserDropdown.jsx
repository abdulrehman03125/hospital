import React from "react";
import { Dropdown, Menu, Avatar, Typography } from "antd";
import { UserOutlined, LogoutOutlined, EditOutlined, CaretDownOutlined } from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import { logout } from "../redux/authSlice"
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

const UserDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = {
    name: "Bryan Adams",
    role: "Admin",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with actual avatar URL
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login'); // Redirect to login page after logout
  };

  const menu = (
    <Menu>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        Edit Profile
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} danger onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
      >
        <Avatar src={user.avatar} size="large" />
        <div>
          <Text strong>{user.name}</Text>
          <br />
          <Text type="secondary" style={{ fontSize: "12px" }}>
            {user.role}
          </Text>
        </div>
        <CaretDownOutlined style={{ fontSize: '12px' }} />
      </div>
    </Dropdown>
  );
};

export default UserDropdown;