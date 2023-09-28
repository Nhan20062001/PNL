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
import "./style.scss";
import Carousel from "@/components/Carousel/Carousel";
import Link from "next/link";
import ItemMain from "@/components/Item/ItemMain";
import { usePathname } from "next/navigation";
import ScrollList from "@/components/ScrollList/page";

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

const CatalogProduct = () => {
  const pathname = usePathname();
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

  const [catalogProduct, setCatalogProduct] = useState<CatalogProduct[]>([
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

  return (
    <MainClient meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <Carousel
        className="carousel-catalog-product-page"
        dataCarousel={dataCarouselBanner}
        {...carouselBannerSettings}
      />
      <div className="container">
        <div className="wrapper-catalog-product">
          <ScrollList
            headTitle="Logo"
            linkAll={`${pathname}/logo`}
            data={catalogProduct}
            titleLink="Xem thêm"
          />
          <ScrollList
            headTitle="Catalog"
            linkAll={`${pathname}/catalog`}
            data={catalogProduct}
            titleLink="Xem thêm"
          />
          <ScrollList
            headTitle="Ảnh bìa"
            linkAll={`${pathname}/anh-bia`}
            data={catalogProduct}
            titleLink="Xem thêm"
          />
        </div>
      </div>
    </MainClient>
  );
};

export default CatalogProduct;
