import React from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import { Anchor } from 'antd';


function HeaderClient() {
  return (
    <header className={styles['wrapper-header-client']}>
      <div className='container'  >
        <Image
          src="/images/pnl-logo 1.png"
          alt=""
          width={77}
          height={77}
        />
        <div className={styles['nav-header-client']}>
          <Anchor
          className={styles['ant-anchor']}
          direction="horizontal"
          items={[
            {
              key: 'home',
              href: '#home',
              title: 'Home',
            },
            {
              key: 'service',
              href: '#service',
              title: 'Service',
            },
            {
              key: 'work',
              href: '#work',
              title: 'Work',
            },
            {
              key: 'customer',
              href: '#customer',
              title: 'Our Customer',
            },
            {
              key: 'team',
              href: '#team',
              title: 'Team',
            },
            {
              key: 'career',
              href: '#career',
              title: 'Career',
            },
            {
              key: 'contact',
              href: '#contact',
              title: 'Contact',
            }
          ]}
          />
        </div>
      </div>
    </header>
  );
}

export default HeaderClient;
