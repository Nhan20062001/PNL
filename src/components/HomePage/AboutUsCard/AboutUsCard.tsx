import { Carousel } from 'antd';
import React from 'react';
import styles from './style.module.scss';

type Types = {
  id?: string;
  title?: string;
  content?: string;
};

const AboutUsCardComponent = () => {
  const dataMock: Types[] = [
    {
      id: '1',
      title: 'Tầm nhìn',
      content:
        'A reader will be distracted by the readable content of a page when looking at its    layout. The point  using Lorem Ipsum is that it has a more-or-less normal distribution letters, opposed to using Content here, content here, making',
    },
    {
      id: '2',
      title: 'Sứ mệnh',
      content:
        'A reader will be distracted by the readable content of a page when looking at its      layout. The point  using Lorem Ipsum is that it has a more-or-less normal distribution letters, opposed to using Content here, content here, making',
    },
    {
      id: '3',
      title: 'Giá trị cốt lõi',
      content:
        'A reader will be distracted by the readable content of a page when looking at its      layout. The point  using Lorem Ipsum is that it has a more-or-less normal distribution letters, opposed to using Content here, content here, making',
    },
    {
      id: '4',
      title: 'Lịch sử phát triển',
      content:
        'A reader will be distracted by the readable content of a page when looking at its      layout. The point  using Lorem Ipsum is that it has a more-or-less normal distribution letters, opposed to using Content here, content here, making',
    },
  ];
  return (
    <div className="container">
      <div className={styles['about-us']}>
        <picture className={styles['about-us-image']}>
          <source srcSet="/images/ec34ddc5ab531a19e86c9704fbeab279.jpg" type="image/jpg" />
          <img
            className={styles['about-us-image']}
            src="/images/ec34ddc5ab531a19e86c9704fbeab279.jpg"
            alt="about us computer"
          />
        </picture>
        <div className={styles['about-us-opacity-layer']} />

        <div className={styles['carousel-container']}>
          <Carousel autoplay>
            {dataMock.map((item) => (
              <div className={styles['carousel-content-padding']} key={item.id}>
                <h3 className={styles['carousel-container-title']}>{item.title}</h3>
                <span className={styles['carousel-container-description']}>{item.content}</span>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCardComponent;
