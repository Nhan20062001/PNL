"use client";

import theme from "@/theme/themeConfig";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, ConfigProvider, Form, Input, Space } from "antd";
import { useDispatch } from "react-redux";
import { loginAdminAction } from "@/store/auth/auth.action";
import { AppDispatch } from "@/store";
import "./style.scss";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onFinish = (values: any) => {
    const { email, password } = values;
    dispatch(loginAdminAction({ email, password }));
  };

  return (
    <ConfigProvider theme={theme}>
      <div className="wrapper-admin-login">
        <div className="admin-login-logo">
          <img
            src="https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-logo.png"
            alt=""
          />
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Space direction="vertical">
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Vui lòng nhập email!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập password!" }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
                size="large"
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Lưu mật khẩu</Checkbox>
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button mt-3 bg-blue-600"
              block
              size="large"
            >
              Đăng nhập
            </Button>
            <a style={{ float: "right" }} className="login-form-forgot" href="">
              Quên mật khẩu
            </a>
          </Space>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default Login;
