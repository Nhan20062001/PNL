import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { Image } from 'antd';
import styles from './style.module.scss';

const OurCustomersPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const motionSetting = {
    initial: { opacity: 0, x: '100%' },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' },
    transition: { duration: 1 },
  };
  return (
    <div className="container">
      <div ref={ref} className={styles['our-customers']}>
        <div className={styles['our-customers-header']}>
          <h3>Our Customers</h3>
          <div className={styles.rectangle}>
            <motion.div {...motionSetting} className={styles['rectangle-top']} />
            <motion.div {...motionSetting} className={styles['rectangle-bottom']} />
          </div>
        </div>

        <div className={styles['our-customers-main']}>
          <div className={styles['logo-customers']}>
            <Image preview={false} src="/images/60e65ead2d4a34352a4c30b53e87847e.png" alt="" />
            <Image preview={false} src="/images/044b33e97ef3509555c13284864151c5.png" alt="" />
            <Image preview={false} src="/images/60e65ead2d4a34352a4c30b53e87847e.png" alt="" />
            <Image preview={false} src="/images/97c80880b8d5c8eab3478432afe5c1b1.png" alt="" />
            <Image preview={false} src="/images/c09b2647062f20feda9ae69f4ef00659.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurCustomersPage;
