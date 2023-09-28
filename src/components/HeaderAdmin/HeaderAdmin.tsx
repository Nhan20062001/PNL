import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";

const { Header } = Layout;

type Props = {
  collapsed: boolean;
  onChangeCollapseHeader: () => void;
};

const HeaderAdmin = ({ collapsed, onChangeCollapseHeader }: Props) => {
  return (
    <Header
      style={{
        padding: 0,
        background: "white",
        position: "fixed",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        height: "64px",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onChangeCollapseHeader}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};

export default HeaderAdmin;
