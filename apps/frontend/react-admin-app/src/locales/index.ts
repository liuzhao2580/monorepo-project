import zh_CN from "./langs/zh-CN";
import en_US from "./langs/en-US";
import { i18next } from "@pmm/i18n";
i18next.init({
  lng: "zh",
  fallbackLng: "zh",
  resources: {
    en: {
      translation: en_US,
    },
    zh: {
      translation: zh_CN,
    },
  },
});
