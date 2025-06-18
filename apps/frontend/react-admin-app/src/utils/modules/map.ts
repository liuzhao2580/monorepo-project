import { PMap } from "p-mapbox";
export default class Map {
  init() {
    new PMap().init({
      accessToken:
        "pk.eyJ1IjoibGl1emhhbzI1ODAiLCJhIjoiY2xmcnV5c2NtMDd4eDNvbmxsbHEwYTMwbCJ9.T0QCxGEJsLWC9ncE1B1rRw",
      container: "map",
      zoom: 16.2,
      pitch: 75,
      bearing: -170,
      center: [114.288338, 30.536838],
      style: "mapbox://styles/mapbox/streets-zh-v1",
    });
  }
}
