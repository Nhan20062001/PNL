"use client";
import { useState } from "react";
import Carousel from "@/components/Carousel/Carousel";
import { Meta } from "@/components/MetaSeo/Meta";
import { MainClient } from "@/layouts/MainClient";
import Section from "@/components/Section/Section";
import { Button, Col, Row, Space } from "antd";
import "./page.scss";
import Link from "next/link";

type CarouselType = {
  image: string;
  id: string;
  title?: string;
};

export default function Home() {
  const [dataCarouselBanner, setDataCarouselBanner] = useState<CarouselType[]>([
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "1",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "2",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "3",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "4",
    },
  ]);

  const [dataCarouselPrint, setDataCarouselPrint] = useState<CarouselType[]>([
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "1",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "2",
    },
  ]);

  const [dataCarouselProductMain, setDataCarouselProductMain] = useState<
    CarouselType[]
  >([
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "1",
      title: "Menu",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "2",
      title: "Menu",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "3",
      title: "Menu",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "2",
      title: "Menu",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "2",
      title: "Menu",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "2",
      title: "Menu",
    },
  ]);

  const [dataCarouselCustomer, setDataCarouselCustomer] = useState<
    CarouselType[]
  >([
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "1",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "2",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "3",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "2",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "2",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "2",
    },
  ]);

  const carouselBannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 12000,
    autoplay: true,
  };

  const carouselProductMainSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const carouselCustomerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
  };

  return (
    <MainClient meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <Carousel
        className="carousel-home-page"
        dataCarousel={dataCarouselBanner}
        {...carouselBannerSettings}
      />
      <div className="container">
        {/* 4 fixed */}
        <Section
          title="Thiết kế ấn phẩm sáng tạo"
          align="center"
          component={
            <Row gutter={[12, 12]} className="container-section-product">
              {dataCarouselBanner.map((item) => {
                return (
                  <Col xs={24} sm={24} md={6} lg={6} xl={6} key={item.id}>
                    <Link href="thiet-ke-an-pham">
                      <div
                        className="wrapper-image-product"
                        style={{
                          backgroundImage: `linear-gradient(to right, #066156, #06615604), url(${item.image})`,
                          backgroundSize: "cover",
                          height: "140px",
                          borderRadius: "12px",
                          position: "relative",
                        }}
                      >
                        <p className="title-product">Logo</p>
                      </div>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          }
        />
        <Section
          title="In ấn chất lượng cao"
          align="center"
          component={
            <Row gutter={[12, 12]} className="container-section-print">
              {dataCarouselPrint.map((item) => {
                return (
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                    key={item.id}
                    className="col-section-print"
                  >
                    <div className="wrapper-image-print">
                      <img src={item.image} alt="" />
                      <div className="wrapper-title-print">
                        <p className="title-print">DCAN</p>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          }
        />
        <Section
          title="Sản phẩm chủ đạo của chúng tôi"
          align="center"
          component={
            <Carousel
              className="carousel-product-main"
              dataCarousel={dataCarouselProductMain}
              {...carouselProductMainSettings}
            />
          }
        />
        <Section
          title="Khách hàng của sata"
          align="center"
          component={
            <Carousel
              className="carousel-customer"
              classNameChild="carousel-customer-item"
              dataCarousel={dataCarouselCustomer}
              {...carouselCustomerSettings}
            />
          }
        />
        <Section
          title="Khoá học thiết kế đồ hoạ chất lượng cao"
          align="center"
          component={
            <div className="wrapper-design-course">
              <Space className="content-design-course" size={"large"}>
                <Button className="override-button-primary" type="primary">
                  PHOTOSHOP
                </Button>
                <Button
                  className="override-button-primary"
                  type="primary"
                  ghost
                >
                  COREL DRAW
                </Button>
                <Button
                  className="override-button-primary"
                  type="primary"
                  ghost
                >
                  AI
                </Button>
              </Space>
              <Row gutter={[16, 16]} style={{ width: "100%" }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<div
                      dangerouslySetInnerHTML={{
                        __html: (
                          <ul>
                            <li className="">
                              <span>Nắm vững kiến thức thực tế:</span> Bạn sẽ nắm
                              vững các kiến thức trong quy trình thiết kế UI/UX,
                              từ khâu research → xác định vấn đề → thiết kế chuẩn
                              theo quy tắc → thử nghiệm (usability Testing) → đánh
                              giá và tối ưu thiết kế đáp ứng nhu cầu người
                              dùng.&nbsp;
                            </li>
                            <li className="">
                              <span>Thành thạo công cụ:</span> Bạn sẽ sử dụng
                              thành thạo các công cụ phục vụ thiết kế UI/UX
                              Website &amp; Mobile App chuyên nghiệp{" "}
                              <span>(Figma)</span>, dễ dàng{" "}
                              <span>
                                tạo bộ design system, layout website, shopping
                                page, Landing Page, app mobile,..&nbsp;
                              </span>
                            </li>
                            <li className="">
                              <span>Hoàn thiện kỹ năng:</span>{" "}
                              <span>Bạn sẽ được hoàn thiện các kỹ năng </span>
                              cần thiết để trở thành UI-UX Designer:{" "}
                              <span>kỹ năng giải quyết vấn đề</span> (problem
                              solving), kỹ năng{" "}
                              <span>
                                làm việc với các team liên quan như Developer,
                                Product Owner/Product Manager,...&nbsp;
                              </span>
                            </li>
                            <li className="">
                              <span>Tích luỹ kinh nghiệm:</span>{" "}
                              <span>
                                Bạn sẽ tích luỹ kinh nghiệm được chứng minh qua
                                các dự án làm theo cá nhân hoặc nhóm
                              </span>{" "}
                              trong suốt khoá học, là lợi thế khi đi phỏng vấn xin
                              việc.&nbsp; &nbsp;
                            </li>
                          </ul>
                        ),
                      }}
                    ></div>`,
                    }}
                  ></div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <div className="wrapper-design-course-iframe">
                    <iframe
                      src="https://www.youtube.com/embed/Ipy9pO_asdY?si=_r0Jss-mI0KDCcDq"
                      frameBorder="0"
                      allowFullScreen={true}
                      id="1"
                    />
                  </div>
                </Col>
              </Row>
              {/* <div>Video liên quan</div>
              <Row gutter={[16, 16]} style={{ width: "100%" }}>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <div>
                    <iframe
                      src="https://www.youtube.com/embed/Ipy9pO_asdY?si=_r0Jss-mI0KDCcDq"
                      frameBorder="0"
                      allowFullScreen={true}
                      id="1"
                    />
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <div>
                    <iframe
                      src="https://www.youtube.com/embed/Ipy9pO_asdY?si=_r0Jss-mI0KDCcDq"
                      frameBorder="0"
                      allowFullScreen={true}
                      id="1"
                    />
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <div>
                    <iframe
                      src="https://www.youtube.com/embed/Ipy9pO_asdY?si=_r0Jss-mI0KDCcDq"
                      frameBorder="0"
                      allowFullScreen={true}
                      id="1"
                    />
                  </div>
                </Col>
              </Row> */}
            </div>
          }
        />
        <Section
          title="Tài nguyên thiết kế"
          align="center"
          component={
            <Row gutter={[16, 16]} style={{ width: "100%" }}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="wrapper-item-design-resource">
                  <img
                    src="https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="wrapper-item-design-resource">
                  <img
                    src="https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="wrapper-item-design-resource">
                  <img
                    src="https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="wrapper-item-design-resource">
                  <img
                    src="https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          }
        />
      </div>
    </MainClient>
  );
}
