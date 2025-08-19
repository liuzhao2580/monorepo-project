import Map from "@/utils/modules/map";
import { useEffect } from "react";
import HeaderSearch from "./components/HeaderSearch/index";
const MapHousing = () => {
  useEffect(() => {
    new Map().init();
  }, []);
  return (
    <div className="w-100vw h-100vh relative">
      <div className="absolute z-1 p-t-4 p-x-4">
        <HeaderSearch></HeaderSearch>
      </div>
      <div id="map" className="w-full h-full"></div>
    </div>
  );
};

export default MapHousing;
