import React from 'react';
import IntroCard from './IntroCard/IntroCard';
import WorkItemsCard from './WorkItemsCard/WorkItemsCard';
import styles from './style.module.scss';

const WorkPage = () => (
  <div className={styles['work-page-container']}>
    <IntroCard />
    <WorkItemsCard />
  </div>
);
export default WorkPage;
