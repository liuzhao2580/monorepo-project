import { Outlet } from "react-router";
const ContentDom = () => {
  return (
    <div className="border-radius-base">
      <Outlet></Outlet>
    </div>
  );
};
export default ContentDom;
