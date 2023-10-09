'use client';

import React, { useEffect } from 'react';
import theme from '@/theme/themeConfig';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  Button, ConfigProvider, Form, Input, Space, notification,
} from 'antd';
import { loginAdminAction } from '@/store/auth/auth.action';
import { useAppDispatch, useAppSelector } from '@/store';
import { useRouter } from 'next/navigation';
import { LOGO_LOGIN_AMDIN, NotificationTypeEnum } from '@/config/constant';
import './style.scss';

function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const authSlice = useAppSelector((state) => state.authSlice);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    // login
    if (Object.values(authSlice.token).every((value) => value !== '')) {
      router.push('/admin/thong-ke');
    }
  }, [authSlice.token, router]);

  const openNotificationWithIcon = (
    type: NotificationTypeEnum,
    message: string,
  ) => {
    api[type]({
      message,
      description: '',
    });
  };

  const onFinish = async (values: any) => {
    const { email, password } = values;
    const res: any = await dispatch(loginAdminAction({ email, password }));
    if (res.payload.error) {
      openNotificationWithIcon(
        NotificationTypeEnum.error,
        'Đăng nhập thất bại',
      );
    } else {
      notification.success({
        message: 'Thông báo',
        description: 'Đăng nhập thành công',
      });
    }
  };

  return (
    <ConfigProvider theme={theme}>
      {contextHolder}
      <div className="wrapper-admin-login">
        <div className="admin-login-logo">
          <picture>
            <img src={LOGO_LOGIN_AMDIN} alt="admin" />
          </picture>
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
              rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
                size="large"
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button mt-3 bg-blue-600"
              block
              size="large"
              loading={authSlice.loading}
            >
              Đăng nhập
            </Button>
          </Space>
        </Form>
      </div>
    </ConfigProvider>
  );
}

export default Login;
