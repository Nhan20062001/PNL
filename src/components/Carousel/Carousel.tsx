"use client";
import { Carousel as CarouselAnt } from "antd";
import "./style.scss";

type Props = {
  dataCarousel: {
    image: string;
    id: string;
    title?: string;
  }[];
  className?: string;
  classNameChild?: string;
};

const Carousel: React.FC<Props> = ({
  className,
  classNameChild,
  dataCarousel,
  ...rest
}: Props) => {
  return (
    <CarouselAnt className={className} {...rest}>
      {dataCarousel?.map((imageSlide) => (
        <div className={classNameChild} key={imageSlide.id}>
          <img src={imageSlide.image} alt="" />
          {imageSlide.title ? (
            <p className="carousel-title-item">{imageSlide.title}</p>
          ) : (
            ""
          )}
        </div>
      ))}
    </CarouselAnt>
  );
};

export default Carousel;
