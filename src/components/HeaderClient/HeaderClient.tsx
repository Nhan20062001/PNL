import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { Anchor, Button, Drawer, Select } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/store';
import useTranslation from '@/hook/useTranslation';
import Image from 'next/image';
import storageUtils from '@/utils/storage';
import { changeLanguage } from '@/store/translation/translation.reducer';
import { TranslateEnum } from '@/store/translation/translation.type';
import { Col, Row } from 'antd';

interface IAnchorLinkItemProps {
  key: string;
  href: string;
  title: string | React.ReactNode;
}

const HeaderClient = () => {
  const { language } = useAppSelector((state) => state.translation.translate);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const listItems: IAnchorLinkItemProps[] = [
    {
      key: 'home',
      href: '/home',
      title: t('clientHeader')['itemHome'],
    },
    {
      key: 'service',
      href: '/service',
      title: t('clientHeader')['serviceHome'],
    },
    {
      key: 'work',
      href: '/work',
      title: t('clientHeader')['workHome'],
    },
    {
      key: 'customer',
      href: '/customer',
      title: t('clientHeader')['customerHome'],
    },
    {
      key: 'team',
      href: '/team',
      title: t('clientHeader')['teamHome'],
    },
    {
      key: 'career',
      href: '/career',
      title: t('clientHeader')['careerHome'],
    },
    {
      key: 'contact',
      href: '/contact',
      title: t('clientHeader')['contactHome'],
    },
  ];

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleChangeLanguage = (value: TranslateEnum) => {
    dispatch(changeLanguage(value));
  };

  useEffect(() => {
    if (storageUtils.get('lang')) {
      dispatch(changeLanguage(storageUtils.get('lang')));
    }
  }, []);

  return (
    <header className={styles['wrapper-header-client']}>
      <Row className={styles['row-container']}>
        <Col
          className={styles['col-logo']}
          xl={{ span: 4, offset: 0 }}
          xs={{ span: 6, offset: 0 }}
          sm={{ span: 6, offset: 0 }}
          md={{ span: 3, offset: 0 }}
        >
          <Image
            className={styles['nav-header-logo']}
            src="/images/pnl-logo 1.png"
            alt=""
            width={77}
            height={77}
          />
        </Col>
        <Col
          className={styles['col-menu']}
          xl={{ span: 17, offset: 0 }}
          xs={{ span: 13, offset: 0 }}
          sm={{ span: 14, offset: 0 }}
          md={{ span: 18, offset: 0 }}
        >
          <div className={styles['nav-header-client']}>
            <Anchor className={styles['ant-anchor']} direction="horizontal" items={listItems} />

            <div className={styles['wrapper-menu-mobile']}>
              <Button type="primary" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
              <Drawer
                title={<Image width={50} height={50} src={'/images/pnl-logo 1.png'} alt="PNL" />}
                placement="right"
                onClose={onClose}
                open={open}
              >
                {listItems.map((item) => {
                  return (
                    <p className={styles['menu-list']} key={item.key}>
                      {item.title}
                    </p>
                  );
                })}
              </Drawer>
            </div>
          </div>
        </Col>
        <Col
          className={styles['col-translation']}
          xl={{ span: 3, offset: 0 }}
          xs={{ span: 5, offset: 0 }}
          sm={{ span: 4, offset: 0 }}
          md={{ span: 3, offset: 0 }}
        >
          <div className={styles['translation']}>
            <Select
              suffixIcon={null}
              style={{ width: '60px', textAlign: 'center' }}
              value={language}
              options={[
                {
                  label: (
                    <div style={{ display: 'inline-block' }}>
                      <Image width={30} height={25} alt="" src="/images/logotiengviet.webp" />
                    </div>
                  ),
                  value: 'vn_VN',
                },
                {
                  label: (
                    <div style={{ display: 'inline-block' }}>
                      <Image width={30} height={25} alt="" src="/images/logotienganh.png" />
                    </div>
                  ),
                  value: 'en_US',
                },
              ]}
              onChange={(value) => {
                handleChangeLanguage(value);
              }}
              placeholder="Ngôn ngữ"
            ></Select>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default HeaderClient;
