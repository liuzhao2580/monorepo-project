import { Checkbox, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useI18n } from "@pmm/i18n/react";
import { useEffect, useMemo, useState } from "react";
import DoubleInput from "./DoubleInput";
type Type = "price" | "room" | "area" | "more";
const HeaderSearch = () => {
  const { t } = useI18n();
  const [currentTypeIndex, setCurrentTypeIndex] = useState(-1);
  const [currentType, setCurrentType] = useState<Type | "">("");
  useEffect(() => {
    setCurrentType(list[currentTypeIndex]?.type || "");
  }, [currentTypeIndex]);
  // 定义不同 type 对应的多选配置
  const typeOptions: Record<
    string,
    { title: string; options: { label: string; value: string }[] }[]
  > = {
    price: [
      {
        title: t("map.price"),
        options: [
          { label: t("map.priceUnder80"), value: "80" },
          { label: t("map.price80To100"), value: "80-100" },
          { label: t("map.price100To150"), value: "100-150" },
          { label: t("map.price150To200"), value: "150-200" },
          { label: t("map.price200To300"), value: "200-300" },
          { label: t("map.priceAbove300"), value: "300以上" },
        ],
      },
    ],
    room: [
      {
        title: t("map.room"),
        options: [
          { label: t("map.roomOne"), value: "roomOne" },
          { label: t("map.roomTwo"), value: "roomTwo" },
          { label: t("map.roomThree"), value: "roomThree" },
          { label: t("map.roomfour"), value: "roomfour" },
          { label: t("map.roomfive"), value: "roomfive" },
          { label: t("map.roomFiveAbove"), value: "roomFiveAbove" },
        ],
      },
    ],
    area: [
      {
        title: t("map.areaUnit"),
        options: [
          { label: t("map.areaUnder60"), value: "areaUnder60" },
          { label: t("map.area60To90"), value: "area60To90" },
          { label: t("map.area90To120"), value: "area90To120" },
          { label: t("map.area120To140"), value: "area120To140" },
          { label: t("map.area140To200"), value: "area140To200" },
          { label: t("map.area200To300"), value: "area200To300" },
          { label: t("map.area300Above"), value: "area300Above" },
        ],
      },
    ],
    more: [
      {
        title: t("map.feature"),
        options: [
          { label: t("map.mustSee"), value: "mustSee" },
          { label: t("map.fullFiveYears"), value: "fullFiveYears" },
          { label: t("map.fullTwoYears"), value: "fullTwoYears" },
          { label: t("map.nearSubway"), value: "nearSubway" },
          { label: t("map.vrHouse"), value: "vrHouse" },
          { label: t("map.vrDecoration"), value: "vrDecoration" },
          { label: t("map.newSevenDays"), value: "newSevenDays" },
          { label: t("map.anytimeView"), value: "anytimeView" },
          { label: t("map.niceView"), value: "niceView" },
        ],
      },
      {
        title: t("map.direction"),
        options: [
          { label: t("map.northSouth"), value: "northSouth" },
          { label: t("map.southFacing"), value: "southFacing" },
          { label: t("map.eastFacing"), value: "eastFacing" },
          { label: t("map.northFacing"), value: "northFacing" },
          { label: t("map.westFacing"), value: "westFacing" },
        ],
      },
      {
        title: t("map.floor"),
        options: [
          { label: t("map.lowFloor"), value: "lowFloor" },
          { label: t("map.midFloor"), value: "midFloor" },
          { label: t("map.highFloor"), value: "highFloor" },
        ],
      },
      {
        title: t("map.buildingAge"),
        options: [
          { label: t("map.within5Years"), value: "within5Years" },
          { label: t("map.within10Years"), value: "within10Years" },
          { label: t("map.within15Years"), value: "within15Years" },
          { label: t("map.within20Years"), value: "within20Years" },
          { label: t("map.over20Years"), value: "over20Years" },
        ],
      },
      {
        title: t("map.decoration"),
        options: [
          { label: t("map.fineDecoration"), value: "fineDecoration" },
          { label: t("map.ordinaryDecoration"), value: "ordinaryDecoration" },
          { label: t("map.roughHouse"), value: "roughHouse" },
        ],
      },
      {
        title: t("map.purpose"),
        options: [
          { label: t("map.ordinaryResidence"), value: "ordinaryResidence" },
          { label: t("map.commercial"), value: "commercial" },
          { label: t("map.villa"), value: "villa" },
          { label: t("map.courtyardHouse"), value: "courtyardHouse" },
          { label: t("map.parkingSpace"), value: "parkingSpace" },
          { label: t("map.other"), value: "other" },
        ],
      },
      {
        title: t("map.elevator"),
        options: [
          { label: t("map.withElevator"), value: "withElevator" },
          { label: t("map.withoutElevator"), value: "withoutElevator" },
        ],
      },
      {
        title: t("map.heating"),
        options: [
          { label: t("map.centralHeating"), value: "centralHeating" },
          { label: t("map.selfHeating"), value: "selfHeating" },
        ],
      },
      {
        title: t("map.ownership"),
        options: [
          { label: t("map.commercialHouse"), value: "commercialHouse" },
          { label: t("map.publicHouse"), value: "publicHouse" },
          { label: t("map.affordableHouse"), value: "affordableHouse" },
          { label: t("map.otherOwnership"), value: "otherOwnership" },
        ],
      },
      {
        title: t("map.buildingType"),
        options: [
          { label: t("map.towerBuilding"), value: "towerBuilding" },
          { label: t("map.slabBuilding"), value: "slabBuilding" },
          { label: t("map.slabTowerCombined"), value: "slabTowerCombined" },
        ],
      },
    ],
  };
  interface IType {
    type: Type;
    label: string;
    iconfont: string;
  }
  const list: IType[] = [
    {
      type: "price",
      label: t("map.price"),
      iconfont: "icon-price",
    },
    {
      type: "room",
      label: t("map.room"),
      iconfont: "icon-room",
    },
    {
      type: "area",
      label: t("map.area"),
      iconfont: "icon-area",
    },
    {
      type: "more",
      label: t("map.more"),
      iconfont: "icon-more",
    },
  ];
  function handleTypeClick(item: IType, index: number) {
    if (currentTypeIndex === index) {
      setCurrentTypeIndex(-1);
      return;
    }
    console.log(item);
    setCurrentTypeIndex(index);
  }

  const RenderCheckbox = useMemo(() => {
    if (currentTypeIndex === -1) return [];
    return typeOptions[list[currentTypeIndex]!.type]!.map((item) => {
      return (
        <div className="flex flex-col gap-y-10px mb-20px" key={item.title}>
          <span className="font-700">{item.title}</span>
          <div>
            <Checkbox.Group
              className="gap-y-10px grid grid-cols-4 select-none"
              options={item.options}
            />
          </div>
        </div>
      );
    });
  }, [currentTypeIndex, typeOptions, list]);
  return (
    <div className="flex">
      <Input
        placeholder={t("map.searchPlaceholder")}
        suffix={<SearchOutlined />}
        className="rounded-1 h-10 lh-10  m-r-10"
      />
      <div className="flex flex-col">
        <div className="flex bg-[var(--background-color)] rounded-1 h-10 lh-10 w-max">
          {list.map((item, index) => {
            return (
              <span
                key={item.type}
                className={`flex items-center  gap-x-3 w-24 cursor-pointer justify-center hover:bg-[var(--background-color-hover)] select-none ${currentTypeIndex === index && "text-[var(--primary-color)]"}`}
                onClick={() => handleTypeClick(item, index)}
              >
                <i className={`iconfont ${item.iconfont}`}></i>
                <span>{item.label}</span>
              </span>
            );
          })}
        </div>
        <div
          className={`mt-20px bg-[var(--background-color)] rounded-1 w-480px  p-12px pb-50px relative ${currentTypeIndex !== -1 ? "block" : "hidden"}`}
        >
          <div className="min-h-200px max-h-400px overflow-y-auto">
            {currentTypeIndex !== -1 && RenderCheckbox}
            {currentType === "price" && <DoubleInput max={1000} unit="万"></DoubleInput>}
            {currentType === "area" && <DoubleInput max={500} unit="㎡"></DoubleInput>}
          </div>
          <div className="flex justify-between absolute bottom-0 left-0 right-0 px-12px h-50px lh-50px [&_span]:px-10px bg-[var(--background-color)]">
            <span className="cursor-pointer cursor-pointer">{t("base.reset")}</span>
            <div className="flex gap-x-20px cursor-pointer">
              <span onClick={() => setCurrentTypeIndex(-1)}>{t("base.cancel")}</span>
              <span className="text-[var(--primary-color)] ">{t("base.confirm")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
