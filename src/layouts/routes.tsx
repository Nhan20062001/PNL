import React from 'react';
import { AreaChartOutlined, ContactsOutlined } from '@ant-design/icons';

type MenuItem = {
  key: string;
  icon: React.ReactNode | React.JSX.Element | string;
  label: React.ReactNode | React.JSX.Element | string;
  children?: MenuItem[];
  type?: 'group';
};

const routes: MenuItem[] = [
  {
    label: <span>Thống kê</span>,
    key: '/admin/thong-ke',
    icon: <AreaChartOutlined />,
  },
  {
    label: <span>Quản lý khách hàng</span>,
    key: '/admin/quan-ly-khach-hang',
    icon: <ContactsOutlined />,
  },
];

export default routes;
