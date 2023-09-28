import Menu from "./Menu";
import TopBar from "./TopBar";
import "./style.scss";

const HeaderClient = () => {
  return (
    <header>
      <TopBar />
      <Menu />
    </header>
  );
};

export default HeaderClient;
