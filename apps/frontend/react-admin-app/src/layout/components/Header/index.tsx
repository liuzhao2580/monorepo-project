import HeaderMenu from "./Menu";
import NavBar from "./NavBar";
const LayoutHeader = () => {
  return (
    <>
      <div className="w-2/3">
        <HeaderMenu></HeaderMenu>
      </div>
      <div className="w-1/3">
        <NavBar></NavBar>
      </div>
    </>
  );
};

export default LayoutHeader;
