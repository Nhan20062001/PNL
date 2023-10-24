import React from 'react';
import { Image } from 'antd';
import styles from './style.module.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

type Types = {
  id?: string;
  image?: string;
  name?: string;
  position?: string;
};

const OurTeamCardComponent = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dataMock: Types[] = [
    {
      id: '1',
      image: '/images/pedram-sedghi-QXxmRGMoJv0-unsplash.jpg',
      name: 'Elisabeth Be 1',
      position: 'COO',
    },
    {
      id: '2',
      image: '/images/pedram-sedghi-QXxmRGMoJv0-unsplash.jpg',
      name: 'Elisabeth Be 2',
      position: 'COO',
    },
    {
      id: '3',
      image: '/images/pedram-sedghi-QXxmRGMoJv0-unsplash.jpg',
      name: 'Elisabeth Be 3',
      position: 'COO',
    },
    {
      id: '4',
      image: '/images/pedram-sedghi-QXxmRGMoJv0-unsplash.jpg',
      name: 'Elisabeth Be 4',
      position: 'COO',
    },
  ];
  const carouselCustomerSettings = {
    responsive: {
      0: {
        center: false,
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="container">
      <div className={styles['our-team']}>
        <h3>Our Team</h3>

        <OwlCarousel
          className={styles['carousel-member']}
          center={dataMock.length > 2}
          loop={dataMock.length > 2}
          dots={false}
          // autoWidth
          autoplay
          autoplaySpeed
          margin={8}
          nav={dataMock.length > 3}
          responsive={carouselCustomerSettings.responsive}
        >
          {dataMock.map((item) => (
            <div
              key={item.id}
              className={`${
                dataMock.length > 2 ? 'carousel-customer-item' : 'carousel-customer-item-child'
              }`}
            >
              <Image src={item.image} alt="" preview={false} />
              <div className={styles['member-info']}>
                <p className={styles['member-name']}>{item.name}</p>
                <p className={styles['member-position']}>{item.position}</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};
export default OurTeamCardComponent;
