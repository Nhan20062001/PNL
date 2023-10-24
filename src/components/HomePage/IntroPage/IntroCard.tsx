'use client';

import { Image } from 'antd';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import CustomButton from '@/components/Button/CustomButton';
import { ButtonType } from '@/config/constant';
import SendIcon from '@/layouts/icons/SendIcons';
import useTranslation from '@/hook/useTranslation';

const motionSetting = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 1 },
};

const motionRightToLeft = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
  transition: { duration: 1 },
};

const IntroPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['intro-container']}>
      <div className={styles['intro-main']}>
        <div className={styles['intro-left']}>
          <motion.h3 {...motionSetting}>Cung cấp giải pháp chuyển đổi số</motion.h3>
          <div className={styles['intro-detail']}>
            <motion.h6 {...motionSetting} transition={{ duration: 1, delay: 1 }}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book
            </motion.h6>
          </div>
          <motion.div {...motionSetting} transition={{ duration: 1, delay: 2 }}>
            <CustomButton className={styles.button} buttonType={ButtonType.PRIMARY}>
              <SendIcon />
              <p className={styles['button-text']}>{t('btn')['contactToWork']}</p>
            </CustomButton>
          </motion.div>
        </div>

        <motion.div {...motionRightToLeft} className={styles['intro-right']}>
          <Image
            className={styles['content-image-right']}
            src="/images/header twiscode 1.png"
            alt=""
            preview={false}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default IntroPage;
