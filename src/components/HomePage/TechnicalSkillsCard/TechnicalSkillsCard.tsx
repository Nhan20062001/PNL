import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import Carousel from '@/components/Carousel/Carousel';

type Types = {
  id?: string;
  image?: string;
};
const TechnicalSkillsCardComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const motionSetting = {
    initial: { opacity: 0, x: '-100%' },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' },
    transition: { duration: 1 },
  };
  const dataMock: Types[] = [
    {
      id: '1',
      image: '/images/flutter-logo 1.png',
    },
    {
      id: '2',
      image: '/images/nestjs 1.png',
    },
    {
      id: '3',
      image: '/images/nextjs 1.png',
    },
    {
      id: '4',
      image: '/images/reactJs 1.png',
    },
    {
      id: '5',
      image: '/images/nestjs 1.png',
    },
    {
      id: '6',
      image: '/images/nestjs 1.png',
    },
  ];

  const settings = {
    dots: false,
    infinite: dataMock.length > 5,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 3000,
    autoplay: dataMock.length > 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
          <Carousel
            dataCarousel={dataMock.map((item) => ({
              id: item.id as string,
              image: item.image as string,
            }))}
            {...settings}
          />
        </div>
      </div>
    </div>
  );
};
export default TechnicalSkillsCardComponent;
