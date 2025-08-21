import mapboxgl, { type LngLatLike } from "mapbox-gl";
const MAPBOX_CSS_URL = "https://api.mapbox.com/mapbox-gl-js/v3.12.0/mapbox-gl.css";
export class PMap {
  private static instance: PMap;
  private static map: mapboxgl.Map;
  private static skyTimer: number | null = null;
  private static weatherEnabled = true;
  private static mapConfig = {
    center: [114.298572, 30.584355] as LngLatLike,
    zoom: 14,
    pitch: 60,
    bearing: -170,
  };

  private static injectCSS() {
    if (!document.querySelector(`link[href="${MAPBOX_CSS_URL}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = MAPBOX_CSS_URL;
      document.head.appendChild(link);
    }
  }

  public static getInstance(): PMap {
    if (!PMap.instance) {
      PMap.instance = new PMap();
    }
    return PMap.instance;
  }

  public init(options: mapboxgl.MapOptions & { accessToken: string; enableWeather?: boolean }) {
    if (!PMap.map) {
      PMap.injectCSS();
      mapboxgl.accessToken = options.accessToken;

      const map = new mapboxgl.Map({
        ...PMap.mapConfig,
        ...options,
        attributionControl: false,
      });

      PMap.map = map;

      // 保存配置（默认 true）
      PMap.weatherEnabled = options.enableWeather !== false;

      map.on("style.load", () => {
        if (PMap.weatherEnabled) {
          this.enableDynamicSky();
        } else {
          this.disableDynamicSky();
        }
      });
    }
  }

  public static getMap() {
    return PMap.map;
  }

  private updateSky() {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 18) {
      PMap.map.setFog({
        color: "rgb(186, 210, 235)",
        "high-color": "rgb(36, 92, 223)",
        "horizon-blend": 0.02,
        "space-color": "rgb(135, 206, 250)",
        "star-intensity": 0.0,
      });
    } else if (hour >= 18 && hour < 20) {
      PMap.map.setFog({
        color: "rgb(255, 180, 120)",
        "high-color": "rgb(120, 60, 150)",
        "horizon-blend": 0.05,
        "space-color": "rgb(80, 30, 100)",
        "star-intensity": 0.1,
      });
    } else {
      PMap.map.setFog({
        color: "rgb(20, 30, 60)",
        "high-color": "rgb(0, 0, 20)",
        "horizon-blend": 0.08,
        "space-color": "rgb(0, 0, 20)",
        "star-intensity": 0.5,
      });
    }
  }

  public enableDynamicSky() {
    this.updateSky();
    if (!PMap.skyTimer) {
      PMap.skyTimer = window.setInterval(() => this.updateSky(), 60 * 60 * 1000);
    }
  }

  public disableDynamicSky() {
    if (PMap.skyTimer) {
      clearInterval(PMap.skyTimer);
      PMap.skyTimer = null;
    }
    // 清空大气层背景（恢复默认）
    if (PMap.map) {
      PMap.map.setFog(null as any);
    }
  }

  public reset() {
    PMap.getMap().flyTo({ ...PMap.mapConfig });
  }
}
