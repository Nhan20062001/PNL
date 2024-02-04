import React from 'react';
import { Image } from 'antd';
import styles from './style.module.scss';

const IntroCard = () => (
  <div className={styles['intro-card']}>
    <div className={styles['intro-card-container']}>
      <Image className={styles.image} src="/images/Rectangle 31.jpg" alt="" preview={false} />

      <div className={styles['intro-content']}>
        <div className="container">
          <p>OUR WORKS</p>
          <h6>
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a type specimen book
          </h6>
        </div>
      </div>
    </div>
  </div>
);
export default IntroCard;
