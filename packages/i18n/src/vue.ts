import { ref, readonly, watchEffect } from "vue";
import { t, onLanguageChange } from "./core";

const trigger = ref(0);
onLanguageChange(() => trigger.value++);

export function useI18n() {
  const current = ref(t(""));

  watchEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    trigger.value;
    current.value = t("");
  });

  return { t, trigger: readonly(trigger) };
}
