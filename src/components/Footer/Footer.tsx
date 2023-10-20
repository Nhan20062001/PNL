import React from 'react';
import { Col, Row } from 'antd';
import styles from './footer.module.scss';
import { Image } from 'antd';
import { FacebookOutlined, InstagramOutlined, MailOutlined } from '@ant-design/icons';

function FooterClient() {
  return (
    <footer className={styles['wrapper-footer-client']}>
      <div className='container'>
        <Row >
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 0 }} md={{ span: 10, offset: 0}}>
            <p className={styles['footer-title']} >Location</p>
            <Image 
              className={styles['location-map']}
              src="/images/Rectangle 16.png"
              alt=""
              preview={false}
            />
            <div className={styles['rectangle-location']}>
              <h6>Twiscode</h6>
              <span>Jl. Kayoon, Surabaya</span>
            </div>
          </Col>

          <Col sm={6} className={styles['col-company']} xs={{ span: 12, offset: 0 }} lg={{ span: 8, offset: 0 }} md={{ span: 7, offset: 0}}>
            <p className={styles['footer-title']}>Company</p>
            <ul className={styles['company-list']}>
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

          <Col sm={6} className={styles['col-contact-us']} xs={{ span: 12, offset: 0}} lg={{ span: 8, offset: 0}} md={{ span: 7, offset: 0}}>
            <p className={styles['footer-title']}>Contact Us</p>
            <ul className={styles['contact-list']} >
              <li>
                <FacebookOutlined />
                <span className={styles['icon-name']}>Twiscode</span>
              </li>
              <li>
                <InstagramOutlined />
                <span className={styles['icon-name']}>Twiscode</span>
              </li>
              <li>
                <MailOutlined />
                <span className={styles['icon-name']}>andree@twiscode.com</span>
              </li>
            </ul>
          </Col>
        </Row>

        <div className={styles['footer-center']}>
          <Image 
            className={styles['image']}
            src='/images/dmca.jpg'
            alt=''
            preview={false}
          />
          <Image 
            className={styles['image']}
            src='/images/bo-cong-thuong.gif'
            alt=''
            preview={false}
          />
        </div>

        <div className={styles['footer-bottom']}>
          <ul>
            <li>copyright © 2023. Công ty cung cấp giải pháp chuyến đổi số PNL</li>
            <li>Mã số thuế: 2340923424</li>
          </ul>
          <ul>
            <li>Bản quyền và sở hữu thuộc Công ty cung cấp giải pháp chuyến đổi số PNL   </li>
            <li>powerby PNL ltd</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterClient;
