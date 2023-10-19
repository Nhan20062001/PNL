import React, { useState } from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import { Anchor, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
interface IAnchorLinkItemProps {
  key: string;
  href: string;
  title: string | React.ReactNode;
}

const HeaderClient = () => {
  const router = useRouter();

  const listItems: IAnchorLinkItemProps[] = [
    {
      key: 'home',
      href: '/home',
      title: 'Home',
    },
    {
      key: 'service',
      href: '/service',
      title: 'Service',
    },
    {
      key: 'work',
      href: '/work',
      title: 'Work',
    },
    {
      key: 'customer',
      href: '/customer',
      title: 'Our Customer',
    },
    {
      key: 'team',
      href: '/team',
      title: 'Team',
    },
    {
      key: 'career',
      href: '/career',
      title: 'Career',
    },
    {
      key: 'contact',
      href: '/contact',
      title: 'Contact',
    },
    {
      key: 'language',
      href: '/language',
      title: <Image src="/images/Rectangle 4173.png" alt="" width={45} height={32} />,
    },
  ];

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className={styles['wrapper-header-client']}>
      <div className="container">
        <Image
          className={styles['nav-header-logo']}
          src="/images/pnl-logo 1.png"
          alt=""
          width={77}
          height={77}
        />
        <div className={styles['nav-header-client']}>
          <Anchor className={styles['ant-anchor']} direction="horizontal" items={listItems} />

          <div className={styles['wrapper-menu-mobile']}>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
              {listItems.map((item, index) => {
                return <p key={index} className={styles['menu-list']}>{item.title}</p>;
              })}
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderClient;
