import { observer } from "mobx-react-lite";
import Personal from "./Personal/index";
const NavBar = observer(() => {
  return (
    <div className="flex justify-end items-center h-full px-4 text-white">
      {/* 头像下拉框 */}
      <Personal></Personal>
    </div>
  );
});
export default NavBar;
