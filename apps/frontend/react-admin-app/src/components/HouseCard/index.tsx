export interface IHouseCardProps {
  /** 图片 */
  img: string;
  /** 名称 */
  name: string;
  /** 价格 */
  totalPrice?: string;
  /** 单价 */
  unitPrice?: string;
  /** 区域 */
  zone?: string;
  /** 大小 */
  size?: string;
  /** 面积 */
  area?: string;
}
const HouseCard = ({ img, name, totalPrice, unitPrice, zone, size, area }: IHouseCardProps) => {
  return (
    <div className="cursor-pointer">
      <div className="w-full  h-160px overflow-hidden border-radius-base">
        <img
          className="w-full h-full mb-2 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          src={img}
          alt=""
        />
      </div>
      <div className="">
        <div className="text-[var(--text-color)] text-18px font-700">
          <p>{zone}</p>
          <p className="">{name}</p>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-[var(--secondary-color)] text-12px">
            <span>{size}</span>
            <span className="m-x-1">·</span>
            <span>{area}</span>
          </p>
          <div className="text-[var(--danger-color)] font-700 text-14px">
            {totalPrice && <span className="">{totalPrice}</span>}
            {unitPrice && <span className="">{unitPrice}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
