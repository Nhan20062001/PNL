import React from 'react';
import { Carousel } from 'antd';
import styles from './style.module.scss'

type Types = {
  id?: string,
  image?: string,
  name?: string,
  position?:string
}

const OurTeamCardComponent = () => {
      const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 3,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };

      const dataMock:Types[] = [
        {
          id: '1',
          image: '/images/pedram-sedghi-QXxmRGMoJv0-unsplash.jpg',
          name: 'Elisabeth Be 1',
          position: 'COO'
        },
        {
          id: '2',
          image: '/images/pedram-sedghi-QXxmRGMoJv0-unsplash.jpg',
          name: 'Elisabeth Be 2',
          position: 'COO'
        },
        {
          id: '3',
          image: '/images/pedram-sedghi-QXxmRGMoJv0-unsplash.jpg',
          name: 'Elisabeth Be 3',
          position: 'COO'
        },
        {
          id: '4',
          image: '/images/pedram-sedghi-QXxmRGMoJv0-unsplash.jpg',
          name: 'Elisabeth Be 4',
          position: 'COO'
        }
      ]

    return (
      <div className='container'>
        <div className={styles['our-team']}>
            <h3>
                Our Team
            </h3>
            <Carousel {...settings}>
              {dataMock.map((item => {
                return (
                  <div className={styles['member-card']}>
                    <img 
                        src={item.image}
                        alt=''
                    />
                    <div className={styles['member-info']}>
                        <p className={styles['member-name']}>{item.name}</p>
                        <p className={styles['member-position']}>{item.position}</p>
                    </div>
                </div>
                )
              }))}
            </Carousel>                
        </div>
      </div>
        
                
    );
}
export default OurTeamCardComponent;