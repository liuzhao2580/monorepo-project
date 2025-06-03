import { useEffect, useState } from "react";
import axios from "axios";

type LocationStatus = "loading" | "success" | "error";

export const useCurrentCity = () => {
  const [city, setCity] = useState<string>("");
  const [status, setStatus] = useState<LocationStatus>("loading");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!navigator.geolocation) {
      fallbackToIP("浏览器不支持定位");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await axios.get("https://restapi.amap.com/v3/geocode/regeo", {
            params: {
              key: "你的高德Key",
              location: `${longitude},${latitude}`,
            },
          });

          const cityName =
            res.data?.regeocode?.addressComponent?.city ||
            res.data?.regeocode?.addressComponent?.province;

          if (cityName) {
            setCity(cityName);
            setStatus("success");
          } else {
            fallbackToIP("无法解析城市名");
          }
        } catch {
          fallbackToIP("定位失败");
        }
      },
      () => {
        fallbackToIP("定位失败或拒绝权限");
      }
    );

    async function fallbackToIP(reason: string) {
      try {
        const res = await axios.get("https://restapi.amap.com/v3/ip", {
          params: {
            key: "626c3bb76a402642db9015e188d25a98",
          },
        });
        const cityName = res.data?.city || res.data?.province;
        if (cityName) {
          setCity(cityName);
          setStatus("success");
        } else {
          setError(`定位失败：${reason}`);
          setStatus("error");
        }
      } catch {
        setError(`定位失败：${reason}，且无法通过 IP 获取`);
        setStatus("error");
      }
    }
  }, []);

  return { city, status, error };
};
