import { PMap } from "@/utils/modules/Map/index";
import { useEffect } from "react";
import HeaderSearch from "./components/HeaderSearch/index";
const MapHousing = () => {
  useEffect(() => {
    new PMap().init({
      accessToken:
        "pk.eyJ1IjoibGl1emhhbzI1ODAiLCJhIjoiY2xmcnV5c2NtMDd4eDNvbmxsbHEwYTMwbCJ9.T0QCxGEJsLWC9ncE1B1rRw",
      container: "map",
      style: "mapbox://styles/mapbox/streets-zh-v1",
    });
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
