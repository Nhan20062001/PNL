import { Carousel } from 'antd';
import './style.scss';
// TODO: Create props assign list data, use map for each item to view
const AboutUsCardComponent = () => {
  return (
    <>
      <div className="about-us border-radius">
        <div className="about-us-container border-radius about-us-size">
          <img
            className="about-us-container--image border-radius"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80"
            alt="about us computer"
          />
          <div className="about-us-container--opacity-layer border-radius about-us-size"></div>
        </div>
        <div className="carousel-container custom-carousel">
          <Carousel autoplay>
            <div className="carousel-content-padding">
              <h3 className="carousel-container--title">Tầm nhìn</h3>
              <span className="carousel-container--description">
                A reader will be distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making
              </span>
            </div>
            <div className="carousel-content-padding">
              <h3 className="carousel-container--title">Sứ mệnh</h3>
              <span className="carousel-container--description">
                That a reader will be distracted by the readable content of a page when looking at
                its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making
              </span>
            </div>
            <div className="carousel-content-padding">
              <h3 className="carousel-container--title">Giá trị cốt lõi</h3>
              <span className="carousel-container--description">
                Established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making
              </span>
            </div>
            <div className="carousel-content-padding">
              <h3 className="carousel-container--title">Lịch sử phát triển</h3>
              <span className="carousel-container--description">
                A long established fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making
              </span>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default AboutUsCardComponent;
