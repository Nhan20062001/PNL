import useTranslation from '@/hook/useTranslation';
import { useAppDispatch, useAppSelector } from '@/store';
import { changeLanguage } from '@/store/translation/translation.reducer';
import storageUtils from '@/utils/storage';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Image, Menu, MenuProps, Row } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import styles from './header.module.scss';

const HeaderClient = () => {
  const { language } = useAppSelector((state) => state.translation.translate);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const router = useRouter();
  const [current, setCurrent] = useState('/');
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleChangeLanguage = (value: string) => {
    dispatch(changeLanguage(value));
  };

  const menuItems: MenuProps['items'] = [
    {
      label: t('clientHeader')['itemHome'],
      key: '/',
      onClick: () => {
        setOpen(false);
        setCurrent('/');
        router.push('/');
      },
    },
    {
      label: t('clientHeader')['serviceHome'],
      key: '/service',
      onClick: () => {
        setOpen(false);
        setCurrent('/service');
        router.push('/service');
      },
    },
    {
      label: t('clientHeader')['workHome'],
      key: '/work',
      onClick: () => {
        setCurrent('/work');
        setOpen(false);
        router.push('/work');
      },
    },
    {
      label: t('clientHeader')['customerHome'],
      key: '/customer',
      onClick: () => {
        setCurrent('/customer');
        setOpen(false);
        router.push('/customer');
      },
    },
    {
      label: t('clientHeader')['teamHome'],
      key: '/team',
      onClick: () => {
        setCurrent('/team');
        setOpen(false);
        router.push('/team');
      },
    },
    {
      label: t('clientHeader')['careerHome'],
      key: '/career',
      onClick: () => {
        setCurrent('/career');
        setOpen(false);
        router.push('/career');
      },
    },
    {
      label: t('clientHeader')['contactHome'],
      key: '/contact',
      onClick: () => {
        setCurrent('/contact');
        setOpen(false);
        router.push('/contact');
      },
    },
  ];

  useEffect(() => {
    if (storageUtils.get('lang')) {
      dispatch(changeLanguage(storageUtils.get('lang')));
    }
  }, []);
  useEffect(() => {
    if (menuItems.map((item) => item?.key === pathname)) {
      setCurrent(pathname);
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
            preview={false}
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
            <Menu mode="horizontal" selectedKeys={[current]} items={menuItems} />
            <div className={styles['wrapper-menu-mobile']}>
              <Button type="primary" onClick={showDrawer}>
                <MenuOutlined />
              </Button>

              <Drawer
                title={
                  <Image
                    preview={false}
                    width={50}
                    height={50}
                    src={'/images/pnl-logo 1.png'}
                    alt="PNL"
                  />
                }
                open={open}
                key="Menu"
                placement="right"
                onClose={onClose}
              >
                <Menu mode="inline" items={menuItems} />
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
            <SelectLanguage
              value={language}
              onChange={(value) => {
                handleChangeLanguage(value);
              }}
            />
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default HeaderClient;
