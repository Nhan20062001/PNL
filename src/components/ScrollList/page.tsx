import Link from "next/link";
import ItemMain from "../Item/ItemMain";
import { Carousel } from "antd";
import "./style.scss";

type Props = {
  headTitle: string;
  data: any[];
  linkAll?: string;
  titleLink?: string;
};

const ScrollList = ({ headTitle, data, linkAll, titleLink }: Props) => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 12000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="wrapper-scroll-list">
      <div className="head-scroll-list">
        <h3>{headTitle}</h3>
        <Link href={linkAll || ""}>{titleLink}</Link>
      </div>
      <div>
        <Carousel {...carouselSettings}>
          {data.map((item) => {
            return (
              <ItemMain image={item.image} title={item.title} key={item.id} />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ScrollList;
