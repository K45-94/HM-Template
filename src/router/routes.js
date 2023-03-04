const routes = [
  {
    path: "/",
    component: () => import("src/layouts/PlumLayout.vue"),
    children: [
      {
        path: "",
        redirect: "/feeds",
      },
      {
        path: "/feeds",
        component: () => import("src/pages/PageFeeds.vue"),
      },
      {
        path: "/search",
        component: () => import("src/pages/PageSearch.vue"),
      },
      {
        path: "/camera",
        component: () => import("src/pages/PageCamera.vue"),
      },
      {
        path: "/light",
        component: () => import("src/pages/PageLight.vue"),
      },
      {
        path: "/profile",
        component: () => import("src/pages/profile/PageProfile.vue"),
        children: [
          {
            path: "/profile/settings",
            component: () => import("src/pages/profile/PageSettings.vue"),
          },
        ],
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
