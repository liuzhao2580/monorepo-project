import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useI18n } from "@pmm/i18n/react";
const HeaderSearch = () => {
  const { t } = useI18n();
  const list = [
    {
      type: "price",
      label: "价格",
      iconfont: "icon-price",
    },
    {
      type: "room",
      label: "房型",
      iconfont: "icon-room",
    },
    {
      type: "area",
      label: "面积",
      iconfont: "icon-area",
    },
    {
      type: "more",
      label: "更多",
      iconfont: "icon-more",
    },
  ];
  return (
    <div className="flex h-10 lh-10 ">
      <Input
        placeholder={t("map.searchPlaceholder")}
        suffix={<SearchOutlined />}
        className="rounded-1"
      />
      <div className="flex m-l-10 bg-[var(--background-color)] p-x-2 rounded-1">
        {list.map((item) => {
          return (
            <span
              key={item.type}
              className="flex items-center  gap-x-3 w-24 cursor-pointer justify-center"
            >
              <i className={`iconfont ${item.iconfont}`}></i>
              <span>{item.label}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderSearch;
