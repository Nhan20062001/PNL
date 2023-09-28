import { Col, Row, Space } from "antd";
import "./style.scss";
import Link from "next/link";

const FooterClient = () => {
  return (
    <footer className="wrapper-footer">
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Space
              direction="vertical"
              size="middle"
              className="wrapper-footer-info"
            >
              <img
                src="https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png"
                alt=""
                className="footer-logo"
              />
              <p className="">
                Điện thoại:
                <a href="tel:0246.329.1102">0246.329.1102</a>
              </p>
              <p>
                Email:
                <a href="mailto:contact@gmail.com">user@gmail.vn</a>
              </p>
              <p>Địa chỉ: Trên sao hảo</p>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Space direction="vertical" size="middle">
              <h3 className="footer-title">Dịch vụ</h3>
              <Link href="/" className="">
                Nhận diện thương hiệu
              </Link>
              <Link href="/">Thiết kế bao bì</Link>
              <Link href="/">Thiết kế menu</Link>
              <Link href="/">In ấn Đà Nẵng</Link>
              <Link href="/">In bạt khổ lớn</Link>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Space direction="vertical" size="middle">
              <h3 className="footer-title">CÔNG TY CỔ PHẦN SAO HẢO</h3>
              <Link href="/" className="">
                Mã số thuế: 0109922901
              </Link>
              <Link href="/">Ngày thành lập: 04/04/2023</Link>
              <Link href="/">Lĩnh vực: Đào tạo người sao hỏa.</Link>
            </Space>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default FooterClient;
