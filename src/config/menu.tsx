import { MailOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

export type MenuType = {
  label: string;
  key: string;
  children?: MenuType[];
  iconDown?: boolean;
  icon?: ReactNode;
  type?: string; // group
};

const menuClient: MenuType[] = [
  {
    label: "Trang chủ",
    key: "home",
  },
  {
    label: "Thiết kế ấn phẩm ",
    key: "design",
    children: [
      {
        label: "Thiết kế ấn phẩm ",
        key: "design1",
      },
      {
        label: "Thiết kế ấn phẩm ",
        key: "design2",
      },
    ],
  },
  {
    label: "In ấn",
    key: "print",
  },
  {
    label: "Khóa học thiết kế",
    key: "designcourse",
  },
  {
    label: "Tài nguyên thiết kế",
    key: "designsource",
  },
  {
    label: "Liên hệ",
    key: "contact",
  },
];

const menuAdmin: never[] = [];

export { menuClient, menuAdmin };
