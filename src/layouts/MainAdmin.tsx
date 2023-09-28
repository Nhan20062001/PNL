"use client";
import { ReactNode, useState } from "react";
import HeaderAdmin from "@/components/HeaderAdmin/HeaderAdmin";
import theme from "../theme/themeConfig";

import { UserOutlined } from "@ant-design/icons";
import { ConfigProvider, Layout, Menu } from "antd";
import "./style.scss";

const { Sider, Content } = Layout;

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const MainAdmin = (props: IMainProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapseHeader = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ height: "100vh", overflow: "auto" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="wrapper-sidebar-admin"
        >
          <div
            className="wrapper-sidebar-admin-header"
            style={{ width: !collapsed ? "200px" : "80px" }}
          >
            <div className="container-sidebar-admin-logo">
              <img
                src="https://building.vienthammygangnam.vn/wp-content/uploads/2023/07/gangnam-logo.png"
                alt=""
              />
            </div>
          </div>
          <Menu
            mode="inline"
            className="wrapper-sidebar-admin-menu"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
                children: [
                  {
                    key: "4",
                    icon: <UserOutlined />,
                    label: "nav 4",
                  },
                ],
              },
              {
                key: "2",
                icon: <UserOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UserOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout
          className="site-layout"
          style={{
            // marginLeft: collapsed ? 0 : 0,
            transition: "all",
            height: "100vh",
          }}
        >
          <HeaderAdmin
            collapsed={collapsed}
            onChangeCollapseHeader={handleCollapseHeader}
          />
          <Content
            style={{
              margin: "24px 16px 0",
              padding: 24,
              overflow: "initial",
              height: "calc(100vh - 64px)",
              marginTop: "64px",
            }}
          >
            {
              // indicates very long content
              // Array.from({ length: 100 }, (_, index) => (
              //   <div key={index}>
              //     {index % 20 === 0 && index ? "more" : "..."}
              //     <br />
              //   </div>
              // ))
            }
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export { MainAdmin };
