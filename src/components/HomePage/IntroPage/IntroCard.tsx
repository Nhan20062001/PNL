import SendIcon from '../../icons/Send.icons';
import { Button, Image } from 'antd';
import styles from './style.module.scss';
import CustomButton from '@/components/Button/CustomButton';
import { ButtonType } from '@/config/constant';

const IntroPage = () => {
  return (
    <div className={styles['intro-container']}>
      <div className={styles['intro-main']}>
        <div className={styles['intro-left']}>
          <h3>Cung cấp giải pháp chuyển đổi số</h3>
          <div className={styles['intro-detail']}>
            <h6>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book
            </h6>
          </div>
          <CustomButton
            className={styles['button']}
            onClick={() => {}}
            buttonType={ButtonType.PRIMARY}
          >
            <SendIcon />
            <p className={styles['button-text']}> Contact to work</p>
          </CustomButton>
        </div>

        <div className={styles['intro-right']}>
          <Image
            className={styles['content-image-right']}
            src='/images/header twiscode 1.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
