import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const TechnicalSkillsCardComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const motionSetting = {
    initial: { opacity: 0, x: '-100%' },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' },
    transition: { duration: 1 },
  };
  return (
    <div className="container">
      <div ref={ref} className={styles['technical-skills-card']}>
        <div className={styles['technical-skills-header']}>
          <div className={styles['rectangle']}>
            <motion.div {...motionSetting} className={styles['rectangle-top']}></motion.div>
            <motion.div {...motionSetting} className={styles['rectangle-bottom']}></motion.div>
          </div>
          <h3>Technical Skills</h3>
        </div>

        <div className={styles['technical-skills-main']}>
          <div className={styles['logo-skills']}>
            <img src="/images/flutter-logo 1.png" alt=""></img>
            <img src="/images/nestjs 1.png" alt=""></img>
            <img src="/images/nextjs 1.png" alt=""></img>
            <img src="/images/reactJs 1.png" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechnicalSkillsCardComponent;
