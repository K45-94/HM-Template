import { boot } from "quasar/wrappers";

const plumComponents = {
  page: require("components/PagePlumComponent/Page").default,
  pageHeader: require("components/PagePlumComponent/PageHeader").default,
  pageHeaderButtonBackLeft:
    require("components/PagePlumComponent/PageHeaderButtonBackLeft").default,
  pageHeaderButtonForwardRight:
    require("components/PagePlumComponent/PageHeaderButtonForwardRight")
      .default,
  pageBody: require("components/PagePlumComponent/PageBody").default,
  pageButtonBackError:
    require("components/PagePlumComponent/PageButtonBackError").default,
};

export default boot(async ({ app }) => {
  for (const key in plumComponents) {
    app.component(key, plumComponents[key]);
  }
});
