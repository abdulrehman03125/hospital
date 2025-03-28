import React, { useState } from 'react';
import { Form, Input, Button, Card } from "antd";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice";

const Login = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle Logout
    const handleLogout = () => {
        dispatch(logout());
    };

    // Handle Login Form Submission
    const onFinish = async (values) => {
        setLoading(true);
        setErrors(null);

        try {
            const res = await axios.post("http://localhost:3002/User/login", values);

            if (res.data.status === "Ok") {
                dispatch(login({ name: res.data.user.name, email: res.data.user.email }));
                navigate("/dashboard");
            }
        } catch (err) {
            console.error(err.response?.data);
            setErrors(err.response?.data?.errors || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card title="Login" bordered={false} style={{ width: 500, margin: "auto", marginTop: 100 }}>
            {errors && (
                <div className='bg-red-100 p-5 rounded-sm mb-4'>
                    <h4 className='text-red-400 text-xl font-bold mt-4'>Errors occurred</h4>
                    <ul className="list-disc ps-10">
                        {Array.isArray(errors) ? (
                            errors.map((er, index) => <li key={index}>{er.message}</li>)
                        ) : (
                            <li>{errors}</li>
                        )}
                    </ul>
                </div>
            )}

            <Form onFinish={onFinish}>
                <Form.Item 
                    name="email" 
                    rules={[{ required: true, message: "Please enter your email!", type: "email" }]}
                >
                    <Input size="large" placeholder="Email" />
                </Form.Item>

                <Form.Item 
                    name="password" 
                    rules={[{ required: true, message: "Please enter your password!" }]}
                >
                    <Input.Password size="large" placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button 
                        loading={loading} 
                        onClick={isAuthenticated ? handleLogout : null} 
                        size="large" 
                        type="primary" 
                        htmlType="submit" 
                        block
                    >
                        {isAuthenticated ? "Logout" : "Login"}
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default Login;
