import { Image, Form, Input } from 'antd';
import styles from './style.module.scss';
import TextArea from 'antd/es/input/TextArea';
import CustomButton from '@/components/Button/CustomButton';
import { ButtonType } from '@/config/constant';
import SendIcon from '@/layouts/icons/SendIcons';

const ContactCardComponent = () => {
  const [form] = Form.useForm();

  return (
    <div className={styles['contact-card']}>
      <div className={styles['contact-container']}>
        <Image
          className={styles['contact-container--image']}
          src="https://s3-alpha-sig.figma.com/img/69af/ef14/ec34ddc5ab531a19e86c9704fbeab279?Expires=1698019200&Signature=OC9m6AJYt~uXxRgDUOJ-2R6p6q5mDkWn2IYyWGwh87SctWwaeYJJAoF0~qYZaDVpXtIAFUZ3YBiZjawHVReKc~0c1A4AAKtJTE7Sw6~k6voMlSA8e2N9fZg~PWXjQDf0321WTWoUk6gMWcG0WjFmQ1n3vwZcpAhkRQZrHuIT7tpZQrI0QbINZDvdCda-MGLA68-t0vqMRJ5w16wht-o9THKHg9ZOAHEAaoCdSzbYLDcoekD7vb6BPZg9Vb002JXSBJlTXNSoDZ4vtQQXsixVIrEGQqvGy3uRiAJv3oO3HoFCQ-TrMU6vzKV~q3Rk8OnhvOOsGJXj5b2DfqGwCETKpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          preview={false}
        />
        <div className={styles['contact-container--opacity-layer']}></div>

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
              <div className={styles['button']}>
                <CustomButton buttonType={ButtonType.DEFAULT} className={styles['btn-style']}>
                  <SendIcon />
                  <p className={styles['button-text']}>Contact to work</p>
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
