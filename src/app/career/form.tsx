import CustomButton from '@/components/Button/CustomButton';
import { ButtonType } from '@/config/constant';
import { Col, Form, Image, Input, Modal, Row, Upload } from 'antd';
import { FC, useState } from 'react';
import styles from './style.module.scss';
import UploadIcon from '@/layouts/icons/UploadIcons';
import SendIcon from '@/layouts/icons/SendIcons';

interface Props {
  left: boolean;
  data: Type;
}

export interface Type {
  id: string;
  title: string;
  description: string;
  image: string;
}
const FormCareer: FC<Props> = ({ left, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles['career']}>
      {left ? (
        <Row className={styles['content-career-body-1']}>
          <Col md={8} xs={24}>
            <div className={styles['text-career-body-header']}>
              <div className={styles['text-child-career-body-header']}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <CustomButton
                  className={styles['btn-apply']}
                  buttonType={ButtonType.DEFAULT}
                  onClick={showModal}
                >
                  Apply
                </CustomButton>
              </div>
            </div>
          </Col>
          <Col md={16} xs={24}>
            <Image
              className={styles['image-career-body-header']}
              preview={false}
              alt=""
              src={data.image}
            />
          </Col>
        </Row>
      ) : (
        <Row className={styles['content-career-body-2']}>
          <Col md={16} xs={24}>
            <Image
              className={styles['image-career-body-center']}
              preview={false}
              alt=""
              src={data.image as string}
            />
          </Col>
          <Col md={8} xs={24}>
            <div className={styles['text-career-body-center']}>
              <div className={styles['text-child-career-body-center']}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <CustomButton
                  className={styles['btn-apply']}
                  buttonType={ButtonType.DEFAULT}
                  onClick={showModal}
                >
                  Apply
                </CustomButton>
              </div>
            </div>
          </Col>
        </Row>
      )}
      <Modal
        className={styles['modal-style']}
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div className={styles['footer-modal']}>
            <CustomButton buttonType={ButtonType.PRIMARY} className={styles['btn-apply']}>
              <SendIcon />
              Ứng tuyển
            </CustomButton>
          </div>
        }
      >
        <Row gutter={[32, 24]}>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form layout="vertical">
              <Form.Item
                hasFeedback
                label="Tên của bạn"
                name="name"
                className={styles['label-form']}
              >
                <Input className={styles['input-form']} placeholder="Nhập họ và tên" />
              </Form.Item>
              <Form.Item
                hasFeedback
                label="Email của bạn"
                name="email"
                className={styles['label-form']}
              >
                <Input className={styles['input-form']} placeholder="Nhập email" />
              </Form.Item>
              <Form.Item
                hasFeedback
                label="Để lại lời nhắn của bạn"
                name="message"
                className={styles['label-form']}
              >
                <Input
                  className={styles['input-message-form']}
                  placeholder="Viết gì đó cho chúng tôi"
                  maxLength={100}
                />
              </Form.Item>
            </Form>
          </Col>
          <Col xl={12} lg={12} md={12}  sm={24} xs={24}>
            <Form layout="vertical">
              <Form.Item
                hasFeedback
                label="Số điện thoại của bạn"
                name="phone"
                className={styles['label-form']}
              >
                <Input className={styles['input-form']} placeholder="Nhập số điện thoại" />
              </Form.Item>
              <Form.Item
                hasFeedback
                label="CV của bạn"
                name="file"
                className={styles['label-form']}
              >
                <Upload fileList={[]}>
                  <div className={styles['upload-form']}>
                    <UploadIcon />
                    <p>Kéo thả hoặc chọn file</p>
                  </div>
                </Upload>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default FormCareer;
