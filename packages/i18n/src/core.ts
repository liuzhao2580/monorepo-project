import i18next from "i18next";

type Callback = () => void
const listeners = new Set<Callback>();

export function onLanguageChange(callback: Callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

i18next.on("languageChanged", () => {
  listeners.forEach(cb => cb());
});
export const t = i18next.t.bind(i18next);
export { i18next };
