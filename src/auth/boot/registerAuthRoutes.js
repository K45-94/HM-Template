import { boot } from "quasar/wrappers";

export default boot(({ router }) => {
  router.addRoute("/", {
    name: "auth.register",
    path: "/register",
    meta: { unauthOnly: true },
    component: () => import("src/auth/pages/IdentityPasswordRegisterPage.vue"),
  });

  router.addRoute("/", {
    name: "auth.login",
    path: "/login",
    meta: { unauthOnly: true },
    component: () => import("src/auth/pages/IdentityPasswordLoginPage.vue"),
  });

  router.addRoute("/", {
    name: "auth.requestPasswordReset",
    path: "/forgot-password",
    meta: { unauthOnly: true },
    component: () =>
      import("src/auth/pages/PasswordResetRequestViaEmailPage.vue"),
  });

  router.addRoute("/", {
    name: "auth.resetPassword",
    path: "/password-reset",
    meta: { unauthOnly: true },
    component: () => import("src/auth/pages/PasswordResetViaEmailPage.vue"),
  });

  router.addRoute("/", {
    path: "/feeds",
    component: () => import("layouts/PlumLayout.vue"),
    children: [
      {
        path: "/feeds",
        name: "PageFeeds",
        component: () => import("src/pages/PageFeeds.vue"),
        meta: { authOnly: true },
      },
    ],
  });
});
