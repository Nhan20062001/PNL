import React from 'react';
import styles from './header.module.scss';

function HeaderClient() {
  return (
    <header className={styles['wrapper-header-client']}>
      <div className="container">
        <h1>Header</h1>
      </div>
    </header>
  );
}

export default HeaderClient;
