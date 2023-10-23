import React, { useState } from 'react';
import styles from './style.module.scss';
import { Button, Image, Modal } from 'antd';
import { Col, Row } from 'antd';
import WorkDetail from '../WorkDetail/WorkDetail';
import CustomButton from '@/components/Button/CustomButton';
import { ButtonType } from '@/config/constant';

type Types = {
  id?: string;
  image?: string;
  title?: string;
  description?: string;
};

function WorkItemsCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dataMock: Types[] = [
    {
      id: '1',
      image:
        'https://s3-alpha-sig.figma.com/img/47b5/9f1e/e2bd9eb62e9c44a80536c27ae621f754?Expires=1698624000&Signature=fd8JO9aOkSEhuZ0h77UPrMwJFiU2bCJDTDal21QQTs7awafGj3KnNAKEagv9STwNlMcEzd3wdYBX91EnHOt0SVthwoum4285KGpSR~dL19oAOZYf1T9ftg8SIZ78bp~idKXhEP5zSUca7EcEs77CSL~2EqSizOi~yR7-rhWRoXm6VcEy~1QuscnxR7EsieB5jRan-MexT8gocQOC8wMzwDzJN9xTY1BjFxya4gDigsdrzfAPySfbB4uDZq9x3IzqjMFGQu-tUAg4CjUEsRsVWfvrJMUsjtU0SrK5GCwpTgOMsYRyogZ-9aS8dTNk9nl~jqXRXELuMrOMOST~hkQTwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Tên của dự án - hoặc tiêu đề',
      description:
        'many variations of passages of variations of  here are many variations of passages of variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don',
    },
    {
      id: '2',
      image:
        'https://s3-alpha-sig.figma.com/img/2e36/528e/2483f35ff9e62fcd6ebebee486d44d0d?Expires=1698624000&Signature=f2REyv51IXrm0acJMCcren6LC-pSgeV5EZyLVBL7iZHj1r1zanLXYUbfgISv7aLTQkOloeHATEmFwqhCO45Z711XWqsdcE7PDGfYoZeC1iNr5wRTY6BRCpF~hSkgpj5gzuqNC7RgAfSGFsqUaZCv4D9fhy4~zwaO2FISY7YtmXvzyd1zonZhpkMGKZTyUUv2pwYAjhYpNJXHqI1UVXQEmxKt3JJzS1PPRU8kzThKSOM2AK8he-50IDTNiPdhqMzEC-LwT7mUZseKhMzK48igj3Fu8mRdjWOZ1~cYt15ao~pHXX-QGyoeX4yp9~g4uAxh56wMeWP9Of~bMhXRq7j69Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Tên của dự án - hoặc tiêu đề',
      description:
        'here are many variations of passages of Lorem Ipsum available, but the majority have sufferhere are many variations of passages of Lorem Ipsum available, but the majority have suffer here are many variations of passages of Lorem Ipsum available, but the majority have suffer here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don',
    },
    {
      id: '3',
      image:
        'https://s3-alpha-sig.figma.com/img/c7a2/8572/42e58efbed858c1979ef00beb053a975?Expires=1698624000&Signature=KhwiRknI39Aa8Y7RX0sP9Yy7CFn9JjSVS9wMH5M~Dqk4PQaW97UdCPQ7-GfbNfALpkZ3Y5DRfV0j~zYECBI7yP8-5AgcGuyzoV~wOOluWAJlV3rdl8Utg4Tck9kKmJpTKO9V0Ddrj3aMtjd0MBeuhVfjy1R1zxe0L1E5~NhRwphhliUn0iTnH2oALUQFUxLVt4-ajqnB49YN4Yd7pmGAf4bm0eu6-mtEiJm~96SsITecMzRESvWIatgRJUvG3LvLHE29sevZQZOGbPQIspC7D1SPD3v6lryPs1E0P2MSEW8uV4z3R9vuKHgBD8dagsTfX2I4SRaa0MEkbR5K3jr~SQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Tên của dự án - hoặc tiêu đề',
      description:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don',
    },
    {
      id: '4',
      image:
        'https://s3-alpha-sig.figma.com/img/2e36/528e/2483f35ff9e62fcd6ebebee486d44d0d?Expires=1698624000&Signature=f2REyv51IXrm0acJMCcren6LC-pSgeV5EZyLVBL7iZHj1r1zanLXYUbfgISv7aLTQkOloeHATEmFwqhCO45Z711XWqsdcE7PDGfYoZeC1iNr5wRTY6BRCpF~hSkgpj5gzuqNC7RgAfSGFsqUaZCv4D9fhy4~zwaO2FISY7YtmXvzyd1zonZhpkMGKZTyUUv2pwYAjhYpNJXHqI1UVXQEmxKt3JJzS1PPRU8kzThKSOM2AK8he-50IDTNiPdhqMzEC-LwT7mUZseKhMzK48igj3Fu8mRdjWOZ1~cYt15ao~pHXX-QGyoeX4yp9~g4uAxh56wMeWP9Of~bMhXRq7j69Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Tên của dự án - hoặc tiêu đề',
      description:
        'here are many variations of passages of Lorem Ipsum here are many variations of passages of Lorem Ipsum available, but the majority have suffer available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don',
    },
    {
      id: '5',
      image:
        'https://s3-alpha-sig.figma.com/img/2e36/528e/2483f35ff9e62fcd6ebebee486d44d0d?Expires=1698624000&Signature=f2REyv51IXrm0acJMCcren6LC-pSgeV5EZyLVBL7iZHj1r1zanLXYUbfgISv7aLTQkOloeHATEmFwqhCO45Z711XWqsdcE7PDGfYoZeC1iNr5wRTY6BRCpF~hSkgpj5gzuqNC7RgAfSGFsqUaZCv4D9fhy4~zwaO2FISY7YtmXvzyd1zonZhpkMGKZTyUUv2pwYAjhYpNJXHqI1UVXQEmxKt3JJzS1PPRU8kzThKSOM2AK8he-50IDTNiPdhqMzEC-LwT7mUZseKhMzK48igj3Fu8mRdjWOZ1~cYt15ao~pHXX-QGyoeX4yp9~g4uAxh56wMeWP9Of~bMhXRq7j69Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Tên của dự án - hoặc tiêu đề',
      description:
        'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don',
    },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles['work-items-card']}>
      <div className="container">
        <div className={styles['work-item-container']}>
          {dataMock.map((item) => {
            return (
              <Row className={styles['box-item']} key={item.id}>
                <Col
                  lg={{ span: 8, offset: 0 }}
                  xs={{ span: 10, offset: 0 }}
                  md={{ span: 8, offset: 0 }}
                >
                  <Image className={styles['image-left']} src={item.image} preview={false} alt="" />
                </Col>
                <Col
                  className={styles['box-item-content']}
                  lg={{ span: 16, offset: 0 }}
                  xs={{ span: 14, offset: 0 }}
                  md={{ span: 16, offset: 0 }}
                >
                  <h4>{item.title}</h4>
                  <h5>{item.description}</h5>
                  <div className={styles['button-card']}>
                    <CustomButton
                      className={styles['outline-btn']}
                      buttonType={ButtonType.DEFAULT}
                      onClick={showModal}
                    >
                      Xem thêm
                    </CustomButton>
                  </div>
                </Col>
              </Row>
            );
          })}

          <Modal
            className={styles['model-work-detail']}
            open={isModalOpen}
            footer={null}
            onCancel={handleCancel}
            width={1146}
          >
            <WorkDetail />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default WorkItemsCard;
