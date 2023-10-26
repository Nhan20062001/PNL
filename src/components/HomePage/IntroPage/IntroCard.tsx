'use client';

import { Image } from 'antd';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import CustomButton from '@/components/Button/CustomButton';
import { ButtonType } from '@/config/constant';
import SendIcon from '@/layouts/icons/SendIcons';
import useTranslation from '@/hook/useTranslation';
import { TranslateEnum } from '@/store/translation/translation.type';
import { useAppSelector } from '@/store';

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
  const { language } = useAppSelector((state) => state.translation.translate);
  const { t } = useTranslation();
  return (
    <div className={styles['intro-container']}>
      <div className={styles['intro-main']}>
        <div className={styles['intro-left']}>
          <div className={styles['intro-title']}>
            <motion.h3 {...motionSetting}>
              Nội dung gì đó <br className={styles['intro-title-br']} /> Cung cấp giải pháp chuyển
              đổi số
            </motion.h3>
          </div>
          <div className={styles['intro-detail']}>
            <motion.h6 {...motionSetting} transition={{ duration: 1, delay: 1 }}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book
            </motion.h6>
          </div>
          <motion.div {...motionSetting} transition={{ duration: 1, delay: 2 }}>
            <CustomButton
              className={language === TranslateEnum.en_US ? styles.button : styles['button-vn']}
              buttonType={ButtonType.PRIMARY}
            >
              <SendIcon />
              {t('btn')['contactToWork']}
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
