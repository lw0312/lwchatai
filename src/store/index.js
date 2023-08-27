import { defineStore } from "pinia";
import { ref } from "vue";

export const useStoreSunMoon = defineStore("SunMoon", () => {
  const flag = ref(true);
  const SunMoon = () => {
    flag.value = !flag.value;
  };
  return {
    flag,
    SunMoon,
  };
});
