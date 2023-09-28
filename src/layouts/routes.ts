import ChartIcon from "./icons/ChartIcon";
import AboutIcon from "./icons/AboutIcon";
import ConstructionIcon from "./icons/ConstructionIcon";
import ContactIcon from "./icons/ContactIcon";
import InfoContactIcon from "./icons/InfoContactIcon";
import NewsIcon from "./icons/NewsIcon";
import PartnerIcon from "./icons/PartnerIcon";
import ProductIcon from "./icons/ProductIcon";
import ProductTypeIcon from "./icons/ProductTypeIcon";
import SlideHomeIcon from "./icons/SlideHomeIcon";
import SideThumbIcon from "./icons/SlideThumbIcon";
import TypeNew from "./icons/TypeNewIcon";
import ConstructionTypeIcon from "./icons/ConstructionTypeIcon";
import InfoAddressIcon from "./icons/InfoAddressIcon";

const routes = [
  {
    label: "Thống kê",
    key: "tk",
    url: "/admin/thong-ke",
    icon: ChartIcon,
  },
  {
    label: "Về chúng tôi",
    key: "gt",
    url: "/admin/ve-chung-toi",
    icon: AboutIcon,
  },
  {
    label: "Loại tin tức",
    key: "loai",
    url: "/admin/loai-tin-tuc",
    icon: TypeNew,
  },
  {
    label: "Tin tức",
    key: "tt",
    url: "/admin/tin-tuc",
    icon: NewsIcon,
  },
];

export default routes;
