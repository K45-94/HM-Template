<template>
  <page>
    <page-header>
      <template #title> PROFILE </template>
      <template #button-right>
        <page-header-button-forward-right
          to="/profile/settings"
          label="settings"
        />
      </template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <p v-for="i in 30" :key="i">
          Building Plum with vue 3. This app is getting complex and I thought I
          could redesign and rebuild it better with Vue 3 Finally found a way
          for nesting child pages in routes.
        </p>
      </div>
    </page-body>
  </page>
</template>

<script>
import { defineComponent } from "vue";
import Page from "src/components/PagePlumComponent/Page.vue";
import PageHeader from "src/components/PagePlumComponent/PageHeader.vue";
import PageHeaderButtonForwardRight from "src/components/PagePlumComponent/PageHeaderButtonForwardRight.vue";
import PageBody from "src/components/PagePlumComponent/PageBody.vue";

export default defineComponent({
  components: { Page, PageHeader, PageBody, PageHeaderButtonForwardRight },
  name: "PageProfile",
});
</script>
