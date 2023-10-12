import './style.scss';
import React from 'react';
import { Carousel } from 'antd';

const OurTeamCardComponent = () => {
      const settings = {
        className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,


        dots: true,
        slidesToScroll: 1,
        initialSlide: 0,
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
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='our-team-container'>
            <h3>
                Our Team
            </h3>
                <Carousel autoplay {...settings}>
                    <div className='member-card'>
                        <img 
                            src='/images/pedram-sedghi-QXxmRGMoJv0-unsplash.jpg'
                            alt=''
                        />
                        <div className='member-info'>
                            <p className='member-name'>Elisabeth Be</p>
                            <p className='member-position'>COO</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <img 
                            src='/images/pedram-sedghi-QXxmRGMoJv0-unsplash.jpg'
                            alt=''
                        />
                        <div className='member-info'>
                            <p className='member-name'>Elisabeth Be</p>
                            <p className='member-position'>COO</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <img 
                            src='/images/pedram-sedghi-QXxmRGMoJv0-unsplash.jpg'
                            alt=''
                        />
                        <div className='member-info'>
                            <p className='member-name'>Elisabeth Be</p>
                            <p className='member-position'>COO</p>
                        </div>
                    </div>
                    
                </Carousel>                
        </div>
                
    );
}
export default OurTeamCardComponent;