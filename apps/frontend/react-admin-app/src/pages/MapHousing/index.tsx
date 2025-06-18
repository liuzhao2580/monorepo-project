import Map from "@/utils/modules/map";
import { useEffect } from "react";
const MapHousing = () => {
  useEffect(() => {
    new Map().init();
  }, []);
  return (
    <div className="w-100vw h-100vh">
      <div id="map" className="w-full h-full"></div>
    </div>
  );
};

export default MapHousing;
