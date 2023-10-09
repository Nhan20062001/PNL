'use client';

import React from 'react';
import { MainClient } from '@/layouts/MainClient';
import styles from './page.module.scss';

export default function Home() {
  return (
    <MainClient>
      <div className={styles.main}>
        <h1>Hoang Long</h1>
      </div>
    </MainClient>
  );
}
