<template>
  <page>
    <page-header>
      <template #button-left>
        <page-header-button-back-left label="profile" />
      </template>
      <template #title> SETTINGS </template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <p v-for="i in 30" :key="i">
          Building HireMe, a Supa fast and amazing app for anyone looking to find unlimited work opportunities.
        </p>
      </div>
    </page-body>
  </page>
</template>

<script>
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageHeaderButtonBackLeft from "src/components/PagePlumComponent/PageHeaderButtonBackLeft.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: [Page, PageHeader, PageHeaderButtonBackLeft],
  name: "PageSettings",
});
</script>
