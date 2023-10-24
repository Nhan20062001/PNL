import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styles from './style.module.scss'

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${styles["wrapper-arrow-carousel"]} ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${styles['wrapper-arrow-carousel']} ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};

export { NextArrow, PrevArrow };
