'use client';

import React from 'react';
import { MainClient } from '@/layouts/MainClient';
import styles from './page.module.scss';
import { Image } from 'antd';
import ButtonSample from '@/components/Button/button';
import SendIcon from '@/components/icons/send.icons';

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

      <div className='container'>
        <div className={styles['about-us']}>
          <Image 
            src="/images/"
            alt=""
          />
          <div className={styles['content-about-us']}>
            <h4>Tầm nhìn</h4>
            <h6>t is a long established fact that a reader will be distracted by the readable content of a page 
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
              distribution of letters, as opposed to using 'Content here, content here', making</h6>
          </div>
        </div>
      </div>
    </MainClient>
  );
}
