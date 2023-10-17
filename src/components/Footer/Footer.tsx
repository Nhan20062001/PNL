import React from 'react';
import { Col, Row } from 'antd';
import styles from './footer.module.scss';
import Image from 'next/image';

function FooterClient() {
  return (
    <footer className={styles['wrapper-footer-client']}>
      <div className='footer-container'>
      <Row>
        <Col className='footer-location' xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <p className={styles['footer-title']} >Location</p>
          <Image 
            src="/images/Rectangle 16.png"
            alt=""
            width={250}
            height={110}
          />
        </Col>

        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <p className={styles['footer-title']}>Company</p>
          <ul className={styles['company-list']} >
            <li>
              Work
            </li>
            <li>
              Service
            </li>
            <li>
              Team
            </li>
            <li>
              Contact
            </li>
          </ul>
        </Col>

        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <p className={styles['footer-title']}>Contact Us</p>
          <ul className={styles['contact-list']} >
            <li>
              Twiscode
            </li>
            <li>
              Twiscode
            </li>
            <li>
              andree@twiscode.com
            </li>
          </ul>
        </Col>
      </Row>
    
        {/* <Row>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Space direction="vertical" size="middle">
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
        </div> */}
      </div>
    </footer>
  );
}

export default FooterClient;
