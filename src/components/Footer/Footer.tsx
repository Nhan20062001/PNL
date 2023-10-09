import React from 'react';
import { Col, Row, Space } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

function FooterClient() {
  return (
    <footer>
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Space direction="vertical" size="middle">
              {/* <img
                src="https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png"
                alt=""
                className="footer-logo"
              /> */}
              <Image
                src="https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-banner-1400x535.png"
                alt=""
                width={98}
                height={98}
              />
            </Space>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} />
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Space direction="vertical" size="middle">
              <Link href="/">Mã số thuế: 0109922901</Link>
              <Link href="/">Ngày thành lập: 04/04/2023</Link>
              <Link href="/">Lĩnh vực: Thiết kế - In ấn.</Link>
            </Space>
          </Col>
        </Row>
        <div>
          <p>@2023 Sata - All right reserved</p>
          <p>Designed and Developed by PNL ltd.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterClient;
