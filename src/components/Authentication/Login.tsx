"use client";

import { LockOutlined, UserOutlined, SlackOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Tooltip } from "antd";
import { toast } from "sonner";

const Login = () => {
  const onFinish = (values: any) => {
    if (values.username === "sampleuser" && values.password === "password123") {
      window.location.href = "/dashboard";
    } else {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="bg-[#18181B] flex-1 hidden md:block">
        <div className="h-screen flex flex-col justify-between">
          <div>
            <h1 className="text-xl text-white py-5 px-3">
              <SlackOutlined className="site-form-item-icon mr-1 text-2xl" />{" "}
              Project Management Dashboard by{" "}
              <Tooltip title="View Portfolio" placement="bottom">
                <a
                  href="https://rubayet-islam-portfolio.netlify.app/"
                  target="_blank"
                  className="underline underline-offset-[5px]"
                >
                  Season
                </a>
              </Tooltip>
            </h1>
          </div>
          <div className="text-xl text-white">
            <h1 className="text-xl text-white py-5 px-3">
              Sample Username: sampleuser
              <br />
              Sample Password: password123
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-white flex-1">
        <div className="h-screen flex justify-center items-center">
          <div>
            <h1 className="text-2xl font-bold text-center pb-1">Sign In</h1>
            <p className="pb-3 text-center text-[#B9B9BD]">
              Enter your email below to create your account
            </p>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Enter your username" }]}
              >
                <Input
                  prefix={
                    <UserOutlined className="site-form-item-icon mr-2 py-[0.5rem]" />
                  }
                  placeholder="Username"
                />
              </Form.Item>
              <div className="mt-7">
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "Enter your password!" }]}
                >
                  <Input
                    prefix={
                      <LockOutlined className="site-form-item-icon mr-2 py-[0.5rem]" />
                    }
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
              </div>

              <Form.Item>
                <button
                  type="submit"
                  className="login-form-button w-full bg-[#18181B] py-2 text-white rounded-md font-medium"
                >
                  Sign In
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
