import { reactive } from "vue";

const state = reactive({
  navItems: [
    {
      root: "/feeds",
      to: "/feeds",
      icon: "eva-home",
    },
    {
      root: "/search",
      to: "/search",
      icon: "eva-search",
    },
    {
      root: "/camera",
      to: "/camera",
      icon: "eva-camera",
    },
    {
      root: "/light",
      to: "/light",
      icon: "eva-bulb",
    },
    {
      root: "/profile",
      to: "/profile",
      icon: "eva-square",
    },
  ],
  usePageTransition: false,
});

const store = {
  state,
};

export default store;
