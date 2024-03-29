import React from 'react';
import { Image, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import CustomButton from '@/components/Button/CustomButton';
import { ButtonType } from '@/config/constant';
import SendIcon from '@/layouts/icons/SendIcons';
import { useAppSelector } from '@/store';
import { TranslateEnum } from '@/store/translation/translation.type';
import useTranslation from '@/hook/useTranslation';
import styles from './style.module.scss';

const ContactCardComponent = () => {
  const [form] = Form.useForm();
  const { language } = useAppSelector((state) => state.translation.translate);
  const { t } = useTranslation();
  return (
    <div className={styles['contact-card']}>
      <div className={styles['contact-container']}>
        <Image
          className={styles['contact-container-image']}
          src="/images/ec34ddc5ab531a19e86c9704fbeab279.jpg"
          alt=""
          preview={false}
        />
        <div className={styles['contact-container-opacity-layer']} />

        <div className={styles['contact-card-content']}>
          <div className="container">
            <h3>Contact</h3>
            <p>
              Various versions have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>

            <div className={styles['contact-form']}>
              <Form
                className={styles['form-container']}
                form={form}
                name="validateOnly"
                layout="vertical"
                autoComplete="off"
              >
                <Form.Item name="name" label="Tên của bạn">
                  <Input className={styles['input-name']} placeholder="Nhập họ và tên" />
                </Form.Item>
                <Form.Item name="phone-number" label="Số điện thoại của bạn">
                  <Input
                    className={styles['input-phone-number']}
                    placeholder="Nhập số điện thoại"
                  />
                </Form.Item>
                <Form.Item name="email" label="Email của bạn">
                  <Input className={styles['input-email']} placeholder="Nhập email" />
                </Form.Item>
                <Form.Item name="address" label="Địa chỉ của bạn">
                  <Input className={styles['input-address']} placeholder="Nhập địa chỉ của bạn" />
                </Form.Item>
                <Form.Item name="note" label="Để lại lời nhắn của bạn">
                  <TextArea
                    className={styles['input-note']}
                    placeholder="Viết gì đó cho chúng tôi"
                  />
                </Form.Item>
              </Form>
              <div className={styles.button}>
                <CustomButton
                  buttonType={ButtonType.DEFAULT}
                  className={
                    language === TranslateEnum.en_US ? styles['btn-style'] : styles['btn-style-vn']
                  }
                >
                  <SendIcon />
                  <p className={styles['button-text']}> {t('btn').contactToWork}</p>
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactCardComponent;
