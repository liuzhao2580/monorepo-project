import Banner from "./components/Banner";
import HouseCard, { type IHouseCardProps } from "@/components/HouseCard/index";
function Home() {
  interface IHouseList {
    title: string;
    secTitle: string;
    children: IHouseCardProps[];
  }
  const houseList: IHouseList[] = [
    {
      title: "二手房",
      secTitle: "好房源那么多，我们为你精选了这些",
      children: [
        {
          img: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg",
          name: "王家湾生活区",
          zone: "朝阳区",
          size: "3室2厅",
          area: "120平米",
          totalPrice: "500万",
        },
        {
          img: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
          name: "中建大公馆一期",
          zone: "海淀区",
          size: "3室2厅",
          area: "90平米",
          totalPrice: "400万",
        },
        {
          img: "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg",
          name: "中建大公馆二期",
          zone: "西城区",
          size: "3室2厅",
          area: "60平米",
          totalPrice: "300万",
        },
        {
          img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
          name: "望京丽园",
          zone: "望京",
          size: "2室1厅",
          area: "75平米",
          totalPrice: "350万",
        },
      ],
    },
    {
      title: "新房",
      secTitle: "真实信息准确同步，楼盘动态一手掌握",
      children: [
        {
          name: "中建大公馆三期",
          img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
          zone: "洪山区",
          size: "3室2厅",
          area: "100平米",
          totalPrice: "600万",
          unitPrice: "60000元/平米",
        },
        {
          name: "锦秀花园",
          img: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
          zone: "武昌区",
          size: "3室2厅",
          area: "80平米",
          totalPrice: "450万",
          unitPrice: "56250元/平米",
        },
        {
          name: "万科未来城",
          img: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
          zone: "江夏区",
          size: "4室2厅",
          area: "130平米",
          totalPrice: "800万",
          unitPrice: "61538元/平米",
        },
      ],
    },
    {
      title: "公租房",
      secTitle: "政府保障住房，价格亲民，生活便利",
      children: [
        {
          name: "长港社区公租房",
          img: "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg",
          zone: "江汉区",
          size: "2室1厅",
          area: "60平米",
          totalPrice: "80万",
        },
        {
          name: "南湖家园",
          img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
          zone: "武昌区",
          size: "1室1厅",
          area: "45平米",
          totalPrice: "55万",
        },
      ],
    },
    {
      title: "出租房",
      secTitle: "拎包入住，短租长租任你选",
      children: [
        {
          name: "汉口SOHO公寓",
          img: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
          zone: "江汉区",
          size: "1室0厅",
          area: "35平米",
          totalPrice: "2200元/月",
        },
        {
          name: "武昌绿地中央广场",
          img: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
          zone: "武昌区",
          size: "2室1厅",
          area: "60平米",
          totalPrice: "3500元/月",
        },
      ],
    },
  ];
  return (
    <div className="w-full  h-full p-x-4 relative">
      <div className="mb-20">
        <Banner></Banner>
      </div>
      {houseList.map((item, index) => {
        return (
          <div key={index} className="mb-20">
            <div className="mb-10px">
              <p className="text-[var(--text-color)] text-6 font-700">{item.title}</p>
              <p className="text-[var(--secondary-color)]">{item.secTitle}</p>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {item.children.map((house, idx) => {
                return (
                  <HouseCard
                    key={idx}
                    img={house.img}
                    name={house.name}
                    size={house.size}
                    zone={house.zone}
                    area={house.area}
                    totalPrice={house.totalPrice}
                    unitPrice={house.unitPrice}
                  ></HouseCard>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
