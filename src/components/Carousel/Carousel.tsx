'use client';
import { Carousel as CarouselAnt } from 'antd';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './style.module.scss';
import { checkTypeFile } from '@/utils/string.helper';
import { FileTypeEnum } from '@/config/constant';

type Props = {
  dataCarousel: {
    image: string;
    id: string;
    title?: string;
  }[];
  className?: string;
  classNameChild?: string;
  classNameLoading?: string;
};

const Carousel: React.FC<Props> = ({
  className,
  classNameChild,
  classNameLoading,
  dataCarousel,
  ...rest
}: Props) => {
  return (
    <CarouselAnt className={className} {...rest}>
      {dataCarousel.length === 0 ? (
        <Skeleton className={classNameLoading} />
      ) : (
        dataCarousel?.map((imageSlide) => {
          const typeFile = checkTypeFile(imageSlide.image);
          return typeFile !== FileTypeEnum.video ? (
            <div className={classNameChild} key={imageSlide.id}>
              <img src={imageSlide.image} alt="" />
              {imageSlide.title ? (
                <p className={styles['carousel-title-item']}>{imageSlide.title}</p>
              ) : (
                ''
              )}
            </div>
          ) : (
            <div className={classNameChild} key={imageSlide.id}>
              <video src={imageSlide.image} playsInline autoPlay muted loop />
              {imageSlide.title ? (
                <p className={styles['carousel-title-item']}>{imageSlide.title}</p>
              ) : (
                ''
              )}
            </div>
          );
        })
      )}
    </CarouselAnt>
  );
};

export default Carousel;
