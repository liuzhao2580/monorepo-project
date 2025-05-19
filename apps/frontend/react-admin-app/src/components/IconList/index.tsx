import { useState, useEffect, type FC } from "react";
import CustomIconCom from "../CustomIcon";
import "./index.scss";
interface IProps {
  iconClick(icon: string): void
}
const IconList: FC<IProps> = props => {
  const [iconList, setIconList] = useState<string[]>([]);

  useEffect(() => {
    getFiles();
  }, []);
  async function getFiles() {
    const newIconList: string[] = [];
    const files = Object.keys(import.meta.glob("/src/assets/svg/*.svg"));
    for (const path in files) {
      const importPath = files[path] as string;
      // eslint-disable-next-line no-await-in-loop
      const file = await import(importPath);
      const parts = file.default.split("/");
      const iconName: string = parts[parts.length - 1].split(".")[0];
      newIconList.push(iconName);
    }
    setIconList(newIconList);
  }

  /** icon 的点击事件 */
  function iconClick(icon: string) {
    props.iconClick(icon);
  }

  return (
    <ul className="icon-list-box">
      {iconList.map(iconName => {
        return (
          <li key={iconName} onClick={() => iconClick(iconName)}>
            <CustomIconCom iconPath={iconName}></CustomIconCom>
            <span className="icon-name">{iconName}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default IconList;
