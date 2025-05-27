import { type FC } from "react";
interface ICustom {
  iconPath: string;
}

/** 自定义的菜单 icon  */
const CustomIconCom: FC<ICustom> = ({ iconPath }) => {
  return (
    <svg
      className="icon"
      style={{
        width: "2rem",
        height: "2rem",
      }}
      aria-hidden="true"
    >
      <use xlinkHref={`#icon-${iconPath}`} />
    </svg>
  );
};

export default CustomIconCom;
