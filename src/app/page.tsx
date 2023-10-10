'use client';

import React from 'react';
import { MainClient } from '@/layouts/MainClient';
import styles from './page.module.scss';
import Button from '@/components/Button/HoverButton/Button';
import { Image } from 'antd';

export default function Home() {
  return (
    <MainClient>
      <div className='container'>
        <div className={styles.main}>
          
          <div className={styles['content-left']}>
            <h3>Cung cấp giả pháp chuyển đổi số</h3>
            <div className={styles['content-detail']}>
              <h6>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </h6>
            </div>
            <Button>
              <Image 
                src='/images/Send_duotone_line.png'
                alt=''
                width={32}
                height={32}
              />

              Contact to work
            </Button>
          </div>
          {/* end left content */}

          <div className={styles['content-right']}>
            <Image
              className={styles['content-image-right']}
              src='/images/header twiscode 1.png'
              alt=''
              width={525}
              height={525}
            />
          </div>

        </div>
      </div>
    </MainClient>
  );
}
