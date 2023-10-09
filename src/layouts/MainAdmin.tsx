'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import HeaderAdmin from '@/components/HeaderAdmin/HeaderAdmin';

import {
  ConfigProvider, Layout, Menu, Spin,
} from 'antd';
import './style.scss';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppSelector } from '@/store';
import routes from './routes';
import theme from '../theme/themeConfig';

const { Sider, Content } = Layout;

type IMainProps = {
  children: ReactNode;
};

function MainAdmin({ children }: IMainProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [urlSelected, setUrlSelected] = useState<string>('');
  const authSlice = useAppSelector((state) => state.authSlice);
  useEffect(() => {
    if (
      !Object.values(authSlice.token).every(
        (value) => value !== '' && value !== 0,
      )
    ) {
      router.push('/admin/dang-nhap');
    }
  }, [authSlice.token, router]);

  useEffect(() => {
    const findRoute = routes.find((item) => pathname.includes(item.key));
    if (pathname === '/admin') {
      setUrlSelected('/admin/thong-ke');
    }
    if (findRoute?.key) {
      setUrlSelected(findRoute?.key);
    }
  }, [pathname]);

  const handleCollapseHeader = () => {
    setCollapsed(!collapsed);
  };

  const renderMenuItem = routes.map((route) => ({
    key: route.key,
    icon: route.icon,
    label: <Link href={route.key}>{route.label}</Link>,
  }));

  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ height: '100vh', overflow: 'auto' }}>
        {!Object.values(authSlice.token).every((value) => value !== '') ? (
          <Spin spinning={authSlice.loading}>
            <div style={{ height: '100vh', width: '100vw' }}> </div>
          </Spin>
        ) : (
          <>
            <Sider
              width={250}
              trigger={null}
              collapsible
              collapsed={collapsed}
              className="wrapper-sidebar-admin"
            >
              <div
                className="wrapper-sidebar-admin-header"
                style={{ width: !collapsed ? '250px' : '80px' }}
              >
                <div className="container-sidebar-admin-logo">
                  <picture>
                    <img
                      src="https://res.cloudinary.com/dlcvpix8s/image/upload/v1696488184/sata/vtgrcnzfvsqiv0pyh7aa.png"
                      alt=""
                    />
                  </picture>
                </div>
              </div>
              <Menu
                mode="inline"
                className="wrapper-sidebar-admin-menu"
                style={{
                  width: collapsed ? '80px' : '250px',
                  overflow: 'scroll',
                  paddingBottom: '32px',
                }}
                selectedKeys={[urlSelected]}
                items={renderMenuItem}
              />
            </Sider>
            <Layout
              className="site-layout"
              style={{
                transition: 'all',
                height: '100vh',
              }}
            >
              <HeaderAdmin
                collapsed={collapsed}
                onChangeCollapseHeader={handleCollapseHeader}
              />
              <Content className="wrapper-content-admin">{children}</Content>
            </Layout>
          </>
        )}
      </Layout>
    </ConfigProvider>
  );
}

export { MainAdmin };
