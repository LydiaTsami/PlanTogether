import { Button, Form, Input, message, Space } from "antd";
import { useLogin } from "./useLogin.ts";
import React from "react";
import "./Login.css";
import { LoginRequest } from "./types";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login: React.FC = () => {
  const { form, onFinish } = useLogin();

  const onSuccess = () => {
    message.success(<span>You have successfully logged in!</span>);
  };

  const onError = (error: string) => {
    message.error(<span>Login Failed: {error}</span>);
  };

  return (
    <div className="page-container">
      <div>
        <div className={"title"}>Login here my love</div>
        <div>
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={(values: LoginRequest) =>
              onFinish(values, onSuccess, onError)
            }
            style={{ maxWidth: 600 }}
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Space>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
