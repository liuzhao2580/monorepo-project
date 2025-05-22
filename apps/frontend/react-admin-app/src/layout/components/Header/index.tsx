import HeaderMenu from "./Menu";
import NavBar from "./NavBar";
const LayoutHeader = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
      className="flex"
    >
      <div className="w-2/3">
        <HeaderMenu></HeaderMenu>
      </div>
      <div className="w-1/3">
        <NavBar></NavBar>
      </div>
    </div>
  );
};

export default LayoutHeader;
