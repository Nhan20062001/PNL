import Link from "next/link";
import "./style.scss";

type Props = {
  className?: string;
  title: string;
  image: string;
  slug?: string;
  onClick?: () => void;
};

const ItemMain = ({ className, title, image, slug, onClick }: Props) => {
  return slug ? (
    <Link href={slug || ""}>
      <div className={`wrapper-item-main ${className ?? ""}`}>
        <div className="container-item-main">
          <div className="wrapper-image-item-main">
            <img src={image} alt={title} />
          </div>
          <div className="">
            <p>{title}</p>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div className={`wrapper-item-main ${className ?? ""}`} onClick={onClick}>
      <div className="container-item-main">
        <div className="wrapper-image-item-main">
          <img src={image} alt={title} />
        </div>
        <div className="wrapper-title-item-main">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemMain;
