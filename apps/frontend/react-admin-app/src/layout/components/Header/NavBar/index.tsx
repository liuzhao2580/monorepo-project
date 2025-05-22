import { Layout } from "antd";
import { observer } from "mobx-react-lite";
import Personal from "./Personal/index";
const { Header } = Layout;
const NavBar = observer(() => {
  return (
    <Header style={{ padding: 0 }} className="header-box">
      {/* 头像下拉框 */}
      <Personal></Personal>
    </Header>
  );
});
export default NavBar;
