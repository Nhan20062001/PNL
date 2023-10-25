import React from 'react';
import styles from './style.module.scss';

type Props = {
  title: string;
  align: string;
  component?: React.ReactNode;
};

const Section = ({ title, align, component }: Props) => {
  return (
    <section className={styles[`wrapper-section`]}>
      {title ? (
        <h3 className={`${styles['wrapper-section-title title']}-${align}`}>{title}</h3>
      ) : (
        <h3>Loading</h3>
      )}
      {component ? component : ''}
    </section>
  );
};

export default Section;
