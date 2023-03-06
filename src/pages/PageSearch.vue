<template>
  <page>
    <page-header> <template #title> SEARCH </template></page-header>
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
import { defineComponent } from "vue";

export default defineComponent({
  components: { Page },
  name: "PageSearch",
});
</script>
