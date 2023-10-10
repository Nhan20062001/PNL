'use client';

import React from 'react';
import { MainClient } from '@/layouts/MainClient';
import styles from './page.module.scss';
import { Image } from 'antd';
import ButtonSample from '@/components/Button/button';
import SendIcon from '@/components/icons/send.icons';
import AboutUsCardComponent from '@/components/AboutUsCard/page';

export default function Home() {
  return (
    <MainClient>
      <div className={styles['container']}>
        <div className={styles['main']}>
          
          <div className={styles['content-left']}>
            <h3>Cung cấp giải pháp chuyển đổi số</h3>
            <div className={styles['content-detail']}>
              <h6>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </h6>
            </div>
            <ButtonSample>
              <SendIcon />
              <p>Contact to work</p>
            </ButtonSample>
          </div>
          {/* end left content */}

          <div className={styles['content-right']}>
            <Image
              className={styles['content-image-right']}
              src='/images/header twiscode 1.png'
              alt=''
              width={656}
              height={525}
            />
          </div>
        </div>
      </div>
      {/* end contact */}

      <AboutUsCardComponent/>
    </MainClient>
  );
}
