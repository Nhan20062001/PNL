import type { ReactNode } from "react";
import FooterClient from "@/components/Footer/Footer";
import HeaderClient from "@/components/HeaderClient/HeaderClient";
import theme from "../theme/themeConfig";
import { ConfigProvider } from "antd";

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const MainClient = (props: IMainProps) => {
  return (
    <>
      <ConfigProvider theme={theme}>
        <HeaderClient />
        <main className="">{props.children}</main>
        <FooterClient />
      </ConfigProvider>
    </>
  );
};

export { MainClient };
