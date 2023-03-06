<template>
  <page>
    <page-header> <template #title> CAMERA </template></page-header>
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
import { defineComponent } from "vue";
import Page from "src/components/PagePlumComponent/Page.vue";

export default defineComponent({
  components: { Page },
  name: "PageCamera",
});
</script>
