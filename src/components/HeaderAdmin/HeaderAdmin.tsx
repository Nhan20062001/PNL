import React, { useEffect, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, Popover, Space } from 'antd';
import { useAppSelector } from '@/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AppConfirmModal from '../AppConfirmModal/AppConfirmModal';
import ResetPassword from './AuthMe/ResetPassword';
import { AppConfirmModalEnum } from '../../config/constant';

const { Header } = Layout;

type Props = {
  collapsed: boolean;
  onChangeCollapseHeader: () => void;
};

function HeaderAdmin({ collapsed, onChangeCollapseHeader }: Props) {
  const { user } = useAppSelector((state) => state.authSlice);
  const router = useRouter();
  const [info, setInfo] = useState({
    fullName: '',
    avatar: '',
  });

  // Reset password modal
  const [resetPasswordModalVisible, setShowResetPasswordModal] = useState<boolean>(false);
  // Confirm logout
  const [confirmLogoutVisible, setShowConfirmLogoutVisible] = useState<boolean>(false);

  useEffect(() => {
    setInfo({
      fullName: `${user.firstName} ${user.lastName}`,
      avatar: user.avatar,
    });
  }, [user]);

  const onLogoutClicked = () => {
    setShowConfirmLogoutVisible(true);
  };

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: 'white',
          position: 'fixed',
          top: 0,
          zIndex: 2,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        <div>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={onChangeCollapseHeader}
          />
        </div>
        <div style={{ marginRight: !collapsed ? '300px' : '100px' }}>
          <Popover
            content={
              <Space direction="vertical">
                <Button
                  type="link"
                  style={{ width: '180px', color: '#066156' }}
                  onClick={() => setShowResetPasswordModal(true)}
                >
                  Cập nhật mật khẩu
                </Button>
                <Button type="primary" style={{ width: '180px' }} onClick={() => onLogoutClicked()}>
                  Đăng xuất
                </Button>
              </Space>
            }
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {info.avatar ? (
                <Image src={info.avatar} alt="avatar admin" width={28} height={28} />
              ) : (
                <Image src="/favicon.ico" alt="avatar admin" width={28} height={28} />
              )}
              <p>Welcome! Admin</p>
            </div>
          </Popover>
        </div>
      </Header>
      <ResetPassword
        resetPasswordModalVisible={resetPasswordModalVisible}
        setShowResetPasswordModal={setShowResetPasswordModal}
      />
      <AppConfirmModal
        isVisible={confirmLogoutVisible}
        type={AppConfirmModalEnum.warning}
        okTextButton="Đăng Xuất"
        onCancel={() => {}}
        onOk={() => {
          router.push('/admin/dang-nhap');
        }}
        setIsVisible={() => setShowConfirmLogoutVisible(false)}
      />
    </>
  );
}

export default HeaderAdmin;
