import { useState, useMemo, useRef, useEffect } from "react";
import { Modal, Select, type SelectProps } from "antd";
import { MapPin } from "lucide-react";
import pinyin from "pinyin";
import { useCurrentCity } from "./useCurrentCity";
import "./index.scss";
// 获取拼音首字母
const getInitial = (text: string): string => {
  const result = pinyin(text, { style: pinyin.STYLE_FIRST_LETTER })[0];
  return result?.[0]?.toUpperCase?.() || "#";
};
const cityData = [
  { province: "北京", cities: ["北京市"] },
  { province: "上海", cities: ["上海市"] },
  { province: "广东", cities: ["广州市", "深圳市", "佛山市", "东莞市"] },
  { province: "浙江", cities: ["杭州市", "宁波市", "温州市", "嘉兴市"] },
  { province: "江苏", cities: ["南京市", "苏州市", "无锡市", "常州市"] },
  { province: "四川", cities: ["成都市", "绵阳市", "德阳市", "南充市"] },
  { province: "湖北", cities: ["武汉市", "宜昌市", "襄阳市", "黄石市"] },
  { province: "陕西", cities: ["西安市", "咸阳市", "宝鸡市", "渭南市"] },
  { province: "山东", cities: ["青岛市", "济南市", "烟台市", "临沂市"] },
  { province: "湖南", cities: ["长沙市", "株洲市", "湘潭市", "衡阳市"] },
  { province: "河南", cities: ["郑州市", "洛阳市", "新乡市", "南阳市"] },
  { province: "天津", cities: ["天津市"] },
  { province: "重庆", cities: ["重庆市"] },
];

const City = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 索引
  const [cityIndexActive, setCityIndexActive] = useState("");
  // 选中的城市
  const [cityActive, setCityActive] = useState("");
  const { city } = useCurrentCity();
  useEffect(() => {
    if (city) {
      setCityActive(city);
    }
  }, [city]);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const groupRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // 带字母索引分组的数据
  const groupedOptions = useMemo(() => {
    const map: Record<string, { label: string; options: SelectProps["options"] }> = {};

    for (const { province, cities } of cityData) {
      const initial = getInitial(province);
      if (!map[initial]) {
        map[initial] = {
          label: initial,
          options: [],
        };
      }
      map[initial].options!.push({
        label: province,
        options: cities.map((city) => ({ label: city, value: city })),
      });
    }

    const sorted = Object.entries(map)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([letter, group]) => ({
        ...group,
        key: letter,
      }));

    return sorted;
  }, []);

  const handleScrollTo = (letter: string, key: string) => {
    const el = groupRefs.current[letter];
    setCityIndexActive(key);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const options = useMemo(() => {
    return cityData.map(({ province, cities }) => ({
      label: province,
      options: cities.map((city) => ({
        label: city,
        value: city,
      })),
    }));
  }, []);

  const onChange = (value: any) => {
    setCityActive(value);
    handleCancel();
  };

  return (
    <>
      <div
        className="text-white flex gap-x-1 border border-style-solid rounded-5 cursor-pointer p-y-2px p-x-8px items-center text-12px"
        onClick={showModal}
      >
        <MapPin size={12}></MapPin>
        <span>{cityActive}</span>
      </div>
      <Modal
        title="城市选择"
        open={isModalOpen}
        onOk={handleOk}
        footer={null}
        width={600}
        onCancel={handleCancel}
        maskClosable={false}
      >
        <Select
          showSearch
          allowClear
          style={{ width: "100%" }}
          placeholder="请选择城市"
          options={options}
          onChange={onChange}
          optionFilterProp="label"
        />
        <div className="flex flex-col my-4">
          <span className="text-[var(--text-color)] font-700 text-5">点击字母索引快速定位城市</span>
          <div className="flex  gap-2">
            {groupedOptions.map((group) => (
              <span
                className={`h-10 lh-10 cursor-pointer w-10 text-center text-6 border-radius-base  ${group.key === cityIndexActive ? "bg-[var(--primary-color)] text-[var(--light-color)]" : "hover:bg-[#eee]"}`}
                key={group.key}
                onClick={() => handleScrollTo(group.label, group.key)}
              >
                {group.label}
              </span>
            ))}
          </div>
        </div>
        <div className="max-h-100 overflow-auto">
          {groupedOptions.map((group) => (
            <div
              key={group.key}
              ref={(el) => {
                groupRefs.current[group.key] = el;
              }}
              className={`flex items-center relative text-6 border-b-[var(--secondary-color)] h-full border-b-1 border-style-solid ${cityIndexActive === group.key && "bg-[var(--hover-color)] border-radius-base"}`}
            >
              <div className="bg-[var(--primary-color)] absolute top-0 bottom-0 w-12 flex items-center justify-center flex-shrink-0">
                {group.label}
              </div>
              <div className="m-l-12 flex-1">
                {group.options?.map((provinceGroup, index) => (
                  <div
                    key={index}
                    className="flex w-full relative p-y-2 hover:bg-[var(--hover-color)] city-col hover:before:block"
                  >
                    <div className="text-[var(--secondary-color)] w-80px flex-shrink-0 mr-10px p-1  m-l-1">
                      {provinceGroup.label}
                    </div>
                    <div className="flex flex-1 flex-wrap gap-x-2 ">
                      {provinceGroup.options?.map((opt: any) => (
                        <div
                          key={opt.value}
                          className={`cursor-pointer  border-radius-base p-1 ${cityActive === opt.value ? "bg-[var(--primary-color)] text-[var(--light-color)]" : "hover:text-[var(--primary-color)]"}`}
                          onClick={() => onChange?.(opt.value)}
                        >
                          {opt.label}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default City;
