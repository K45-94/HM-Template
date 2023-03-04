<template>
  <div
    class="fullscreen bg-warning text-black text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h4" style="opacity: 0.4">Oops. No Plums here...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import PageButtonBackError from "src/components/PagePlumComponent/PageButtonBackError.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: [PageButtonBackError],
  name: "Error404",
});
</script>
