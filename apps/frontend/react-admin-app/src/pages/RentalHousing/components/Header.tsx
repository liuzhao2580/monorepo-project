import { SearchOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useNavigate } from "react-router";
import Logo from "@/components/Logo";
import { ROUTE_PATH } from "@/router/RouteConst";
const Header = () => {
  const navigate = useNavigate();
  const publishHouse = () => {
    navigate(ROUTE_PATH.MAP_HOUSING);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <Logo className="text-8 mb-2">
          <span className="font-700 text-8 font-color-primary">爪爪租房</span>
        </Logo>
        <Button type="primary" onClick={publishHouse}>
          发布房源
        </Button>
      </div>
      <div>
        <Input
          placeholder="请输入区域、商圈或小区名开始找房"
          className="h-10"
          suffix={<SearchOutlined className="cursor-pointer" />}
        />
      </div>
    </div>
  );
};

export default Header;
