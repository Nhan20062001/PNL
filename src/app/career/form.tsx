import { Button, Col, Image, Row, Modal, Input, Form } from 'antd';
import React, { FC, useState } from 'react';
import styles from './career.module.scss';
import { RULESs } from "@/utils/rules";

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
const Form: FC<Props> = ({ left, data }) => {
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
    <div>
      {left ? (
        <Row className={styles['content-career-body']}>
          <Col span={8}>
            <div className={styles['text-career-body-header']}>
              <div className={styles['text-child-career-body-header']}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <Button onClick={showModal}>Apply</Button>
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
                <Button onClick={showModal}>Apply</Button>
              </div>
            </div>
          </Col>
        </Row>
      )}
      <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Row>
          <Col span={12}>
            <Form.Item name={['title', 'en_US']} label="Title" rules={[RULESs(t, 'EMPTY')]}>
              <Input />
            </Form.Item>
            <Form.Item name={['title', 'en_US']} label="Title" rules={[RULESs(t, 'EMPTY')]}>
              <Input />
            </Form.Item>
            <Form.Item name={['title', 'en_US']} label="Title" rules={[RULESs(t, 'EMPTY')]}>
              <Input.TextArea rows={2} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Input />
            <Input />
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default Form;
