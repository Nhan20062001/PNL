import React, { type ReactNode, useEffect } from 'react';
import FooterClient from '@/components/Footer/Footer';
import HeaderClient from '@/components/HeaderClient/HeaderClient';
import { ConfigProvider, FloatButton } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
import theme from '../theme/themeConfig';
import './style.scss';

type IMainProps = {
  children: ReactNode;
};

function MainClient({ children }: IMainProps) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ConfigProvider theme={theme}>
      <HeaderClient />
      <main>{children}</main>
      <FooterClient />
      <FloatButton.BackTop type="primary" icon={<ArrowUpOutlined />} />
    </ConfigProvider>
  );
}

export { MainClient };
