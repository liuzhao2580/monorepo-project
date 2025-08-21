import { SearchOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useNavigate } from "react-router";
import Logo from "@/components/Logo";
import { ROUTE_PATH } from "@/router/RouteConst";
import { useI18n } from "@pmm/i18n/react";
const Header = () => {
  const navigate = useNavigate();
  const { t } = useI18n();
  const publishHouse = () => {
    navigate(ROUTE_PATH.MAP_HOUSING);
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-10px">
        <Logo>
          <span className="text-6 font-color-primary font-[AlibabaPuHuiTi\_3\_65\_Medium]">
            {t("base.title")}
          </span>
        </Logo>
        <Button type="primary" onClick={publishHouse}>
          {t("rentalHousing.mapFindHouse")}
        </Button>
      </div>
      <div>
        <Input
          placeholder={t("rentalHousing.searchPlaceholder")}
          className="h-10"
          suffix={<SearchOutlined className="cursor-pointer" />}
        />
      </div>
    </div>
  );
};

export default Header;
