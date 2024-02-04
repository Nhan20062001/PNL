'use client';

import React from 'react';
import { MainClient } from '@/layouts/MainClient';
import { Image } from 'antd';
import FormCareer, { Type } from './form';
import styles from './style.module.scss';

const Career = () => {
  const dataMock: Type[] = [
    {
      id: '1',
      title: 'DEV FRONTEND NEXTJS',
      description:
        'yêu cầu kinh nghiệm, các yêu cầu khác thì ghi vào đây luônyêu cầu kinh nghiệm, các yêu cầu khác thì ghi vào đây luôn',
      image: '/images/imageCareer.jpeg',
    },
    {
      id: '2',
      title: 'DEV FRONTEND NEXTJS',
      description:
        'yêu cầu kinh nghiệm, các yêu cầu khác thì ghi vào đây luônyêu cầu kinh nghiệm, các yêu cầu khác thì ghi vào đây luôncác yêu cầu khác thì ghi vào đây luôncác yêu cầu khác thì ghi vào đây luôncác yêu cầu khác thì ghi vào đây luôncác yêu cầu khác thì ghi vào đây luôn',
      image: '/images/imageCareer.jpeg',
    },
    {
      id: '3',
      title: 'DEV FRONTEND NEXTJS',
      description: 'yêu cầu kinh nghiệm, các yêu cầu khác thì ghi vào đây luôn',
      image: '/images/imageCareer.jpeg',
    },
    {
      id: '4',
      title: 'DEV FRONTEND NEXTJS',
      description: 'yêu cầu kinh nghiệm, các yêu cầu khác thì ghi vào đây luôn',
      image: '/images/imageCareer.jpeg',
    },
  ];
  return (
    <MainClient>
      <div className={styles['career-banner']}>
        <Image
          className={styles['image-career-banner']}
          preview={false}
          alt=""
          src="/images/bannerCareer.jpeg"
        />
        <h1 className={styles['text-banner1']}>CAREER</h1>
        <h1 className={styles['text-banner2']}>OUR CONNECTION</h1>
        <p>
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </div>
      <div className="container">
        {/* <div className={styles['career-content']}> */}
        {dataMock.map((item, index) => (
          <FormCareer key={item.id} left={index % 2 === 0} data={item} />
        ))}
        {/* </div> */}
      </div>
    </MainClient>
  );
};

export default Career;
