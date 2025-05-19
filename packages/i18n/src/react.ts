import { useSyncExternalStore } from "react";
import { t, onLanguageChange } from "./core";

export function useI18n() {
  useSyncExternalStore(onLanguageChange, () => "");
  return { t };
}
