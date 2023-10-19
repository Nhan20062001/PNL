import { Button, Col, Image, Row, Modal, Input, Form } from 'antd';
import React, { FC, useState } from 'react';
import styles from './style.module.scss';
import CustomButton, { ButtonType } from '@/components/Button/CustomButton';
import SendIcon from '@/components/icons/send.icons';

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
        <Row className={styles['content-career-body']}>
          <Col span={8}>
            <div className={styles['text-career-body-header']}>
              <div className={styles['text-child-career-body-header']}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <CustomButton buttonType={ButtonType.DEFAULT} onClick={showModal}>
                  Apply
                </CustomButton>
              </div>
            </div>
          </Col>
          <Col span={16}>
            <Image
              className={styles['image-career-body-header']}
              preview={false}
              alt=""
              src={data.image}
            />
          </Col>
        </Row>
      ) : (
        <Row className={styles['content-career-body']}>
          <Col span={16}>
            <Image
              className={styles['image-career-body-center']}
              preview={false}
              alt=""
              src={data.image as string}
            />
          </Col>
          <Col span={8}>
            <div className={styles['text-career-body-center']}>
              <div className={styles['text-child-career-body-center']}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <CustomButton buttonType={ButtonType.DEFAULT} onClick={showModal}>
                  Apply
                </CustomButton>
              </div>
            </div>
          </Col>
        </Row>
      )}
      <Modal
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
        <Row gutter={30}>
          <Col span={12}>
            <Form layout="vertical">
              <Form.Item
                hasFeedback
                label="Tên của bạn"
                name="name"
                validateTrigger="onBlur"
                rules={[{ max: 3 }]}
              >
                <Input placeholder="Nhập họ và tên" />
              </Form.Item>
              <Form.Item
                hasFeedback
                label="Email của bạn"
                name="email"
                validateTrigger="onBlur"
                rules={[{ max: 3 }]}
              >
                <Input placeholder="Nhập email" />
              </Form.Item>
              <Form.Item
                hasFeedback
                label="Để lại lời nhắn của bạn"
                name="field_a"
                validateTrigger="onBlur"
                rules={[{ max: 3 }]}
              >
                <Input.TextArea placeholder="Viết gì đó cho chúng tôi" />
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>
            <Form layout="vertical">
              <Form.Item
                hasFeedback
                label="Số điện thoại của bạn"
                name="field_a"
                validateTrigger="onBlur"
                rules={[{ max: 3 }]}
              >
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>
              <Form.Item
                hasFeedback
                label="CV của bạn"
                name="field_a"
                validateTrigger="onBlur"
                rules={[{ max: 3 }]}
              >
                <Input placeholder="Validate required onBlur" />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default FormCareer;
