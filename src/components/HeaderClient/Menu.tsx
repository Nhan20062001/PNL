"use client";
import { MenuType, menuClient } from "@/config/menu";
import { Menu as MenuAnt } from "antd";
import Link from "next/link";
import { useState } from "react";
import { Drawer, Input, Button } from "antd";
import "./style.scss";

const Menu = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
  const handleCloseMenuMobile = () => {
    setOpenMenuMobile(!openMenuMobile);
  };

  const renderMenu = (menuArray: MenuType[]): any => {
    return menuArray?.map((itemMenu: MenuType) => {
      if (itemMenu.children) {
        return (
          <div className="item-menu-home" key={itemMenu.key}>
            <Link className="menu-title-content" href="">
              {itemMenu.label}
            </Link>
            {renderMenu(itemMenu.children)}
          </div>
        );
      }
      return (
        <div className="item-menu-home" key={itemMenu.key}>
          <Link className="menu-title-content" href="">
            {itemMenu.label}
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="wide-nav">
      <div className="container">
        <div className="wrapper-menu-home">{renderMenu(menuClient)}</div>
      </div>
      <div className="menu-mobile">
        <div className="bar-home" onClick={handleCloseMenuMobile}>
          bar
        </div>
        <div className="home-logo-mobile">Logo</div>
        <Drawer
          title={<Input placeholder="Basic usage" />}
          placement={"left"}
          closable={false}
          onClose={handleCloseMenuMobile}
          open={openMenuMobile}
          key={"key"}
          extra={<Button onClick={handleCloseMenuMobile}>Cancel</Button>}
        >
          {renderMenu(menuClient)}
        </Drawer>
      </div>
    </div>
  );
};

export default Menu;
