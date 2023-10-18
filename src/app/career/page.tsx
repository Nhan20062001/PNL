'use client';

import { MainClient } from '@/layouts/MainClient';
import { Image } from 'antd';
import Form, { Type } from './form';
import styles from './career.module.scss';

const Career = () => {
  const dataMock: Type[] = [
    {
      id: '1',
      title: 'Abc',
      description: 'abc',
      image: '/images/imageBody.jpg',
    },
    {
      id: '2',
      title: 'Abc',
      description: 'abc',
      image: '/images/imageBody.jpg',
    },
    {
      id: '3',
      title: 'Abc',
      description: 'abc',
      image: '/images/imageBody.jpg',
    },
    {
      id: '4',
      title: 'Abc',
      description: 'abc',
      image: '/images/imageBody.jpg',
    },
    
  ];
  return (
    <MainClient>
      <div className={styles['career-banner']}>
        <Image
          className={styles['image-career-banner']}
          preview={false}
          alt=""
          src="/images/banner.webp"
        />
      </div>
      <div className="container">
        {dataMock.map((item, index) => {
          return <Form key={item.id} left={index % 2 === 0 ? true : false} data={item} />;
        })}
      </div>
    </MainClient>
  );
};

export default Career;
