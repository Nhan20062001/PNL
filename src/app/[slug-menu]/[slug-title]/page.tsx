"use client";

import { useState } from "react";
import { MainClient } from "@/layouts/MainClient";
import { Meta } from "@/components/MetaSeo/Meta";
import {
  Breadcrumb,
  Button,
  Col,
  Modal,
  Pagination,
  PaginationProps,
  Row,
} from "antd";
import Carousel from "@/components/Carousel/Carousel";
import Link from "next/link";
import ItemMain from "@/components/Item/ItemMain";
import { usePathname } from "next/navigation";
import "./style.scss";

type CarouselType = {
  image: string;
  id: string;
};

type CatalogProduct = {
  image: string;
  id: string;
  title: string;
  slug: string;
};

const ListProductOfCatalog = () => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(3);
  const [modalDetailProduct, setModalDetailProduct] = useState<string>("");

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

  const [listProduct, setListProduct] = useState<CatalogProduct[]>([
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "1",
      title: "Logo chang chang",
      slug: "logo-chang-chang",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "2",
      title: "Logo chang chang",
      slug: "logo-chang-chang",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "3",
      title: "Logo chang chang",
      slug: "logo-chang-chang",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "4",
      title: "Logo chang chang",
      slug: "logo-chang-chang",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "1",
      title: "Logo chang chang",
      slug: "logo-chang-chang",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "2",
      title: "Logo chang chang",
      slug: "logo-chang-chang",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "3",
      title: "Logo chang chang",
      slug: "logo-chang-chang",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "4",
      title: "Logo chang chang",
      slug: "logo-chang-chang",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "1",
      title: "Logo chang chang",
      slug: "logo-chang-chang",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/09/Group-37672-min.jpg",
      id: "2",
      title: "Logo chang chang",
      slug: "logo-chang-chang",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "3",
      title: "Logo chang chang",
      slug: "logo-chang-chang",
    },
    {
      image:
        "https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png",
      id: "4",
      title: "Logo chang chang",
      slug: "logo-chang-chang",
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

  const onChangePage: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  return (
    <MainClient meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <Carousel
        className="carousel-list-product-catalog-page"
        dataCarousel={dataCarouselBanner}
        {...carouselBannerSettings}
      />
      <div className="container">
        <div className="wrapper-list-product-catalog">
          <Breadcrumb
            className="wrapper-bread-crumb"
            items={[
              {
                title: <Link href="/">Trang chủ</Link>,
              },
              {
                title: "logo",
              },
            ]}
          />
          <Row gutter={[16, 16]}>
            {listProduct.map((item) => {
              return (
                <Col xs={24} sm={24} md={6} lg={6} xl={6} key={item.id}>
                  <ItemMain
                    image={item.image}
                    title={item.title}
                    onClick={() => {
                      setModalDetailProduct(item.id);
                    }}
                  />
                </Col>
              );
            })}
          </Row>
          <div className="wrapper-pagination-list-product-catalog">
            <Pagination
              current={currentPage}
              onChange={onChangePage}
              total={50}
            />
          </div>
        </div>
      </div>
      <Modal
        title="Title của hình ảnh"
        centered
        open={modalDetailProduct.length > 0 ? true : false}
        onOk={() => setModalDetailProduct("")}
        onCancel={() => setModalDetailProduct("")}
        footer={[
          <Button key="cancel" onClick={() => setModalDetailProduct("")}>
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={false}
            onClick={() => setModalDetailProduct("")}
          >
            OK
          </Button>,
        ]}
      >
        <p>Mô tả</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </MainClient>
  );
};

export default ListProductOfCatalog;
